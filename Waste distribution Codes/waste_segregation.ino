#include <Servo.h>

Servo lowerServo; // Pin 9 - Bin Selection (The Ramp)
Servo upperServo; // Pin 10 - Drop Mechanism (The Lid)

void setup() {
  Serial.begin(9600);
  lowerServo.attach(9);
  upperServo.attach(10);
  
  // Set initial "Safe" positions
  lowerServo.write(90); // Ramp in the middle
  upperServo.write(0);  // Lid/Drop closed
}

void loop() {
  if (Serial.available() > 0) {
    char data = Serial.read(); // Reads '0', '1', or '2'

    
    // Step 1: Move the Lower Ramp to the correct Bin
    if (data == '0') {
      lowerServo.write(180);  // Position for Organic
    } 
    else if (data == '1') {
      lowerServo.write(90); // Position for Dry
    } 
    else if (data == '2') {
      lowerServo.write(0); // Position for Plastic
    }
    else {
      return; // Ignore any other noise
    }

    delay(1500); // Give the ramp time to reach the position
    
    // Step 2: Open the Upper Lid to drop the waste
    upperServo.write(90);  // Open position
    delay(3000);           // Wait for gravity to do its work
    upperServo.write(0);   // Close lid
    
    delay(500);            // Small pause before moving ramp
    
    // Step 3: Return ramp to neutral so it's ready for the next scan
    lowerServo.write(90); 
  }
}