require('dotenv').config(); 
const express = require('express');
const OpenAI = require('openai');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Initialize the client once at the top level for better performance
// It will automatically look for process.env.OPENAI_API_KEY
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
  baseURL: "https://api.groq.com/openai/v1", 
});

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  // 1. Safety Check: Ensure the key is present
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes("your_groq")) {
    return res.json({
      reply: "⚠️ **Configuration Error**: The API Key is missing. Please add it to your environment variables and restart.",
    });
  }

  try {
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { 
          role: "system", 
          content: `You are MindMate, a premium wellness and productivity coach for entrepreneurs, founders, and freelancers. 
          Your goal is to help them navigate the unique stresses of building a business: isolation, burnout, financial unpredictability, and high-pressure deadlines.

          **Tone & Style:**
          1. **Empathetic yet Strategic:** Don't just give soft advice; give actionable "Micro-Wins."
          2. **Concise Formatting:** Use Markdown (bolding and bullet points) to make responses scannable.
          3. **The "Coach" Rule:** If a user reports a negative emotion (tired, stressed, anxious), ask ONE targeted follow-up question to identify the business-related root cause (e.g., "Is this physical exhaustion from a launch, or mental fatigue from client management?").
          4. **Entrepreneurial Context:** Use business-relevant analogies (e.g., "Think of your energy like a startup's runway—you can't burn it all in one month").
          5. Structure: Use double new lines between your opening empathy statement and your follow-up questions to ensure the text is easy to read.`
        },
        { role: "user", content: userMessage },
      ],
      temperature: 0.7, // Adds a touch of human-like creativity to the "coaching"
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error("API Error:", error.message);
    
    if (error.status === 401) {
        return res.json({ reply: "⚠️ **Invalid API Key**. Please check your Groq console." });
    }

    res.status(500).json({ 
      reply: "⚠️ **MindMate is currently taking a short break**. Please check your connection and try again in a moment!" 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 MindMate is Live at http://localhost:${PORT}`);
});