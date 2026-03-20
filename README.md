CampusBot: Your AI College Guide

CampusBotis a smart, friendly chat assistant built to help students find information about college life, admissions, and courses instantly. 

Think of it like having a college counselor available 24/7 right on your phone or laptop!

---

🌟 Why this project is cool
Most beginner projects put their "Secret API Keys" in the browser where anyone can steal them. CampusBot is built professionally: it uses a "Middle-man" (the Node.js Backend) to keep the keys safe and the application secure.

---

🚀 What can it do?
- Instant Answers: Ask about fees, event dates, or course timings.
- Smart Conversations:It doesn't just give one-word answers; it understands full sentences.
- Beautiful Design: A slim, modern "floating" chat window that looks great on any screen.
- Typing Indicators:Shows "CampusBot is typing..." so you know the AI is thinking.

---

🛠️ The "Engine" (Tech Stack)
- The Face (Frontend): Simple HTML, CSS, and JavaScript. No heavy frameworks needed!
- The Brain (AI): Google Gemini (Flash version)—the same tech used in top Google apps.
- The Guard (Backend): Node.js and Express. This part handles the "behind-the-scenes" work.

---
What's inside the folders?

college-chatbot-ai/
├── 📁 backend/             # The "Brain" & Security
│   ├── .env                # Your secret keys go here (Keep this private!)
│   ├── package.json        # The list of "tools" the server needs
│   └── server.js           # The code that talks to Google AI
├── 📁 frontend/            # The "Face" you see in the browser
│   ├── index.html          # The structure of the chat box
│   ├── style.css           # The colors, fonts, and "slim" design
│   └── script.js           # The logic that sends your text to the server
└── README.md               # You are reading this now!

 The Build Journey: How I Created This 

As a Software Engineering fresher, I followed a disciplined, step-by-step development process to ensure security and scalability. Here is the progress from scratch:

Phase 1: The Foundation (Structure)
- Folder Setup: I organized the project into `frontend/` and `backend/` to follow the Separation of Concerns principle.
- Environment Initialization: Created a `package.json` in the backend and installed `express`, `cors`, `dotenv`, and `@google/generative-ai`.

Phase 2: Building the "Guard" (Backend)
- Security First: I implemented a Node.js server to handle API requests. This ensures my **Gemini API Key** stays hidden from the public (Client-Side).
- The API Bridge: Wrote a `POST /chat` route that takes user input, sends it to Google’s AI, and returns the response as clean JSON.
- Error Management: Added a `try-catch` block with detailed logging to catch issues like invalid keys or model timeouts.

Phase 3: The "Face" (Frontend UI)
- HTML Structure: Created a slim, centered chat container with a clear header, scrollable message area, and input footer.
- Modern Styling: Used CSS Variables and Flexbox to create a mobile-responsive "Glassmorphism" design.
- Dynamic Logic: Wrote `script.js` to handle `fetch()` calls to my local server, manage "Typing..." indicators, and append chat bubbles dynamically.

Phase 4: Debugging & Optimization
- CORS Configuration:Fixed "Cross-Origin" blocks to allow my browser to talk to my local server safely.
- Model Migration: Updated the model logic from `gemini-1.5` to the latest Gemini 2.5/3.0 Flash for better 2026 performance.
- UI Polish:Adjusted padding and `flex-shrink` properties to ensure the chat area never gets "squished" by the header.

---
