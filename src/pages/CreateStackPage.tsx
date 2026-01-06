import { useState } from 'react';
import { Layout } from '../components/Layout';
import { tools } from '../data/tools';
import { motion } from 'framer-motion';
import { Check, Layers, Save, Database, Server, Globe, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export function CreateStackPage() {
    const [selectedFullStack, setSelectedFullStack] = useState<string | null>(null);
    const [selectedFrontend, setSelectedFrontend] = useState<string | null>(null);
    const [selectedBackend, setSelectedBackend] = useState<string | null>(null);
    const [selectedDatabase, setSelectedDatabase] = useState<string | null>(null);
    const [selectedArchitecture, setSelectedArchitecture] = useState<string | null>(null);

    // Deployment State
    const [selectedFullDeployment, setSelectedFullDeployment] = useState<string | null>(null);
    const [selectedFrontendDeployment, setSelectedFrontendDeployment] = useState<string | null>(null);
    const [selectedBackendDeployment, setSelectedBackendDeployment] = useState<string | null>(null);

    const [isStackCreated, setIsStackCreated] = useState(false);
    const [frontendType, setFrontendType] = useState<'Web' | 'Mobile'>('Web');

    // Tool Filtering considering additionalCategories
    const fullStackTools = tools.filter(t => t.category === 'Full Stack' || t.additionalCategories?.includes('Full Stack'));
    const frontendTools = tools.filter(t =>
        (t.category === (frontendType === 'Web' ? 'Frontend' : 'Mobile')) ||
        (frontendType === 'Web' ? t.additionalCategories?.includes('Frontend') : t.additionalCategories?.includes('Mobile'))
    );
    const backendTools = tools.filter(t => t.category === 'Backend' || t.additionalCategories?.includes('Backend'));
    const databaseTools = tools.filter(t => t.category === 'Database');
    const architectureTools = tools.filter(t => t.category === 'Architecture');

    // Filter Deployment Tools
    const fullDeploymentTools = tools.filter(t => t.deploymentTypes?.includes('full'));
    const frontendDeploymentTools = tools.filter(t => t.deploymentTypes?.includes('frontend'));
    const backendDeploymentTools = tools.filter(t => t.deploymentTypes?.includes('backend'));

    const handleFullStackSelect = (slug: string | null) => {
        setSelectedFullStack(slug);
        if (slug) {
            setSelectedFrontend(null);
            setSelectedBackend(null);
        }
    };

    const handleFullDeploymentSelect = (slug: string | null) => {
        setSelectedFullDeployment(slug);
        if (slug) {
            setSelectedFrontendDeployment(null);
            setSelectedBackendDeployment(null);
        }
    };

    const handleSplitDeploymentSelect = (type: 'frontend' | 'backend', slug: string | null) => {
        if (type === 'frontend') setSelectedFrontendDeployment(slug);
        if (type === 'backend') setSelectedBackendDeployment(slug);

        if (slug) {
            setSelectedFullDeployment(null);
        }
    };

    const sections = [
        {
            title: 'Full-Stack Framework',
            icon: Layers,
            tools: fullStackTools,
            selected: selectedFullStack,
            setSelected: handleFullStackSelect,
            disabled: !!(selectedFrontend || selectedBackend) // Just for visual feedback, though user requested opposite behavior mostly
        },
        {
            title: 'Frontend Framework',
            icon: Globe,
            tools: frontendTools,
            selected: selectedFrontend,
            setSelected: setSelectedFrontend,
            hasFilter: true,
            disabled: !!selectedFullStack
        },
        {
            title: 'Backend Framework',
            icon: Server,
            tools: backendTools,
            selected: selectedBackend,
            setSelected: setSelectedBackend,
            disabled: !!selectedFullStack
        },
        { title: 'Database', icon: Database, tools: databaseTools, selected: selectedDatabase, setSelected: setSelectedDatabase },
        { title: 'Architecture', icon: Box, tools: architectureTools, selected: selectedArchitecture, setSelected: setSelectedArchitecture },

        // Deployment Sections
        {
            title: 'Full Stack Deployment',
            icon: Layers,
            tools: fullDeploymentTools,
            selected: selectedFullDeployment,
            setSelected: handleFullDeploymentSelect,
            disabled: !!(selectedFrontendDeployment || selectedBackendDeployment)
        },
        {
            title: 'Frontend Deployment',
            icon: Globe,
            tools: frontendDeploymentTools,
            selected: selectedFrontendDeployment,
            setSelected: (slug: string | null) => handleSplitDeploymentSelect('frontend', slug),
            disabled: !!selectedFullDeployment
        },
        {
            title: 'Backend Deployment',
            icon: Server,
            tools: backendDeploymentTools,
            selected: selectedBackendDeployment,
            setSelected: (slug: string | null) => handleSplitDeploymentSelect('backend', slug),
            disabled: !!selectedFullDeployment
        },
    ];

    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);

    const handleCreateStack = () => {
        setIsStackCreated(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleGeneratePlan = async () => {
        setIsGenerating(true);
        try {
            const apiUrl = import.meta.env.VITE_API_URL || '';
            const response = await fetch(`${apiUrl}/api/generateStackPlan`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    stack: {
                        fullStack: selectedFullStack,
                        frontend: selectedFrontend,
                        backend: selectedBackend,
                        database: selectedDatabase,
                        architecture: selectedArchitecture,
                        deployment: {
                            full: selectedFullDeployment,
                            frontend: selectedFrontendDeployment,
                            backend: selectedBackendDeployment
                        }
                    }
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to generate plan');
            }

            setGeneratedPlan(data.plan);
        } catch (error) {
            console.error("Error generating plan:", error);
            // Fallback for demo/if firebase fails
            setGeneratedPlan(`
# Implementation Plan (Demo Mode)

Since the backend is not fully connected, here is a sample plan structure for your stack:

- **Stack Type**: ${selectedFullStack ? 'Full Stack Framework' : 'Separate Frontend & Backend'}
${selectedFullStack ? `- **Framework**: ${selectedFullStack}` : `- **Frontend**: ${selectedFrontend}\n- **Backend**: ${selectedBackend}`}
- **Database**: ${selectedDatabase}
- **Architecture**: ${selectedArchitecture}
- **Deployment**: ${selectedFullDeployment || `${selectedFrontendDeployment} (Frontend) + ${selectedBackendDeployment} (Backend)`}

## Next Steps
...
            `);
        } finally {
            setIsGenerating(false);
        }
    };

    if (isStackCreated) {
        return (
            <Layout>
                <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-3xl p-8 max-w-4xl w-full text-center shadow-2xl dark:shadow-none"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
                            <Check className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Your Stack is Ready!</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-8">Here is the technology stack you've selected.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
                            {[
                                ...(selectedFullStack
                                    ? [{ label: 'Full Stack', value: selectedFullStack }]
                                    : [
                                        { label: 'Frontend', value: selectedFrontend },
                                        { label: 'Backend', value: selectedBackend }
                                    ]
                                ),
                                { label: 'Database', value: selectedDatabase },
                                { label: 'Architecture', value: selectedArchitecture },
                                ...(selectedFullDeployment
                                    ? [{ label: 'Deployment', value: selectedFullDeployment }]
                                    : [
                                        { label: 'Frontend Deploy', value: selectedFrontendDeployment },
                                        { label: 'Backend Deploy', value: selectedBackendDeployment }
                                    ]
                                )
                            ].map((item) => {
                                const tool = tools.find(t => t.slug === item.value);
                                if (!item.value) return null;
                                return (
                                    <div key={item.label} className="bg-neutral-50 dark:bg-white/5 rounded-xl p-4 border border-neutral-200 dark:border-white/5">
                                        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{item.label}</p>
                                        <p className="text-lg font-medium text-neutral-900 dark:text-white">{tool?.name || 'Not selected'}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* generatedPlan section remains similar, just closed properly */}
                        {generatedPlan ? (
                            (() => {
                                const section2Header = "# Section 2: AI Scaffolding Plan (Copy & Paste this to your AI Assistant)";
                                const parts = generatedPlan.split(section2Header);

                                // If split was successful, we have at least 2 parts (part[0] is before section 2)
                                if (parts.length > 1) {
                                    const section1Header = "# Section 1: Prerequisites & Preparation (For the User)";
                                    const section1Content = parts[0].replace(section1Header, '').trim();
                                    const section2Content = parts[1].trim();

                                    return (
                                        <div className="mt-8 space-y-6">
                                            {/* Section 1: Prerequisites */}
                                            <div className="bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-2xl p-6 text-left">
                                                <div className="flex items-center gap-3 mb-4 border-b border-neutral-200 dark:border-white/10 pb-4">
                                                    <div className="p-2 rounded-lg bg-indigo-500/10">
                                                        <Check className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Prerequisites & Preparation</h3>
                                                </div>
                                                <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:text-neutral-600 dark:prose-p:text-neutral-300 prose-li:text-neutral-600 dark:prose-li:text-neutral-300 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-headings:text-neutral-900 dark:prose-headings:text-white">
                                                    <ReactMarkdown>{section1Content}</ReactMarkdown>
                                                </div>
                                            </div>

                                            {/* Section 2: AI Prompt */}
                                            <div className="bg-white dark:bg-black/30 border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden text-left">
                                                <div className="flex justify-between items-center p-4 bg-neutral-50 dark:bg-[#1a1a1a] border-b border-neutral-200 dark:border-white/10">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 rounded-lg bg-purple-500/10">
                                                            <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                                        </div>
                                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">AI Scaffolding Plan</h3>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => {
                                                                navigator.clipboard.writeText(section2Content);
                                                                alert("Scaffolding plan copied to clipboard!");
                                                            }}
                                                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
                                                        >
                                                            <Layers className="w-4 h-4" />
                                                            Copy Prompt
                                                        </button>
                                                        <button onClick={() => setGeneratedPlan(null)} className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
                                                            <span className="sr-only">Close</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5"><path d="M18 6 6 18" /><path d="m6 6 18 12" /></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="p-6 max-h-[500px] overflow-y-auto bg-neutral-50 dark:bg-black/50">
                                                    <pre className="whitespace-pre-wrap font-mono text-sm text-neutral-600 dark:text-neutral-300">
                                                        {section2Content}
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }

                                // Fallback if splitting fails (e.g. format changed) - Keeps Light/Dark support
                                return (
                                    <div className="mt-8 text-left bg-neutral-100 dark:bg-black/30 p-6 rounded-xl border border-neutral-200 dark:border-white/10 max-h-[600px] overflow-y-auto prose prose-neutral dark:prose-invert max-w-none relative">
                                        <div className="flex justify-between items-center mb-4 sticky top-0 bg-neutral-100 dark:bg-[#1a1a1a] z-10 py-2 border-b border-neutral-200 dark:border-white/10">
                                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white m-0">Implementation Plan</h3>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(generatedPlan);
                                                        alert("Full plan copied to clipboard!");
                                                    }}
                                                    className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-medium transition-colors"
                                                >
                                                    <div className="p-1.5 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20">
                                                        <Layers className="w-4 h-4" />
                                                    </div>
                                                    Copy Full Plan
                                                </button>
                                                <button onClick={() => setGeneratedPlan(null)} className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white text-sm">Close</button>
                                            </div>
                                        </div>
                                        <div className="whitespace-pre-wrap font-mono text-sm text-neutral-600 dark:text-neutral-300">
                                            {generatedPlan}
                                        </div>
                                    </div>
                                );
                            })()
                        ) : (
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => setIsStackCreated(false)}
                                    className="px-6 py-3 rounded-full bg-neutral-200 dark:bg-white/5 text-neutral-900 dark:text-white font-medium hover:bg-neutral-300 dark:hover:bg-white/10 transition-colors"
                                >
                                    Edit Stack
                                </button>
                                <button
                                    onClick={handleGeneratePlan}
                                    disabled={isGenerating}
                                    className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors disabled:opacity-50 flex items-center gap-2"
                                >
                                    {isGenerating ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                            Generating...
                                        </>
                                    ) : (
                                        <>
                                            <Layers className="w-4 h-4" />
                                            Generate Plan
                                        </>
                                    )}
                                </button>
                            </div>
                        )}

                        {!generatedPlan && (
                            <div className="mt-6">
                                <Link
                                    to="/tech-stacks"
                                    className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm"
                                >
                                    Explore More Stacks
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen pt-24 pb-12 bg-white dark:bg-neutral-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Create Your Own Stack</h1>
                            <p className="text-neutral-600 dark:text-gray-400 text-lg">Select your preferred tools to build your perfect development environment.</p>
                        </div>

                        <div className="space-y-12">
                            {sections.map((section, idx) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-none"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-indigo-500/10">
                                                <section.icon className="w-6 h-6 text-indigo-400" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{section.title}</h2>
                                        </div>

                                        {/* @ts-ignore */}
                                        {section.hasFilter && (
                                            <div className="bg-neutral-100 dark:bg-white/5 p-1 rounded-lg flex items-center gap-1">
                                                {(['Web', 'Mobile'] as const).map((type) => (
                                                    <button
                                                        key={type}
                                                        onClick={() => setFrontendType(type)}
                                                        className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${frontendType === type
                                                            ? 'bg-indigo-600 text-white shadow-lg'
                                                            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/5'
                                                            }`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* @ts-ignore */}
                                    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ${section.disabled ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                                        {section.tools.length > 0 ? (
                                            section.tools.map((tool) => (
                                                <button
                                                    key={tool.slug}
                                                    onClick={() => section.setSelected(tool.slug === section.selected ? null : tool.slug)}
                                                    className={`relative p-4 rounded-xl border text-left transition-all ${section.selected === tool.slug
                                                        ? 'bg-indigo-600/20 border-indigo-500 ring-1 ring-indigo-500'
                                                        : 'bg-white dark:bg-white/5 border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/10'
                                                        }`}
                                                >
                                                    <div className="font-medium text-neutral-900 dark:text-white mb-1 truncate">{tool.name}</div>
                                                    {section.selected === tool.slug && (
                                                        <div className="absolute top-2 right-2">
                                                            <Check className="w-4 h-4 text-indigo-400" />
                                                        </div>
                                                    )}
                                                </button>
                                            ))
                                        ) : (
                                            <div className="col-span-full text-gray-500 italic pb-2">
                                                No specific tools listed for this category yet.
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-end">
                            <button
                                onClick={handleCreateStack}
                                disabled={!(selectedFullStack || (selectedFrontend && selectedBackend)) || !selectedDatabase || !selectedArchitecture || !(selectedFullDeployment || (selectedFrontendDeployment && selectedBackendDeployment))}
                                className="flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20"
                            >
                                <Save className="w-5 h-5" />
                                Create My Stack
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
