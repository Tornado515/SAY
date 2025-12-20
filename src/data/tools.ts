// HMR Trigger
export interface DetailedLink {
    text: string;
    url: string;
    primary?: boolean;
}

export interface Step {
    title: string;
    content: string;
    code?: string;
    language?: string;
    links?: DetailedLink[];
}

export interface ComparisonData {
    learningCurve: 'Low' | 'Medium' | 'High' | 'Very High';
    pros: string[];
    cons: string[];
    bestFor: string[];
    communitySupport: string;
    priceModel: 'Free' | 'Freemium' | 'Paid' | 'Enterprise';
}

export interface Tool {
    name: string;
    slug: string;
    description: string;
    longDescription: string;
    category: 'Frontend' | 'Mobile' | 'AI Coding' | 'AI Mockup' | 'Deployment' | 'Testing' | 'Design' | 'Database' | 'Backend' | 'Version Control' | 'IDE' | 'AI Chatbots' | 'Productivity';
    link: string;
    tags: string[];
    steps: Step[];
    features: string[];
    youtubeVideoId?: string;
    setupVideoId?: string;
    additionalInfo?: {
        title: string;
        content: string;
    }[];
    aiFeatures?: {
        title: string;
        content: string;
    }[];
    relatedTools?: {
        slug: string;
        name: string;
        relation: 'alternative' | 'prerequisite' | 'next-step' | 'complementary';
    }[];
    comparisonData?: ComparisonData;
}

export const tools: Tool[] = [
    // IDEs
    {
        name: 'Visual Studio Code',
        slug: 'vscode',
        description: 'Code editing. Redefined. Free. Built on open source. Runs everywhere.',
        longDescription: 'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. It supports almost every major programming language and has a massive ecosystem of extensions.',
        category: 'IDE',
        link: 'https://code.visualstudio.com',
        tags: ['Editor', 'Microsoft', 'Open Source'],
        features: ['IntelliSense', 'Debugging', 'Extensions', 'Git Integration'],
        youtubeVideoId: 'KMxo3T_MTvY', // VS Code intro
        setupVideoId: 'VqCgcpAypFQ', // VS Code crash course setup
        additionalInfo: [
            {
                title: 'Integrated Terminal',
                content: 'You don\'t need to leave VS Code to run commands. Use `Ctrl+\`` (backtick) to toggle the built-in terminal.'
            },
            {
                title: 'Everything is a Command',
                content: 'Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette. You can do almost anything from here without touching the mouse.'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Extremely extensible', 'Industry standard', 'Great performance'],
            cons: ['Can be heavy with too many extensions', 'Settings can be overwhelming'],
            bestFor: ['Web Development', 'General Purpose Coding'],
            communitySupport: 'Massive, largest extension marketplace',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'git', name: 'Git', relation: 'complementary' },
            { slug: 'github-copilot', name: 'GitHub Copilot', relation: 'complementary' }
        ],
        steps: [
            {
                title: 'Download and Install',
                content: 'Download the installer for your operating system (Windows, macOS, or Linux) from the official website.',
                links: [{ text: 'Download VS Code', url: 'https://code.visualstudio.com/download', primary: true }]
            },
            {
                title: 'Install Extensions',
                content: 'VS Code is powerful because of extensions. Open the Extensions view (Ctrl+Shift+X) and install these essentials:',
                code: 'ESLint\nPrettier - Code formatter\nLive Server\nGitHub Copilot (optional)',
                language: 'text'
            },
            {
                title: 'Configure Settings',
                content: 'Open settings (Ctrl+,) to customize your editor. We recommend enabling "Format on Save" to keep your code clean automatically.',
                code: '{\n  "editor.formatOnSave": true,\n  "editor.defaultFormatter": "esbenp.prettier-vscode"\n}',
                language: 'json'
            },
        ],
    },
    {
        name: 'IntelliJ IDEA',
        slug: 'intellij-idea',
        description: 'The Capable and Ergonomic Java IDE.',
        longDescription: 'IntelliJ IDEA is an IDE specifically designed to maximize developer productivity. It provides clever code completion, static code analysis, and refactorings that allow you to focus on the big picture.',
        category: 'IDE',
        link: 'https://www.jetbrains.com/idea/',
        tags: ['Java', 'JetBrains', 'Enterprise'],
        features: ['Deep Code Analysis', 'Smart Refactoring', 'Debugger', 'Test Runner'],
        youtubeVideoId: '70_B2DyM8mU', // IntelliJ intro placeholder
        setupVideoId: 'LPgiUILsZqQ', // IntelliJ IDEA Setup (Amigoscode)
        steps: [
            {
                title: 'Download',
                content: 'Download the Ultimate (paid) or Community (free) edition from JetBrains.',
                links: [{ text: 'Download IntelliJ', url: 'https://www.jetbrains.com/idea/download', primary: true }]
            },
            {
                title: 'Install & Setup',
                content: 'Run the installer. During setup, you can customize themes and keymaps (we recommend "IntelliJ" keymap).',
            },
            {
                title: 'New Project',
                content: 'Create a new project. Select "Java" (or Kotlin) and your project SDK (download JDK if needed).',
                code: 'File > New > Project\nName: MyJavaApp\nLanguage: Java\nBuild system: Maven/Gradle',
                language: 'text'
            },
            {
                title: 'Run Code',
                content: 'Write your `main` method and click the green Play button in the gutter.',
                code: 'public static void main(String[] args) {\n    System.out.println("Hello World!");\n}',
                language: 'java'
            },
        ],
        comparisonData: {
            learningCurve: 'High',
            pros: ['Unmatched code analysis', 'Great refactoring tools', 'Industry standard for Java'],
            cons: ['Heavy resource usage', 'Indexed Files take space', 'Paid for full features'],
            bestFor: ['Java/Kotlin Development', 'Enterprise Applications'],
            communitySupport: 'Massive',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'java', name: 'Java', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Plugins',
                content: 'IntelliJ has a rich plugin ecosystem. Install "Key Promoter X" to learn keyboard shortcuts while you work.'
            }
        ]
    },
    {
        name: 'PyCharm',
        slug: 'pycharm',
        description: 'The Python IDE for Professional Developers.',
        longDescription: 'PyCharm is a dedicated Python IDE providing a wide range of essential tools for Python developers, tightly integrated to create a convenient environment for productive Python, web, and data science development.',
        category: 'IDE',
        link: 'https://www.jetbrains.com/pycharm/',
        tags: ['Python', 'JetBrains', 'Data Science'],
        features: ['Code Insight', 'Debugger', 'Test Runner', 'Django Support'],
        youtubeVideoId: 'FboZJIz8LRs', // PyCharm intro
        steps: [
            {
                title: 'Download',
                content: 'Download PyCharm Community (free) for pure Python development.',
                links: [{ text: 'Download PyCharm', url: 'https://www.jetbrains.com/pycharm/download', primary: true }]
            },
            {
                title: 'Create Project',
                content: 'Open PyCharm and click "New Project". It will automatically create a Virtual Environment (venv) for you.',
                code: 'Location: ~/PycharmProjects/pythonProject\nType: Python\nInterpreter: Project venv',
                language: 'text'
            },
            {
                title: 'Write & Run',
                content: 'Create a `main.py` file and run it using the green triangle button.',
                code: 'print("Hello PyCharm")',
                language: 'python'
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Best-in-class Python support', 'Great database tools', 'Django/Flask integration'],
            cons: ['Slow startup', 'Memory hungry'],
            bestFor: ['Python Web Dev', 'Data Science'],
            communitySupport: 'Large',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'python', name: 'Python', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Virtual Environments',
                content: 'PyCharm handles venv creation automatically. Always check the bottom right corner to see which interpreter is active.'
            }
        ]
    },
    {
        name: 'Eclipse',
        slug: 'eclipse',
        description: 'A dedicated IDE for Java developers and more.',
        longDescription: 'Eclipse is famous for its Java IDE, but its C/C++ IDE and PHP IDE are also very cool. It allows you to combine language support and other features into any of the default packages.',
        category: 'IDE',
        link: 'https://www.eclipse.org/ide/',
        tags: ['Java', 'Open Source', 'Legacy'],
        features: ['Plugin Ecosystem', 'Workspace Management', 'Git', 'Debugging'],
        setupVideoId: 'RvksS-Acffw', // Eclipse Installation
        steps: [
            {
                title: 'Download Installer',
                content: 'Download the Eclipse IDE for Java Developers package.',
                links: [{ text: 'Download Eclipse', url: 'https://www.eclipse.org/downloads/', primary: true }]
            },
            {
                title: 'Workspace Config',
                content: 'Choose a folder for your workspace when launched. This is where your projects live.',
            },
            {
                title: 'Create Java Project',
                content: 'Go to File > New > Java Project. Give it a name and click Finish.',
            },
            {
                title: 'Hello World',
                content: 'Create a new Class named `Main` with a public static void main method.',
                code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Eclipse!");\n    }\n}',
                language: 'java'
            },
        ],
        comparisonData: {
            learningCurve: 'High',
            pros: ['Completely free and open source', 'Huge plugin ecosystem', 'Good for legacy projects'],
            cons: ['Outdated UI', 'Can be buggy/slow', 'Complex configuration'],
            bestFor: ['Legacy Java Apps', 'Open Source purists'],
            communitySupport: 'Large but declining',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'java', name: 'Java', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Workspace',
                content: 'Eclipse uses a unique "Workspace" concept. You can switch workspaces to completely change your set of open projects and settings.'
            }
        ]
    },
    // AI Coding
    {
        name: 'Cursor',
        slug: 'cursor',
        description: 'The AI Code Editor. Built for pair programming with AI.',
        longDescription: 'Cursor is an IDE modeled after VS Code but with native AI capabilities built right into the core. It allows you to chat with your codebase, generate code from natural language, and fix bugs instantly. It understands your entire project context, making it far superior to simple autocomplete plugins.',
        category: 'AI Coding',
        link: 'https://cursor.com',
        tags: ['Editor', 'AI', 'VS Code Fork'],
        features: ['Chat with Codebase', 'Tab Autocomplete', 'Natural Language Edit', 'Docs Integration'],
        youtubeVideoId: 'LR04bU_yV5k',
        setupVideoId: '3289vhOUdKA', // Cursor Deep Dive
        steps: [
            {
                title: 'Download and Install',
                content: 'Download the installer mainly for your OS. Cursor is a fork of VS Code, so it feels familiar.',
                links: [{ text: 'Download Cursor', url: 'https://cursor.com', primary: true }]
            },
            {
                title: 'Import VS Code Exts',
                content: 'During setup, click "Import Extensions" to bring over your VS Code themes and plugins.',
            },
            {
                title: 'AI Code Editing',
                content: 'Select code and press `Cmd+K` (or `Ctrl+K`) to edit it with AI.',
                code: 'Cmd+K: "Refactor this function to be async"',
                language: 'text'
            },
            {
                title: 'Chat with Codebase',
                content: 'Open the AI sidebar with `Cmd+L` to ask questions about your entire project.',
                code: 'Cmd+L: "Where is the authentication logic?"',
                language: 'text'
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Deepest AI integration', 'Familiar VS Code interface', 'Privacy focus option'],
            cons: ['Another subscription', 'Requires new binary install'],
            bestFor: ['AI Pair Programming', 'Refactoring'],
            communitySupport: 'Growing fast',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'vscode', name: 'Visual Studio Code', relation: 'alternative' }
        ],
        additionalInfo: [
            {
                title: 'Privacy Mode',
                content: 'Enable "Privacy Mode" in settings if you do not want your code to be stored on Cursor servers (though AI features may be limited).'
            }
        ]
    },
    {
        name: 'GitHub Copilot',
        slug: 'github-copilot',
        description: 'Your AI pair programmer. Get suggestions for whole lines or entire functions.',
        longDescription: 'GitHub Copilot turns natural language prompts into coding suggestions across dozens of languages. It integrates directly into your editor (VS Code, JetBrains, etc.) and analyzes the context of the file you are editing and related files to offer relevant code completions.',
        category: 'AI Coding',
        link: 'https://github.com/features/copilot',
        tags: ['Extension', 'AI', 'Autocomplete'],
        features: ['Multi-line Suggestions', 'Chat in IDE', 'CLI Integration', 'Pull Request Summaries'],
        youtubeVideoId: 'IqXNhakuwVc',
        setupVideoId: 'wxaxlIlN7BA', // Copilot in VSCode
        steps: [
            {
                title: 'Get Subscription',
                content: 'Sign up for GitHub Copilot (free plan available for individuals).',
                links: [{ text: 'Sign Up', url: 'https://github.com/features/copilot', primary: true }]
            },
            {
                title: 'Install Extension',
                content: 'In VS Code, install the "GitHub Copilot" extension.',
                code: 'ext install GitHub.copilot',
                language: 'text'
            },
            {
                title: 'Authenticate',
                content: 'Click the GitHub icon in the bottom left to sign in and authorize the extension.',
            },
            {
                title: 'Trigger Suggestions',
                content: 'Start typing. Gray ghost text will appear. Press Tab to accept it.',
                code: '// Function to calculate fibonacci\nfunction fib...',
                language: 'javascript'
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Standard for autocomplete', 'Works in many editors', 'Enterprise grade'],
            cons: ['Not as autonomous as Cursor', 'Paid only (mostly)'],
            bestFor: ['Boilerplate reduction', 'Autocomplete'],
            communitySupport: 'Massive',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'vscode', name: 'Visual Studio Code', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Context Awareness',
                content: 'Open related files (tabs) to give Copilot more context. It reads your open tabs to give better suggestions.'
            }
        ]
    },
    {
        name: 'Bolt',
        slug: 'bolt',
        description: 'Prompt, run, edit, and deploy full-stack web apps directly in the browser.',
        longDescription: 'Bolt is a browser-based AI web development agent. It can scaffold entire full-stack applications from a single prompt, install dependencies, run the dev server, and let you preview and edit the app live. It is perfect for rapid prototyping and building MVPs without local setup.',
        category: 'AI Coding',
        link: 'https://bolt.new',
        tags: ['Web IDE', 'AI', 'Full Stack'],
        features: ['Browser-based Environment', 'Full Stack Generation', 'Live Preview', 'One-click Deploy'],
        youtubeVideoId: 'iFcc7FZH-xs',
        setupVideoId: '', // Browser based, no setup needed implies we can keep it simple or find a demo
        steps: [
            {
                title: 'Access Bolt',
                content: 'There is nothing to install. Bolt runs entirely in the browser.',
                links: [{ text: 'Go to bolt.new', url: 'https://bolt.new', primary: true }]
            },
            {
                title: 'Prompting',
                content: 'Enter a comprehensive prompt describing your app.',
                code: 'Build a task management app with drag and drop columns using React and Tailwind.',
                language: 'text'
            },
            {
                title: 'Iterate',
                content: 'Bolt generates the code and preview. Speak to it to fix bugs.',
                code: '"Change the background color to dark mode"',
                language: 'text'
            },
            {
                title: 'Deploy',
                content: 'Click the "Deploy" button in the top right to publish to Netlify.',
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Zero setup', 'Full stack generation', 'Instant deploy'],
            cons: ['No local environment access', 'Limited by token context'],
            bestFor: ['Rapid Prototyping', 'MVPs'],
            communitySupport: 'New/Growing',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'react', name: 'React', relation: 'complementary' },
            { slug: 'tailwindcss', name: 'Tailwind CSS', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Token Usage',
                content: 'Bolt runs on LLMs with token limits. If your app gets too large, you might hit context limits. It is best for starting projects.'
            }
        ]
    },
    {
        name: 'Antigravity',
        slug: 'antigravity',
        description: 'The advanced AI Agent from Google DeepMind causing ripples in the coating space.',
        longDescription: 'Antigravity is the codename for an advanced agentic coding assistant developed by Google DeepMind. Designed to understand complex codebases, plan implementations, and execute tasks autonomously, it represents the next leap in AI-assisted software development.',
        category: 'AI Coding',
        link: 'https://antigravity.google/',
        tags: ['Agent', 'AI', 'Advanced'],
        features: ['Context Awareness', 'Autonomous Execution', 'Planning', 'Project Management'],
        youtubeVideoId: 'nTOVIGsqCuY',
        setupVideoId: '', // Experimental/Meta
        additionalInfo: [
            {
                title: 'Agent Manager',
                content: 'Antigravity includes a dedicated Agent Manager panel. This allows you to view currently running agent tasks, cancel them, or inspect their thought process in real-time. It provides transparency into how the AI is modifying your codebase.'
            },
            {
                title: 'Model selection',
                content: 'You can switch between different underlying models (e.g., Gemini Pro, Ultra) depending on the complexity of the task to manage latency and cost.'
            }
        ],
        steps: [
            {
                title: 'Download',
                content: 'Download the full Antigravity IDE from the official site.',
                links: [{ text: 'Download Antigravity', url: 'https://antigravity.google/', primary: true }]
            },
            {
                title: 'Install',
                content: 'Run the installer for your OS. It includes the agent runtime and a specialized editor environment.',
            },
            {
                title: 'Prompting',
                content: 'Give high-level, complex instructions like "Refactor this entire module" or "Build a landing page". You can also speak to it naturally.',
                code: 'Plan and implement a new authentication flow',
                language: 'text'
            },
            {
                title: 'Review',
                content: 'Antigravity will propose a plan. Review and approve the plan to let it execute the changes.',
            },
        ],
        comparisonData: {
            learningCurve: 'High',
            pros: ['Autonomous execution', 'Advanced planning', 'Deep codebase understanding'],
            cons: ['Requires supervision', 'Computationally expensive'],
            bestFor: ['Complex refactoring', 'Greenfield projects', 'Architecture changes'],
            communitySupport: 'Niche/Alpha',
            priceModel: 'Enterprise'
        },
        relatedTools: [
            { slug: 'gemini', name: 'Gemini', relation: 'complementary' }
        ]
    },
    // AI Mockup
    {
        name: 'v0',
        slug: 'v0',
        description: 'Generate UI with simple text prompts. Copy and paste into your React codebase.',
        longDescription: 'v0 by Vercel is a generative UI system that produces production-ready code (React + Tailwind CSS) from text descriptions. It is excellent for generating distinct components or page sections that look modern and professional out of the box.',
        category: 'AI Mockup',
        link: 'https://v0.dev',
        tags: ['UI', 'Generative', 'React'],
        features: ['Tailwind CSS Compatible', 'Shadcn/ui Integration', 'Iterative Refinement', 'React Code Export'],
        youtubeVideoId: '41SR07p243Q',
        setupVideoId: '', // Browser based
        steps: [
            {
                title: 'Sign In',
                content: 'Login to v0.dev with your Vercel account.',
                links: [{ text: 'Go to v0.dev', url: 'https://v0.dev', primary: true }]
            },
            {
                title: 'Generate UI',
                content: 'Describe the component you need.',
                code: 'A contact form with validation and a sleek dark theme.',
                language: 'text'
            },
            {
                title: 'Copy Code',
                content: 'Click the code icon using the top toolbar. Review the React & Tailwind code.',
            },
            {
                title: 'Install Dependencies',
                content: 'v0 often uses `shadcn/ui`. Run the provided command in your terminal if prompted.',
                code: 'npx shadcn-ui@latest add button input label',
                language: 'bash'
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['High quality React/Tailwind code', 'Modern aesthetics', 'Copy-paste ready'],
            cons: ['Components only (mostly)', 'Depends on shadcn/ui'],
            bestFor: ['Component generation', 'UI Polish'],
            communitySupport: 'Large',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'react', name: 'React', relation: 'complementary' },
            { slug: 'tailwindcss', name: 'Tailwind CSS', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Iterative Prompting',
                content: 'Don\'t expect perfection in one go. Highlight parts of the UI and refine them with specific follow-up prompts.'
            }
        ]
    },
    {
        name: 'Lovable',
        slug: 'lovable',
        description: 'Turn ideas into real apps. The AI engineer for your next startup.',
        longDescription: 'Lovable (formerly GPT Engineer) is focused on generating complete web applications. It uses advanced AI models to understand high-level requirements and produces fully functional codebases that you can download and extend.',
        category: 'AI Mockup',
        link: 'https://lovable.dev',
        tags: ['No Code', 'AI', 'Full App'],
        features: ['Full App Generation', 'Visual Editing', 'GitHub Export', 'Supabase Integration'],
        youtubeVideoId: 'kcOrTOT7Kko',
        setupVideoId: '', // Browser based
        steps: [
            {
                title: 'Access Lovable',
                content: 'Sign up at expandable.dev (Lovable).',
                links: [{ text: 'Go to Lovable', url: 'https://lovable.dev', primary: true }]
            },
            {
                title: 'Describe App',
                content: 'Lovable is for full apps, not just components. Describe the entire functionality.',
                code: 'A real-time chat application with Supabase auth and infinite scrolling.',
                language: 'text'
            },
            {
                title: 'Sync to GitHub',
                content: 'Once generated, click "Sync to GitHub" to create a repository.',
            },
            {
                title: 'Clone & Run',
                content: 'Clone the repo locally to add custom backend logic or complex features.',
                code: 'git clone https://github.com/my-user/my-app.git\nnpm install\nnpm run dev',
                language: 'bash'
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Generates full full-stack apps', 'GitHub Integration', 'Supabase Integration'],
            cons: ['Codebase can contain "AI slop"', 'Hard to customize deep logic'],
            bestFor: ['Startups', 'MVPs', 'CRUD Apps'],
            communitySupport: 'Growing',
            priceModel: 'Paid'
        },
        relatedTools: [
            { slug: 'supabase', name: 'Supabase', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Exporting',
                content: 'Always sync to GitHub frequently. If you hit Lovable limits, you can continue developing your exported code manually.'
            }
        ]
    },
    {
        name: 'UXPilot',
        slug: 'uxpilot',
        description: 'AI-powered design tool for creating wireframes and UI mockups instantly.',
        longDescription: 'UXPilot uses AI to help designers and developers create wireframes, flowcharts, and UI mockups in seconds. It streamlines the early stages of the design process, allowing for rapid iteration and visualization of ideas.',
        category: 'AI Mockup',
        link: 'https://uxpilot.ai',
        tags: ['Design', 'Wireframe', 'AI'],
        features: ['Wireframe Generation', 'UI Mockups', 'Design Iteration', 'Export Options'],
        youtubeVideoId: 'PhFkgMQtJW0',
        setupVideoId: '',
        steps: [
            {
                title: 'New Project',
                content: 'Start a new design project on UXPilot.',
                links: [{ text: 'Start Designing', url: 'https://uxpilot.ai', primary: true }]
            },
            {
                title: 'AI Prompt',
                content: 'Use the AI assistant to generate wireframes or color palettes.',
                code: 'Generate a mood board for a wellness app with calming colors.',
                language: 'text'
            },
            {
                title: 'Export',
                content: 'Export your assets to image formats or directly to Figma if supported.',
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Quick wireframing', 'Idea generation', 'Good for non-designers'],
            cons: ['Limited fidelity', 'Not a full design tool'],
            bestFor: ['Initial Concepts', 'Wireframes'],
            communitySupport: 'Small',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'figma', name: 'Figma', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Figma Export',
                content: 'Use the export features to move your wireframes into Figma for high-fidelity polishing.'
            }
        ]
    },
    // Design
    {
        name: 'Figma',
        slug: 'figma',
        description: 'The collaborative interface design tool.',
        longDescription: 'Figma is the leading interface design tool. It is web-based, allowing for real-time collaboration between designers and developers. It is used for everything from wireframing to high-fidelity prototyping and design systems.',
        category: 'Design',
        link: 'https://figma.com',
        tags: ['Design', 'Prototyping', 'Collaboration'],
        features: ['Real-time Collaboration', 'Auto Layout', 'Prototyping', 'Dev Mode'],
        youtubeVideoId: 'Cx2dkpBxst8',
        setupVideoId: 'jQ1sfKIl50E', // Figma 101
        additionalInfo: [
            {
                title: 'Community Files',
                content: 'Check out the "Community" tab in Figma. You can find thousands of free UI kits, icon sets, and plugins to speed up your workflow.'
            }
        ],
        steps: [
            {
                title: 'Create Account',
                content: 'Sign up for free at figma.com.',
                links: [{ text: 'Sign Up Free', url: 'https://figma.com', primary: true }]
            },
            {
                title: 'New File',
                content: 'Click "New Design File" in the top right corner.',
            },
            {
                title: 'Create Frame',
                content: 'Press `F` to select the Frame tool, then choose a preset (e.g., iPhone 14, MacBook Pro) from the right sidebar.',
            },
            {
                title: 'Design basics',
                content: 'Press `R` for Rectangle, Ti for Text. Use Auto Layout (`Shift+A`) to create responsive containers.',
                code: 'Shortcuts:\nF: Frame\nR: Rectangle\nT: Text\nShift+A: Auto Layout',
                language: 'text'
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Industry Standard', 'Collaborative', 'Dev Mode'],
            cons: ['Dev Mode is now paid', 'Limited offline capability'],
            bestFor: ['UI/UX Design', 'Prototyping'],
            communitySupport: 'Massive',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'mobbin', name: 'Mobbin', relation: 'complementary' }
        ]
    },
    {
        name: 'Mobbin',
        slug: 'mobbin',
        description: 'The world\'s largest mobile & web design reference library.',
        longDescription: 'Mobbin is a comprehensive library of real-world design patterns from successful mobile and web apps. It allows designers to search and filter by app categories, UI elements, and user flows to find inspiration and validate design decisions.',
        category: 'Design',
        link: 'https://mobbin.com',
        tags: ['Design', 'Inspiration', 'UI Patterns'],
        features: ['Real-world Screens', 'User Flows', 'Advanced Filtering', 'iOS & Android & Web'],
        youtubeVideoId: 'a1DBwxKuioA',
        steps: [
            {
                title: 'Sign Up',
                content: 'Create an account at Mobbin.com to access the full library.',
                links: [{ text: 'Go to Mobbin', url: 'https://mobbin.com', primary: true }]
            },
            {
                title: 'Search & Filter',
                content: 'Use filters to find specific UI patterns (e.g. "Onboarding") or apps (e.g. "Fintech").',
            },
            {
                title: 'Save Collections',
                content: 'Save screens and flows to your personal collections for future reference.',
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Real validated designs', 'Huge library', 'Flow visualization'],
            cons: ['Premium for full access', 'Static screenshots'],
            bestFor: ['UI Research', 'Competitor Analysis', 'Inspiration'],
            communitySupport: 'Large',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'figma', name: 'Figma', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Flows',
                content: 'Don\'t just look at single screens. Use the "Flows" view to understand the user journey (e.g., Sign up -> Onboarding -> Home).'
            }
        ]
    },
    // Frontend
    {
        name: 'Vite',
        slug: 'vite',
        description: 'Next Generation Frontend Tooling. Fast, lightweight, and flexible.',
        longDescription: 'Vite (French for "quick") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of a dev server with rich feature enhancements over native ES modules and a build command that bundles your code with Rollup.',
        category: 'Frontend',
        link: 'https://vitejs.dev',
        tags: ['Build Tool', 'Fast'],
        features: ['Instant Server Start', 'Lightning Fast HMR', 'Optimized Build', 'Universal Plugin Interface'],
        youtubeVideoId: 'KCrXgy8qtjM',
        setupVideoId: 'do62-z3z6FM', // Vite Crash Course
        relatedTools: [
            { slug: 'react', name: 'React', relation: 'complementary' },
            { slug: 'vue', name: 'Vue', relation: 'complementary' }
        ],
        steps: [
            {
                title: 'Create Project',
                content: 'Open your terminal and run the create command. This will prompt you for a project name and framework.',
                code: 'npm create vite@latest my-app -- --template react',
                language: 'bash'
            },
            {
                title: 'Install Dependencies',
                content: 'Navigate into your new project folder and install the necessary packages.',
                code: 'cd my-app\nnpm install',
                language: 'bash'
            },
            {
                title: 'Start Dev Server',
                content: 'Start the local development server to see your app in the browser.',
                code: 'npm run dev',
                language: 'bash',
                links: [{ text: 'Open Localhost', url: 'http://localhost:5173', primary: true }]
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Insanely fast', 'Lightweight', 'Rich Plugin Ecosystem'],
            cons: ['Configuration can be tricky for complex apps', 'Newer than Webpack'],
            bestFor: ['SPAs', 'Modern Frontend Apps'],
            communitySupport: 'Large',
            priceModel: 'Free'
        },
        additionalInfo: [
            {
                title: 'Environment Variables',
                content: 'Vite exposes env variables on the special `import.meta.env` object. Prefix them with `VITE_` to expose them to the client.'
            }
        ]
    },
    {
        name: 'Angular',
        slug: 'angular',
        description: 'The modern web developer\'s platform.',
        longDescription: 'Angular is a platform for building mobile and desktop web applications. It provides a robust framework for building client-side applications, including a powerful CLI, dependency injection, and a component-based architecture.',
        category: 'Frontend',
        link: 'https://angular.dev',
        tags: ['Framework', 'Google', 'TypeScript'],
        features: ['Dependency Injection', 'RxJS', 'Two-way Binding', 'CLI'],
        youtubeVideoId: 'Ata9cSC2WpM', // Angular in 100s
        setupVideoId: '3qBXWUpoPHo', // Angular Crash Course
        relatedTools: [
            { slug: 'react', name: 'React', relation: 'alternative' },
            { slug: 'vue', name: 'Vue', relation: 'alternative' },
        ],
        steps: [
            {
                title: 'Install CLI',
                content: 'Install the Angular CLI globally using npm.',
                code: 'npm install -g @angular/cli',
                language: 'bash'
            },
            {
                title: 'Create Project',
                content: 'Generate a new workspace and initial application.',
                code: 'ng new my-app',
                language: 'bash'
            },
            {
                title: 'Serve',
                content: 'Navigate to the workspace and launch the server.',
                code: 'cd my-app\nng serve --open',
                language: 'bash',
                links: [{ text: 'Angular Docs', url: 'https://angular.dev/overview', primary: true }]
            },
        ],
        comparisonData: {
            learningCurve: 'High',
            pros: ['Batteries included', 'Strict structure', 'Type safety dependent'],
            cons: ['Verbose', 'Steep learning curve', 'Complex state management'],
            bestFor: ['Large Enterprise Apps', 'Teams'],
            communitySupport: 'Large',
            priceModel: 'Free'
        },
        additionalInfo: [
            {
                title: 'RxJS',
                content: 'Angular relies heavily on RxJS for handling asynchronous data. Learning "Observables" is key to mastering Angular.'
            }
        ]
    },
    {
        name: 'React',
        slug: 'react',
        description: 'The library for web and native user interfaces.',
        longDescription: 'React is the most popular JavaScript library for building user interfaces. It lets you build UI components—small, isolated pieces of code that build complex UIs. It uses a virtual DOM to optimize rendering and ensure high performance.',
        category: 'Frontend',
        link: 'https://react.dev',
        tags: ['Library', 'Components'],
        features: ['Component-Based', 'Declarative VR', 'Ecosystem', 'Virtual DOM'],
        youtubeVideoId: 'Tn6-PIqc4UM', // React in 100s
        setupVideoId: 'SqcY0GlETPk', // React Tutorial for Beginners
        additionalInfo: [
            {
                title: 'React DevTools',
                content: 'Install the "React Developer Tools" browser extension to inspect your component hierarchy and state in real-time. It is essential for debugging.'
            }
        ],
        relatedTools: [
            { slug: 'vite', name: 'Vite', relation: 'prerequisite' },
            { slug: 'angular', name: 'Angular', relation: 'alternative' },
            { slug: 'nextjs', name: 'Next.js', relation: 'next-step' },
        ],
        steps: [
            {
                title: 'Installation',
                content: 'The most popular way to start a React project today is with Vite. Open your terminal.',
                code: 'npm create vite@latest my-react-app -- --template react',
                language: 'bash'
            },
            {
                title: 'Start Development',
                content: 'Navigate into your folder, install dependencies, and start the local server.',
                code: 'cd my-react-app\nnpm install\nnpm run dev',
                language: 'bash'
            },
            {
                title: 'Your First Component',
                content: 'React Apps are built with components. Edit `src/App.jsx` to see your changes correctly.',
                code: 'function App() {\n  return <h1>Hello React!</h1>;\n}\n\nexport default App;',
                language: 'jsx'
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Huge ecosystem', 'Component-based', 'In-demand skill'],
            cons: ['Requires learning hooks', 'Too many choices (styles, state)'],
            bestFor: ['SPAs', 'Large Applications', 'Career growth'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        }
    },
    {
        name: 'Next.js',
        slug: 'nextjs',
        description: 'The React Framework for the Web. Hybrid static & server rendering.',
        longDescription: 'Next.js enables you to create full-stack Web applications by extending React with the latest features like Server Components, and integrating powerful Rust-based tooling for the fastest builds. It handles routing, optimized rendering (SSR/SSG), and API routes out of the box.',
        category: 'Frontend',
        link: 'https://nextjs.org',
        tags: ['Framework', 'SSR', 'React'],
        features: ['App Router', 'Server Components', 'Image Optimization', 'Edge Runtime'],
        youtubeVideoId: '__mSgDEOyv8',
        setupVideoId: 'ZVnjOPwW4ZA', // Next.js 14 Tutorial
        steps: [
            {
                title: 'Initialize',
                content: 'Create a new Next.js app with all the recommended settings.',
                code: 'npx create-next-app@latest my-next-app',
                language: 'bash',
                links: [{ text: 'Installation Guide', url: 'https://nextjs.org/docs/installation', primary: true }]
            },
            {
                title: 'Define Routes',
                content: 'In the App Router, folders define routes. Create `app/about/page.tsx` for an "/about" page.',
                code: 'export default function About() {\n  return <h1>About Page</h1>;\n}',
                language: 'tsx'
            },
            {
                title: 'Run Locally',
                content: 'Start the development server.',
                code: 'npm run dev',
                language: 'bash'
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Great SEO (SSR)', 'Vercel integration', 'React Server Components'],
            cons: ['Opinionated routing', 'Frequent breaking changes'],
            bestFor: ['SEO heavy sites', 'E-commerce', 'Fullstack React'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'react', name: 'React', relation: 'prerequisite' },
            { slug: 'vercel', name: 'Vercel', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Server Components',
                content: 'By default, components in the `app` directory are Server Components. They render on the server and send zero JS to the client.'
            }
        ]
    },
    {
        name: 'Tailwind CSS',
        slug: 'tailwindcss',
        description: 'Rapidly build modern websites without ever leaving your HTML.',
        longDescription: 'Tailwind CSS is a utility-first CSS framework. Unlike other frameworks that provide pre-built components (like buttons and cards), Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.',
        category: 'Frontend',
        link: 'https://tailwindcss.com',
        tags: ['CSS', 'Utility-first'],
        features: ['Utility-First', 'Responsive Design', 'Dark Mode', 'Customization'],
        youtubeVideoId: 'mr15Xzb1Ook',
        setupVideoId: 'ft30zcMlFao', // Tailwind CSS Legacy (or better modern one) -> actually "Tailwind CSS Full Course 2023"
        steps: [
            {
                title: 'Install',
                content: 'Install Tailwind CSS and the Vite plugin via npm.',
                code: 'npm install tailwindcss @tailwindcss/vite',
                language: 'bash'
            },
            {
                title: 'Configure Vite',
                content: 'Add the Tailwind CSS plugin to your Vite configuration in `vite.config.ts`.',
                code: 'import { defineConfig } from \'vite\'\nimport tailwindcss from \'@tailwindcss/vite\'\n\nexport default defineConfig({\n  plugins: [\n    tailwindcss(),\n  ],\n})',
                language: 'typescript'
            },
            {
                title: 'Import CSS',
                content: 'Import Tailwind CSS in your main CSS file (e.g. `src/index.css`).',
                code: '@import "tailwindcss";',
                language: 'css'
            },
            {
                title: 'Start Styling',
                content: 'Use utility classes directly in your markup. Here is an example of a card component.',
                code: '<div className="flex min-h-[200px] items-center justify-center bg-zinc-950 p-4">\n  <div className="w-full max-w-sm rounded-xl bg-zinc-900 p-6 shadow-xl border border-zinc-800">\n    <h2 className="text-2xl font-bold text-white mb-2">\n      Tailwind v4\n    </h2>\n    <p className="text-zinc-400 mb-4">\n      Styling is faster and cleaner than ever.\n    </p>\n    <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 transition-colors">\n      Get Started\n    </button>\n  </div>\n</div>',
                language: 'tsx'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Rapid development', 'No naming conflicts', 'Highly customizable'],
            cons: ['Ugly HTML class strings', 'Requires build step'],
            bestFor: ['Modern Web Design', 'Design Systems'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'react', name: 'React', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Arbitrary Values',
                content: 'Need a specific pixel value? Use square brackets like `w-[500px]` or `bg-[#1da1f2]` to escape the design system constraints.'
            }
        ]
    },
    // Backend
    {
        name: 'Node.js',
        slug: 'nodejs',
        description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
        longDescription: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write command line tools and for server-side scripting.',
        category: 'Backend',
        link: 'https://nodejs.org',
        tags: ['Runtime', 'JavaScript', 'Backend'],
        features: ['Asynchronous', 'Event-driven', 'NPM', 'Cross-platform'],
        youtubeVideoId: 'ENrzD9HAZK4', // Node.js in 100s
        setupVideoId: 'Oe421EPjeBE', // Node.js Full Course
        steps: [
            {
                title: 'Download',
                content: 'Download the LTS (Long Term Support) version from the official website.',
                links: [{ text: 'Download Node.js', url: 'https://nodejs.org', primary: true }]
            },
            {
                title: 'Verify Install',
                content: 'Check that node and npm are installed correctly in your terminal.',
                code: 'node -v\nnpm -v',
                language: 'bash'
            }
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['JavaScript everywhere', 'Huge package ecosystem (NPM)', 'High performance'],
            cons: ['Single threaded (cpu bound)', 'Callback complexity'],
            bestFor: ['Realtime apps', 'API Servers', 'Single Page Apps'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'express', name: 'Express.js', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'The Event Loop',
                content: 'Node.js is single-threaded but non-blocking. Heavy computation (CPU loops) generally blocks the entire server, so be careful.'
            }
        ]
    },
    {
        name: 'Express.js',
        slug: 'express',
        description: 'Fast, unopinionated, minimalist web framework for Node.js.',
        longDescription: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It facilitates the rapid development of Node based web applications.',
        category: 'Backend',
        link: 'https://expressjs.com',
        tags: ['Node.js', 'Backend', 'JavaScript'],
        features: ['Middleware', 'Routing', 'HTTP Helpers', 'Performance'],
        youtubeVideoId: 'L72fhGm1tfE', // Express in 100s
        setupVideoId: 'Oe421EPjeBE', // Node.js and Express.js - Full Course
        steps: [
            {
                title: 'Install',
                content: 'Create a new folder, initialize npm, and install Express.',
                code: 'mkdir my-api\ncd my-api\nnpm init -y\nnpm install express',
                language: 'bash'
            },
            {
                title: 'Create Server',
                content: 'Create an `index.js` file with a basic server setup.',
                code: 'const express = require("express");\nconst app = express();\nconst port = 3000;\n\napp.get("/", (req, res) => {\n  res.send("Hello World!");\n});\n\napp.listen(port, () => {\n  console.log(`App listening on port ${port}`);\n});',
                language: 'javascript'
            },
            {
                title: 'Run',
                content: 'Start your server using Node.js.',
                code: 'node index.js',
                language: 'bash',
                links: [{ text: 'Express Guide', url: 'https://expressjs.com/en/starter/hello-world.html', primary: true }]
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Minimalist & flexible', 'Huge middleware ecosystem', 'Easy to learn'],
            cons: ['Callback hell (if not careful)', 'Requires manual setup for everything'],
            bestFor: ['REST APIs', 'Microservices', 'Node.js Backends'],
            communitySupport: 'Solid',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'nodejs', name: 'Node.js', relation: 'prerequisite' }
        ],
        additionalInfo: [
            {
                title: 'Middleware Order',
                content: 'The order you define `app.use()` matters! Middleware functions are executed sequentially. Always put global middleware (like logging) at the top.'
            }
        ]
    },
    {
        name: 'Spring Boot',
        slug: 'spring-boot',
        description: 'Java-based framework used to create microservices.',
        longDescription: 'Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run". It takes an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.',
        category: 'Backend',
        link: 'https://spring.io/projects/spring-boot',
        tags: ['Java', 'Backend', 'Enterprise'],
        features: ['Auto-configuration', 'Standalone', 'Production-ready', 'Microservices'],
        youtubeVideoId: 'v73-ps01c5w',
        setupVideoId: '9SGDpanrc8U', // Spring Boot Tutorial for Beginners

        steps: [
            {
                title: 'Initialize Project',
                content: 'Use Spring Initializr to generate a blank project with best practices.',
                links: [{ text: 'Go to Spring Initializr', url: 'https://start.spring.io', primary: true }]
            },
            {
                title: 'Add Dependencies',
                content: 'Select "Spring Web" for building RESTful APIs. Click "Generate" to download the zip file.',
            },
            {
                title: 'Create Controller',
                content: 'Unzip, open in IntelliJ, and create a `HelloController.java`.',
                code: '@RestController\npublic class HelloController {\n  @GetMapping("/")\n  public String index() {\n    return "Greetings from Spring Boot!";\n  }\n}',
                language: 'java'
            },
        ],
        comparisonData: {
            learningCurve: 'High',
            pros: ['Enterprise standard', 'Robust ecosystem', 'Great for large systems'],
            cons: ['Heavyweight', 'Slow startup', 'Annotation magic'],
            bestFor: ['Enterprise Microservices', 'Java Shops'],
            communitySupport: 'Large',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'java', name: 'Java', relation: 'prerequisite' }
        ],
        additionalInfo: [
            {
                title: 'Annotations',
                content: 'Spring Boot relies heavily on annotations (e.g., `@RestController`, `@Autowired`). Understanding what each annotation does is 80% of learning Spring.'
            }
        ]
    },
    {
        name: 'Django',
        slug: 'django',
        description: 'The web framework for perfectionists with deadlines.',
        longDescription: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.',
        category: 'Backend',
        link: 'https://djangoproject.com',
        tags: ['Python', 'Backend', 'Full Stack'],
        features: ['Admin Interface', 'ORM', 'Security', 'Batteries Included'],
        youtubeVideoId: '0sMtoedWaf0', // Django in 100s
        setupVideoId: 'rHux0gMZ3Eg', // Django Tutorial (Mosh)

        steps: [
            {
                title: 'Install Django',
                content: 'Install Django using pip (Python package installer).',
                code: 'pip install django',
                language: 'bash'
            },
            {
                title: 'Start Project',
                content: 'Create the initial directory structure.',
                code: 'django-admin startproject mysite',
                language: 'bash'
            },
            {
                title: 'Run Server',
                content: 'Start the built-in lightweight development server.',
                code: 'cd mysite\npython manage.py runserver',
                language: 'bash',
                links: [{ text: 'Writing your first Django app', url: 'https://docs.djangoproject.com/en/5.1/intro/tutorial01/', primary: true }]
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Batteries included', 'Admin interface', 'Secure by default'],
            cons: ['Monolithic', 'Can be slow', 'Too much magic'],
            bestFor: ['CMS', 'Rapid Development', 'Complex Data Models'],
            communitySupport: 'Large',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'python', name: 'Python', relation: 'prerequisite' }
        ],
        additionalInfo: [
            {
                title: 'Admin Panel',
                content: 'Django comes with a free, production-ready Admin interface. It is one of its biggest selling points for CMS-like apps.'
            }
        ]
    },
    {
        name: 'FastAPI',
        slug: 'fastapi',
        description: 'Modern, fast (high-performance), web framework for building APIs with Python.',
        longDescription: 'FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.8+ based on standard Python type hints. It is one of the fastest Python frameworks available.',
        category: 'Backend',
        link: 'https://fastapi.tiangolo.com',
        tags: ['Python', 'Backend', 'API'],
        features: ['High Performance', 'Easy to Learn', 'Auto Documentation', 'Type Safety'],
        youtubeVideoId: '8SdR5i3ZoqE', // FastAPI in 100s (actual ID)
        setupVideoId: 'GN6ICac3OXY', // FastAPI full course

        steps: [
            {
                title: 'Install',
                content: 'You need FastAPI and an ASGI server like Uvicorn.',
                code: 'pip install fastapi "uvicorn[standard]"',
                language: 'bash'
            },
            {
                title: 'Create App',
                content: 'Create a file `main.py` with this basic code:',
                code: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return {"Hello": "World"}',
                language: 'python'
            },
            {
                title: 'Run',
                content: 'Run the server with live reload enabled.',
                code: 'uvicorn main:app --reload',
                language: 'bash',
                links: [{ text: 'FastAPI Tutorial', url: 'https://fastapi.tiangolo.com/tutorial/', primary: true }]
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Incredibly fast', 'Auto documentation (Swagger)', 'Type hints'],
            cons: ['Newer ecosystem', 'Requires Python 3.6+'],
            bestFor: ['High Performance APIs', 'ML Model Serving'],
            communitySupport: 'Growing',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'python', name: 'Python', relation: 'prerequisite' }
        ],
        additionalInfo: [
            {
                title: 'Pydantic Models',
                content: 'FastAPI uses Pydantic for data validation. You define your data shape as a class, and FastAPI ensures the incoming JSON matches it.'
            }
        ]
    },
    {
        name: 'PHP',
        slug: 'php',
        description: 'A popular general-purpose scripting language that is especially suited to web development.',
        longDescription: 'PHP is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.',
        category: 'Backend',
        link: 'https://www.php.net',
        tags: ['Language', 'Server-side', 'Web'],
        features: ['Easy Deployment', 'Database Integration', 'Wide Hosting Support'],
        youtubeVideoId: 'a7_WFUlFS94',
        setupVideoId: 'zZ6vybT1HQs',
        relatedTools: [
            { slug: 'composer', name: 'Composer', relation: 'complementary' },
            { slug: 'laravel', name: 'Laravel', relation: 'next-step' },
            { slug: 'mysql', name: 'MySQL', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'The php.ini File',
                content: 'This file controls how PHP behaves. If you need to increase upload limits or enable extensions, this is where you look.'
            },
            {
                title: 'Superglobals',
                content: '`$_GET`, `$_POST` are always available variables that handle form data. Be careful with security!'
            }
        ],
        steps: [
            {
                title: 'Download XAMPP',
                content: 'Go to the Apache Friends website and download the XAMPP installer for your operating system (Windows, Linux, or macOS).',
                links: [{ text: 'Download XAMPP', url: 'https://www.apachefriends.org/index.html', primary: true }]
            },
            {
                title: 'Install XAMPP',
                content: 'Run the installer. You can leave the default components selected (Apache, MySQL, PHP, MyAdmin). Choose a folder (e.g., C:\\xampp) and complete the installation.',
            },
            {
                title: 'Start Server',
                content: 'Open the "XAMPP Control Panel". Click "Start" next to Apache (Web Server) and MySQL (Database). They should turn green.',
            },
            {
                title: 'Verify Setup',
                content: 'Navigate to your XAMPP installation folder, then open the `htdocs` folder. Create a new file named `test.php` with the following content:',
                code: '<?php\n  phpinfo();\n?>',
                language: 'php'
            },
            {
                title: 'Run in Browser',
                content: 'Open your web browser and go to `http://localhost/test.php`. You should see the PHP configuration page.',
                links: [{ text: 'Open Localhost', url: 'http://localhost/test.php', primary: true }]
            },
            {
                title: 'Add to PATH (Optional)',
                content: 'To use PHP in your terminal (e.g., for Laravel), add the PHP folder (C:\\xampp\\php) to your System Environment Variables "Path".',
                code: 'php -v',
                language: 'bash'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Run anywhere', 'Cheap hosting', 'Huge ecosystem (WordPress, Laravel)'],
            cons: ['Inconsistent API', 'Legacy baggage'],
            bestFor: ['Freelancing', 'Content sites', 'Laravel'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        }
    },
    {
        name: 'Composer',
        slug: 'composer',
        description: 'A Dependency Manager for PHP.',
        longDescription: 'Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.',
        category: 'Backend',
        link: 'https://getcomposer.org',
        tags: ['PHP', 'Tool', 'Dependency Manager'],
        features: ['Dependency Management', 'Autoloading', 'Scripts', 'Plugins'],
        youtubeVideoId: 'FNa5heI6BD8', // What Is Composer In PHP?
        additionalInfo: [
            {
                title: 'The vendor folder',
                content: 'This folder is where Composer puts all your downloaded libraries. **Never edit files inside here**, as they will be overwritten.'
            },
            {
                title: 'The .lock file',
                content: '`composer.lock` freezes your installed versions. Always commit this file to Git so your team uses the exact same versions.'
            }
        ],
        relatedTools: [
            { slug: 'php', name: 'PHP', relation: 'prerequisite' },
            { slug: 'laravel', name: 'Laravel', relation: 'next-step' }
        ],
        steps: [
            {
                title: 'Download',
                content: 'Download the installer from the official website.',
                links: [{ text: 'Get Composer', url: 'https://getcomposer.org/download/', primary: true }]
            },
            {
                title: 'Install',
                content: 'Run the installer. Ensure "Add to Path" is selected during installation so you can use Composer globally in your terminal.',
            },
            {
                title: 'Verify',
                content: 'Open your terminal (Command Prompt or PowerShell) and run the following command to verify the installation.',
                code: 'composer -v',
                language: 'bash'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Standard for PHP', 'Huge package library', 'Autoloading magic'],
            cons: ['Memory hungry', 'Can be slow'],
            bestFor: ['All PHP Projects', 'Laravel', 'Dependency Management'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        }
    },
    {
        name: 'Laravel',
        slug: 'laravel',
        description: 'The PHP Framework for Web Artisans.',
        longDescription: 'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.',
        category: 'Backend',
        link: 'https://laravel.com',
        tags: ['Framework', 'PHP', 'MVC'],
        features: ['Eloquent ORM', 'Blade Templating', 'Migrations', 'Queues'],
        youtubeVideoId: 'rIfdg_Ot-LI', // Laravel in 100s
        setupVideoId: 'ImtZ5yENzgE', // Laravel 11 Tutorial
        additionalInfo: [
            {
                title: 'The .env file',
                content: 'This file holds your secrets (DB passwords, API keys). **Never commit this to Git**.'
            },
            {
                title: 'Artisan CLI',
                content: '`php artisan` is your best friend. It can make files, run database migrations, and clear caches.'
            }
        ],
        relatedTools: [
            { slug: 'composer', name: 'Composer', relation: 'prerequisite' },
            { slug: 'php', name: 'PHP', relation: 'prerequisite' }
        ],
        steps: [
            {
                title: 'Check Prerequisites',
                content: 'Ensure you have **Composer** installed. It is required to create a new Laravel project.',
                links: [{ text: 'View Composer Guide', url: '/tools/composer', primary: true }]
            },
            {
                title: 'Open Terminal',
                content: 'Launch your preferred terminal (system command line tool).',
            },
            {
                title: 'Initialize Project',
                content: 'Run the following command to download the Laravel framework and set up your new project directory structure.',
                code: 'composer create-project laravel/laravel my-website',
                language: 'bash'
            },
            {
                title: 'Navigate to Project',
                content: 'Move into the newly created project directory.',
                code: 'cd my-website',
                language: 'bash'
            },
            {
                title: 'Start Server',
                content: 'Start the local development server to view your application.',
                code: 'php artisan serve',
                language: 'bash'
            }
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Elegant syntax', 'Best-in-class documentation', 'Huge ecosystem'],
            cons: ['PHP (if you dislike it)', 'Performance vs Go/Node'],
            bestFor: ['SaaS', 'Monoliths', 'Rapid Dev'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        }
    },
    {
        name: 'MySQL',
        slug: 'mysql',
        description: 'The world\'s most popular open source database.',
        longDescription: 'MySQL is a widely used relational database management system (RDBMS).',
        category: 'Database',
        link: 'https://www.mysql.com',
        tags: ['SQL', 'Relational', 'Database'],
        features: ['ACID', 'Replication', 'Stored Procedures'],
        youtubeVideoId: 'zsjvFFKOm3c',
        setupVideoId: '7S_tz1z_5bA',
        relatedTools: [
            { slug: 'php', name: 'PHP', relation: 'complementary' },
            { slug: 'laravel', name: 'Laravel', relation: 'next-step' }
        ],
        additionalInfo: [
            {
                title: 'Root User',
                content: 'The `root` user has full power (like Administrator). In production, you should create specific users with limited permissions.'
            },
            {
                title: 'Localhost vs Production',
                content: 'On your own PC (localhost), `root` often has no password. In the real world, this is a huge security risk!'
            }
        ],
        steps: [
            {
                title: 'Install',
                content: 'You can install MySQL directly using the installer (Windows) or Homebrew (Mac). Alternatively, if you installed XAMPP for PHP, MySQL is already included!',
                links: [{ text: 'Download Installer', url: 'https://dev.mysql.com/downloads/installer/', primary: true }]
            },
            {
                title: 'Verify Service',
                content: 'Ensure the MySQL server is actually running. On Windows, check "Services.msc" or the XAMPP Control Panel. On Mac, use `brew services list`.',
            },
            {
                title: 'Secure Installation (Optional)',
                content: 'It is best practice to run this command to improve security (set root password, remove test users).',
                code: 'mysql_secure_installation',
                language: 'bash'
            },
            {
                title: 'Connect via CLI',
                content: 'Open your terminal/command prompt. Use this command to log in as the root user. Enter your password when prompted (or press Enter if none).',
                code: 'mysql -u root -p',
                language: 'bash'
            },
            {
                title: 'Create Database',
                content: 'Once logged in (you will see the `mysql>` prompt), you can create a database for your app.',
                code: 'CREATE DATABASE my_website;',
                language: 'sql'
            }
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Ubiquitous', 'Standard SQL', 'Mature'],
            cons: ['Oracle owned (concern for some)', 'Scaling writes'],
            bestFor: ['General Web Apps', 'WordPress', 'Laravel'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        }
    },
    // Mobile
    {
        name: 'React Native',
        slug: 'react-native',
        description: 'Learn once, write anywhere. Create native apps for Android and iOS using React.',
        longDescription: 'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. It maps your React components to real native APIs, not webviews.',
        category: 'Mobile',
        link: 'https://reactnative.dev',
        tags: ['Mobile', 'Cross-platform'],
        features: ['Native Components', 'Fast Refresh', 'Cross-Platform', 'Hermes Engine'],
        youtubeVideoId: 'gvkqT_Uoahw',
        setupVideoId: '0-S5a0eXPoc',
        relatedTools: [
            { slug: 'expo', name: 'Expo', relation: 'complementary' },
            { slug: 'react', name: 'React', relation: 'prerequisite' },
            { slug: 'nodejs', name: 'Node.js', relation: 'prerequisite' }
        ],
        additionalInfo: [
            {
                title: 'Why Expo?',
                content: 'Expo is now the recommended way to start. Use the CLI only if you need very specific native code control that Expo doesn\'t support (which is rare nowadays).'
            },
            {
                title: 'Metro Bundler',
                content: 'Metro is the JavaScript bundler that packages your code. You\'ll see it running in your terminal window.'
            },
            {
                title: 'Hermes Engine',
                content: 'A JavaScript engine optimized for running React Native on Android. It makes apps start faster and use less memory.'
            }
        ],
        steps: [
            {
                title: 'Prerequisites',
                content: 'You need Node.js installed. For iOS development (CLI), you need a Mac with Xcode. For Android, you need Android Studio.',
                links: [{ text: 'Environment Setup Guide', url: 'https://reactnative.dev/docs/environment-setup', primary: true }]
            },
            {
                title: 'Initialize CLI Project',
                content: 'Create a new React Native project using the community CLI. (Recommendation: Use Expo unless you have a specific reason not to).',
                code: 'npx @react-native-community/cli@latest init AwesomeProject',
                language: 'bash'
            },
            {
                title: 'Run on iOS',
                content: 'Navigate to the project and run on the iOS simulator (Mac only).',
                code: 'cd AwesomeProject\nnpm run ios',
                language: 'bash'
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Real native components', 'Mature ecosystem', 'Shared code with web'],
            cons: ['Complex upgrade process (CLI)', 'Building native code takes time'],
            bestFor: ['Cross-platform Mobile Apps', 'React Developers'],
            communitySupport: 'Huge',
            priceModel: 'Free'
        }
    },
    {
        name: 'Expo',
        slug: 'expo',
        description: 'The best way to build, deploy, and iterate on native Android, iOS, and web apps.',
        longDescription: 'Expo is a framework and open source platform for making universal native apps for Android, iOS, and the web with JavaScript and React. It provides a set of tools that simplify the development process of React Native apps, including a Go-like "EAS" build service.',
        category: 'Mobile',
        link: 'https://expo.dev',
        tags: ['Framework', 'Mobile', 'Tools'],
        features: ['EAS Build', 'Over-the-air Updates', 'Push Notifications', 'Universal Modules'],
        youtubeVideoId: 'vFW_TxKLyrE',
        setupVideoId: 'J2j1yk-34OY',
        relatedTools: [
            { slug: 'react-native', name: 'React Native', relation: 'complementary' },
            { slug: 'typescript', name: 'TypeScript', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'EAS Build',
                content: 'Expo Application Services (EAS) allows you to build your app in the cloud, so you don\'t need a Mac to build for iOS.'
            },
            {
                title: 'Expo Go',
                content: 'The fastest way to test. Just scan a QR code from your terminal to run your app on your real phone instantly.'
            },
            {
                title: 'Development Builds (Pro)',
                content: 'When you need custom native libraries, you create a "Development Build". It\'s like your own custom version of Expo Go.'
            },
            {
                title: 'Prebuild / CNG',
                content: 'Expo "Prebuild" generates your android/ios folders on demand. You usually don\'t commit them to Git (CNG concept).'
            }
        ],
        steps: [
            {
                title: 'Prerequisites',
                content: 'Ensure you have Node.js and Git installed. These are the foundations for any JS-based development.',
            },
            {
                title: 'Create Project',
                content: 'Create a new Expo project. This is the official recommended way to start.',
                code: 'npx create-expo-app@latest my-app',
                language: 'bash'
            },
            {
                title: 'Run (Beginner)',
                content: 'Start the server and scan the QR code with the "Expo Go" app on your phone. No native setup required!',
                code: 'npx expo start',
                language: 'bash'
            },
            {
                title: 'Prebuild (Pro)',
                content: 'If you need custom native code, run this command to generate the android/ios folders (CNG).',
                code: 'npx expo prebuild',
                language: 'bash'
            },
            {
                title: 'Run Native (Pro)',
                content: 'Run your app locally on a simulator/emulator. This compiles your custom native code.',
                code: 'npx expo run:ios',
                language: 'bash'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Easiest way to build React Native', 'Over-the-air updates (EAS)', 'Cloud Builds'],
            cons: ['EAS Build can cost money (Free tier exists)', 'Slightly larger app size'],
            bestFor: ['Rapid Mobile Dev', 'Startups', 'Beginners'],
            communitySupport: 'Large',
            priceModel: 'Freemium'
        }
    },
    {
        name: 'Flutter',
        slug: 'flutter',
        description: 'Google\'s UI toolkit for building beautiful, natively compiled applications.',
        longDescription: 'Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase. It uses the Dart programming language and paints directly to the canvas for high performance.',
        category: 'Mobile',
        link: 'https://flutter.dev',
        tags: ['Google', 'Dart', 'Cross-platform'],
        features: ['Hot Reload', 'Native Performance', 'Expressive UI', 'Multi-platform'],
        youtubeVideoId: 'lHhRhPV--G0', // Flutter in 100s
        setupVideoId: 'VPvVD8t02U8', // Flutter Installation (common tutorial)
        additionalInfo: [
            {
                title: 'Hot Reload vs Hot Restart',
                content: 'Flutter has two fast refresh modes. "Hot Reload" (keeps app state, updates code) and "Hot Restart" (resets app state, re-compiles). Learn to use both.'
            }
        ],
        relatedTools: [
            { slug: 'react-native', name: 'React Native', relation: 'alternative' }
        ],
        steps: [
            {
                title: 'Install Android Studio',
                content: 'To build Android apps, you must install Android Studio. It includes the Android SDK and emulators.',
                links: [{ text: 'Download Android Studio', url: 'https://developer.android.com/studio', primary: true }]
            },
            {
                title: 'Install Flutter SDK',
                content: 'Download the Flutter SDK zip file, extract it, and add the `flutter/bin` folder to your system PATH.',
                links: [{ text: 'Flutter Install Guide', url: 'https://docs.flutter.dev/get-started/install', primary: true }]
            },
            {
                title: 'Verify Setup',
                content: 'Run `flutter doctor` in your terminal. It will tell you if anything (like Xcode or Android licenses) is missing.',
                code: 'flutter doctor',
                language: 'bash'
            },
            {
                title: 'Create & Run',
                content: 'Create your first app and run it on an emulator (make sure an emulator is running first via Android Studio).',
                code: 'flutter create my_app\ncd my_app\nflutter run',
                language: 'bash'
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Beautiful UI/Animations', 'Single codebase', 'Performance'],
            cons: ['Dart language (another to learn)', 'Large app size'],
            bestFor: ['Custom UI Apps', 'Cross-platform'],
            communitySupport: 'Large',
            priceModel: 'Free'
        }
    },
    // Database
    {
        name: 'MongoDB',
        slug: 'mongodb',
        description: 'The most popular database for modern apps.',
        longDescription: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
        category: 'Database',
        link: 'https://www.mongodb.com',
        tags: ['NoSQL', 'Database', 'JSON'],
        features: ['Flexible Schema', 'Scalability', 'High Performance', 'Atlas Cloud'],
        youtubeVideoId: '-bt_y4Loofg', // MongoDB in 100s
        setupVideoId: 'c2M-rlkkT5o', // MongoDB Crash Course
        steps: [
            {
                title: 'MongoDB Atlas',
                content: 'The easiest way to start is with MongoDB Atlas (Cloud). Create a free account.',
                links: [{ text: 'Try MongoDB Atlas', url: 'https://www.mongodb.com/cloud/atlas', primary: true }]
            },
            {
                title: 'Connect',
                content: 'Get your connection string from the Atlas dashboard and use it in your app.',
                code: 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority',
                language: 'text'
            }
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Flexible schema', 'JSON native', 'Horizontal scaling'],
            cons: ['No joins (traditionally)', 'High memory usage'],
            bestFor: ['Content management', 'Rapid prototyping', 'Big Data'],
            communitySupport: 'Massive',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'nodejs', name: 'Node.js', relation: 'complementary' },
            { slug: 'express', name: 'Express.js', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'NoSQL vs SQL',
                content: 'MongoDB is a NoSQL database. This means no fixed table structure. You can store different fields in every document if you want (but you probably shouldn\'t).'
            }
        ]
    },
    {
        name: 'Prisma',
        slug: 'prisma',
        description: 'Next-generation Node.js and TypeScript ORM.',
        longDescription: 'Prisma is a server-side library that helps your app read and write data to the database in an intuitive, efficient, and safe way. It includes a strongly typed client, a migration system, and a GUI to view your data.',
        category: 'Database', // OR Backend? Database fits best as it is an ORM
        link: 'https://www.prisma.io',
        tags: ['ORM', 'TypeScript', 'Database'],
        features: ['Type Safety', 'Auto-completion', 'Migrations', 'Prisma Studio'],
        youtubeVideoId: 'rLRIB6AF2Dg',
        setupVideoId: 'RebA5J-rlwg', // Prisma Crash Course
        steps: [
            {
                title: 'Install',
                content: 'Install Prisma as a dev dependency.',
                code: 'npm install prisma --save-dev',
                language: 'bash'
            },
            {
                title: 'Init',
                content: 'Initialize Prisma with your database provider.',
                code: 'npx prisma init --datasource-provider postgresql',
                language: 'bash'
            }
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Best TypeScript support', 'Great developer experience', 'Introspection'],
            cons: ['Another layer of abstraction', 'Performance overhead in edge'],
            bestFor: ['TypeScript Backends', 'Next.js', 'Node.js'],
            communitySupport: 'Large',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'typescript', name: 'TypeScript', relation: 'prerequisite' },
            { slug: 'postgresql', name: 'PostgreSQL', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Prisma Studio',
                content: 'Run `npx prisma studio` to open a visual database editor in your browser. It is amazing for quick edits and viewing data.'
            }
        ]
    },
    {
        name: 'Firebase',
        slug: 'firebase',
        description: 'Google\'s mobile platform that helps you quickly develop high-quality apps.',
        longDescription: 'Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, and hosting for your static files.',
        category: 'Database',
        link: 'https://firebase.google.com',
        tags: ['BaaS', 'Google', 'Database', 'Auth'],
        features: ['Authentication', 'Firestore NoSQL', 'Cloud Functions', 'Analytics'],
        youtubeVideoId: 'vAoB4VbhRzM',
        setupVideoId: '9kRgVxULbag', // Firebase setup

        steps: [
            {
                title: 'Create Project',
                content: 'Go to the Firebase Console and add a new project.',
                links: [{ text: 'Firebase Console', url: 'https://console.firebase.google.com', primary: true }]
            },
            {
                title: 'Register App',
                content: 'Click the Web icon (</>) to register your app. Copy the `firebaseConfig` object provided.',
            },
            {
                title: 'Install SDK',
                content: 'Install the Firebase SDK in your project.',
                code: 'npm install firebase',
                language: 'bash'
            },
            {
                title: 'Initialize',
                content: 'Create a `firebase.js` file and initialize the app with your config.',
                code: 'import { initializeApp } from "firebase/app";\n\nconst firebaseConfig = {\n  apiKey: "API_KEY",\n  authDomain: "PROJECT_ID.firebaseapp.com",\n  // ...other keys\n};\n\nexport const app = initializeApp(firebaseConfig);',
                language: 'javascript'
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Realtime database', 'Easy Auth', 'Serverless'],
            cons: ['Vendor lock-in', 'Pricing scales with usage'],
            bestFor: ['Mobile Apps', 'Realtime Apps', 'MVPs'],
            communitySupport: 'Massive',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'react', name: 'React', relation: 'complementary' },
            { slug: 'flutter', name: 'Flutter', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Security Rules',
                content: 'Firebase Database Rules determine who can read/write what. Do not leave them as "read: true, write: true" in production!'
            }
        ]
    },
    {
        name: 'Supabase',
        slug: 'supabase',
        description: 'The open source Firebase alternative. Instantly scalable.',
        longDescription: 'Supabase is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, and Storage.',
        category: 'Database',
        link: 'https://supabase.com',
        tags: ['Postgres', 'Open Source', 'BaaS'],
        features: ['Postgres Database', 'Auth', 'Auto-generated API', 'Realtime'],
        youtubeVideoId: 'zBZgdTb-dns',
        setupVideoId: 'Q7P20fHJlm4', // Supabase Crash Course

        steps: [
            {
                title: 'Create Project',
                content: 'Sign up and create a new project. Supabase provisions a full Postgres database for you.',
                links: [{ text: 'Supabase Dashboard', url: 'https://supabase.com/dashboard', primary: true }]
            },
            {
                title: 'Connect',
                content: 'Install the Supabase client library.',
                code: 'npm install @supabase/supabase-js',
                language: 'bash'
            },
            {
                title: 'Query Data',
                content: 'Initialize the client and query your database tables instantly.',
                code: 'import { createClient } from "@supabase/supabase-js";\n\nconst supabase = createClient("URL", "ANON_KEY");\n\nconst { data, error } = await supabase\n  .from("todos")\n  .select("*");',
                language: 'javascript'
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Open Source', 'Full Postgres power', 'Realtime features'],
            cons: ['Newer than Firebase', 'Self-hosting is complex'],
            bestFor: ['SaaS', 'Modern Web Apps', 'Postgres Lovers'],
            communitySupport: 'Fast Growing',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'postgresql', name: 'PostgreSQL', relation: 'prerequisite' }
        ],
        additionalInfo: [
            {
                title: 'Row Level Security (RLS)',
                content: 'Supabase relies on Postgres RLS. You write SQL policies to determine who can access which rows. It enables secure access directly from the frontend.'
            }
        ]
    },
    {
        name: 'PostgreSQL',
        slug: 'postgresql',
        description: 'The World\'s Most Advanced Open Source Relational Database.',
        longDescription: 'PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
        category: 'Database',
        link: 'https://www.postgresql.org',
        tags: ['SQL', 'Relational', 'Open Source'],
        features: ['ACID Compliance', 'JSON Support', 'Extensions (PostGIS)', 'Concurrency'],
        youtubeVideoId: 'n2Fluyr3lbc',
        setupVideoId: 'BLH3s5eTL4Y', // Postgres Setup

        steps: [
            {
                title: 'Install',
                content: 'The easiest way to run Postgres locally is with Docker.',
                code: 'docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres',
                language: 'bash',
                links: [{ text: 'Download Native Installer', url: 'https://www.postgresql.org/download/', primary: false }]
            },
            {
                title: 'Connect',
                content: 'Use a GUI tool like pgAdmin, DBeaver, or the command line implementation `psql`.',
                code: 'psql -h localhost -U postgres',
                language: 'bash'
            },
            {
                title: 'Create Database',
                content: 'Create a new database for your project.',
                code: 'CREATE DATABASE my_app;',
                language: 'sql'
            },
        ],
        comparisonData: {
            learningCurve: 'High',
            pros: ['Rock solid reliability', 'Advanced SQL features', 'Standard for web apps'],
            cons: ['Not natively distributed', 'Scaling writes is hard'],
            bestFor: ['Primary Database', 'Relational Data'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'prisma', name: 'Prisma', relation: 'complementary' },
            { slug: 'supabase', name: 'Supabase', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'JSONB',
                content: 'Postgres has excellent support for JSON data with the JSONB type. You can have the structure of SQL with the flexibility of NoSQL when needed.'
            }
        ]
    },
    // Version Control
    {
        name: 'Git',
        slug: 'git',
        description: 'Free and open source distributed version control system.',
        longDescription: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows you to track changes in your code, collaborate with others, and revert to previous versions.',
        category: 'Version Control',
        link: 'https://git-scm.com',
        tags: ['Version Control', 'CLI', 'Essential'],
        features: ['Branching', 'Staging Area', 'Distributed', 'History'],
        youtubeVideoId: '8JJ101D3knE', // Git in 100s
        setupVideoId: 'USjZcfj8yxE', // Git & GitHub for Beginners - Crash Course
        additionalInfo: [
            {
                title: '.gitignore is your friend',
                content: 'Always create a `.gitignore` file to prevent committing system files, credentials, or `node_modules`. generated files shouldn\'t be in Git.'
            }
        ],
        relatedTools: [
            { slug: 'github', name: 'GitHub', relation: 'complementary' },
            { slug: 'vscode', name: 'Visual Studio Code', relation: 'complementary' }
        ],
        steps: [
            {
                title: 'Download Git',
                content: 'Download the appropriate installer for your OS. On Windows, we recommend "Git for Windows".',
                links: [{ text: 'Download Git', url: 'https://git-scm.com/downloads', primary: true }]
            },
            {
                title: 'Configure Identity',
                content: 'Tell Git who you are. This information will be attached to every change you commit.',
                code: 'git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"',
                language: 'bash'
            },
            {
                title: 'Initialize a Repo',
                content: 'Navigate to your project folder and initialize Git to start tracking changes.',
                code: 'cd my-project\ngit init',
                language: 'bash'
            },
            {
                title: 'Stage and Commit',
                content: 'Add files to the staging area and save a snapshot (commit) of your work.',
                code: 'git add .\ngit commit -m "Initial commit"',
                language: 'bash'
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Distributed', 'Industry standard', 'Offline work'],
            cons: ['CLI can be daunting', 'Merge conflicts'],
            bestFor: ['Version Control', 'Collaboration'],
            communitySupport: 'Universal',
            priceModel: 'Free'
        }
    },
    {
        name: 'GitHub',
        slug: 'github',
        description: 'How people build software. The world\'s largest software development platform.',
        longDescription: 'GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.',
        category: 'Version Control',
        link: 'https://github.com',
        tags: ['Platform', 'Collaboration', 'Git'],
        features: ['Pull Requests', 'Issues', 'Actions (CI/CD)', 'Codespaces'],
        youtubeVideoId: 'w3jLJU7DT5E', // Placeholder for GitHub
        setupVideoId: '8JJ101D3knE', // Using Git 100s or similar as GitHub specific setup is usually "Git setup"
        steps: [
            {
                title: 'Create Account',
                content: 'Go to github.com and create your account. This is your identity in the coding world.',
                links: [{ text: 'Join GitHub', url: 'https://github.com', primary: true }]
            },
            {
                title: 'Install GitHub Desktop',
                content: 'To avoid complex command line setups, download the official GitHub Desktop app. It handles authentication and syncing for you.',
                links: [{ text: 'Download GitHub Desktop', url: 'https://desktop.github.com/', primary: true }]
            },
            {
                title: 'Create Repository',
                content: 'In GitHub Desktop (or on the website), click "New Repository". This creates a safe home for your project code.',
            },
            {
                title: 'Sync Code',
                content: 'Use the "Publish repository" or "Push origin" buttons in GitHub Desktop to save your local changes to the cloud.',
                links: [{ text: 'Prefer the Command Line?', url: '/tool/git', primary: false }]
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Largest host', 'Great UI/UX', 'Actions CI/CD'],
            cons: ['Closed source (platform)', 'AI features paid'],
            bestFor: ['Hosting Git Repos', 'Open Source'],
            communitySupport: 'Universal',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'git', name: 'Git', relation: 'prerequisite' },
            { slug: 'vscode', name: 'Visual Studio Code', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Pull Requests (PRs)',
                content: 'PRs are the heart of collaboration. They allow you to propose changes, discuss them, and review code before it merges into the main codebase.'
            }
        ]
    },
    // Deployment
    {
        name: 'Vercel',
        slug: 'vercel',
        description: 'Develop. Preview. Ship. The platform for frontend developers.',
        longDescription: 'Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. It is the creators of Next.js and provides zero-configuration deployment for most frontend frameworks.',
        category: 'Deployment',
        link: 'https://vercel.com',
        tags: ['Hosting', 'Serverless', 'Git'],
        features: ['Global Edge Network', 'Serverless Functions', 'Preview Deployments', 'Analytics'],
        youtubeVideoId: 'sPmat30SE4k',
        steps: [
            {
                title: 'Connect Git',
                content: 'For the best experience, push your code to GitHub first. Then go to Vercel and click "Add New Project" -> "Import" from GitHub.',
                links: [{ text: 'Vercel Dashboard', url: 'https://vercel.com/dashboard', primary: true }]
            },
            {
                title: 'Configure Build',
                content: 'Vercel automatically detects most frameworks (Next.js, Vite, etc.) and sets the build commands for you.',
            },
            {
                title: 'Deploy',
                content: 'Click Deploy. Vercel will build your site and give you a live HTTPS URL (e.g., `my-app.vercel.app`) in seconds.',
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Zero config for Next.js', 'Fast edge network', 'Preview deployments'],
            cons: ['Expensive for high bandwidth', 'Vendor lock-in'],
            bestFor: ['Frontend Apps', 'Next.js'],
            communitySupport: 'Large',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'nextjs', name: 'Next.js', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Vercel Analytics',
                content: 'Enable Analytics to see real-time traffic and performance scores (Web Vitals) for your deployed site.'
            }
        ]
    },
    {
        name: 'Netlify',
        slug: 'netlify',
        description: 'The fastest way to combine your favorite tools and APIs to build the fastest sites.',
        longDescription: 'Netlify unites an entire ecosystem of modern tools and services into a single, simple workflow for building high-performance sites and apps. It pioneered the Jamstack architecture.',
        category: 'Deployment',
        link: 'https://netlify.com',
        tags: ['Hosting', 'Jamstack'],
        features: ['Edge Functions', 'Form Handling', 'Identity/Auth', 'Split Testing'],
        youtubeVideoId: 'XG8nJDWu3a0',
        steps: [
            {
                title: 'Drag & Drop',
                content: 'For simple static sites, you can drag your project folder onto the Netlify dashboard to deploy instantly.',
                links: [{ text: 'Netlify Drop', url: 'https://app.netlify.com/drop', primary: true }]
            },
            {
                title: 'Git Continuous Deployment',
                content: 'Connect your GitHub repository. Netlify will deploy every time you push code.',
            },
            {
                title: 'Build Settings',
                content: 'Ensure your build command (e.g., `npm run build`) and publish directory (e.g., `dist`) are correct.',
                code: 'Build command: npm run build\nPublish directory: dist',
                language: 'text'
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Framework agnostic', 'Great free tier', 'Drag & drop deploy'],
            cons: ['Slower builds than Vercel sometimes', 'Complex pricing at scale'],
            bestFor: ['Static Sites', 'Jamstack'],
            communitySupport: 'Large',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'react', name: 'React', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Netlify Forms',
                content: 'Add a `netlify` attribute to any HTML form, and Netlify will automatically capture submissions without needing a backend.'
            }
        ]
    },
    {
        name: 'Railway',
        slug: 'railway',
        description: 'Railway is an infrastructure platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud.',
        longDescription: 'Railway aims to simplify backend deployment. Unlike Vercel/Netlify which focus on frontend/serverless, Railway is great for long-running processes, Docker containers, databases (Postgres, Redis, MySQL), and complex backend architectures.',
        category: 'Deployment',
        link: 'https://railway.app',
        tags: ['Infrastructure', 'Backend'],
        features: ['Docker Support', 'Database Provisioning', 'One-click Starter Kits', 'Variable Management'],
        youtubeVideoId: 'DyQz2DgSToU',
        setupVideoId: '',
        steps: [
            {
                title: 'Start Project',
                content: 'Login to Railway and click "New Project".',
                links: [{ text: 'Railway Dashboard', url: 'https://railway.app/dashboard', primary: true }]
            },
            {
                title: 'Deploy from GitHub',
                content: 'Select "Deploy from GitHub repo". Choose your repo.',
            },
            {
                title: 'Add Variables',
                content: 'Go to the "Variables" tab to add secrets like `DATABASE_URL`.',
                code: 'DATABASE_URL=postgres://...',
                language: 'text'
            },
            {
                title: 'Provision DB',
                content: 'Right click on the canvas -> New -> Database -> PostgreSQL to add a database to your project.',
            },
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Full backend support', 'Canvas UI', 'Docker support'],
            cons: ['No free tier (trial only)', 'Cost can vary'],
            bestFor: ['Full Stack Apps', 'Databases', 'Docker'],
            communitySupport: 'Growing',
            priceModel: 'Paid'
        },
        relatedTools: [
            { slug: 'postgresql', name: 'PostgreSQL', relation: 'complementary' },
            { slug: 'docker', name: 'Docker', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Variables',
                content: 'Railway allows you to reference variables from other services (e.g. `${{Postgres.DATABASE_URL}}`) making connections seamless.'
            }
        ]
    },
    // AI Chatbots
    {
        name: 'ChatGPT',
        slug: 'chatgpt',
        description: 'Advanced AI language model by OpenAI.',
        longDescription: 'ChatGPT is a conversational AI assistant developed by OpenAI. It excels at a wide range of tasks including coding, writing, and problem-solving. It uses the GPT architecture to understand and generate human-like text.',
        category: 'AI Chatbots',
        link: 'https://chat.openai.com',
        tags: ['AI', 'Chatbot', 'OpenAI', 'Coding Assistant'],
        features: ['Natural Language Processing', 'Code Generation', 'Debugging', 'Explanation'],
        youtubeVideoId: '3ao7Z8duDXc',
        setupVideoId: 'n7gxTAwQ634',
        steps: [
            {
                title: 'Sign Up',
                content: 'Create an account at OpenAI or download the mobile app.'
            },
            {
                title: 'Start Chatting',
                content: 'Type your question or prompt. Use the "Canvas" mode for writing code or long documents.'
            },
            {
                title: 'Voice Mode',
                content: 'On mobile, tap the headphones icon to talk to ChatGPT comfortably in real-time.'
            },
            {
                title: 'Custom Instructions',
                content: 'Go to Settings > Custom Instructions to tell ChatGPT how you want it to behave (e.g., "Always answer in Python").'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Extremely versatile', 'Large knowledge base', 'Easy to use'],
            cons: ['Can hallucinate facts', 'Limited context window in free tier'],
            bestFor: ['General coding help', 'Brainstorming', 'Writing'],
            communitySupport: 'Massive global user base',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'claude', name: 'Claude', relation: 'alternative' }
        ],
        additionalInfo: [
            {
                title: 'Context Window',
                content: 'ChatGPT remembers your conversation, but has a limit. If it starts forgetting things, start a new chat.'
            }
        ],
        aiFeatures: [
            {
                title: 'Canvas',
                content: 'A dedicated workspace for writing and coding that allows you to highlight and edit specific sections of text or code.'
            },
            {
                title: 'Voice Mode',
                content: 'Advanced speech-to-speech capabilities that feel like a real natural conversation, with emotional tone awareness.'
            },
            {
                title: 'Custom GPTs',
                content: 'Create your own version of ChatGPT tailored for specific tasks (e.g., a "Code Reviewer" or "Creative Writer") with unique instructions and knowledge.'
            }
        ]
    },
    {
        name: 'Claude',
        slug: 'claude',
        description: 'AI assistant by Anthropic focused on safety and large context.',
        longDescription: 'Claude is an AI assistant created by Anthropic. It is known for its large context window, allowing it to process entire books or codebases, and its focus on being helpful, and honest.',
        category: 'AI Chatbots',
        link: 'https://claude.ai',
        tags: ['AI', 'Chatbot', 'Anthropic', 'Large Context'],
        features: ['Large Context Window', 'Safe AI', 'Code Analysis'],
        youtubeVideoId: 'AJpK3YTTKZ4',
        setupVideoId: '',
        steps: [
            {
                title: 'Sign Up',
                content: 'Create an account at Anthropic.'
            },
            {
                title: 'Create a Project',
                content: 'Use "Projects" to upload your own docs/codebase. Claude will use them as context for every chat in that project.'
            },
            {
                title: 'Enable Artifacts',
                content: 'Turn on "Artifacts" in settings. Claude can then generate separate windows for code, React apps, and diagrams.'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Huge context window', 'Natural writing style', 'Fewer refusals on safe topics'],
            cons: ['Smaller ecosystem than OpenAI', 'Rate limits on free tier'],
            bestFor: ['Analyzing large files', 'Creative writing', 'Complex reasoning'],
            communitySupport: 'Growing rapidly',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'chatgpt', name: 'ChatGPT', relation: 'alternative' }
        ],
        additionalInfo: [
            {
                title: 'Project Knowledge',
                content: 'You can upload PDF documents or multiple text files to Claude to have it analyze and summarize them.'
            }
        ],
        aiFeatures: [
            {
                title: 'Artifacts',
                content: 'When Claude writes code or creates content, it can open a dedicated window to render it (like a React component or SVG), keeping the chat clean.'
            },
            {
                title: 'Projects',
                content: 'Create focused workspaces with their own knowledge bases. Upload your styling guidelines or API docs once, and reuse them.'
            },
            {
                title: 'Massive Context',
                content: 'Claude accepts up to 200K tokens (approx. 500 pages of text), making it perfect for analyzing entire books or large codebases.'
            }
        ]
    },
    {
        name: 'Gemini',
        slug: 'gemini',
        description: 'Google\'s multimodal AI model.',
        longDescription: 'Gemini is Google\'s most capable AI model, built from the ground up to be multimodal. It can understand, operate on, and combine different types of information including text, code, audio, image, and video.',
        category: 'AI Chatbots',
        link: 'https://gemini.google.com',
        tags: ['AI', 'Google', 'Multimodal'],
        features: ['Multimodal', 'Google Integration', 'Fast Inference'],
        youtubeVideoId: 'WQ47Ued6Q4c',
        setupVideoId: '',
        steps: [
            {
                title: 'Login',
                content: 'Use your Google account to access Gemini.'
            },
            {
                title: 'Connect Extensions',
                content: 'Enable extensions for Google Maps, YouTube, and Drive to let Gemini access real-time info.'
            },
            {
                title: 'Multimodal Prompting',
                content: 'Don\'t just type. Drag and drop images or even video files to ask questions about them.'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Deep integration with Google ecosystem', 'Multimodal capabilities', 'Fast'],
            cons: ['Can be inconsistent', 'Interface changes frequently'],
            bestFor: ['Multimodal tasks', 'Google Workspace users'],
            communitySupport: 'Large (Google ecosystem)',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'chatgpt', name: 'ChatGPT', relation: 'alternative' }
        ],
        additionalInfo: [
            {
                title: 'Multimodal',
                content: 'Gemini can understand images and video inherently. Try uploading a screenshot of a UI bug and ask it how to fix it.'
            }
        ],
        aiFeatures: [
            {
                title: 'Deep Integration',
                content: 'Gemini connects directly with Google Docs, Drive, Gmail, Maps, and YouTube to fetch and summarize your personal data.'
            },
            {
                title: 'Native Multimodal',
                content: 'It was trained on images, audio, and video from the start, so its understanding of non-text inputs is best-in-class.'
            },
            {
                title: '2 Million Context (Pro)',
                content: 'The 1.5 Pro model has a staggering 2 million token context window, allowing you to process hours of video or massive code repos.'
            }
        ]
    },
    {
        name: 'Perplexity',
        slug: 'perplexity',
        description: 'AI-powered answer engine with real-time web search.',
        longDescription: 'Perplexity AI is a conversational search engine that answers queries using natural language and predictive text. It cites sources for its answers, making it a reliable tool for research and fact-checking.',
        category: 'AI Chatbots',
        link: 'https://www.perplexity.ai',
        tags: ['AI', 'Search', 'Research'],
        features: ['Real-time Search', 'Citations', 'Focus Modes'],
        youtubeVideoId: 'qpN-pjev-vM',
        setupVideoId: '',
        steps: [
            {
                title: 'Ask a Question',
                content: 'Type your query to get a sourced answer.'
            },
            {
                title: 'Use Focus Modes',
                content: 'Click "Focus" to narrow your search to "Academic", "Reddit", "YouTube", or "Wolfram Alpha".'
            },
            {
                title: 'Organize with Collections',
                content: 'Save your threads into "Collections" to keep your research organized by topic.'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Real-time web access', 'Cites sources', 'Great for research'],
            cons: ['Less creative than ChatGPT', 'Coding capabilities vary'],
            bestFor: ['Research', 'Finding specific information', 'Fact checking'],
            communitySupport: 'Growing',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'chatgpt', name: 'ChatGPT', relation: 'alternative' }
        ],
        additionalInfo: [
            {
                title: 'Sources',
                content: 'Always check the citations. Perplexity is great at finding info, but verify the source link if it\'s critical.'
            }
        ],
        aiFeatures: [
            {
                title: 'Pro Search',
                content: 'A multi-step reasoning engine that breaks down complex queries into sub-searches to find the most accurate answer.'
            },
            {
                title: 'Focus Modes',
                content: 'Tell the AI exactly where to look: The entire web, just academic papers, social discussions (Reddit), or computational data.'
            },
            {
                title: 'Pages',
                content: 'Turn your search results into a shareable, beautifully formatted article with a single click.'
            }
        ]
    },
    // Missing tools added by request
    {
        name: 'Python',
        slug: 'python',
        description: 'A programming language that lets you work quickly and integrate systems more effectively.',
        longDescription: 'Python is a high-level, interpreted programming language known for its easy readability and vast ecosystem of libraries for web development, data analysis, AI, and more.',
        category: 'Backend',
        link: 'https://www.python.org',
        tags: ['Language', 'Backend', 'Data Science'],
        features: ['Simple Syntax', 'Huge Ecosystem', 'Cross-platform'],
        youtubeVideoId: 'x7X9w_GIm1s',
        setupVideoId: 'ix9cRaBkVe0',
        steps: [
            {
                title: 'Install',
                content: 'Download the latest version from python.org.',
                links: [{ text: 'Download Python', url: 'https://www.python.org/downloads/', primary: true }]
            },
            {
                title: 'Verify Install',
                content: 'Open your terminal and type `python --version`. If it prints a version number, you are good to go.',
                code: 'python --version',
                language: 'bash'
            },
            {
                title: 'Create Project',
                content: 'Create a folder for your project and a **Virtual Environment**. This keeps your project dependencies isolated from the system.',
                code: 'mkdir my_project\ncd my_project\npython -m venv venv',
                language: 'bash'
            },
            {
                title: 'Activate Environment',
                content: 'Activate the virtual environment. You will see `(venv)` appear in your terminal prompt.',
                code: '# Windows\n.\\venv\\Scripts\\activate\n\n# Mac/Linux\nsource venv/bin/activate',
                language: 'bash'
            },
            {
                title: 'Hello World',
                content: 'Create a file named `main.py` with `print("Hello World")` inside it, then run it.',
                code: 'python main.py',
                language: 'bash'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Easy to learn', 'Versatile', 'Great community'],
            cons: ['Slow execution speed (GIL)', 'Whitespace sensitive'],
            bestFor: ['Backend', 'AI/ML', 'Scripting'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'django', name: 'Django', relation: 'complementary' },
            { slug: 'fastapi', name: 'FastAPI', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Indentation',
                content: 'Python uses indentation to define code blocks, not curly braces `{}`. Be careful with tabs vs spaces!'
            }
        ]
    },
    {
        name: 'Java',
        slug: 'java',
        description: 'A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
        longDescription: 'Java is a robust, secure, and portable language used by millions of developers to build apps for everything from mobile phones to enterprise servers and supercomputers.',
        category: 'Backend',
        link: 'https://www.java.com',
        tags: ['Language', 'Enterprise', 'Backend'],
        features: ['Platform Independent', 'Strongly Typed', 'Multithreaded'],
        youtubeVideoId: 'l9AzO1FMgM8',
        setupVideoId: 'xTtL8E4LzTQ',
        steps: [
            {
                title: 'Download JDK',
                content: 'Install the Java Development Kit (JDK) to start building apps.',
                links: [{ text: 'Download JDK', url: 'https://www.oracle.com/java/technologies/downloads/', primary: true }]
            },
            {
                title: 'Verify Install',
                content: 'Check if Java is installed and added to your PATH.',
                code: 'java -version',
                language: 'bash'
            },
            {
                title: 'Write Code',
                content: 'Create a file named `HelloWorld.java`. The class name **must** match the filename.',
                code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
                language: 'java'
            },
            {
                title: 'Compile',
                content: 'Turn your human-readable code into bytecode that the JVM can understand.',
                code: 'javac HelloWorld.java',
                language: 'bash'
            },
            {
                title: 'Run',
                content: 'Run the compiled bytecode. Notice you do NOT include `.class` extension here.',
                code: 'java HelloWorld',
                language: 'bash'
            },
            {
                title: 'Pro Tip: Use an IDE',
                content: 'For real projects, use IntelliJ IDEA or VS Code. They handle compiling, classpaths, and running for you automatically.'
            }
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Robust', 'Scalable', 'Maintainable'],
            cons: ['Verbose', 'Complex setup'],
            bestFor: ['Enterprise', 'Android', 'Large Systems'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'spring-boot', name: 'Spring Boot', relation: 'complementary' },
            { slug: 'intellij-idea', name: 'IntelliJ IDEA', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'JVM',
                content: 'Java runs on the Java Virtual Machine. This means your compiled code (bytecode) can run on any device that has a JVM.'
            }
        ]
    },
    {
        name: 'Docker',
        slug: 'docker',
        description: 'OS-level virtualization to deliver software in packages called containers.',
        longDescription: 'Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development - desktop and cloud.',
        category: 'Deployment',
        link: 'https://www.docker.com',
        tags: ['DevOps', 'Containers', 'Virtualization'],
        features: ['Containers', 'Portability', 'Isolation'],
        youtubeVideoId: 'Gjnup-PuquQ',
        setupVideoId: 'gAkwW2tuIqE',
        steps: [
            {
                title: 'Install Docker Desktop',
                content: 'Download and install Docker Desktop for your OS.',
                links: [{ text: 'Download Docker', url: 'https://www.docker.com/products/docker-desktop/', primary: true }]
            },
            {
                title: 'Verify Install',
                content: 'Open your terminal and check the version to ensure Docker is running.',
                code: 'docker --version',
                language: 'bash'
            },
            {
                title: 'Run First Container',
                content: 'Run the standard "Hello World" image to test that your daemon can pull images from the cloud and run them.',
                code: 'docker run hello-world',
                language: 'bash'
            },
            {
                title: 'Run a Web Server',
                content: 'Run Nginx in detached mode (`-d`) and map port 8080 on your machine to port 80 in the container (`-p`). Visit `http://localhost:8080`.',
                code: 'docker run -d -p 8080:80 nginx',
                language: 'bash'
            },
            {
                title: 'Interactive Mode',
                content: 'Need to go inside a container? Use `-it` to get an interactive shell.',
                code: 'docker run -it ubuntu bash',
                language: 'bash'
            },
            {
                title: 'Docker Compose',
                content: 'For multi-container apps (e.g. App + Database), define them in a `docker-compose.yml` file and run them all at once.',
                code: 'docker-compose up',
                language: 'bash'
            }
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Works on my machine', 'Isolation', 'Industry Standard'],
            cons: ['Resource heavy (on some OS)', 'Learning curve'],
            bestFor: ['Microservices', 'Deployment', 'Dev Environments'],
            communitySupport: 'Massive',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'railway', name: 'Railway', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Volumes',
                content: 'Docker containers are ephemeral (data is lost when stopped). Use "Volumes" to persist data like database files.'
            },
            {
                title: 'Cleaning Up',
                content: 'Images and stopped containers take up space. Run `docker system prune` occasionally to clean up unused resources.'
            }
        ]
    },
    {
        name: 'Vue.js',
        slug: 'vue',
        description: 'The Progressive JavaScript Framework.',
        longDescription: 'Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model.',
        category: 'Frontend',
        link: 'https://vuejs.org',
        tags: ['Framework', 'JavaScript', 'Frontend'],
        features: ['declarative rendering', 'reactivity', 'component-based'],
        youtubeVideoId: 'nhBVL41-_Cw',
        setupVideoId: 'Kt2E8nblvXU',
        steps: [
            {
                title: 'Prerequisites',
                content: 'Ensure you have Node.js installed. It includes npm (Node Package Manager).',
                links: [{ text: 'Install Node.js', url: '/tool/nodejs', primary: false }]
            },
            {
                title: 'Install & Create Project',
                content: 'Run the official Vue creator to install and scaffold a new Vue project. It uses Vite under the hood.',
                code: 'npm create vue@latest',
                language: 'bash'
            },
            {
                title: 'Install Dependencies',
                content: 'Navigate into your new project folder and install the necessary packages.',
                code: 'cd <project-name>\nnpm install',
                language: 'bash'
            },
            {
                title: 'Run Dev Server',
                content: 'Start the development server. It will give you a local URL (usually `http://localhost:5173`) to open in your browser.',
                code: 'npm run dev',
                language: 'bash'
            },
            {
                title: 'Start Coding',
                content: 'Open `src/App.vue` in your editor. Make a change and save to see it update instantly (Hot Module Replacement).',
                code: '<template>\n  <h1>Hello Vue!</h1>\n</template>',
                language: 'html'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Easy to learn', 'Versatile', 'Great docs'],
            cons: ['Smaller ecosystem than React', 'Flexibility can be confusing'],
            bestFor: ['SPAs', 'Progressive enhancement'],
            communitySupport: 'Large',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'vite', name: 'Vite', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Vue DevTools',
                content: 'Just like React, install the Vue DevTools extension to inspect components and events.'
            }
        ]
    },
    // Productivity
    {
        name: 'ClickUp',
        slug: 'clickup',
        description: 'One app to replace them all. Tasks, Docs, and Goals.',
        longDescription: 'ClickUp is an all-in-one productivity platform that flexibly allows you to manage tasks, documents, goals, and chat in one place. It is highly customizable and scales from personal use to large enterprise teams.',
        category: 'Productivity',
        link: 'https://clickup.com',
        tags: ['Productivity', 'Project Management', 'Collaboration'],
        features: ['Task Management', 'Docs', 'Whiteboards', 'Automations'],
        youtubeVideoId: 'nU41rM7zZns',
        setupVideoId: '',
        steps: [
            {
                title: 'Create Workspace',
                content: 'Sign up and create your first workspace. This is the home for your entire organization.',
                links: [{ text: 'Sign Up', url: 'https://clickup.com', primary: true }]
            },
            {
                title: 'Define Hierarchy',
                content: 'Set up your Space, Folders, and Lists to organize your work.',
                code: 'Space: Engineering\nFolder: Frontend\nList: Sprint 1',
                language: 'text'
            },
            {
                title: 'Create Tasks',
                content: 'Add tasks to your lists. You can add assignees, due dates, and priorities.',
            },
            {
                title: 'Views',
                content: 'Visualize your work with different views like Board, Calendar, or Gantt.',
            }
        ],
        comparisonData: {
            learningCurve: 'High',
            pros: ['One app for everything', 'Highly customizable', 'Generous free tier'],
            cons: ['Overwhelming features', 'Can be slow'],
            bestFor: ['Team Management', 'Agile Projects', 'All-in-one workflows'],
            communitySupport: 'Massive',
            priceModel: 'Freemium'
        },
        additionalInfo: [
            {
                title: 'The Hierarchy',
                content: 'Space > Folder > List > Task. Understanding this hierarchy is the most important part of setting up ClickUp correctly.'
            }
        ]
    },
    // Testing
    {
        name: 'Postman',
        slug: 'postman',
        description: 'The platform for API development.',
        longDescription: 'Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster. It is the industry standard for testing and documenting APIs.',
        category: 'Testing',
        link: 'https://www.postman.com',
        tags: ['API', 'Testing', 'Development'],
        features: ['API Client', 'Automated Testing', 'Mock Servers', 'Documentation'],
        youtubeVideoId: 'ypKHnRmPOUk',
        steps: [
            {
                title: 'Download',
                content: 'Download the Postman desktop app for the best experience.',
                links: [{ text: 'Download Postman', url: 'https://www.postman.com/downloads/', primary: true }]
            },
            {
                title: 'Create Collection',
                content: 'Create a new collection to organize your API requests (e.g., "My App API").'
            },
            {
                title: 'Make Request',
                content: 'Create a "GET" request to an API endpoint and click "Send" to see the response.',
                code: 'GET https://jsonplaceholder.typicode.com/todos/1',
                language: 'text'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['User friendly UI', 'Powerful scripting', 'Great for collaboration'],
            cons: ['Heavy resource usage', 'Cloud features can be complex'],
            bestFor: ['API Testing', 'Backend Development'],
            communitySupport: 'Massive',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'nodejs', name: 'Node.js', relation: 'complementary' },
            { slug: 'express', name: 'Express.js', relation: 'complementary' },
            { slug: 'fastapi', name: 'FastAPI', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Environment Variables',
                content: 'Use environments to switch between localhost (Development) and production URLs without changing your request setup.'
            }
        ]
    },
    {
        name: 'TypeScript',
        slug: 'typescript',
        description: 'JavaScript with syntax for types.',
        longDescription: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It catches errors early in your editor, before you even run your code.',
        category: 'Frontend',
        link: 'https://www.typescriptlang.org',
        tags: ['Language', 'Microsoft', 'Type Safety'],
        features: ['Static Typing', 'Interfaces', 'Modern JavaScript Features', 'Great Tooling'],
        youtubeVideoId: 'zQnBQ4tB3ZA', // TypeScript in 100s
        setupVideoId: 'd56mG7DezGs', // TypeScript Course
        steps: [
            {
                title: 'Install',
                content: 'Install TypeScript globally or in your project via npm.',
                code: 'npm install -g typescript',
                language: 'bash',
                links: [{ text: 'TypeScript Docs', url: 'https://www.typescriptlang.org', primary: true }]
            },
            {
                title: 'Initialize',
                content: 'Create a `tsconfig.json` file to configure compiler options.',
                code: 'tsc --init',
                language: 'bash'
            },
            {
                title: 'Usage',
                content: 'Create a `.ts` file. You can now use types!',
                code: 'function greet(name: string) {\n  return "Hello, " + name;\n}',
                language: 'typescript'
            }
        ],
        comparisonData: {
            learningCurve: 'Medium',
            pros: ['Catches bugs early', 'Better refactoring', 'Self-documenting code'],
            cons: ['Setup configuration', 'Compilation step required'],
            bestFor: ['Large Projects', 'Teams', 'React/Node.js'],
            communitySupport: 'Massive',
            priceModel: 'Free'
        },
        relatedTools: [
            { slug: 'vscode', name: 'Visual Studio Code', relation: 'complementary' },
            { slug: 'react', name: 'React', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'The "any" type',
                content: 'Avoid using `any` as much as possible. It defeats the purpose of TypeScript. Use specific types or `unknown` instead.'
            }
        ]
    },
    // Productivity
    {
        name: 'Trello',
        slug: 'trello',
        description: 'Visual collaboration tool that creates a shared perspective on any project.',
        longDescription: 'Trello is a productivity powerhouse that uses boards, lists, and cards to help you organize and prioritize your projects in a fun, flexible, and rewarding way. Whether for work, a side project, or even the next family vacation, Trello helps your team stay organized.',
        category: 'Productivity',
        link: 'https://trello.com',
        tags: ['Productivity', 'Kanban', 'Management'],
        features: ['Kanban Boards', 'built-in automation (Butler)', 'Power-Ups', 'Checklists'],
        youtubeVideoId: '7dzILe6HlRM',
        setupVideoId: '',
        steps: [
            {
                title: 'Sign Up',
                content: 'Create a free account at Trello.com (owned by Atlassian).',
                links: [{ text: 'Go to Trello', url: 'https://trello.com', primary: true }]
            },
            {
                title: 'Create Board',
                content: 'Create a new Board. Give it a title (e.g., "Project Alpha") and a background color.',
            },
            {
                title: 'Add Lists',
                content: 'Create standard lists to track progress. The classic workflow is: To Do, Doing, Done.',
                code: 'To Do\nDoing\nDone',
                language: 'text'
            },
            {
                title: 'Add Cards',
                content: 'Add cards for tasks inside the "To Do" list. Click a card to add details, due dates, and members.',
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Extremely intuitive', 'Visual and fun', 'Great free tier'],
            cons: ['Can get cluttered', 'Limited reporting in free version'],
            bestFor: ['Small Teams', 'Personal Projects', 'Lightweight Agile'],
            communitySupport: 'Large',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'jira', name: 'Jira', relation: 'alternative' },
            { slug: 'slack', name: 'Slack', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'Power-Ups',
                content: 'Trello "Power-Ups" let you integrate with other tools like Google Drive, Slack, or add features like Calendars. You get unlimited Power-Ups even on the free plan now.'
            },
            {
                title: 'Keyboard Shortcuts',
                content: 'Hover over a card and press "Space" to assign yourself, or "d" to set a due date. Press "?" to see all shortcuts.'
            }
        ]
    },
    {
        name: 'Jira Software',
        slug: 'jira',
        description: 'The #1 software development tool used by agile teams.',
        longDescription: 'Jira Software is built for every member of your software team to plan, track, and release great software. It supports Scrum, Kanban, and mixed methodologies, providing deep visibility into your development pipeline.',
        category: 'Productivity',
        link: 'https://www.atlassian.com/software/jira',
        tags: ['Agile', 'Scrum', 'Enterprise', 'Issue Tracking'],
        features: ['Scrum Boards', 'Kanban Boards', 'Roadmaps', 'Agile Reporting'],
        youtubeVideoId: 'fiWaMGCMyk8',
        setupVideoId: '',
        steps: [
            {
                title: 'Create Account',
                content: 'Sign up for Atlassian Cloud. Jira is free for up to 10 users.',
                links: [{ text: 'Get Jira Free', url: 'https://www.atlassian.com/software/jira', primary: true }]
            },
            {
                title: 'Create Project',
                content: 'Choose a project template. For software teams, "Kanban" or "Scrum" are the standard choices.',
            },
            {
                title: 'Create Issues',
                content: 'Click "Create" to add tasks, bugs, or stories. Assign them to team members and set priorities.',
            },
            {
                title: 'Start Sprint',
                content: 'If using Scrum, move issues from the Backlog to the current Sprint and click "Start Sprint".',
            },
        ],
        comparisonData: {
            learningCurve: 'High',
            pros: ['Industry standard', 'Extremely powerful reporting', 'Deep integration with Bitbucket/GitHub'],
            cons: ['Can be slow/complex', 'Steep learning curve', 'Configuration hell'],
            bestFor: ['Agile Software Teams', 'Enterprise', 'Complex Workflows'],
            communitySupport: 'Massive',
            priceModel: 'Freemium'
        },
        relatedTools: [
            { slug: 'trello', name: 'Trello', relation: 'alternative' },
            { slug: 'github', name: 'GitHub', relation: 'complementary' }
        ],
        additionalInfo: [
            {
                title: 'JQL',
                content: 'Jira Query Language (JQL) allows you to filter issues with SQL-like precision. E.g., `assignee = currentUser() AND resolution is EMPTY`.'
            },
            {
                title: 'Automations',
                content: 'Use the Automation tab to create rules like "When all subtasks are done, move parent to Done". It saves hours of manual updating.'
            }
        ]
    }
];
