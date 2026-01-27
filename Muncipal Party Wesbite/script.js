import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
    getDatabase,
    ref,
    onValue,
    get
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

// ==================== CONFIGURATION ====================
const FIREBASE_CONFIG = {
    apiKey: "FIREBASE_API_KEY",
    authDomain: "FIREBASE_AUTH_DOMAIN",
    databaseURL: "FIREBASE_DATABASE_URL",
    projectId: "FIREBASE_PROJECT_ID",
};

const OLA_API_KEY = "OLA_API_KEY";

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
const db = getDatabase(app);

// ==================== TRANSLATIONS ====================
const translations = {
    en: {
        ui: {
            title: "Eco-Command",
            subtitle: "Municipal Waste Management",
            loading: "Initializing Eco-Command",
            loadingSub: "Connecting to municipal network...",
            dispatch: "Dispatch Fleet",
            leaderboard: "Leaderboard",
            voice: "Voice",
            dark: "Dark",
            light: "Light",
            normal: "Normal",
            warning: "Warning",
            critical: "Critical",
            systemOnline: "System Online",
            allOperational: "All systems operational",
            language: "English",
            liveLeaderboard: "Live Leaderboard",
            updatedNow: "Updated just now",
            binLabel: "BIN #",
            fill: "Fill",
            fullscreen: "Full Screen",
            exitFullscreen: "Exit Full Screen",
            liveFleetTracking: "Live Fleet Tracking",
            fleetOperations: "Fleet Operations",
            wasteBinsStatus: "Waste Bins Status",
            truck: "Truck",
            you: "You",
            rajesKumar: "Rajesh Kumar",
            rameshKumar: "Ramesh Kumar",
            vikramSingh: "Vikram Singh"
        },
        speech: {
            welcome: "Welcome to Eco Command. All systems online.",
            voiceOn: "Voice enabled",
            voiceOff: "Voice disabled",
            themeChanged: "Theme changed",
            leaderboardOpened: "Leaderboard opened",
            fleetDispatching: "Dispatching fleet to critical locations",
            languageChanged: "Language changed to English",
            fullscreenOn: "Full screen mode activated",
            fullscreenOff: "Full screen mode deactivated"
        }
    },
    hi: {
        ui: {
            title: "ईको-कमांड",
            subtitle: "नगर निगम अपशिष्ट प्रबंधन",
            loading: "ईको-कमांड प्रारंभ हो रहा है",
            loadingSub: "नेटवर्क से जुड़ रहा है...",
            dispatch: "फ्लीट भेजें",
            leaderboard: "लीडरबोर्ड",
            voice: "आवाज",
            dark: "डार्क",
            light: "लाइट",
            normal: "सामान्य",
            warning: "चेतावनी",
            critical: "गंभीर",
            systemOnline: "सिस्टम ऑनलाइन",
            allOperational: "सभी सिस्टम कार्यरत",
            language: "हिंदी",
            liveLeaderboard: "लाइव लीडरबोर्ड",
            updatedNow: "अभी अपडेट किया गया",
            binLabel: "डिब्बा #",
            fill: "भराव",
            fullscreen: "फुल स्क्रीन",
            exitFullscreen: "फुल स्क्रीन बंद करें",
            liveFleetTracking: "लाइव फ्लीट ट्रैकिंग",
            fleetOperations: "फ्लीट संचालन",
            wasteBinsStatus: "कचरा डिब्बा स्थिति",
            truck: "ट्रक",
            you: "आप",
            rajesKumar: "राजेश कुमार",
            rameshKumar: "रमेश कुमार",
            vikramSingh: "विक्रम सिंह"
        },
        speech: {
            welcome: "ईको कमांड में आपका स्वागत है। सभी प्रणालियाँ ऑनलाइन हैं।",
            voiceOn: "आवाज सक्षम",
            voiceOff: "आवाज अक्षम",
            themeChanged: "थीम बदली गई",
            leaderboardOpened: "लीडरबोर्ड खोला गया",
            fleetDispatching: "गंभीर स्थानों पर फ्लीट भेजी जा रही है",
            languageChanged: "भाषा हिंदी में बदली गई",
            fullscreenOn: "फुल स्क्रीन मोड सक्रिय",
            fullscreenOff: "फुल स्क्रीन मोड निष्क्रिय"
        }
    },
    mr: {
        ui: {
            title: "इको-कमांड",
            subtitle: "म्युनिसिपल कचरा व्यवस्थापन",
            loading: "इको-कमांड सुरू होत आहे",
            loadingSub: "नेटवर्कशी जोडत आहे...",
            dispatch: "फ्लीट पाठवा",
            leaderboard: "लीडरबोर्ड",
            voice: "आवाज",
            dark: "डार्क",
            light: "लाइट",
            normal: "सामान्य",
            warning: "इशारा",
            critical: "गंभीर",
            systemOnline: "सिस्टम ऑनलाइन",
            allOperational: "सर्व सिस्टम कार्यरत",
            language: "मराठी",
            liveLeaderboard: "लाइव्ह लीडरबोर्ड",
            updatedNow: "आत्ताच अपडेट केले",
            binLabel: "डबा #",
            fill: "भरणे",
            fullscreen: "फुल स्क्रीन",
            exitFullscreen: "फुल स्क्रीन बंद करा",
            liveFleetTracking: "लाइव्ह फ्लीट ट्रॅकिंग",
            fleetOperations: "फ्लीट कार्यवाही",
            wasteBinsStatus: "कचरा डबे स्थिती",
            truck: "ट्रक",
            you: "तुम्ही",
            rajesKumar: "राजेश कुमार",
            rameshKumar: "रमेश कुमार",
            vikramSingh: "विक्रम सिंह"
        },
        speech: {
            welcome: "इको कमांड मध्ये आपले स्वागत आहे। सर्व प्रणाली ऑनलाइन आहेत।",
            voiceOn: "आवाज सक्षम",
            voiceOff: "आवाज अक्षम",
            themeChanged: "थीम बदलली",
            leaderboardOpened: "लीडरबोर्ड उघडला",
            fleetDispatching: "फ्लीट पाठवत आहे",
            languageChanged: "भाषा मराठी मध्ये बदलली",
            fullscreenOn: "फुल स्क्रीन मोड सुरू",
            fullscreenOff: "फुल स्क्रीन मोड बंद"
        }
    },
    gu: {
        ui: {
            title: "ઇકો-કમાન્ડ",
            subtitle: "મ્યુનિસિપલ કચરો વ્યવસ્થાપન",
            loading: "ઇકો-કમાન્ડ શરૂ થઈ રહી છે",
            loadingSub: "નેટવર્ક સાથે જોડાઈ રહ્યું છે...",
            dispatch: "ફ્લીટ મોકલો",
            leaderboard: "લીડરબોર્ડ",
            voice: "અવાજ",
            dark: "ડાર્ક",
            light: "લાઇટ",
            normal: "સામાન્ય",
            warning: "ચેતવણી",
            critical: "ગંભીર",
            systemOnline: "સિસ્ટમ ઑનલાઇન",
            allOperational: "બધી સિસ્ટમ કાર્યરત",
            language: "ગુજરાતી",
            liveLeaderboard: "લાઇવ લીડરબોર્ડ",
            updatedNow: "હમણાં અપડેટ થયું",
            binLabel: "ડબ્બો #",
            fill: "ભરવું",
            fullscreen: "ફુલ સ્ક્રીન",
            exitFullscreen: "ફુલ સ્ક્રીન બંધ કરો",
            liveFleetTracking: "લાઇવ ફ્લીટ ટ્રેકિંગ",
            fleetOperations: "ફ્લીટ કાર્યવાહી",
            wasteBinsStatus: "કચરા ડબ્બા સ્થિતિ",
            truck: "ટ્રક",
            you: "તમે",
            rajesKumar: "રાજેશ કુમાર",
            rameshKumar: "રમેશ કુમાર",
            vikramSingh: "વિક્રમ સિંહ"
        },
        speech: {
            welcome: "ઇકો કમાન્ડ માં આપનું સ્વાગત છે। બધી સિસ્ટમ ઑનલાઇન છે.",
            voiceOn: "અવાજ સક્ષમ",
            voiceOff: "અવાજ અક્ષમ",
            themeChanged: "થીમ બદલાઈ",
            leaderboardOpened: "લીડરબોર્ડ ખુલ્યું",
            fleetDispatching: "ફ્લીટ મોકલી રહ્યા છીએ",
            languageChanged: "ભાષા ગુજરાતી માં બદલાઈ",
            fullscreenOn: "ફુલ સ્ક્રીન મોડ સક્રિય",
            fullscreenOff: "ફુલ સ્ક્રીન મોડ નિષ્ક્રિય"
        }
    },
    ta: {
        ui: {
            title: "ஈகோ-கமாண்ட்",
            subtitle: "நகராட்சி குப்பை மேலாண்மை",
            loading: "ஈகோ-கமாண்ட் துவங்குகிறது",
            loadingSub: "நெட்வொர்க் இணைக்கிறது...",
            dispatch: "கப்பற்படை அனுப்பு",
            leaderboard: "முதலிடப் பட்டியல்",
            voice: "குரல்",
            dark: "இருள்",
            light: "வெளிச்சம்",
            normal: "சாதாரணம்",
            warning: "எச்சரிக்கை",
            critical: "முக்கியம்",
            systemOnline: "அமைப்பு ஆன்லைன்",
            allOperational: "அனைத்தும் இயங்குகிறது",
            language: "தமிழ்",
            liveLeaderboard: "நேரடி பட்டியல்",
            updatedNow: "இப்போது புதுப்பிக்கப்பட்டது",
            binLabel: "தொட்டி #",
            fill: "நிரப்பு",
            fullscreen: "முழுத்திரை",
            exitFullscreen: "முழுத்திரை நிறுத்து",
            liveFleetTracking: "நேரடி கப்பற்படை கண்காணிப்பு",
            fleetOperations: "கப்பற்படை செயல்பாடுகள்",
            wasteBinsStatus: "குப்பை தொட்டி நிலை",
            truck: "லாரி",
            you: "நீங்கள்",
            rajesKumar: "ராஜேஷ் குமார்",
            rameshKumar: "ரமேஷ் குமார்",
            vikramSingh: "விக்ரம் சிங்"
        },
        speech: {
            welcome: "ஈகோ கமாண்ட் க்கு வரவேற்கிறோம். அனைத்தும் ஆன்லைனில் உள்ளன.",
            voiceOn: "குரல் இயக்கப்பட்டது",
            voiceOff: "குரல் முடக்கப்பட்டது",
            themeChanged: "தீம் மாற்றப்பட்டது",
            leaderboardOpened: "பட்டியல் திறக்கப்பட்டது",
            fleetDispatching: "கப்பற்படை அனுப்பப்படுகிறது",
            languageChanged: "மொழி தமிழ் க்கு மாற்றப்பட்டது",
            fullscreenOn: "முழுத்திரை முறை இயக்கப்பட்டது",
            fullscreenOff: "முழுத்திரை முறை முடக்கப்பட்டது"
        }
    },
    te: {
        ui: {
            title: "ఈకో-కమాండ్",
            subtitle: "మునిసిపల్ వ్యర్థ నిర్వహణ",
            loading: "ఈకో-కమాండ్ ప్రారంభమవుతోంది",
            loadingSub: "నెట్వర్క్ కనెక్ట్ అవుతోంది...",
            dispatch: "ఫ్లీట్ పంపండి",
            leaderboard: "లీడర్బోర్డ్",
            voice: "వాయిస్",
            dark: "డార్క్",
            light: "లైట్",
            normal: "సాధారణం",
            warning: "హెచ్చరిక",
            critical: "క్రిటికల్",
            systemOnline: "సిస్టమ్ ఆన్లైన్",
            allOperational: "అన్నీ పనిచేస్తున్నాయి",
            language: "తెలుగు",
            liveLeaderboard: "లైవ్ లీడర్బోర్డ్",
            updatedNow: "ఇప్పుడే అప్డేట్ చేయబడింది",
            binLabel: "బిన్ #",
            fill: "నింపు",
            fullscreen: "పూర్తి తెర",
            exitFullscreen: "పూర్తి తెర మూసివేయి",
            liveFleetTracking: "లైవ్ ఫ్లీట్ ట్రాకింగ్",
            fleetOperations: "ఫ్లీట్ ఆపరేషన్లు",
            wasteBinsStatus: "వ్యర్థం బిన్లు స్థితి",
            truck: "ట్రక్",
            you: "మీరు",
            rajesKumar: "రాజేష్ కుమార్",
            rameshKumar: "రమేష్ కుమార్",
            vikramSingh: "విక్రమ్ సింగ్"
        },
        speech: {
            welcome: "ఈకో కమాండ్ కు స్వాగతం. అన్ని సిస్టమ్లు ఆన్లైన్ లో ఉన్నాయి.",
            voiceOn: "వాయిస్ ఎనేబుల్ చేయబడింది",
            voiceOff: "వాయిస్ డిసేబుల్ చేయబడింది",
            themeChanged: "థీమ్ మార్చబడింది",
            leaderboardOpened: "లీడర్బోర్డ్ తెరవబడింది",
            fleetDispatching: "ఫ్లీట్ పంపుతున్నాము",
            languageChanged: "భాష తెలుగు కు మార్చబడింది",
            fullscreenOn: "పూర్తి తెర మోడ్ చేతనం",
            fullscreenOff: "పూర్తి తెర మోడ్ అచేతనం"
        }
    },
    bn: {
        ui: {
            title: "ইকো-কমান্ড",
            subtitle: "পৌর বর্জ্য ব্যবস্থাপনা",
            loading: "ইকো-কমান্ড শুরু হচ্ছে",
            loadingSub: "নেটওয়ার্ক সংযোগ হচ্ছে...",
            dispatch: "ফ্লিট পাঠান",
            leaderboard: "লিডারবোর্ড",
            voice: "ভয়েস",
            dark: "ডার্ক",
            light: "লাইট",
            normal: "স্বাভাবিক",
            warning: "সতর্কতা",
            critical: "সমালোচনামূলক",
            systemOnline: "সিস্টেম অনলাইন",
            allOperational: "সব চালু আছে",
            language: "বাংলা",
            liveLeaderboard: "লাইভ লিডারবোর্ড",
            updatedNow: "এখনই আপডেট হয়েছে",
            binLabel: "বিন #",
            fill: "পূরণ",
            fullscreen: "পূর্ণ পর্দা",
            exitFullscreen: "পূর্ণ পর্দা বন্ধ করুন",
            liveFleetTracking: "লাইভ ফ্লিট ট্র্যাকিং",
            fleetOperations: "ফ্লিট অপারেশন",
            wasteBinsStatus: "বর্জ্য বিন অবস্থা",
            truck: "ট্রাক",
            you: "আপনি",
            rajesKumar: "রাজেশ কুমার",
            rameshKumar: "রমেশ কুমার",
            vikramSingh: "বিক্রম সিং"
        },
        speech: {
            welcome: "ইকো কমান্ড এ আপনাকে স্বাগতম। সব সিস্টেম অনলাইন আছে।",
            voiceOn: "ভয়েস চালু করা হয়েছে",
            voiceOff: "ভয়েস বন্ধ করা হয়েছে",
            themeChanged: "থিম পরিবর্তিত হয়েছে",
            leaderboardOpened: "লিডারবোর্ড খোলা হয়েছে",
            fleetDispatching: "ফ্লিট পাঠানো হচ্ছে",
            languageChanged: "ভাষা বাংলায় পরিবর্তিত হয়েছে",
            fullscreenOn: "পূর্ণ পর্দা মোড চালু হয়েছে",
            fullscreenOff: "পূর্ণ পর্দা মোড বন্ধ হয়েছে"
        }
    },
    kn: {
        ui: {
            title: "ಈಕೋ-ಕಮಾಂಡ್",
            subtitle: "ನಗರ ಕಸ ನಿರ್ವಹಣೆ",
            loading: "ಈಕೋ-ಕಮಾಂಡ್ ಪ್ರಾರಂಭವಾಗುತ್ತಿದೆ",
            loadingSub: "ನೆಟ್ವರ್ಕ್ ಸಂಪರ್ಕಿಸುತ್ತಿದೆ...",
            dispatch: "ಫ್ಲೀಟ್ ಕಳುಹಿಸಿ",
            leaderboard: "ಲೀಡರ್‌ಬೋರ್ಡ್",
            voice: "ಧ್ವನಿ",
            dark: "ಡಾರ್ಕ್",
            light: "ಲೈಟ್",
            normal: "ಸಾಮಾನ್ಯ",
            warning: "ಎಚ್ಚರಿಕೆ",
            critical: "ಕ್ರಿಟಿಕಲ್",
            systemOnline: "ಸಿಸ್ಟಮ್ ಆನ್‌ಲೈನ್",
            allOperational: "ಎಲ್ಲಾ ಕಾರ್ಯಾಚರಣೆಯಲ್ಲಿದೆ",
            language: "ಕನ್ನಡ",
            liveLeaderboard: "ಲೈವ್ ಲೀಡರ್‌ಬೋರ್ಡ್",
            updatedNow: "ಈಗಲೇ ನವೀಕರಿಸಲಾಗಿದೆ",
            binLabel: "ಬಿನ್ #",
            fill: "ತುಂಬಿಸಿ",
            fullscreen: "ಪೂರ್ಣ ತೆರೆ",
            exitFullscreen: "ಪೂರ್ಣ ತೆರೆ ಮುಚ್ಚಿ",
            liveFleetTracking: "ಲೈವ್ ಫ್ಲೀಟ್ ಟ್ರ್ಯಾಕಿಂಗ್",
            fleetOperations: "ಫ್ಲೀಟ್ ಕಾರ್ಯಾಚರಣೆಗಳು",
            wasteBinsStatus: "ಕಸದ ಬಿನ್ ಸ್ಥಿತಿ",
            truck: "ಟ್ರಕ್",
            you: "ನೀವು",
            rajesKumar: "ರಾಜೇಶ್ ಕುಮಾರ್",
            rameshKumar: "ರಮೇಶ್ ಕುಮಾರ್",
            vikramSingh: "ವಿಕ್ರಮ್ ಸಿಂಗ್"
        },
        speech: {
            welcome: "ಈಕೋ ಕಮಾಂಡ್ ಗೆ ಸ್ವಾಗತ. ಎಲ್ಲಾ ಸಿಸ್ಟಮ್ ಆನ್‌ಲೈನ್ ಆಗಿದೆ.",
            voiceOn: "ಧ್ವನಿ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
            voiceOff: "ಧ್ವನಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
            themeChanged: "ಥೀಮ್ ಬದಲಾಯಿಸಲಾಗಿದೆ",
            leaderboardOpened: "ಲೀಡರ್‌ಬೋರ್ಡ್ ತೆರೆಯಲಾಗಿದೆ",
            fleetDispatching: "ಫ್ಲೀಟ್ ಕಳುಹಿಸುತ್ತಿದೆ",
            languageChanged: "ಭಾಷೆ ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ",
            fullscreenOn: "ಪೂರ್ಣ ತೆರೆ ಮೋಡ್ ಸಕ್ರಿಯಗೊಂಡಿದೆ",
            fullscreenOff: "ಪೂರ್ಣ ತೆರೆ ಮೋಡ್ ನಿಷ್ಕ್ರಿಯಗೊಂಡಿದೆ"
        }
    }
};

const speechLangCodes = {
    en: 'en-US',
    hi: 'hi-IN',
    mr: 'mr-IN',
    gu: 'gu-IN',
    ta: 'ta-IN',
    te: 'te-IN',
    bn: 'bn-IN',
    kn: 'kn-IN'
};

// ==================== STATE ====================
let state = {
    lang: 'en',
    isDark: true,
    voiceEnabled: true,
    map: null,
    markers: {
        bins: {},
        truck: null,
        rival: null
    },
    criticalCount: 0,
    isFullscreen: false
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', async () => {
    loadPreferences();
    initUI();
    await initMap();
    initFirebase();

    setTimeout(() => {
        showNotification('systemOnline', 'allOperational');
        speak('welcome');
        hideLoading();
    }, 2000);
});

// ==================== PREFERENCES ====================
function loadPreferences() {
    state.lang = localStorage.getItem('eco-lang') || 'en';
    state.isDark = localStorage.getItem('eco-theme') !== 'light';
    state.voiceEnabled = localStorage.getItem('eco-voice') !== 'false';
    state.isFullscreen = localStorage.getItem('eco-fullscreen') === 'true';

    if (!state.isDark) {
        document.body.classList.add('light-theme');
    }
}

function savePreferences() {
    localStorage.setItem('eco-lang', state.lang);
    localStorage.setItem('eco-theme', state.isDark ? 'dark' : 'light');
    localStorage.setItem('eco-voice', state.voiceEnabled);
    localStorage.setItem('eco-fullscreen', state.isFullscreen);
}

// ==================== UI ====================
function initUI() {
    updateLanguage();
    updateTheme();
    updateVoice();
    updateFullscreenButton();
    updateLeaderboard();
    setupEventListeners();

    // Apply fullscreen state if saved
    if (state.isFullscreen) {
        toggleFullscreen();
    }
}

function updateLanguage() {
    const t = translations[state.lang].ui;

    // Update header
    document.querySelector('.brand-info h1').textContent = t.title;
    document.querySelector('.brand-info .subtitle').textContent = t.subtitle;

    // Update loading screen
    document.getElementById('loadingText').textContent = t.loading;
    document.getElementById('loadingSubtext').textContent = t.loadingSub;

    // Update current language display
    document.getElementById('currentLang').textContent = t.language;

    // Update buttons
    document.getElementById('dispatchBtnText').textContent = t.dispatch;
    document.querySelector('#leaderboardBtn span').textContent = t.leaderboard;
    document.getElementById('voiceText').textContent = t.voice;
    document.getElementById('fullscreenText').textContent = state.isFullscreen ? t.exitFullscreen : t.fullscreen;

    // Update theme text
    document.getElementById('themeText').textContent = state.isDark ? t.dark : t.light;

    // Update map card title
    document.getElementById('mapCardTitle').textContent = t.liveFleetTracking;

    // Update controls header
    document.getElementById('controlsHeader').textContent = t.fleetOperations;

    // Update bins header
    document.getElementById('binsHeader').textContent = t.wasteBinsStatus;

    // Update sidebar title
    document.getElementById('panelTitle').textContent = t.liveLeaderboard;

    // Update language dropdown active state
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === state.lang);
    });

    // Refresh bins to update text
    if (window.currentBinsData) {
        updateBins(window.currentBinsData);
    }

    // Update leaderboard
    updateLeaderboard();
}

function updateTheme() {
    const t = translations[state.lang].ui;
    document.getElementById('themeIcon').className = state.isDark ? 'fas fa-moon' : 'fas fa-sun';
    document.getElementById('themeText').textContent = state.isDark ? t.dark : t.light;
}

function updateVoice() {
    const voiceIcon = document.getElementById('voiceIcon');
    const voiceText = document.getElementById('voiceText');
    const voiceBtn = document.getElementById('voiceBtn');
    const t = translations[state.lang].ui;

    if (state.voiceEnabled) {
        voiceIcon.className = 'fas fa-microphone';
        voiceText.textContent = t.voice;
        voiceBtn.classList.add('active');
    } else {
        voiceIcon.className = 'fas fa-microphone-slash';
        voiceText.textContent = t.voice;
        voiceBtn.classList.remove('active');
    }
}

function updateFullscreenButton() {
    const fullscreenIcon = document.getElementById('fullscreenIcon');
    const fullscreenText = document.getElementById('fullscreenText');
    const t = translations[state.lang].ui;

    if (state.isFullscreen) {
        fullscreenIcon.className = 'fas fa-compress';
        fullscreenText.textContent = t.exitFullscreen;
    } else {
        fullscreenIcon.className = 'fas fa-expand';
        fullscreenText.textContent = t.fullscreen;
    }
}

function updateLeaderboard() {
    const t = translations[state.lang].ui;

    const data = [{
            rank: 1,
            name: t.rajesKumar,
            role: `${t.truck} 2`,
            score: 15400,
            current: false
        },
        {
            rank: 2,
            name: t.rameshKumar,
            role: `${t.truck} 1`,
            score: 14200,
            current: true
        },
        {
            rank: 3,
            name: t.vikramSingh,
            role: `${t.truck} 3`,
            score: 12100,
            current: false
        }
    ];

    const html = data.map(item => `
        <div class="leaderboard-item ${item.current ? 'current' : ''}">
            <div class="rank">${item.rank}</div>
            <div class="user-info">
                <div class="user-name">${item.name}</div>
                <div class="user-role">${item.role}</div>
            </div>
            <div class="user-score">${item.score.toLocaleString()}</div>
        </div>
    `).join('');

    document.getElementById('leaderboardContent').innerHTML = html;
}

function setupEventListeners() {
    // Language
    document.getElementById('langBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('langDropdown').classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            state.lang = opt.dataset.lang;
            updateLanguage();
            savePreferences();
            document.getElementById('langDropdown').classList.remove('show');
            speak('languageChanged');
        });
    });

    // Theme
    document.getElementById('themeBtn').addEventListener('click', () => {
        state.isDark = !state.isDark;
        document.body.classList.toggle('light-theme', !state.isDark);
        updateTheme();
        savePreferences();
        speak('themeChanged');
    });

    // Voice Toggle
    document.getElementById('voiceBtn').addEventListener('click', () => {
        state.voiceEnabled = !state.voiceEnabled;
        updateVoice();
        savePreferences();
        speak(state.voiceEnabled ? 'voiceOn' : 'voiceOff');
    });

    // Leaderboard
    document.getElementById('leaderboardBtn').addEventListener('click', () => {
        document.getElementById('leaderboardPanel').classList.toggle('show');
        speak('leaderboardOpened');
    });

    document.getElementById('closeSidebar').addEventListener('click', () => {
        document.getElementById('leaderboardPanel').classList.remove('show');
    });

    // Dispatch Fleet
    document.getElementById('dispatchBtn').addEventListener('click', async () => {
        const t = translations[state.lang].ui;
        showNotification(t.dispatch, 'Analyzing bin locations and dispatching fleet...');
        speak('fleetDispatching');

        // Execute the smart dispatch
        await dispatchFleetToNearestBins();
    });

    // Fullscreen toggle
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);

    // Handle escape key for fullscreen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.isFullscreen) {
            toggleFullscreen();
        }
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
        document.getElementById('langDropdown').classList.remove('show');
    });
}

function toggleFullscreen() {
    const mapCard = document.getElementById('mapCard');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    state.isFullscreen = !state.isFullscreen;

    if (state.isFullscreen) {
        mapCard.classList.add('fullscreen');
        fullscreenBtn.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
        fullscreenBtn.style.borderColor = 'var(--primary)';
        fullscreenBtn.style.color = 'var(--primary)';

        // Resize map when entering fullscreen
        if (state.map) {
            setTimeout(() => {
                state.map.resize();
            }, 300);
        }

        // Hide sidebar if open
        document.getElementById('leaderboardPanel').classList.remove('show');

        speak('fullscreenOn');
    } else {
        mapCard.classList.remove('fullscreen');
        fullscreenBtn.style.backgroundColor = '';
        fullscreenBtn.style.borderColor = '';
        fullscreenBtn.style.color = '';

        // Resize map when exiting fullscreen
        if (state.map) {
            setTimeout(() => {
                state.map.resize();
            }, 300);
        }

        speak('fullscreenOff');
    }

    updateFullscreenButton();
    savePreferences();
}

// ==================== MAP ====================
async function initMap() {
    state.map = new maplibregl.Map({
        container: 'map',
        style: `https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json?api_key=${OLA_API_KEY}`,
        center: [72.8777, 19.0760],
        zoom: 13,
        pitch: 45,
        bearing: 0,
        antialias: true,
        transformRequest: (url) => {
            if (url.includes('olamaps.io') && !url.includes('api_key')) {
                return {
                    url: url + (url.includes('?') ? '&' : '?') + `api_key=${OLA_API_KEY}`
                };
            }
            return {
                url
            };
        }
    });

    return new Promise(resolve => {
        state.map.on('load', () => {
            createTruckMarkers();
            resolve();
        });
    });
}

function createTruckMarkers() {
    // Main truck (Your truck)
    const truckEl = document.createElement('div');
    truckEl.className = 'truck-marker';
    truckEl.textContent = '🚛';
    truckEl.style.fontSize = '40px';
    truckEl.style.filter = 'drop-shadow(0 0 10px #3B82F6)';
    state.markers.truck = new maplibregl.Marker({
            element: truckEl
        })
        .setLngLat([72.8777, 19.0987])
        .addTo(state.map);

    // Rival truck
    const rivalEl = document.createElement('div');
    rivalEl.className = 'truck-marker rival';
    rivalEl.textContent = '🚛';
    rivalEl.style.fontSize = '40px';
    rivalEl.style.filter = 'drop-shadow(0 0 10px #EF4444)';
    rivalEl.style.opacity = '0.9';
    state.markers.rival = new maplibregl.Marker({
            element: rivalEl
        })
        .setLngLat([72.8362, 19.0595])
        .setPopup(new maplibregl.Popup({
            offset: 25
        }).setText("Rival Truck (Rajesh)"))
        .addTo(state.map);
}

// ==================== FIREBASE ====================
function initFirebase() {
    onValue(ref(db, "bins"), (snapshot) => {
        const bins = snapshot.val();
        if (bins) {
            updateBins(bins);
            updateBinMarkers(bins);
        }
    });

    onValue(ref(db, "truck_location"), (snapshot) => {
        const data = snapshot.val();
        if (data?.latitude && data?.longitude && state.markers.truck) {
            state.markers.truck.setLngLat([data.longitude, data.latitude]);
        }
    });
}

function updateBins(bins) {
    // Store current bins data for language updates
    window.currentBinsData = bins;

    const sortedIds = Object.keys(bins).sort((a, b) =>
        (bins[b].fillLevel || 0) - (bins[a].fillLevel || 0)
    );

    let newCriticalCount = 0;
    const t = translations[state.lang].ui;

    const html = sortedIds.map(id => {
        const bin = bins[id];
        const fillLevel = parseInt(bin.fillLevel) || 0;

        let status = 'safe',
            statusText = t.normal;
        if (fillLevel >= 80) {
            status = 'critical';
            statusText = t.critical;
            newCriticalCount++;
        } else if (fillLevel >= 60) {
            status = 'warning';
            statusText = t.warning;
        }

        return `
            <div class="bin-card" onclick="window.focusBin('${id}')">
                <div class="bin-card-header">
                    <div class="bin-id">${t.binLabel}${id}</div>
                    <div class="status-badge status-${status}">${statusText}</div>
                </div>
                <div class="fill-level" style="color: var(--${status === 'safe' ? 'primary' : status === 'warning' ? 'warning' : 'danger'})">${fillLevel}%</div>
                <div class="progress-bar">
                    <div class="progress-fill fill-${status}" style="width: ${fillLevel}%"></div>
                </div>
                <div class="bin-meta">
                    <i class="fas fa-clock"></i>
                    <span>${t.updatedNow}</span>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('binsGrid').innerHTML = html;

    if (newCriticalCount > state.criticalCount) {
        showNotification(t.critical + ' Alert', `${newCriticalCount} bins need immediate attention`);
    }
    state.criticalCount = newCriticalCount;
}

function updateBinMarkers(bins) {
    const t = translations[state.lang].ui;

    Object.keys(bins).forEach(id => {
        const bin = bins[id];
        const fillLevel = parseInt(bin.fillLevel) || 0;
        const lng = parseFloat(bin.longitude);
        const lat = parseFloat(bin.latitude);

        let icon = '🛡️',
            className = 'marker-safe';
        if (fillLevel >= 80) {
            icon = '☢️';
            className = 'marker-critical';
        } else if (fillLevel >= 60) {
            icon = '⚠️';
            className = 'marker-warning';
        }

        if (!state.markers.bins[id]) {
            const el = document.createElement('div');
            el.className = `marker ${className}`;
            el.textContent = icon;

            state.markers.bins[id] = new maplibregl.Marker({
                    element: el
                })
                .setLngLat([lng, lat])
                .setPopup(new maplibregl.Popup({
                        offset: 25
                    })
                    .setHTML(`<strong>${t.binLabel}${id}</strong><br>${t.fill}: ${fillLevel}%`))
                .addTo(state.map);
        } else {
            state.markers.bins[id].setLngLat([lng, lat]);
            const el = state.markers.bins[id].getElement();
            el.textContent = icon;
            el.className = `marker ${className}`;

            // Update popup text
            state.markers.bins[id].setPopup(new maplibregl.Popup({
                    offset: 25
                })
                .setHTML(`<strong>${t.binLabel}${id}</strong><br>${t.fill}: ${fillLevel}%`));
        }
    });
}

// ==================== UTILITIES ====================
function speak(key) {
    if (!state.voiceEnabled || !window.speechSynthesis) return;

    const t = translations[state.lang].speech;
    if (!t || !t[key]) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(t[key]);
    utterance.lang = speechLangCodes[state.lang] || 'en-US';
    window.speechSynthesis.speak(utterance);
}

function showNotification(title, message) {
    document.getElementById('notificationTitle').textContent = title;
    document.getElementById('notificationMessage').textContent = message;

    const notification = document.getElementById('notification');
    notification.classList.add('show');

    setTimeout(() => notification.classList.remove('show'), 5000);
}

function hideLoading() {
    const loading = document.getElementById('loadingScreen');
    loading.style.opacity = '0';
    setTimeout(() => loading.style.display = 'none', 500);
}

// ==================== DISTANCE CALCULATION ====================
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// ==================== POLYLINE DECODER ====================
function decodePolyline(encoded) {
    let points = [];
    let index = 0,
        len = encoded.length;
    let lat = 0,
        lng = 0;

    while (index < len) {
        let b, shift = 0,
            result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);

        let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lat += dlat;

        shift = 0;
        result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);

        let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lng += dlng;

        points.push([lng / 1E5, lat / 1E5]);
    }
    return points;
}

// ==================== SMART FLEET DISPATCH ====================
async function dispatchFleetToNearestBins() {
    const t = translations[state.lang].ui;

    // Get current truck positions
    const truck1Pos = state.markers.truck.getLngLat();
    const truck2Pos = state.markers.rival.getLngLat();

    // Get bins data from Firebase
    const binsSnapshot = await get(ref(db, "bins"));
    const bins = binsSnapshot.val();

    if (!bins) {
        showNotification('No Data', 'No bin data available');
        return;
    }

    // Filter bins that are critical (>= 80% full) - only dispatch to critical bins
    let targetBins = [];
    Object.keys(bins).forEach(id => {
        const fillLevel = parseInt(bins[id].fillLevel) || 0;
        if (fillLevel >= 80) {
            targetBins.push({
                id: id,
                lat: parseFloat(bins[id].latitude),
                lng: parseFloat(bins[id].longitude),
                fillLevel: fillLevel
            });
        }
    });

    if (targetBins.length === 0) {
        showNotification('All Clear', 'No critical bins (≥80%) require immediate attention');
        speak('systemReady');
        // Clear any existing routes
        clearRoute('route-truck1');
        clearRoute('route-truck2');
        return;
    }

    // Find nearest critical bin for each truck
    let truck1Assignment = null;
    let truck2Assignment = null;
    let minDistTruck1 = Infinity;
    let minDistTruck2 = Infinity;

    targetBins.forEach(bin => {
        const distToTruck1 = getDistanceFromLatLonInKm(
            truck1Pos.lat, truck1Pos.lng,
            bin.lat, bin.lng
        );
        const distToTruck2 = getDistanceFromLatLonInKm(
            truck2Pos.lat, truck2Pos.lng,
            bin.lat, bin.lng
        );

        if (distToTruck1 < minDistTruck1) {
            minDistTruck1 = distToTruck1;
            truck1Assignment = {
                ...bin,
                distance: distToTruck1
            };
        }
        if (distToTruck2 < minDistTruck2) {
            minDistTruck2 = distToTruck2;
            truck2Assignment = {
                ...bin,
                distance: distToTruck2
            };
        }
    });

    // If both trucks assigned to same bin, give it to closer truck
    if (truck1Assignment && truck2Assignment && truck1Assignment.id === truck2Assignment.id) {
        if (truck1Assignment.distance < truck2Assignment.distance) {
            // Truck 1 gets this bin, find next nearest for Truck 2
            truck2Assignment = null;
            minDistTruck2 = Infinity;
            targetBins.forEach(bin => {
                if (bin.id !== truck1Assignment.id) {
                    const dist = getDistanceFromLatLonInKm(
                        truck2Pos.lat, truck2Pos.lng,
                        bin.lat, bin.lng
                    );
                    if (dist < minDistTruck2) {
                        minDistTruck2 = dist;
                        truck2Assignment = {
                            ...bin,
                            distance: dist
                        };
                    }
                }
            });
        } else {
            // Truck 2 gets this bin, find next nearest for Truck 1
            truck1Assignment = null;
            minDistTruck1 = Infinity;
            targetBins.forEach(bin => {
                if (bin.id !== truck2Assignment.id) {
                    const dist = getDistanceFromLatLonInKm(
                        truck1Pos.lat, truck1Pos.lng,
                        bin.lat, bin.lng
                    );
                    if (dist < minDistTruck1) {
                        minDistTruck1 = dist;
                        truck1Assignment = {
                            ...bin,
                            distance: dist
                        };
                    }
                }
            });
        }
    }

    // Draw routes
    if (truck1Assignment) {
        await drawRoute(
            truck1Pos, {
                lat: truck1Assignment.lat,
                lng: truck1Assignment.lng
            },
            'route-truck1',
            '#FF073A' // Neon Red - Bold and vibrant for Truck 1
        );
    } else {
        clearRoute('route-truck1');
    }

    if (truck2Assignment) {
        await drawRoute(
            truck2Pos, {
                lat: truck2Assignment.lat,
                lng: truck2Assignment.lng
            },
            'route-truck2',
            '#FFF01F' // Neon Yellow - Bold and distinct for Truck 2
        );
    } else {
        clearRoute('route-truck2');
    }

    // Show notification with fill levels
    let message = '';
    if (truck1Assignment && truck2Assignment) {
        message = `Truck 1 → ${t.binLabel}${truck1Assignment.id} (${truck1Assignment.fillLevel}%, ${truck1Assignment.distance.toFixed(1)}km) | Truck 2 → ${t.binLabel}${truck2Assignment.id} (${truck2Assignment.fillLevel}%, ${truck2Assignment.distance.toFixed(1)}km)`;
    } else if (truck1Assignment) {
        message = `Truck 1 → ${t.binLabel}${truck1Assignment.id} (${truck1Assignment.fillLevel}%, ${truck1Assignment.distance.toFixed(1)}km)`;
    } else if (truck2Assignment) {
        message = `Truck 2 → ${t.binLabel}${truck2Assignment.id} (${truck2Assignment.fillLevel}%, ${truck2Assignment.distance.toFixed(1)}km)`;
    }

    showNotification('Fleet Dispatched', message);

    // Voice announcement
    const criticalCount = targetBins.length;
    const assignedCount = (truck1Assignment ? 1 : 0) + (truck2Assignment ? 1 : 0);
    if (state.voiceEnabled) {
        const announcement = `Dispatching fleet. ${criticalCount} critical bins detected. ${assignedCount} trucks assigned.`;
        const utterance = new SpeechSynthesisUtterance(announcement);
        utterance.lang = speechLangCodes[state.lang] || 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}

// ==================== ROUTE DRAWING ====================
async function drawRoute(start, end, layerId, color) {
    const origin = `${start.lat},${start.lng}`;
    const destination = `${end.lat},${end.lng}`;
    const url = `https://api.olamaps.io/routing/v1/directions?origin=${origin}&destination=${destination}&api_key=${OLA_API_KEY}`;

    try {
        const response = await fetch(url, {
            method: 'POST'
        });
        const data = await response.json();

        if (data.status === "SUCCESS" && data.routes?.length > 0) {
            const polyline = data.routes[0].overview_polyline;
            const coordinates = decodePolyline(polyline);

            const geojson = {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: coordinates
                }
            };

            if (state.map.getSource(layerId)) {
                state.map.getSource(layerId).setData(geojson);
            } else {
                state.map.addSource(layerId, {
                    type: 'geojson',
                    data: geojson
                });
                state.map.addLayer({
                    id: layerId,
                    type: 'line',
                    source: layerId,
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': color,
                        'line-width': 6,
                        'line-opacity': 0.9
                    }
                });
            }

            // Make layer visible
            if (state.map.getLayer(layerId)) {
                state.map.setLayoutProperty(layerId, 'visibility', 'visible');
            }
        }
    } catch (error) {
        console.error('Route drawing error:', error);
    }
}

function clearRoute(layerId) {
    if (state.map.getLayer(layerId)) {
        state.map.setLayoutProperty(layerId, 'visibility', 'none');
    }
}

// ==================== EXPORT FUNCTIONS TO WINDOW ====================
window.focusBin = (id) => {
    if (state.markers.bins[id]) {
        state.map.flyTo({
            center: state.markers.bins[id].getLngLat(),
            zoom: 16,
            pitch: 60,
            speed: 1.2
        });
    }
};

window.addEventListener('beforeunload', () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
});