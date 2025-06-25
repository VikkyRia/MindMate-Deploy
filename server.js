require('dotenv').config();
const express = require('express');
const OpenAI = require('openai');
const app = express();
const PORT = process.env.PORT || 3000;

// Check if the API key is provided
const OPENAI_KEY = process.env.OPENAI_API_KEY;
const openai = OPENAI_KEY ? new OpenAI({ apiKey: OPENAI_KEY }) : null;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  // 💡 Demo mode if API key is missing
  if (!OPENAI_KEY) {
    return res.json({
      reply: "🧪 This is a demo version. AI responses are disabled until a valid API key is added.",
    });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a kind and empathetic mental wellness chatbot called MindMate." },
        { role: "user", content: userMessage },
      ],
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({ reply: "⚠️ Error: This is a demo version. AI responses are disabled until a valid API key is added." });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 MindMate running on http://localhost:${PORT}`);
});
