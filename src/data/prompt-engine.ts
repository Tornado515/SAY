/**
 * ---------------------------------------------------------------------------
 * PROMPT ENGINE - UNIFIED GENERATOR
 * ---------------------------------------------------------------------------
 * This module generates:
 * 1. A Vibe Coding Dictionary (Thousands of specific coding prompts)
 * 2. A Requirements Engine (High-level PRD, Spec, and Roadmap prompts)
 * ---------------------------------------------------------------------------
 */

// ==========================================
// 1. SHARED INTERFACES & TYPES
// ==========================================

export interface VibePersona {
    id: string;
    name: string;
    instruction: string;
}

export interface PromptTemplate {
    category: string;
    subCategory: string;
    templateStr: string;
    variables: string[];
}

export interface CodingPromptEntry {
    id: string;
    domain: string;
    category: string;
    subCategory: string;
    techStack: string;
    vibe: string;
    prompt: string;
}

export interface RequirementPromptEntry {
    id: string;
    domain: string;
    type: string;
    scale: string;
    prompt: string;
}

// ==========================================
// 2. DATA SOURCES (The Building Blocks)
// ==========================================

export const PROJECT_DOMAINS: string[] = [
    // Commerce & Finance
    "E-commerce Platform", "Fintech / Digital Banking", "Cryptocurrency Exchange",
    "Supply Chain & Logistics", "Real Estate Marketplace", "Food Delivery Service",

    // Education & Work
    "E-learning (LMS)", "Project Management SaaS", "HR & Recruitment System",
    "CRM (Customer Relationship)", "Remote Collaboration Tool", "Job Board / Career Portal",

    // Lifestyle & Social
    "Social Media Network", "Travel & Booking Engine", "Fitness & Wellness Tracker",
    "Dating Application", "Event Management System", "Music Streaming Service",
    "Video Streaming (VOD)", "Gaming Leaderboard/Matchmaking",

    // Critical & Technical
    "Healthcare / Telemedicine", "IoT (Smart Home) Dashboard", "Cybersecurity Threat Map",
    "Legal Tech / Document AI", "GovTech (Public Services)", "Automotive Fleet Management",
    "AgriTech (Smart Farming)", "Weather & Climate Analysis", "News Aggregator",

    // Emerging Tech
    "Generative AI Wrapper", "NFT Marketplace", "Charity & Crowdfunding"
];

const LANGUAGES: string[] = ["TypeScript", "JavaScript", "Java", "Python", "Go", "Rust", "C#", "Swift"];

export const TECH_STACKS = {
    frontend: ["React", "Vue.js", "Angular", "Svelte", "Next.js", "Tailwind CSS", "React Native"],
    backend: ["Spring Boot", "Node.js (Express)", "Django", "Go (Gin)", "Rust (Actix)", "FastAPI"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "MySQL", "DynamoDB"],
    testing: ["Jest", "Cypress", "JUnit", "PyTest", "Selenium", "Playwright"],
    devops: ["Docker", "Kubernetes", "AWS Lambda", "GitHub Actions", "Terraform", "Ansible"]
};

export const VIBE_PERSONAS: VibePersona[] = [
    {
        id: "SENIOR_MENTOR",
        name: "Senior Principal Engineer",
        instruction: "Act as a pragmatic Senior Principal Engineer. Focus on clean architecture, scalability, and maintainability. Explain your reasoning briefly before coding."
    },
    {
        id: "PERFORMANCE_OBSESSED",
        name: "Performance Systems Engineer",
        instruction: "Act as a Systems Performance Engineer. Your priority is low latency, memory optimization, and O(n) complexity or better. Critique the solution for bottlenecks."
    },
    {
        id: "SECURITY_CHAMPION",
        name: "DevSecOps Expert",
        instruction: "Act as a DevSecOps Expert. Prioritize OWASP Top 10 mitigation, input sanitization, and secure data handling in every line of code you write."
    },
    {
        id: "JUNIOR_FRIENDLY",
        name: "Coding Tutor",
        instruction: "Act as a helpful Coding Tutor. Write code that is heavily commented, easy to read, and avoids obscure syntax. Explain complex concepts with analogies."
    }
];

// --- Requirements Specific Data ---

export const REQ_TYPES = [
    { id: "PRD_FULL", name: "Product Requirements Doc (PRD)", instruction: "Write a comprehensive Product Requirements Document (PRD)." },
    { id: "USER_STORIES", name: "Agile User Stories", instruction: "Generate a list of Agile User Stories with Acceptance Criteria (Given/When/Then)." },
    { id: "TECH_SPEC", name: "Technical Specification", instruction: "Write a detailed Technical Specification including System Architecture, API Schema, and Data Models." },
    { id: "MVP_ROADMAP", name: "MVP Roadmap", instruction: "Create a phased roadmap for an MVP (Minimum Viable Product), prioritizing core features over nice-to-haves." }
];

export const PROJECT_SCALES = [
    "Bootstrapped MVP (Speed is key, low cost)",
    "Series A Startup (Scalability, clean code)",
    "Enterprise System (High security, compliance, microservices)"
];

// ==========================================
// 3. TEMPLATES (The Vibe Logic)
// ==========================================

const CODING_TEMPLATES: PromptTemplate[] = [
    // 1. FRONTEND UI
    {
        category: "Frontend Development",
        subCategory: "UI Implementation",
        templateStr: "{{PERSONA}} Create a {{TECH}} component for a '{{VARIABLE}}' tailored for a {{DOMAIN}}. The UI should reflect the specific needs of this industry (e.g., trust signals for Finance, high engagement for Social). Use {{LANGUAGE}}.",
        variables: ["Dashboard Overview", "User Onboarding Flow", "Settings Panel", "Search & Filter Bar", "Detail View Card", "Analytics Widget", "Notification Center"]
    },
    // 2. BACKEND API
    {
        category: "Backend Development",
        subCategory: "API Design",
        templateStr: "{{PERSONA}} Design a RESTful API schema in {{TECH}} for a {{DOMAIN}}. Focus specifically on the '{{VARIABLE}}' endpoint. Consider industry constraints (like high concurrency for E-commerce or data privacy for Healthcare). Implementation in {{LANGUAGE}}.",
        variables: ["Order Processing", "User Verification", "Data Analytics Endpoint", "Content Feed Retrieval", "Subscription Management", "Payment Webhook"]
    },
    // 3. DATABASE
    {
        category: "Database Engineering",
        subCategory: "Data Modeling",
        templateStr: "{{PERSONA}} Design a database schema using {{TECH}} for a {{DOMAIN}}, focusing on the '{{VARIABLE}}' aspect. Explain relationships, normalization, and indexing strategies relevant to this specific industry.",
        variables: ["User Role Hierarchy", "Transaction History/Audit Logs", "Inventory/Content Catalog", "Notification System", "Media Storage Metadata"]
    },
    // 4. TESTING
    {
        category: "Quality Assurance",
        subCategory: "Test Strategy",
        templateStr: "{{PERSONA}} Write a comprehensive test suite using {{TECH}} for the '{{VARIABLE}}' module of a {{DOMAIN}}. Include unit tests for edge cases specific to this industry and at least one integration test.",
        variables: ["Authentication Service", "Checkout Calculation Logic", "Date Parsing Utility", "API Rate Limiter", "Data Transformation Pipeline"]
    },
    // 5. REFACTORING
    {
        category: "Refactoring",
        subCategory: "Code Quality",
        templateStr: "{{PERSONA}} I am working on a {{DOMAIN}} project. Review the following {{LANGUAGE}} code snippet (assume I paste it next). Refactor it to apply the '{{VARIABLE}}' pattern and improve readability without changing behavior.",
        variables: ["Dependency Injection", "Singleton", "Observer", "Strategy", "Factory Method", "Repository Pattern"]
    }
];

// ==========================================
// 4. GENERATOR LOGIC
// ==========================================

/**
 * Helper to replace all instances of placeholders safely
 */
const fillTemplate = (template: string, replacements: Record<string, string>): string => {
    let result = template;
    for (const [key, value] of Object.entries(replacements)) {
        result = result.replace(new RegExp(`{{${key}}}`, 'g'), value);
    }
    return result;
};

/**
 * GENERATOR 1: Coding Prompts Dictionary
 * Creates thousands of granular coding prompts.
 */
export function generateCodingPrompts(): CodingPromptEntry[] {
    const dictionary: CodingPromptEntry[] = [];
    let idCounter = 1;

    console.log("Starting Coding Dictionary Generation...");

    for (const domain of PROJECT_DOMAINS) {
        for (const tmpl of CODING_TEMPLATES) {

            // Determine Tech Stack
            let targetTechs: string[] = ["General Code"];
            if (tmpl.category.includes("Frontend")) targetTechs = TECH_STACKS.frontend;
            else if (tmpl.category.includes("Backend")) targetTechs = TECH_STACKS.backend;
            else if (tmpl.category.includes("Database")) targetTechs = TECH_STACKS.database;
            else if (tmpl.category.includes("Quality")) targetTechs = TECH_STACKS.testing;

            for (const tech of targetTechs) {
                for (const persona of VIBE_PERSONAS) {
                    for (const variable of tmpl.variables) {

                        const randomLang = LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)];

                        const finalPrompt = fillTemplate(tmpl.templateStr, {
                            PERSONA: persona.instruction,
                            DOMAIN: domain,
                            TECH: tech,
                            VARIABLE: variable,
                            LANGUAGE: randomLang
                        });

                        dictionary.push({
                            id: `CODE-${String(idCounter++).padStart(6, '0')}`,
                            domain: domain,
                            category: tmpl.category,
                            subCategory: tmpl.subCategory,
                            techStack: tech,
                            vibe: persona.name,
                            prompt: finalPrompt
                        });
                    }
                }
            }
        }
    }
    console.log(`Coding Prompts Generated: ${dictionary.length}`);
    return dictionary;
}

/**
 * GENERATOR 2: Requirements Prompts Dictionary
 * Creates high-level PRD/Spec prompts.
 */
export function generateRequirementPrompts(): RequirementPromptEntry[] {
    const requirementsDictionary: RequirementPromptEntry[] = [];
    let idCounter = 1;

    console.log("Starting Requirements Generation...");

    for (const domain of PROJECT_DOMAINS) {
        for (const reqType of REQ_TYPES) {
            for (const scale of PROJECT_SCALES) {

                const prompt = `
Act as an expert Product Manager and CTO. I am building a "${domain}".

**Context:**
- **Project Scale:** ${scale}
- **Domain:** ${domain}

**Task:**
${reqType.instruction}

**Requirements:**
1. Focus heavily on features specific to the ${domain} industry.
2. Identify potential risks (technical or market) relevant to this sector.
3. If technical, suggest a stack suitable for a "${scale}" level of traffic and complexity.
4. Output the result in clean Markdown format.
`.trim();

                requirementsDictionary.push({
                    id: `REQ-${String(idCounter++).padStart(4, '0')}`,
                    domain: domain,
                    type: reqType.name,
                    scale: scale,
                    prompt: prompt
                });
            }
        }
    }

    console.log(`Requirement Prompts Generated: ${requirementsDictionary.length}`);
    return requirementsDictionary;
}

// ==========================================
// 5. EXPORT WRAPPER
// ==========================================

export const generateFullLibrary = () => {
    return {
        codingPrompts: generateCodingPrompts(),
        requirementPrompts: generateRequirementPrompts()
    };
};

// --- OPTIONAL: SELF-EXECUTION FOR TESTING ---
// const lib = generateFullLibrary();
// console.log("Total Prompts:", lib.codingPrompts.length + lib.requirementPrompts.length);