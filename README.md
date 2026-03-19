# 🌿 MindMate: Freelancer Wellness AI

> **Live Demo:** Click here to try MindMate: https://mindmate-uild.onrender.com/

**MindMate** is a high-performance AI wellness assistant designed for the modern builder. Built for the **#RaenestXDevCareer** hackathon, it serves the entire Raenest ecosystem: Founders, Entrepreneurs, and Freelancers.

---

## 🚀 The Vision
Building a business is mentally taxing. Traditional wellness apps are too generic; they don't understand "runway stress," "client ghosting," or "founder isolation." MindMate acts as a strategic mental partner, helping users navigate the psychological highs and lows of the "gig economy" and startup life.

## ✨ Key Features
* **Strategic AI Coaching:** Powered by **Groq (Llama 3.3-70B)**, it identifies the root cause of stress (Physical vs. Mental) using targeted follow-up logic.
* **Premium UX:** Features a smooth **Typewriter Effect** and **Markdown Rendering** for a clean, professional chat experience.
* **Founder-Centric Logic:** Specialized advice for managing financial unpredictability, high-pressure deadlines, and business scaling.
* **Secure by Design:** Uses environment variables (`.env`) to ensure API security, following industry best practices.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla), [Marked.js](https://marked.js.org/) for formatting.
* **Backend:** Node.js, Express.
* **AI Engine:** Groq Cloud SDK (Llama 3.3-70b-versatile).
* **Environment:** Dotenv for secure API management.

## 📦 Getting Started
1. **Clone & Install:**
   ```bash
   git clone [https://github.com/VikkyRia/MindMate-Deploy.git](https://github.com/VikkyRia/MindMate-Deploy.git)
   npm install
Configure Environment:
Create a .env file in the root and add:

Plaintext
OPENAI_API_KEY=your_groq_api_key
Launch:

Bash
npm start
🛡️ Security & Scalability
This project was built with a "Logic-First" approach. By separating the system prompt logic from the frontend and securing the API keys server-side, MindMate is ready to scale from a hackathon prototype to a full SaaS integration.

Updated for the Raenest X DevCareer Hackathon 2026