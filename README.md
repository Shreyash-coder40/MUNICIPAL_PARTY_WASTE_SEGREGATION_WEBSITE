# Eco-Command | Municipal Waste Management System

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Platform](https://img.shields.io/badge/Platform-IoT%20|%20Web-blue)
![Language](https://img.shields.io/badge/Languages-Python%20|%20C++%20|%20JS-orange)

**Eco-Command** is a smart, IoT-enabled dashboard for monitoring and managing municipal waste collection. It provides real-time tracking of waste collection fleets, monitors smart bin fill levels, and offers a multilingual interface for diverse municipal teams.

## 📋 Table of Contents
- [Problem Statement](#-problem-statement)
- [Architecture](#-architecture-design)
- [Smart Dustbin (Segregation)](#-theme-1-smart-dustbin-ai-segregation)
- [Municipal Dashboard](#-theme-2-municipal-website-admin-dashboard)
- [Tech Stack](#-global-tech-stack)
- [Getting Started](#-getting-started)
- [Demo](#-video-demo)

- [Contributors](#-contributors)
- [License](#-license)

## 🚧 Problem Statement

The rapid acceleration of urbanization has placed immense pressure on existing municipal waste monitoring infrastructures, leading to a critical breakdown in sanitation management. Traditional methods are reactive, static, and inefficient, resulting in severe environmental and operational challenges.

### 🔴 1. The "Blind Spot" Crisis (Overflow & Sanitation)
Municipalities lack real-time visibility into the status of waste bins.
*   **Consequence**: Bins overflow for hours before scheduled pickup, creating health hazards, foul odors, and attracting pests.
*   **Impact**: Public dissatisfaction and high risk of disease proliferation.

![Problem - Overflow](assets/problem_overflow.png)
*Figure 1: Illustration of unchecked bin overflow causing sanitation failure.*

### 📉 2. Operational Inefficiency (Looping Routes)
Trucks follow rigid, pre-planned rudimentary routes regardless of actual demand.
*   **Consequence**: Fuel is wasted collecting empty bins, while critical full bins are missed.
*   **Impact**: Increased carbon footprint and 40% higher operational costs due to inefficient logistics.

![Problem - Inefficient Routing](assets/problem_routing.png)
*Figure 2: Contrast between inefficient static routing vs. optimized dynamic routing.*

### 🗣️ 3. The Communication Barrier
A diverse workforce often struggles with language barriers between control center dispatchers and ground-level drivers.
*   **Consequence**: Misunderstandings lead to missed pickups and delayed re-routing.
*   **Impact**: Operational friction, reduced driver morale, and slower response times.

## 🎯 Gaps We Covered

This project bridges key gaps in traditional waste management:
*   **Live Monitoring vs. Static Schedules**: Transitioned from fixed daily pickups to dynamic, data-driven dispatching based on real-time bin status.
*   **Predictive Operations**: Sensors alert the system *before* overflow occurs ("Warning" state), allowing proactive collection.
*   **Inclusive Technology**: Added **Multilingual Voice & UI Support** (8 Indian languages) so drivers of all linguistic backgrounds can use the system effectively.
*   **Gamification**: Introduced a **Leaderboard** to motivate drivers and track performance, addressing the lack of incentives in the sector.

## 🏗️ Architecture Design

The system connects IoT hardware (Smart Bins) with a Cloud Backend and a User-Facing Application Layer.

```mermaid
graph TD
    subgraph IoT_Layer [Theme 1: Smart Dustbin]
        direction TB
        ESP[ESP32 Controller]
        CAM[Camera Module\nAI Classification]
        US[Ultrasonic Sensors\nFill Level]
        SER[Servo Motors\nSegregation]
        
        ESP --> CAM
        ESP --> US
        ESP --> SER
    end
    
    subgraph Cloud_Layer [Cloud Backend]
        RTDB[(Firebase Realtime DB)]
    end
    
    subgraph App_Layer [Theme 2: Municipal Website]
        direction TB
        DB[Admin Dashboard]
        MAP[Ola Maps / MapLibre]
        VUI[Voice Assistant\nMultilingual]
        
        DB --> MAP
        DB --> VUI
    end
    
    %% Data Flow
    ESP -- "1. Uploads Bin Status\n(Normal/Warning/Critical)" --> RTDB
    RTDB -- "2. Syncs Real-Time Data" --> DB
    DB -- "3. Dispatch Fleet" --> RTDB
```

---

# 🤖 Theme 1: Smart Dustbin (AI Segregation)

An intelligent waste scanning and sorting unit that automates segregation at the source.

### ⚙️ How It Works
1.  **AI Scanning**: A camera scans the waste item held in front of it.
2.  **Object Detection**: The system uses a trained AI model (TensorFlow/Keras) to classify the waste as **Organic**, **Dry**, or **Plastic**.
3.  **Automatic Sorting**: Servos actuate a ramp and lid mechanism to drop the waste into the correct underlying compartment.

### 📸 Prototype Model
![Smart Dustbin Model](assets/smart_bin_model.jpg)

### 🛠️ Hardware & Tech
*   **ESP32 / Arduino**: For controlling servos and sensors.
*   **Ultrasonic Sensors**: To measure fill levels of the individual compartments.
*   **Python (OpenCV + TensorFlow)**: For real-time image recognition and classification.
*   **Servo Motors**: For the physical segregation mechanism.

---

# 🏙️ Theme 2: Municipal Website (Admin Dashboard)

The central command hub for monitoring bin fill levels (automatically detected by sensors) and managing fleet operations.

### 💻 User Interface

#### 1. Global Command Dashboard
A centralized view for monitoring all trucks, route efficiency, and real-time alerts.
![English Dashboard](assets/dashboard_english.png)

#### 2. Inclusive Multilingual Support
To empower local drivers, the entire interface (including voice navigation) can be instantly toggled between **8 Indian languages** (Hindi, Marathi, Gujarati, etc.).
![Multilingual Dashboard](assets/dashboard_multilingual.png)

#### 3. 🎙️ Voice Command System
The system features an integrated **Voice Assistant** that commands, confirms, and alerts:
*   **Alerts**: "Bin 3 is Critical"
*   **Confirmation**: "Dispatching Fleet to Andheri East"
*   **Control**: Toggles themes or languages via voice.

### 🌟 Key Features
*   **📍 Live Fleet Tracking**: Real-time visualization using Ola Maps & MapLibre GL.
*   **🗑️ Bin Monitoring Dashboard**: Live status (Normal/Warning/Critical) of all city bins.
*   **🌓 Dark/Light Mode**: Optimized for all-day usage.
*   **🏆 Leaderboard**: Gamification to reward top-performing drivers.

---

## 🛠️ Global Tech Stack

*   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
*   **Maps**: [Ola Maps API](https://maps.olacabs.com/), [MapLibre GL JS](https://maplibre.org/)
*   **Backend / Database**: [Firebase Realtime Database](https://firebase.google.com/)
*   **AI/ML**: TensorFlow, Keras, OpenCV
*   **Firmware**: Arduino C++

## 📂 Project Structure

```
├── Municipal Party Website   # Main Admin Dashboard & Bin Monitoring
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── smart_bin_code.ino
├── Waste distribution Codes  # AI Segregation Logic (Python + Arduino)
├── assets                    # Images and Diagrams
└── README.md                 # Project documentation
```

## 🚀 Getting Started

1.  **Clone the Repo**: `git clone https://github.com/Shreyash-coder40/MUNICIPAL_PARTY_WASTE_SEGREGATION_WEBSITE.git`
2.  **Web Dashboard**: Open `Municipal Party Website/index.html`.
3.  **Smart Bin**: Upload the `.ino` code to your ESP32 and run `main.py` for the AI vision system.

## 🎥 Video Demo

Watch the full working prototype and system walkthrough here:

[![Watch the video](https://img.youtube.com/vi/Ys-yf6mtv4s/maxresdefault.jpg)](https://youtu.be/Ys-yf6mtv4s)



## 👥 Contributors

*   **Shreyash-coder40** - *Developer & Architect*
*   **Keshav0459-prog** - *Developer + UI/UX Designer*
*   **daminsahu697-debug** - *Developer + IOT Expert*

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
