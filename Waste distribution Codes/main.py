import cv2
import numpy as np
import tensorflow as tf
from tensorflow import keras
import serial
import time

# --- CONFIGURATION ---
arduino_connected = True 
port = 'COM6'  
CONFIRM_THRESHOLD = 20  
DISTANCE_THRESHOLD = 35000 
MIN_OBJECT_SIZE = 5000 # NEW: Minimum area to even consider an object

arduino = serial.Serial(port=port, baudrate=9600, timeout=.1) if arduino_connected else None
model = keras.models.load_model("keras_model.h5", compile=False)
labels = [line.strip() for line in open("labels.txt", "r").readlines()]
camera = cv2.VideoCapture(1) 

confirm_counter = 0
last_detected_index = -1

while True:
    ret, frame = camera.read()
    if not ret: break

    # 1. VISUAL DISTANCE & NULL CHECK
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    _, thresh = cv2.threshold(blur, 60, 255, cv2.THRESH_BINARY_INV)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    object_area = 0
    if contours:
        largest_contour = max(contours, key=cv2.contourArea)
        object_area = cv2.contourArea(largest_contour)
        x, y, w, h = cv2.boundingRect(largest_contour)
        
        # Draw Visual Box
        box_color = (0, 255, 0) if object_area > DISTANCE_THRESHOLD else (0, 0, 255)
        cv2.rectangle(frame, (x, y), (x + w, y + h), box_color, 2)

    # 2. AI PROCESSING
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    img = cv2.resize(frame_rgb, (224, 224))
    img = np.asarray(img, dtype=np.float32).reshape(1, 224, 224, 3)
    img = (img / 127.5) - 1

    prediction = model.predict(img, verbose=0)
    index = np.argmax(prediction)
    confidence = prediction[0][index]

    # 3. LOGIC: IGNORE IF BIN IS EMPTY
    # If the area is too small, we force the index to -1 so nothing happens
    if object_area < MIN_OBJECT_SIZE:
        current_status = "Waiting for object..."
        confirm_counter = 0
    else:
        current_status = f"Scanning... {labels[index]} ({round(confidence*100)}%)"
        
        # Check Confidence and Distance
        if confidence > 0.92 and object_area > DISTANCE_THRESHOLD:
            if index == last_detected_index:
                confirm_counter += 1
            else:
                confirm_counter = 0
                last_detected_index = index
        else:
            confirm_counter = 0

    cv2.putText(frame, current_status, (30, 50), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)

    # 4. TRIGGER ACTION
    if confirm_counter >= CONFIRM_THRESHOLD:
        cv2.putText(frame, "STATUS: DROPPING WASTE!", (30, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 3)
        cv2.imshow("Waste AI", frame)
        cv2.waitKey(1)

        if arduino_connected:
            arduino.write(bytes(str(index), 'utf-8'))
            time.sleep(6) # Wait for Arduino to finish lid + ramp movement
        
        confirm_counter = 0
        last_detected_index = -1

    cv2.imshow("Waste AI", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'): break

camera.release()
cv2.destroyAllWindows()



# to run the code write 
"""1st create environment "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
.\venv\Scripts\activate"""
# 2nd  to run the code "python bridge.py"