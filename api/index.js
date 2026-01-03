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
console.log(`[DEBUG] GEMINI_API_KEY loaded: ${apiKey ? 'Yes (length: ' + apiKey.length + ')' : 'NO - KEY IS MISSING!'}`);
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI ? genAI.getGenerativeModel({ model: "gemini-2.5-flash" }) : null;

app.post('/api/generateStackPlan', async (req, res) => {
    try {
        const { stack } = req.body;

        // 1. Validate Input
        const deployment = stack?.deployment || {};
        const hasFullDeployment = !!deployment.full;
        const hasSplitDeployment = !!(deployment.frontend && deployment.backend);

        const hasFullStack = !!stack.fullStack;
        const hasSplitStack = !!(stack.frontend && stack.backend);

        if (!stack || (!hasFullStack && !hasSplitStack) || !stack.database || (!hasFullDeployment && !hasSplitDeployment)) {
            res.status(400).json({
                error: 'invalid-argument',
                message: 'Missing stack components. Please select tools for all categories, including deployment.'
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

        const deploymentText = hasFullDeployment
            ? `Deployment: ${deployment.full}`
            : `Frontend Deployment: ${deployment.frontend}, Backend Deployment: ${deployment.backend}`;

        const stackText = hasFullStack
            ? `Full Stack Framework: ${stack.fullStack}`
            : `Frontend: ${stack.frontend}, Backend: ${stack.backend}`;

        // 3. Construct Prompt
        const prompt = `
        You are an expert Senior Solution Architect and Prompt Engineer.
        
        GOAL: Create a structured guide to build a new web application with this stack:
        - ${stackText}
        - Database: ${stack.database}
        - ${deploymentText}
        
        OUTPUT FORMAT:
        Please provide the response in Markdown with exactly TWO main sections.
        
        # Section 1: Prerequisites & Preparation (For the User)
        List ONLY the manual steps the user must complete before they can start coding.
        - Required CLI tools to install (Node.js, Python, etc.)
        - Account setup (e.g. "Create ${hasFullDeployment ? deployment.full : 'Cloud Provider'} Project", "Get API Keys")
        - Setup commands (e.g. "firebase login", "npm login")
        - Deployment target details (e.g. "Enable Billing", "Create Database Instance")
        
        # Section 2: AI Scaffolding Plan (Copy & Paste this to your AI Assistant)
        Write a highly detailed, technical PROMPT that the user should copy and paste into an AI coding tool (like Cursor, Windsurf, or Antigravity).
        
        This inner prompt should:
        - Tell the AI agent it is an expert developer.
        - instruct it to initialize the project structure for the selected stack (${hasFullStack ? stack.fullStack : `${stack.frontend} and ${stack.backend}`}).
        - instruct it to install specific dependencies.
        - instruct it to create configuration files (tsconfig, etc).
        - instruct it to build a "Hello World" proof-of-concept connecting everything together.
        
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
            message: error.message || 'Failed to generate plan. Please try again later.'
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
