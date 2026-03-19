require('dotenv').config(); 
const express = require('express');
const OpenAI = require('openai');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  // 1. Grab the key fresh from the environment on every request
  const myKey = process.env.OPENAI_API_KEY;

  // 2. 💡 Check if the key exists before trying to use it
  if (!myKey || myKey.trim() === "" || myKey.includes("your_groq_api_key")) {
    return res.json({
      reply: "⚠️ Configuration Error: The API Key is missing from the .env file. Please add it and restart the server.",
    });
  }

  // 3. Initialize the client here to ensure it uses the latest key
  const client = new OpenAI({
    apiKey: myKey, 
    baseURL: "https://api.groq.com/openai/v1", 
  });

  try {
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { 
          role: "system", 
          content: "You are MindMate, a premium mental wellness assistant for freelancers. You understand the stress of inconsistent income, client deadlines, and isolation. Be empathetic, professional, and provide actionable wellness tips." 
        },
        { role: "user", content: userMessage },
      ],
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error("API Error:", error.message);
    
    // Check for specific "Unauthorized" error (bad key)
    if (error.status === 401) {
        return res.json({ reply: "⚠️ Invalid API Key. Please check your Groq console." });
    }

    res.status(500).json({ 
      reply: "⚠️ MindMate is currently taking a short break. Please check your connection!" 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 MindMate is Live at http://localhost:${PORT}`);
});