# MindMate 🌿 | Your AI Safe Space for Mental Clarity & Peace

**MindMate** is a culturally-intelligent AI Mental Health Companion designed to break the silence around mental wellness in Nigeria. Built for the **Raenest X DevCareer Hackathon**, it provides a judgment-free, anonymous environment where anyone can speak freely about their heart and mind.

---

## 🌟 The Mission
In a society where mental health is often stigmatized or overlooked, many suffer in silence. **MindMate** bridges this gap by offering immediate, reliable, and empathetic support. It is a *"Compassionate Companion for Every Journey"*—from the student facing exams to the professional managing a high-stress career.

## 🚀 Key Features
* **Cultural Empathy:** Communicates using local nuances (English, Pidgin, Yoruba, Igbo, Hausa) with warm, localized greetings like *Pele*, *Ndo*, and *Sannu*.
* **Scientific Foundation:** Guidance is grounded in **WHO** (World Health Organization) and **UNICEF** wellness standards.
* **Therapeutic Logic:** Incorporates **Cognitive Behavioral Therapy (CBT)** principles to help users validate emotions and reframe negative thoughts.
* **Voice-First Accessibility:** Integrated microphone support for users who find it easier to speak than type.
* **Anonymity & Safety:** A completely private space with built-in crisis protocols that direct users to professional Nigerian helplines when needed.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3 (Custom Responsive UI), JavaScript (ES6+).
* **Backend:** Node.js, Express.
* **AI Engine:** Llama 3.3-70B via Groq Cloud API for lightning-fast, intelligent responses.
* **Infrastructure:** Deployed on **Render** with custom **Cron-job** "heartbeats" to ensure 24/7 availability.

## 🧠 Technical Challenges Overcome
### 1. The "Generic Response" Trap
Early iterations suffered from repetitive "I hear you" phrases. I optimized the **System Prompt** to mirror user energy, enforce brevity, and ensure the AI sounds like a wise, calm friend rather than a scripted robot.

### 2. Infrastructure Latency (Cold Starts)
To combat Render's 15-minute sleep cycle on the free tier, I engineered an automated 10-minute ping system. This ensures the container stays "warm," so when a user in distress clicks the app, it loads **instantly**.

## 📦 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/mindmate.git](https://github.com/your-username/mindmate.git)
   cd mindmate
   
Install dependencies:
npm install

Configure Environment Variables: Create a .env file in the root directory:
GROQ_API_KEY=your_groq_api_key_here
PORT=3000

Run the application:
npm start

---
## 🌍 Impact Goals (SDG 3)
MindMate aligns with Sustainable Development Goal 3: Good Health and Well-being, aiming to reduce the mental health treatment gap in Africa through accessible, localized technology.

---
## 🛡️ Safety & Crisis Protocol
MindMate is an AI companion, not a replacement for professional clinical care. The system identifies high-risk language and directs users to verified Nigerian resources:

MANI (Mentally Aware Nigeria Initiative): 0809 111 6264

Nigeria National Health Hotline: 0800 000 0000

Lagos State Mental Health Helpline: 0800 800 8000

---

## 🔮 Future Roadmap (V2.0 & Beyond)
To further reduce the mental health treatment gap, I plan to implement the following:

* **Voice-to-Text Integration:** Using the **Whisper API** to allow users to "speak" to MindMate, making it accessible for those in high-distress who find typing difficult.
* **Secure Mood Tracking:** Implementing **PostgreSQL with Sequelize ORM** to allow users to securely track their emotional trends over time.
* **Offline Resource Map:** A geo-location feature to help users find the nearest physical mental health centers in Nigeria, even with low data connectivity.
* **Professional Hand-off:** A seamless "SOS" button that, with user consent, can send a summary of the AI conversation to a human counselor at **MANI** to speed up the intake process.

---

## Developed by :
Victoria Alayemie 
(Backend Developer) 
