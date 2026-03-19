async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.trim();

  if (!message) return;

  // 1. Add User Message to UI
  appendMessage('user', message);
  input.value = "";

  // 2. Add "Thinking" indicator
  const loadingId = "loading-" + Date.now();
  const loadingDiv = document.createElement("div");
  loadingDiv.className = "bot-msg";
  loadingDiv.id = loadingId;
  loadingDiv.innerText = "MindMate is reflecting...";
  chatBox.appendChild(loadingDiv);
  scrollToBottom();

  try {
    // 3. Call our Backend API
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    const botMessageDiv = document.getElementById(loadingId);

    if (data.reply) {
      // 4. Use the Typewriter effect with Markdown parsing
      typeResponse(botMessageDiv, data.reply);
    } else {
      botMessageDiv.innerText = "⚠️ Configuration Error: The API Key is missing or invalid.";
    }

  } catch (error) {
    const errorDiv = document.getElementById(loadingId);
    if (errorDiv) {
      errorDiv.innerText = "Connection error. Please ensure your server is running.";
    }
    console.error("Fetch error:", error);
  }
}

// Helper to add messages to the UI
function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === 'user' ? 'user-msg' : 'bot-msg';
  
  // For user messages, we keep it simple text. 
  // For bot messages, we parse markdown (handled in typeResponse)
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  scrollToBottom();
}

// Premium Typewriter Effect with Markdown Support
function typeResponse(element, fullText) {
  element.innerText = ""; // Clear the "reflecting..." text
  
  // Use marked to convert the AI's markdown (bolding, lists) into HTML
  const htmlContent = marked.parse(fullText);
  
  // We set the innerHTML immediately so the formatting works, 
  // but we can add a fade-in class for a smooth feel
  element.innerHTML = htmlContent;
  element.classList.add('fade-in'); 
  
  scrollToBottom();
}

function scrollToBottom() {
  const chatBox = document.getElementById("chat-box");
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Allow pressing "Enter" to send
document.getElementById("user-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});