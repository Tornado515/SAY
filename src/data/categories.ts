import {
    Code,
    Smartphone,
    Brain,
    Palette,
    Database,
    Server,
    GitBranch,
    Layers,
    MessageSquare,
    TestTube,
    CheckSquare,
    Workflow
} from 'lucide-react';


export interface CategoryMetadata {
    title: string;
    description: string;
    icon: any;
    color: string;
    bg: string;
    slug: string;
}

export const categoryMetadata: Record<string, CategoryMetadata> = {
    'Frontend': {
        title: 'Frontend Frameworks',
        slug: 'frontend',
        icon: Code,
        description: 'Tools and libraries for building user interfaces and interactive web experiences. Includes React, Vue, Next.js, and scaling solutions.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10'
    },
    'Mobile': {
        title: 'Mobile Development',
        slug: 'mobile',
        icon: Smartphone,
        description: 'Frameworks for building native applications for iOS and Android. Build once and deploy everywhere with tools like React Native and Flutter.',
        color: 'text-green-400',
        bg: 'bg-green-400/10'
    },
    'AI Coding': {
        title: 'AI Coding Tools',
        slug: 'ai-coding',
        icon: Brain,
        description: 'Intelligent assistants that help you write, debug, and understand code faster. Featuring Cursor, Copilot, and more.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10'
    },
    'AI Chatbots': {
        title: 'AI Chatbots',
        slug: 'ai-chatbots',
        icon: MessageSquare,
        description: 'General purpose AI assistants for coding, research, brainstorming, and writing. Includes ChatGPT, Claude, Gemini, and more.',
        color: 'text-teal-400',
        bg: 'bg-teal-400/10'
    },
    'AI Mockup': {
        title: 'AI Mockup & UI',
        slug: 'ai-mockup',
        icon: Palette,
        description: 'Generative AI tools that turn text descriptions into visual designs and code components instantly.',
        color: 'text-pink-400',
        bg: 'bg-pink-400/10'
    },
    'Backend': {
        title: 'Backend Frameworks',
        slug: 'backend',
        icon: Server,
        description: 'Server-side technologies for building robust APIs, microservices, and handling business logic.',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10'
    },
    'Database': {
        title: 'Databases',
        slug: 'database',
        icon: Database,
        description: 'Scalable data storage solutions including SQL (Postgres), NoSQL, and Backend-as-a-Service platforms like Firebase.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10'
    },
    'Version Control': {
        title: 'Version Control',
        slug: 'version-control',
        icon: GitBranch,
        description: 'Essential tools for tracking code changes, collaborating with teams, and managing project history.',
        color: 'text-red-400',
        bg: 'bg-red-400/10'
    },
    'Deployment': {
        title: 'Deployment & DevOps',
        slug: 'deployment',
        icon: Layers,
        description: 'Platforms and tools to build, ship, and host your applications with ease. Vercel, Netlify, and modern cloud infrastructure.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10'
    },
    'IDE': {
        title: 'Text Editors & IDEs',
        slug: 'ide',
        icon: Code,
        description: 'Integrated Development Environments and code editors to write, debug, and manage your code efficiently.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-400/10'
    },
    'Design': {
        title: 'Design & Prototyping',
        slug: 'design',
        icon: Palette,
        description: 'Tools for UI/UX design, wireframing, and creating high-fidelity prototypes before you write a single line of code.',
        color: 'text-pink-400',
        bg: 'bg-pink-400/10'
    },
    'Testing': {
        title: 'Testing & QA',
        slug: 'testing',
        icon: TestTube,
        description: 'Frameworks and utilities for ensuring code quality, running unit tests, and preventing bugs before deployment.',
        color: 'text-rose-400',
        bg: 'bg-rose-400/10'
    },
    'Productivity': {
        title: 'Productivity & Planning',
        slug: 'productivity',
        icon: CheckSquare,
        description: 'Tools to manage tasks, track progress, and organize your development workflow effectively.',
        color: 'text-sky-400',
        bg: 'bg-sky-400/10'
    },
    'Full Stack': {
        title: 'Full Stack Frameworks',
        slug: 'full-stack',
        icon: Layers,
        description: 'Comprehensive frameworks that handle both client and server-side logic, enabling complete application development.',
        color: 'text-violet-400',
        bg: 'bg-violet-400/10'
    },
    'Architecture': {
        title: 'System Architecture',
        slug: 'architecture',
        icon: Workflow,
        description: 'Tools for designing system structure, documenting infrastructure, and planning scalable solutions.',
        color: 'text-slate-400',
        bg: 'bg-slate-400/10'
    }
};
