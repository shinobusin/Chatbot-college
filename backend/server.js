const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// Note: You don't usually need to change the API version manually 
// if you are using the latest version of the library.

// USE THE STABLE 1.5 FLASH MODEL
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash", 
    systemInstruction: "You are a helpful and professional College Assistant Chatbot. Answer queries about admissions, courses, fees, timings, and campus events. If you don't know a specific college detail, ask the user to specify which department they are interested in.",
});

// --- CHAT ROUTE START ---
app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        console.log("Incoming Message:", message); 

        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });

    } catch (error) {
        console.error("--- SERVER CRASH ERROR ---");
        console.error("Message:", error.message);
        console.error("--------------------------");
        res.status(500).json({ error: error.message });
    }
}); 
// --- CHAT ROUTE END (Note the closing brace above) ---

// --- START SERVER START (This must be outside the route) ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Gemini Server running on port ${PORT}`);
});
// --- START SERVER END ---