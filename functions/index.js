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
        You are an expert Senior Solution Architect.
        Create a detailed implementation plan for a new web application with the following tech stack:
        
        - Frontend: ${stack.frontend}
        - Backend: ${stack.backend}
        - Database: ${stack.database}
        - Deployment: ${stack.deployment}
        
        Please structure the response in Markdown format with the following sections:
        
        # Implementation Plan: [Project Name Idea]
        
        ## 1. Architecture Overview
        Briefly explain how these specific tools work together.
        
        ## 2. Prerequisites
        What needs to be installed locally (CLI tools, languages).
        
        ## 3. Step-by-Step Implementation
        
        ### Phase 1: Setup & Configuration
        - Exact commands to initialize the project for ${stack.frontend} and ${stack.backend}.
        - How to connect ${stack.database}.
        
        ### Phase 2: Development Steps
        - Key components to build.
        - API structure recommendations.
        
        ### Phase 3: Deployment
        - How to deploy the app to ${stack.deployment}.
        
        ## 4. Best Practices
        Specific tips for this combination of tools.
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
