# Slide 1: Title Slide
**Title:** Eco-Command: Municipal Waste Management System
**Subtitle:** Optimizing Urban Sanitation with IoT, AI, and Real-Time Data through Smart Dustbins and Monitoring Dashboards.
**Presented By:** Shreyash-coder40

---

# Slide 2: The Problem
**Title:** The Urban Waste Crisis
**Key Issues:**
*   **Overflowing Bins:** 60% of city bins overflow before collection, causing health hazards.
*   **Inefficient Routing:** Trucks follow static routes, visiting empty bins and missing full ones.
*   **Lack of Visibility:** No real-time data for municipal authorities.
*   **Language Barriers:** Information gap between control centers and drivers.

*(Visual Suggestion: Use 'assets/problem_overflow.png' here)*

---

# Slide 3: Our Solution
**Title:** Eco-Command – Bridging the Gap
**Core Value Proposition:**
1.  **Smart Segregation:** AI-powered dustbins separate waste at source.
2.  **Dynamic Monitoring:** Real-time dashboard for authorities.
3.  **Optimized Logistics:** Data-driven routing based on bin fill levels.
4.  **Inclusivity:** Multilingual support for diverse workforce.

---

# Slide 4: System Architecture
**Title:** End-to-End IoT Architecture
**Flow:**
*   **Hardware:** smart Bins (ESP32 + Camera) -> Detect & Segregate.
*   **Cloud:** Firebase Realtime Database -> Syncs Status.
*   **Software:** Municipal Dashboard -> Visualizes Data & Dispatches Fleet.

*(Visual Suggestion: Use the Mermaid diagram or 'assets/architecture.png')*

---

# Slide 5: Theme 1 - Smart Dustbin
**Title:** AI-Powered Smart Dustbin
**Technology:**
*   **AI Vision:** Camera scans waste item.
*   **Classification:** TensorFlow Lite model identifies Organic vs. Dry vs. Plastic.
*   **Automation:** Servo motors automatically sort waste into correct partitions.
*   **Monitoring:** Ultrasonic sensors measure fill levels (0-100%).

*(Visual Suggestion: Use 'assets/smart_bin_model.jpg')*

---

# Slide 6: Theme 2 - Municipal Dashboard
**Title:** The Command Center
**Features:**
*   **Live Map:** Track all truck locations in real-time (Ola Maps).
*   **Bin Status:** Color-coded markers (Green=Empty, Red=Critical).
*   **Voice Assistant:** "Dispatch truck to Sector 4" – Voice-activated controls.
*   **Multilingual:** UI instantly switches between 8 Indian languages (Hindi, Marathi, etc.).

*(Visual Suggestion: Use 'assets/dashboard_english.png')*

---

# Slide 7: Addressing the Routing Problem
**Title:** From Static to Dynamic Routing
**Before:**
*   Truck visits every bin.
*   High Fuel Consumption.
*   Time Wasted.

**After (Eco-Command):**
*   Truck visits only *full* bins.
*   Optimized Path.
*   Reduced Carbon Footprint.

*(Visual Suggestion: Use 'assets/problem_routing.png')*

---

# Slide 8: Technology Stack
**Title:** Tech Stack
**Hardware:** ESP32, Ultrasonic Sensors, Servos.
**Firmware:** Arduino C++.
**AI/ML:** Python, TensorFlow, OpenCV.
**Frontend:** HTML5, CSS3, JavaScript.
**Cloud/DB:** Firebase Realtime Database.
**Maps:** Ola Maps API / MapLibre.

---

# Slide 9: Future Scope
**Title:** Roadmap & Future Scope
*   **Driver App:** Dedicated mobile app for turn-by-turn navigation.
*   **Predictive Analytics:** AI models to predict fill patterns based on events/holidays.
*   **Citizen App:** Allow citizens to report dirty spots via photo upload.

---

# Slide 10: Conclusion
**Title:** Impact Summary
*   **Cleaner Cities:** Proactive collection prevents overflow.
*   **Cost Savings:** Efficient routing saves fuel and labor hours.
*   **Empowerment:** Inclusive tech for ground-level workers.

**Thank You!**
*Questions?*
