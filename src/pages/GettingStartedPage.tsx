import { GitBranch, Globe, Code2, Download, Cloud, PenTool, ListTodo, Layers, Database, Smartphone, Terminal } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export function GettingStartedPage() {
    // Helper to generate consistent card styles with dynamic colors
    const getCardStyles = (color: 'pink' | 'purple' | 'indigo' | 'emerald' | 'orange' | 'blue') => {
        const borderColors = {
            pink: 'hover:border-pink-500/30',
            purple: 'hover:border-purple-500/30',
            indigo: 'hover:border-indigo-500/30',
            emerald: 'hover:border-emerald-500/30',
            orange: 'hover:border-orange-500/30',
            blue: 'hover:border-blue-500/30',
        };
        const textColors = {
            pink: 'group-hover:text-pink-400',
            purple: 'group-hover:text-purple-400',
            indigo: 'group-hover:text-indigo-400',
            emerald: 'group-hover:text-emerald-400',
            orange: 'group-hover:text-orange-400',
            blue: 'group-hover:text-blue-400',
        };

        return {
            card: `block p-4 bg-neutral-900 border border-white/5 rounded-xl transition-all hover:bg-neutral-800/50 group h-full ${borderColors[color]}`,
            title: `font-semibold text-white mb-1 transition-colors ${textColors[color]}`,
            desc: "text-xs text-neutral-400 leading-relaxed"
        };
    };

    const steps = [
        {
            icon: <ListTodo className="w-6 h-6 text-pink-400" />,
            title: "1. Ideation & Planning",
            description: "Every great project starts with a plan. Organize your thoughts before writing code.",
            content: (
                <div className="space-y-4">
                    <p className="text-neutral-400">
                        Before you open your code editor, it's crucial to define what you're building. Use productivity tools to track features, bugs, and tasks.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <Link to="/tool/trello" className={getCardStyles('pink').card}>
                            <h4 className={getCardStyles('pink').title}>Trello</h4>
                            <p className={getCardStyles('pink').desc}>Simple Kanban boards for visual planning. Great for solo devs.</p>
                        </Link>
                        <Link to="/tool/jira" className={getCardStyles('pink').card}>
                            <h4 className={getCardStyles('pink').title}>Jira</h4>
                            <p className={getCardStyles('pink').desc}>Industry standard for agile teams. Powerful but complex.</p>
                        </Link>
                        <Link to="/tool/clickup" className={getCardStyles('pink').card}>
                            <h4 className={getCardStyles('pink').title}>ClickUp</h4>
                            <p className={getCardStyles('pink').desc}>All-in-one productivity platform for tasks, docs, and goals.</p>
                        </Link>
                    </div>
                </div>
            )
        },
        {
            icon: <PenTool className="w-6 h-6 text-purple-400" />,
            title: "2. Design & Prototyping",
            description: "Visualize your application to ensure a great user experience.",
            content: (
                <div className="space-y-4">
                    <p className="text-neutral-400">
                        Don't guess how your app should look. Design it. This saves countless hours of rewriting CSS later.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <Link to="/tool/figma" className={getCardStyles('purple').card}>
                            <h4 className={getCardStyles('purple').title}>Figma</h4>
                            <p className={getCardStyles('purple').desc}>The standard for interface design. Collaborative and free for starters.</p>
                        </Link>
                        <Link to="/tool/mobbin" className={getCardStyles('purple').card}>
                            <h4 className={getCardStyles('purple').title}>Mobbin</h4>
                            <p className={getCardStyles('purple').desc}>A huge library of real app screenshots for inspiration.</p>
                        </Link>
                        <Link to="/category/ai-mockup" className={getCardStyles('purple').card}>
                            <h4 className={getCardStyles('purple').title}>AI Mockup Tools</h4>
                            <p className={getCardStyles('purple').desc}>Tools like v0 and Lovable that generate UI code from prompts.</p>
                        </Link>
                    </div>
                </div>
            )
        },
        {
            icon: <Download className="w-6 h-6 text-indigo-400" />,
            title: "3. The Essentials (Prerequisites)",
            description: "Install the foundational tools used by developers worldwide.",
            content: (
                <div className="space-y-6">
                    <p className="text-neutral-400">
                        Regardless of what you build, you'll likely need these three core tools on your machine.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <Link to="/tool/nodejs" className={getCardStyles('indigo').card}>
                            <h4 className={getCardStyles('indigo').title}>Node.js</h4>
                            <p className={getCardStyles('indigo').desc}>The JavaScript runtime. Required for almost all modern web tooling.</p>
                        </Link>
                        <Link to="/tool/git" className={getCardStyles('indigo').card}>
                            <h4 className={getCardStyles('indigo').title}>Git</h4>
                            <p className={getCardStyles('indigo').desc}>Version control system to track changes and collaborate.</p>
                        </Link>
                        <Link to="/tool/vscode" className={getCardStyles('indigo').card}>
                            <h4 className={getCardStyles('indigo').title}>VS Code</h4>
                            <p className={getCardStyles('indigo').desc}>The most popular code editor. Extensible and lightweight.</p>
                        </Link>
                    </div>
                </div>
            )
        },
        {
            icon: <Layers className="w-6 h-6 text-emerald-400" />,
            title: "4. Initialize Your Project",
            description: "Choose your stack and start coding.",
            content: (
                <div className="space-y-6">
                    <p className="text-neutral-400">
                        Depending on what you want to build, the setup differs. Here are the common paths:
                    </p>

                    <div className="grid gap-4">
                        {/* Web Path */}
                        <div className="bg-neutral-900 border border-white/5 rounded-xl p-5">
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-emerald-400" /> Web Development
                            </h4>
                            <p className="text-sm text-neutral-400 mb-4">
                                Use a modern framework to build interactive sites.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                <Link to="/tool/react" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">React</Link>
                                <Link to="/tool/vue" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">Vue</Link>
                                <Link to="/tool/nextjs" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">Next.js</Link>
                            </div>
                        </div>

                        {/* Mobile Path */}
                        <div className="bg-neutral-900 border border-white/5 rounded-xl p-5">
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                <Smartphone className="w-4 h-4 text-emerald-400" /> Mobile Apps
                            </h4>
                            <p className="text-sm text-neutral-400 mb-4">
                                Build native apps for iOS and Android.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                <Link to="/tool/react-native" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">React Native</Link>
                                <Link to="/tool/expo" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">Expo</Link>
                                <Link to="/tool/flutter" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">Flutter</Link>
                            </div>
                        </div>

                        {/* Backend Path */}
                        <div className="bg-neutral-900 border border-white/5 rounded-xl p-5">
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                <Database className="w-4 h-4 text-emerald-400" /> Backend & Database
                            </h4>
                            <p className="text-sm text-neutral-400 mb-4">
                                Power your app with data and logic.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                <Link to="/tool/nodejs" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">Node.js</Link>
                                <Link to="/tool/python" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">Python</Link>
                                <Link to="/tool/postgresql" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">PostgreSQL</Link>
                                <Link to="/tool/firebase" className="bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-neutral-300 hover:text-white hover:border-emerald-500/50 transition-colors text-center">Firebase</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            icon: <GitBranch className="w-6 h-6 text-orange-400" />,
            title: "5. Version Control",
            description: "Save your progress and collaborate securely.",
            content: (
                <div className="space-y-6">
                    <p className="text-neutral-400">
                        You have two main ways to use Git: the Command Line (powerful, standard) or GitHub Desktop (easy, visual).
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link to="/tool/git" className={getCardStyles('orange').card}>
                            <h4 className={`${getCardStyles('orange').title} flex items-center gap-2`}>
                                <Terminal className="w-4 h-4" /> Git CLI
                            </h4>
                            <p className={getCardStyles('orange').desc}>The standard command line interface. Essential to learn for long-term career growth.</p>
                        </Link>
                        <Link to="/tool/github" className={getCardStyles('orange').card}>
                            <h4 className={`${getCardStyles('orange').title} flex items-center gap-2`}>
                                <Cloud className="w-4 h-4" /> GitHub Desktop
                            </h4>
                            <p className={getCardStyles('orange').desc}>A visual application that handles Git commands for you. Great for beginners.</p>
                        </Link>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-neutral-300 space-y-2 border border-white/5">
                        <p className="text-xs text-neutral-500 mb-2 border-b border-white/10 pb-2">Common Commands:</p>
                        <p><span className="text-orange-400">git</span> init</p>
                        <p><span className="text-orange-400">git</span> add .</p>
                        <p><span className="text-orange-400">git</span> commit -m "Initial commit"</p>
                        <p><span className="text-gray-500"># Then push to your GitHub repository</span></p>
                    </div>
                </div>
            )
        },
        {
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            title: "6. Deployment",
            description: "Share your creation with the world.",
            content: (
                <div className="space-y-4">
                    <p className="text-neutral-400">
                        Get a live URL for your project. The tool you need depends on your stack.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <Link to="/tool/vercel" className={getCardStyles('blue').card}>
                            <h4 className={getCardStyles('blue').title}>Vercel</h4>
                            <p className={getCardStyles('blue').desc}>Best for Frontend & Next.js. Zero config.</p>
                        </Link>
                        <Link to="/tool/netlify" className={getCardStyles('blue').card}>
                            <h4 className={getCardStyles('blue').title}>Netlify</h4>
                            <p className={getCardStyles('blue').desc}>Great for Static Sites & Jamstack.</p>
                        </Link>
                        <Link to="/tool/railway" className={getCardStyles('blue').card}>
                            <h4 className={getCardStyles('blue').title}>Railway</h4>
                            <p className={getCardStyles('blue').desc}>For Full Stack, Databases & Docker.</p>
                        </Link>
                        <Link to="/tool/docker" className={getCardStyles('blue').card}>
                            <h4 className={getCardStyles('blue').title}>Docker</h4>
                            <p className={getCardStyles('blue').desc}>Containerize everything for any cloud.</p>
                        </Link>
                    </div>
                </div>
            )
        }
    ];

    return (
        <Layout>
            <div className="relative isolate min-h-[50vh]">
                {/* Header Section */}
                <div className="bg-neutral-900/50 border-b border-white/5 py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                                <Cloud className="w-8 h-8 text-indigo-400" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            How to Start a Project
                        </h1>
                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                            From the first idea to the final deployment. A comprehensive guide to the modern software development lifecycle.
                        </p>
                    </div>
                </div>

                <div className="min-h-screen bg-neutral-950 pt-16 pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-12">
                                {steps.map((step, index) => (
                                    <div key={index} className="relative pl-8 sm:pl-12 group">
                                        {/* Vertical Line */}
                                        {index !== steps.length - 1 && (
                                            <div className="absolute left-[11px] sm:left-[19px] top-10 bottom-[-48px] w-0.5 bg-neutral-800 group-last:hidden" />
                                        )}

                                        {/* Icon Bubble */}
                                        <div className="absolute left-0 sm:left-2 top-0 bg-neutral-900 border border-neutral-800 rounded-full p-1.5 sm:p-2 z-10 shadow-xl">
                                            {step.icon}
                                        </div>

                                        <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900/80 transition-colors">
                                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                            <p className="text-neutral-400 mb-6 font-medium">{step.description}</p>
                                            {step.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 text-center bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8">
                                <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Ready to dive slightly deeper?</h3>
                                <p className="text-neutral-300 mb-6">Explore our curated tech stacks to see how these tools fit together in real-world scenarios.</p>
                                <Link
                                    to="/tech-stacks"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                                >
                                    View Tech Stacks
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
