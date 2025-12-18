import { GitBranch, Terminal, Globe, Code2, Download, Cloud } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export function GettingStartedPage() {
    const steps = [
        {
            icon: <Download className="w-6 h-6 text-indigo-400" />,
            title: "1. The Essentials (Prerequisites)",
            description: "Before we write any code, we need to install the tools of the trade.",
            content: (
                <div className="space-y-6">
                    <p className="text-neutral-400">
                        You need three main things installed on your computer:
                    </p>
                    <ul className="space-y-4">
                        <li className="bg-neutral-900 rounded-lg p-4 border border-white/5">
                            <h4 className="font-semibold text-white mb-1">Node.js</h4>
                            <p className="text-sm text-neutral-400 mb-2">The engine that allows you to run JavaScript outside of the browser.</p>
                            <a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">Download Node.js (LTS version) &rarr;</a>
                        </li>
                        <li className="bg-neutral-900 rounded-lg p-4 border border-white/5">
                            <h4 className="font-semibold text-white mb-1">Git</h4>
                            <p className="text-sm text-neutral-400 mb-2">The version control system that tracks changes in your code.</p>
                            <a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium mr-4">Download Git &rarr;</a>
                            <Link to="/tool/git" className="text-xs text-neutral-500 hover:text-white">Learn more about Git</Link>
                        </li>
                        <li className="bg-neutral-900 rounded-lg p-4 border border-white/5">
                            <h4 className="font-semibold text-white mb-1">Visual Studio Code (VS Code)</h4>
                            <p className="text-sm text-neutral-400 mb-2">The editor where you will actually write your code.</p>
                            <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium mr-4">Download VS Code &rarr;</a>
                            <Link to="/tool/vscode" className="text-xs text-neutral-500 hover:text-white">Learn more about VS Code</Link>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            icon: <Cloud className="w-6 h-6 text-blue-400" />,
            title: "2. Create a GitHub Account",
            description: "Your cloud storage for code.",
            content: (
                <div className="space-y-4">
                    <p className="text-neutral-400">
                        GitHub is where developers host and share their projects. If you don't have an account yet, create one now.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/signup" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-white text-neutral-900 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors">
                            Sign Up for GitHub
                        </a>
                        <Link to="/tool/github" className="text-sm text-neutral-500 hover:text-white">What is GitHub?</Link>
                    </div>
                </div>
            )
        },
        {
            icon: <GitBranch className="w-6 h-6 text-purple-400" />,
            title: "3. Connect Your Computer",
            description: "Choose how you want to interact with GitHub.",
            content: (
                <div className="space-y-6">
                    <p className="text-neutral-400">
                        You can use a graphical app (recommended for beginners) or the command line.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Option A: GitHub Desktop */}
                        <div className="bg-neutral-900/80 border border-indigo-500/30 rounded-xl p-5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-2 py-1 rounded-bl-lg font-bold">EASIEST</div>
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                <MonitorIcon className="w-4 h-4" /> Option A: GitHub Desktop
                            </h4>
                            <ol className="list-decimal list-inside text-sm text-neutral-400 space-y-2 mb-4">
                                <li><a href="https://desktop.github.com/" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">Download & Install GitHub Desktop</a>.</li>
                                <li>Open the app and click <strong>Sign in to GitHub.com</strong>.</li>
                                <li>Follow the browser prompt to authorize.</li>
                            </ol>
                            <p className="text-xs text-neutral-500">No command line needed!</p>
                        </div>

                        {/* Option B: Terminal */}
                        <div className="bg-neutral-900 border border-white/5 rounded-xl p-5">
                            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                <Terminal className="w-4 h-4" /> Option B: Terminal
                            </h4>
                            <p className="text-sm text-neutral-400 mb-3">Open your terminal (Command Prompt or PowerShell on Windows) and tell Git who you are:</p>
                            <div className="bg-black rounded p-3 font-mono text-xs text-neutral-300 space-y-2 overflow-x-auto">
                                <p>git config --global user.name "Your Name"</p>
                                <p>git config --global user.email "you@example.com"</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            icon: <Code2 className="w-6 h-6 text-emerald-400" />,
            title: "4. Create & Run a Project",
            description: "Let's get a real React project running on your machine.",
            content: (
                <div className="space-y-6">
                    <p className="text-neutral-400">
                        We will use <strong>Vite</strong> to create a project quickly.
                    </p>

                    <div className="bg-neutral-900 rounded-lg p-5 border border-white/5">
                        <h4 className="text-white font-medium mb-3">Steps:</h4>
                        <ol className="list-decimal list-inside text-neutral-400 space-y-4 text-sm">
                            <li>
                                Create a folder on your computer for your projects (e.g., <code className="bg-black px-1 py-0.5 rounded text-neutral-300">Documents/Code</code>).
                            </li>
                            <li>
                                Open that folder in <strong>VS Code</strong> (File &gt; Open Folder).
                            </li>
                            <li>
                                Open the built-in terminal in VS Code:
                                <br />
                                <span className="inline-block mt-2 bg-neutral-800 text-white px-2 py-1 rounded text-xs select-all">Terminal &gt; New Terminal</span> or press <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-white text-xs">Ctrl + `</kbd>
                            </li>
                            <li>
                                Type the following command and press Enter:
                                <div className="mt-2 bg-black p-3 rounded font-mono text-neutral-300 select-all">
                                    npm create vite@latest my-first-app -- --template react
                                </div>
                            </li>
                            <li>
                                Follow the instructions in the terminal to enter the folder and start the server:
                                <div className="mt-2 bg-black p-3 rounded font-mono text-neutral-300">
                                    <p>cd my-first-app</p>
                                    <p>npm install</p>
                                    <p>npm run dev</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-lg flex gap-3 items-start">
                        <div className="bg-emerald-500/20 p-1.5 rounded-full mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                            <h5 className="text-sm font-semibold text-emerald-400">Success!</h5>
                            <p className="text-sm text-emerald-200/80 mt-1">
                                You should see a "Local" URL (like <span className="font-mono">http://localhost:5173</span>). Ctrl+Click it to open your new app in the browser.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            icon: <Globe className="w-6 h-6 text-orange-400" />,
            title: "5. Publish to the World",
            description: "Get a live link to share with friends.",
            content: (
                <div className="space-y-6">
                    <p className="text-neutral-400">
                        Now that your app works locally, let's put it online.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-neutral-900 p-4 rounded-lg border border-white/5">
                            <h4 className="text-white font-medium mb-2">Step A: Push to GitHub</h4>
                            <p className="text-sm text-neutral-400 mb-3">
                                If you are using <strong>GitHub Desktop</strong>:
                            </p>
                            <ol className="list-decimal list-inside text-sm text-neutral-400 space-y-1 mb-3">
                                <li>In GitHub Desktop, go to <strong>File &gt; Add Local Repository</strong> and select your <code className="text-xs">my-first-app</code> folder.</li>
                                <li>Click "Create a repository" if prompted.</li>
                                <li>Add a summary (e.g., "Initial commit") and click <strong>Commit to main</strong>.</li>
                                <li>Click <strong>Publish repository</strong> to send it to GitHub.com.</li>
                            </ol>
                        </div>

                        <div className="bg-neutral-900 p-4 rounded-lg border border-white/5">
                            <h4 className="text-white font-medium mb-2">Step B: Deploy on Vercel</h4>
                            <p className="text-sm text-neutral-400 mb-3">
                                Vercel is the easiest way to deploy React apps.
                            </p>
                            <ol className="list-decimal list-inside text-sm text-neutral-400 space-y-1">
                                <li>Go to <a href="https://vercel.com" className="text-indigo-400 hover:underline">Vercel.com</a> and sign up with GitHub.</li>
                                <li>Click <strong>Add New &gt; Project</strong>.</li>
                                <li>You should see your <code className="text-xs">my-first-app</code> repository. Click <strong>Import</strong>.</li>
                                <li>Click <strong>Deploy</strong>. Wait a minute, and you will get a live URL!</li>
                            </ol>
                            <div className="mt-3 flex gap-4">
                                <Link to="/tool/vercel" className="text-xs text-neutral-500 hover:text-white">Read more about Vercel</Link>
                                <Link to="/tool/netlify" className="text-xs text-neutral-500 hover:text-white">Or try Netlify</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <Layout>
            <div className="min-h-screen bg-neutral-950 pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                                Your First Web Project
                            </h1>
                            <p className="text-lg text-neutral-400">
                                A beginner-friendly guide to setting up your environment and building your first website.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="relative pl-8 sm:pl-12 group">
                                    {/* Vertical Line */}
                                    {index !== steps.length - 1 && (
                                        <div className="absolute left-[11px] sm:left-[19px] top-10 bottom-[-48px] w-0.5 bg-neutral-800 group-last:hidden" />
                                    )}

                                    {/* Icon Bubble */}
                                    <div className="absolute left-0 sm:left-2 top-0 bg-neutral-900 border border-neutral-800 rounded-full p-1.5 sm:p-2 z-10">
                                        {step.icon}
                                    </div>

                                    <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900/80 transition-colors">
                                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                        <p className="text-neutral-400 mb-6">{step.description}</p>
                                        {step.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">You did it! 🎉</h3>
                            <p className="text-neutral-300 mb-6">You now have a real development environment set up. This is how the pros do it.</p>
                            <a
                                href="/categories"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                            >
                                Explore Tools & Technologies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function MonitorIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
    )
}

function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
