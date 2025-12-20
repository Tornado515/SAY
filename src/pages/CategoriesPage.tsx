import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
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
    CheckSquare
} from 'lucide-react';
import { tools } from '../data/tools';

// Map category names (from tools.ts) to slugs and display metadata
const categoryMetadata: Record<string, {
    title: string;
    description: string;
    icon: any;
    color: string;
    bg: string;
    slug: string;
}> = {
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
    }
};

export function CategoriesPage() {
    // Dynamically extract unique categories from tools, but also ensure all defined metadata categories are shown
    const definedCategories = Object.keys(categoryMetadata);
    const toolCategories = tools.map(tool => tool.category);
    const uniqueCategories = Array.from(new Set([...definedCategories, ...toolCategories]));

    // Process categories to get display data
    const categoriesToDisplay = uniqueCategories.map(catKey => {
        // Direct match in metadata
        if (categoryMetadata[catKey]) {
            return categoryMetadata[catKey];
        }

        // Fallback for new/unknown categories
        const slug = catKey.toLowerCase().replace(/\s+/g, '-');
        return {
            title: catKey,
            slug: slug,
            icon: Layers, // Generic icon
            description: `Explore tools in the ${catKey} category.`,
            color: 'text-gray-400',
            bg: 'bg-gray-400/10'
        };
    }).sort((a, b) => {
        // Optional: define a specific sort order, or just sort alphabetically
        // For now, let's keep the order roughly as they appear or just alphabetically by title
        return a.title.localeCompare(b.title);
    });

    return (
        <Layout>
            <div className="py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <Link
                            to="/tools"
                            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Tools
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                                Explore Categories
                            </h1>
                            <p className="text-lg text-neutral-400 max-w-2xl">
                                Browse our curated directory by category to find the perfect tools for every part of your stack.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categoriesToDisplay.map((category, index) => (
                            <motion.div
                                key={category.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/category/${category.slug}`}
                                    className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10"
                                >
                                    <div className={`mb-4 inline-flex items-center justify-center rounded-xl p-3 ${category.bg} ${category.color} ring-1 ring-inset ring-white/5`}>
                                        <category.icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                        {category.title}
                                    </h3>

                                    <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-grow">
                                        {category.description}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-neutral-500 group-hover:text-indigo-400 transition-colors mt-auto">
                                        Browse Tools <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
