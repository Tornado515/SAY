import { GoogleGenerativeAI } from '@google/generative-ai';

export async function auditPromptWithGemini(apiKey, promptText) {
    if (!apiKey) {
        throw new Error("API key is missing");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `
    You are an expert Prompt Engineer and AI Auditor.
    Your task is to evaluate the quality of a given software engineering prompt.

    INSTRUCTIONS:
    1. Analyze the prompt's intent (e.g., "Create a React Component", "Write a SQL Query", "Debug Python code").
    2. Identify 5 specific, relevant criteria for *this specific type of prompt*.
       - Example for React: "Component Structure", "Props Definition", "Styling Strategy".
       - Example for SQL: "Table Schema", "Performance/Indexing", "Security/Injection".
    3. Grade the prompt against these 5 criteria (Pass/Fail).
    4. Provide a short reason for each grade.

    SCORING:
    - 0-39: Critical (Vague, missing almost everything)
    - 40-79: Moderate (Okay but missing key details)
    - 80-94: Good (Solid prompt)
    - 95-100: Elite (Perfectly structured, highly specific)

    OUTPUT FORMAT:
    Return ONLY a raw JSON object (no markdown formatting) with this structure:
    {
        "score": number (0-100),
        "level": "Critical" | "Weak" | "Moderate" | "Good" | "Elite",
        "breakdown": [
            { 
                "label": "Criteria Name (e.g. 'Component Structure')", 
                "status": boolean (true for pass, false for fail),
                "reason": "Short explanation (e.g. 'Props were not defined')"
            }
        ],
        "detectedKeywords": string[] (List of specific tech terms or roles found),
        "feedback": string[] (3-4 specific, actionable tips to improve the prompt)
    }
    `;

    const result = await model.generateContent([
        systemPrompt,
        `Here is the prompt to audit:\n"${promptText}"`
    ]);

    const responseText = result.response.text();

    // Clean up markdown code blocks if present
    const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

    try {
        const parsed = JSON.parse(cleanJson);
        // Ensure breakdown is an array (fallback for model hallucinations)
        if (!Array.isArray(parsed.breakdown)) {
            parsed.breakdown = [];
        }
        return parsed;
    } catch (e) {
        console.error("Failed to parse Gemini response:", responseText);
        throw new Error("Failed to parse audit result");
    }
}
