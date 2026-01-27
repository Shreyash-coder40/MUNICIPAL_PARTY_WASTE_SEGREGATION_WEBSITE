#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

/* ================= WiFi ================= */
#define WIFI_SSID "Redmi"
#define WIFI_PASSWORD "sudhir77999"

/* ================= Firebase ================= */
#define API_KEY "AIzaSyDryJIV2306OKfS88_eKBBDiCPHndFb_Fk"
#define DATABASE_URL "wastesegragation-435e4-default-rtdb.firebaseio.com"
#define FIREBASE_DB_SECRET "vJlPSUR5vk8ZCOwuCIXYdkRCMDwIG5ctqNEGfeWU"

/* ================= Ultrasonic Pins ================= */
// Sensor 1
#define TRIG1 12
#define ECHO1 13

// Sensor 2
#define TRIG2 14
#define ECHO2 27

// Sensor 3
#define TRIG3 26
#define ECHO3 25

/* ================= Objects ================= */
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

/* ================= Bin Calibration Settings ================= */
// Measure these for your specific bins!
// "EMPTY" = Distance from sensor to the bottom of the bin
// "FULL"  = Distance from sensor to the top of the trash (allow 5cm gap)

// --- BIN 1 ---
const float BIN1_EMPTY = 10.0;  
const float BIN1_FULL = 2.0;    

// --- BIN 2 ---
const float BIN2_EMPTY = 10.0;  
const float BIN2_FULL = 2.0;

// --- BIN 3 ---
const float BIN3_EMPTY = 10.0;
const float BIN3_FULL = 2.0;

/* ================= Helper Function ================= */
// Calculates percentage based on specific bin calibration
int calculatePercentage(float currentDistance, float emptyDist, float fullDist) {
  // 1. Error handling: if sensor reads 0 (timeout) or huge number
  if (currentDistance <= 0 || currentDistance > 400) return -1;

  // 2. Cap the distance (Physics check)
  if (currentDistance > emptyDist) currentDistance = emptyDist;
  if (currentDistance < fullDist) currentDistance = fullDist;

  // 3. The Math
  float usableHeight = emptyDist - fullDist;
  float trashHeight = emptyDist - currentDistance;
  float percentage = (trashHeight / usableHeight) * 100.0;

  return (int)percentage;
}

/* ================= Low Level Sensor Function ================= */
long getDistance(int trigPin, int echoPin) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH, 30000); 
  if (duration == 0) return -1; 

  return duration * 0.034 / 2;
}

/* ================= Setup ================= */
void setup() {
  Serial.begin(115200);

  pinMode(TRIG1, OUTPUT); pinMode(ECHO1, INPUT);
  pinMode(TRIG2, OUTPUT); pinMode(ECHO2, INPUT);
  pinMode(TRIG3, OUTPUT); pinMode(ECHO3, INPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(400);
  }
  Serial.println("\nWiFi Connected ✔");

  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  config.signer.tokens.legacy_token = FIREBASE_DB_SECRET;
  config.token_status_callback = tokenStatusCallback;

  fbdo.setResponseSize(2048); 
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  Serial.println("🔥 Firebase Ready");
}

/* ================= Loop ================= */
void loop() {

  long d1 = getDistance(TRIG1, ECHO1);
  long d2 = getDistance(TRIG2, ECHO2);
  long d3 = getDistance(TRIG3, ECHO3);

  // Calculate levels using the accurate function
  int bin1 = calculatePercentage(d1, BIN1_EMPTY, BIN1_FULL);
  int bin2 = calculatePercentage(d2, BIN2_EMPTY, BIN2_FULL);
  int bin3 = calculatePercentage(d3, BIN3_EMPTY, BIN3_FULL);

  // If sensor error (-1), default to 0 to avoid breaking charts
  if (bin1 == -1) bin1 = 0; 
  if (bin2 == -1) bin2 = 0;
  if (bin3 == -1) bin3 = 0;

  Serial.println("------ BIN LEVELS ------");
  Serial.print("Bin1 (Dist: "); Serial.print(d1); Serial.print("cm): "); Serial.print(bin1); Serial.println("%");
  Serial.print("Bin2 (Dist: "); Serial.print(d2); Serial.print("cm): "); Serial.print(bin2); Serial.println("%");
  Serial.print("Bin3 (Dist: "); Serial.print(d3); Serial.print("cm): "); Serial.print(bin3); Serial.println("%");

  if (Firebase.ready()) {
    Firebase.RTDB.setInt(&fbdo, "/bins/bin1/fillLevel", bin1);
    Firebase.RTDB.setInt(&fbdo, "/bins/bin2/fillLevel", bin2);
    Firebase.RTDB.setInt(&fbdo, "/bins/bin3/fillLevel", bin3);
    Serial.println("📤 Data updated to Firebase\n");
  } else {
    Serial.println("❌ Firebase not ready");
  }

  delay(5000); 
}
