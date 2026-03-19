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
  loadingDiv.innerText = "MindMate is typing...";
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

    // 4. Replace loading text with actual AI response
    const botMessageDiv = document.getElementById(loadingId);
    if (data.reply) {
      botMessageDiv.innerText = data.reply;
    } else {
      botMessageDiv.innerText = "I encountered an error. Please check your API key.";
    }

  } catch (error) {
    document.getElementById(loadingId).innerText = "Connection error. Is the server running?";
    console.error("Fetch error:", error);
  }

  scrollToBottom();
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === 'user' ? 'user-msg' : 'bot-msg';
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
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