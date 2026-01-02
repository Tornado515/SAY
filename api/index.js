import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Initialize Gemini
const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI ? genAI.getGenerativeModel({ model: "gemini-2.5-flash" }) : null;

app.post('/api/generateStackPlan', async (req, res) => {
    try {
        const { stack } = req.body;

        // 1. Validate Input
        if (!stack || !stack.frontend || !stack.backend || !stack.database || !stack.deployment) {
            res.status(400).json({
                error: 'invalid-argument',
                message: 'Missing stack components. Please select tools for all categories.'
            });
            return;
        }

        // 2. Check API Key
        if (!apiKey) {
            console.error("GEMINI_API_KEY not found in environment.");
            res.status(500).json({
                error: 'config-error',
                message: 'Server configuration error: GEMINI_API_KEY is missing.'
            });
            return;
        }

        // 3. Construct Prompt
        const prompt = `
        You are an expert Senior Solution Architect and Prompt Engineer.
        
        GOAL: Create a structured guide to build a new web application with this stack:
        - Frontend: ${stack.frontend}
        - Backend: ${stack.backend}
        - Database: ${stack.database}
        - Deployment: ${stack.deployment}
        
        OUTPUT FORMAT:
        Please provide the response in Markdown with exactly TWO main sections.
        
        # Section 1: Prerequisites & Preparation (For the User)
        List ONLY the manual steps the user must complete before they can start coding.
        - Required CLI tools to install (Node.js, Python, etc.)
        - Account setup (e.g. "Create Firebase Project", "Get API Keys")
        - Setup commands (e.g. "firebase login", "npm login")
        - Deployment target details (e.g. "Enable Billing", "Create Database Instance")
        
        # Section 2: AI Scaffolding Plan (Copy & Paste this to your AI Assistant)
        Write a highly detailed, technical PROMPT that the user should copy and paste into an AI coding tool (like Cursor, Windsurf, or Antigravity).
        
        This inner prompt should:
        - Tell the AI agent it is an expert developer.
        - instruct it to initialize the project structure for ${stack.frontend} and ${stack.backend}.
        - instruct it to install specific dependencies.
        - instruct it to create configuration files (tsconfig, etc).
        - instruct it to build a "Hello World" proof-of-concept connecting frontend to backend.
        
        Do not execute the code yourself, but provide the *prompt* that will make another AI execute it perfectly.
        `;

        // 4. Generate Content
        // @ts-ignore
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // 5. Return Result
        res.json({ plan: responseText });

    } catch (error) {
        console.error("Error generating plan:", error);
        res.status(500).json({
            error: 'internal',
            message: 'Failed to generate plan. Please try again later.'
        });
    }
});

// For Vercel, we export the app.
// For local development, we want to listen on a port.
// In check for direct execution with ESM:
import { fileURLToPath } from 'url';
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;
