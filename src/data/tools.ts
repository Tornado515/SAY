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
    category: 'Frontend' | 'Mobile' | 'AI Coding' | 'AI Mockup' | 'Deployment' | 'Testing' | 'Design' | 'Database' | 'Backend' | 'Version Control' | 'IDE' | 'AI Chatbots';
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        youtubeVideoId: 'OK_JCtrrv-c',
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
        name: 'Laravel',
        slug: 'laravel',
        description: 'The PHP Framework for Web Artisans.',
        longDescription: 'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.',
        category: 'Backend',
        link: 'https://laravel.com',
        tags: ['Framework', 'PHP', 'MVC'],
        features: ['Eloquent ORM', 'Blade Templating', 'Migrations', 'Queues'],
        youtubeVideoId: 'ImtZ5yENzgE', // Laravel in 100s
        setupVideoId: '3CNjnZ1F6iQ', // Laravel 11 Tutorial
        steps: [
            {
                title: 'Install Installer',
                content: 'Install the Laravel Installer globally via Composer.',
                code: 'composer global require laravel/installer',
                language: 'bash'
            },
            {
                title: 'New Project',
                content: 'Create a new Laravel project.',
                code: 'laravel new my-app',
                language: 'bash'
            },
            {
                title: 'Serve',
                content: 'Run the local development server.',
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
        youtubeVideoId: '7S_tz1z_5bA',
        steps: [
            {
                title: 'Install',
                content: 'Install via MySQL Installer (Windows) or Homebrew (Mac). often included with XAMPP.',
                links: [{ text: 'Download MySQL', url: 'https://dev.mysql.com/downloads/installer/', primary: true }]
            },
            {
                title: 'Connect',
                content: 'Use MySQL Workbench or CLI.',
                code: 'mysql -u root -p',
                language: 'bash'
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
        steps: [
            {
                title: 'Prerequisites',
                content: 'You need Node.js installed. For iOS development, you need a Mac with Xcode. For Android, you need Android Studio.',
                links: [{ text: 'Environment Setup Guide', url: 'https://reactnative.dev/docs/environment-setup', primary: true }]
            },
            {
                title: 'Initialize CLI Project',
                content: 'Create a new React Native project using the community CLI.',
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
            cons: ['Complex upgrade process', 'Bridge performance bottlenecks'],
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
        youtubeVideoId: 'FDRyk0Wcpo8',
        steps: [
            {
                title: 'Install CLI',
                content: 'Create a new Expo project. This is the easiest way to start with React Native.',
                code: 'npx create-expo-app@latest my-app',
                language: 'bash'
            },
            {
                title: 'Run on Device',
                content: 'Start the development server.',
                code: 'npx expo start',
                language: 'bash'
            },
            {
                title: 'Preview',
                content: 'Download the "Expo Go" app on your iOS or Android phone and scan the QR code from the terminal to run your app instantly.',
                links: [{ text: 'Get Expo Go', url: 'https://expo.dev/client', primary: true }]
            },
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Easiest way to build React Native', 'Over-the-air updates (EAS)', 'No native code linking'],
            cons: ['Limited native module support (historically)', 'EAS Build can cost money'],
            bestFor: ['Rapid Mobile Dev', 'Startups'],
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
        setupVideoId: 'ofme2o29ngu', // MongoDB Crash Course
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
        }
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
        }
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
        youtubeVideoId: 'sKFLI5FOOHs',
        setupVideoId: '9zdvmgGSww0', // Firebase setup

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
        }
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
        youtubeVideoId: 'zZ2CqYUavKc',
        setupVideoId: 'I7h5a73L21E', // Supabase Crash Course

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
        }
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
        youtubeVideoId: 'zw4s3Ey8yoU',
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
        }
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
        }
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
        youtubeVideoId: 'DyqjD7kcdR0',
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
        }
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
        youtubeVideoId: '4iH5t1gC30M',
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
        }
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
        youtubeVideoId: 'p28O00y68eA',
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
        }
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
        steps: [
            {
                title: 'Sign Up',
                content: 'Create an account at OpenAI.'
            },
            {
                title: 'Start Chatting',
                content: 'Type your question or prompt in the input box.'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Extremely versatile', 'Large knowledge base', 'Easy to use'],
            cons: ['Can hallucinate facts', 'Limited context window in free tier'],
            bestFor: ['General coding help', 'Brainstorming', 'Writing'],
            communitySupport: 'Massive global user base',
            priceModel: 'Freemium'
        }
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
        steps: [
            {
                title: 'Sign Up',
                content: 'Create an account at Anthropic.'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Huge context window', 'Natural writing style', 'Fewer refusals on safe topics'],
            cons: ['Smaller ecosystem than OpenAI', 'Rate limits on free tier'],
            bestFor: ['Analyzing large files', 'Creative writing', 'Complex reasoning'],
            communitySupport: 'Growing rapidly',
            priceModel: 'Freemium'
        }
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
        steps: [
            {
                title: 'Login',
                content: 'Use your Google account to access Gemini.'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Deep integration with Google ecosystem', 'Multimodal capabilities', 'Fast'],
            cons: ['Can be inconsistent', 'Interface changes frequently'],
            bestFor: ['Multimodal tasks', 'Google Workspace users'],
            communitySupport: 'Large (Google ecosystem)',
            priceModel: 'Freemium'
        }
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
        steps: [
            {
                title: 'Ask a Question',
                content: 'Type your query to get a sourced answer.'
            }
        ],
        comparisonData: {
            learningCurve: 'Low',
            pros: ['Real-time web access', 'Cites sources', 'Great for research'],
            cons: ['Less creative than ChatGPT', 'Coding capabilities vary'],
            bestFor: ['Research', 'Finding specific information', 'Fact checking'],
            communitySupport: 'Growing',
            priceModel: 'Freemium'
        }
    }
];
