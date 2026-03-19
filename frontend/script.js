const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const typingIndicator = document.getElementById('typing-indicator');

// Ensure this matches your Node.js server port
const API_URL = 'http://localhost:5000/chat';

/**
 * Appends a message bubble to the chat area
 * @param {string} role - 'user' or 'bot'
 * @param {string} text - The message content
 */
function appendMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', role === 'user' ? 'user-msg' : 'bot-msg');
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    
    // Auto-scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const message = userInput.value.trim();
    if (!message) return;

    // 1. Display User Message
    appendMessage('user', message);
    userInput.value = '';

    // 2. Show "Typing..." Indicator
    typingIndicator.classList.remove('hidden');

    try {
        // 3. Call your LOCAL Backend (Node.js), NOT the Google Website
        const response = await fetch(API_URL, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message }) 
        });

        const data = await response.json();
        
        // Hide loading indicator
        typingIndicator.classList.add('hidden');

        // 4. Handle Response
        if (response.ok && data.reply) {
            appendMessage('bot', data.reply);
        } else {
            const errorMsg = data.error || "Unknown server error";
            appendMessage('bot', `⚠️ Server Error: ${errorMsg}`);
        }

    } catch (error) {
        typingIndicator.classList.add('hidden');
        appendMessage('bot', "🚫 Connection Error: Is your backend server running?");
        console.error("Fetch Error:", error);
    }

    
});