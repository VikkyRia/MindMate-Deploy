# 🌿 MindMate: The Entrepreneur & Founder Wellness Suite

> **Live Demo:** [Click here to experience MindMate](https://mindmate-uild.onrender.com/)

**MindMate** is a high-performance AI wellness assistant designed for the modern builder. Built for the **#RaenestXDevCareer** hackathon, it serves the entire Raenest ecosystem: Founders, Entrepreneurs, and Freelancers.

---

## 🚀 The Vision
Building a business is mentally taxing. Traditional wellness apps are too generic; they don't understand "runway stress," "client ghosting," or "founder isolation." MindMate acts as a strategic mental partner, helping users navigate the psychological highs and lows of the "gig economy" and startup life.

---

## ✨ Key Features
* **Strategic AI Coaching:** Powered by **Groq (Llama 3.3-70B)**, it identifies the root cause of stress (Physical vs. Mental) using targeted follow-up logic.
* **Premium UX:** Features a smooth **Typewriter Effect** and **Markdown Rendering** for a clean, professional chat experience.
* **Founder-Centric Logic:** Specialized advice for managing financial unpredictability, high-pressure deadlines, and business scaling.
* **Secure by Design:** Uses environment variables (`.env`) to ensure API security, following industry best practices.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla), [Marked.js](https://marked.js.org/) for formatting.
* **Backend:** Node.js, Express.
* **AI Engine:** Groq Cloud SDK (Llama 3.3-70b-versatile).
* **Environment:** Dotenv for secure API management.

---

## 📦 Getting Started

### 1. Clone & Install
```bash
git clone [https://github.com/VikkyRia/MindMate-Deploy.git](https://github.com/VikkyRia/MindMate-Deploy.git)
cd MindMate-Deploy
npm install
```
2. Configure Environment
Create a .env file in the root directory and add your API key:
OPENAI_API_KEY=your_groq_api_key

3. Launch
```
npm start
```

## Security & Scalability
This project was built with a "Logic-First" approach. By separating the system prompt logic from the frontend and securing the API keys server-side, MindMate is ready to scale from a hackathon prototype to a full SaaS integration.

## Technical Challenges & Solutions
1. API Security & Key Exposure
The Challenge: During initial development, I identified the risk of exposing sensitive API keys in the version control history.

The Solution: I implemented a robust server-side environment variable system using dotenv. I configured a .gitignore to ensure credentials never touch the cloud, while manually configuring the production environment on the hosting platform to keep the app live and secure.


2. Real-Time UX & Markdown Rendering
The Challenge: Raw AI responses often contain Markdown which looks messy in a standard browser. Additionally, static text "popping" in felt impersonal for a wellness app.

The Solution: I integrated Marked.js to dynamically parse AI responses into clean HTML. I also developed custom CSS-driven logic to simulate a "Typewriter" effect, creating a more empathetic and human-like interaction.


3. State Management & "Non-Fast-Forward" Errors
The Challenge: Encountered a git push [rejected] error due to a mismatch between the local environment and the remote repository history.

The Solution: Used strategic git pull and synchronization maneuvers to re-sync the history, ensuring the final repository was "clean" and free of unnecessary folders like node_modules.


4. System Prompt Engineering
The Challenge: Ensuring the AI didn't just give generic advice but acted as a "Coach."

The Solution: I engineered a multi-layered System Prompt that forces the AI to ask targeted follow-up questions (Physical vs. Mental fatigue), moving the app from a simple chatbot to a strategic mental partner for Founders.


Created for the Raenest X DevCareer Hackathon 2026