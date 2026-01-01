const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const logger = require("firebase-functions/logger");

exports.generateStackPlan = onCall({
    secrets: ["GEMINI_API_KEY"],
    cors: true
}, async (request) => {
    // 1. Validate Input
    const { stack } = request.data;
    if (!stack || !stack.frontend || !stack.backend || !stack.database || !stack.deployment) {
        throw new HttpsError(
            'invalid-argument',
            'Missing stack components. Please select tools for all categories.'
        );
    }

    try {
        // 2. Initialize Gemini
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error("GEMINI_API_KEY not found in environment secrets.");
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

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
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // 5. Return Result
        return { plan: responseText };

    } catch (error) {
        logger.error("Error generating plan:", error);
        throw new HttpsError(
            'internal',
            'Failed to generate plan. Please try again later.'
        );
    }
});
