import { useState } from 'react';
import { Layout } from '../components/Layout';
import { tools } from '../data/tools';
import { motion } from 'framer-motion';
import { Check, Layers, Save, Database, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CreateStackPage() {
    const [selectedFrontend, setSelectedFrontend] = useState<string | null>(null);
    const [selectedBackend, setSelectedBackend] = useState<string | null>(null);
    const [selectedDatabase, setSelectedDatabase] = useState<string | null>(null);
    const [selectedDeployment, setSelectedDeployment] = useState<string | null>(null);
    const [isStackCreated, setIsStackCreated] = useState(false);
    const [frontendType, setFrontendType] = useState<'Web' | 'Mobile'>('Web');

    const frontendTools = tools.filter(t => t.category === (frontendType === 'Web' ? 'Frontend' : 'Mobile'));
    const backendTools = tools.filter(t => t.category === 'Backend');
    const databaseTools = tools.filter(t => t.category === 'Database');
    const deploymentTools = tools.filter(t => t.category === 'Deployment');

    const sections = [
        { 
            title: 'Frontend', 
            icon: Globe, 
            tools: frontendTools, 
            selected: selectedFrontend, 
            setSelected: setSelectedFrontend,
            hasFilter: true
        },
        { title: 'Backend', icon: Server, tools: backendTools, selected: selectedBackend, setSelected: setSelectedBackend },
        { title: 'Database', icon: Database, tools: databaseTools, selected: selectedDatabase, setSelected: setSelectedDatabase },
        { title: 'Deployment', icon: Layers, tools: deploymentTools, selected: selectedDeployment, setSelected: setSelectedDeployment },
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
            // Dynamically import to avoid load issues if firebase isn't set up
            const { functions } = await import('../lib/firebase');
            const { httpsCallable } = await import('firebase/functions');
            
            const generateStackPlan = httpsCallable(functions, 'generateStackPlan');
            
            const result = await generateStackPlan({
                stack: {
                    frontend: selectedFrontend,
                    backend: selectedBackend,
                    database: selectedDatabase,
                    deployment: selectedDeployment
                }
            });

            // @ts-ignore
            setGeneratedPlan(result.data.plan);
        } catch (error) {
            console.error("Error generating plan:", error);
            // Fallback for demo/if firebase fails
            setGeneratedPlan(`
# Implementation Plan (Demo Mode)

Since the backend is not fully connected, here is a sample plan structure for your stack:

- **Frontend**: ${selectedFrontend}
- **Backend**: ${selectedBackend}
- **Database**: ${selectedDatabase}
- **Deployment**: ${selectedDeployment}

## Next Steps
1. Configure your Firebase project keys in \`src/lib/firebase.ts\`.
2. Deploy the cloud function in \`functions/index.js\`.
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
                        className="bg-neutral-900 border border-white/10 rounded-3xl p-8 max-w-4xl w-full text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
                            <Check className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Your Stack is Ready!</h2>
                        <p className="text-neutral-400 mb-8">Here is the technology stack you've selected.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
                            {[
                                { label: 'Frontend', value: selectedFrontend },
                                { label: 'Backend', value: selectedBackend },
                                { label: 'Database', value: selectedDatabase },
                                { label: 'Deployment', value: selectedDeployment }
                            ].map((item) => {
                                const tool = tools.find(t => t.slug === item.value);
                                return (
                                    <div key={item.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{item.label}</p>
                                        <p className="text-lg font-medium text-white">{tool?.name || 'Not selected'}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {generatedPlan ? (
                             <div className="mt-8 text-left bg-black/30 p-6 rounded-xl border border-white/10 max-h-[600px] overflow-y-auto prose prose-invert max-w-none">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-white m-0">Implementation Plan</h3>
                                    <button onClick={() => setGeneratedPlan(null)} className="text-neutral-400 hover:text-white text-sm">Close</button>
                                </div>
                                <div className="whitespace-pre-wrap font-mono text-sm text-neutral-300">
                                    {generatedPlan}
                                </div>
                             </div>
                        ) : (
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => setIsStackCreated(false)}
                                    className="px-6 py-3 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors"
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
                                    className="text-neutral-500 hover:text-white transition-colors text-sm"
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
            <div className="min-h-screen pt-24 pb-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-white mb-4">Create Your Own Stack</h1>
                            <p className="text-gray-400 text-lg">Select your preferred tools to build your perfect development environment.</p>
                        </div>

                        <div className="space-y-12">
                            {sections.map((section, idx) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-neutral-900/50 border border-white/5 rounded-2xl p-6 sm:p-8"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-indigo-500/10">
                                                <section.icon className="w-6 h-6 text-indigo-400" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                                        </div>
                                        
                                        {/* @ts-ignore */}
                                        {section.hasFilter && (
                                            <div className="bg-white/5 p-1 rounded-lg flex items-center gap-1">
                                                {(['Web', 'Mobile'] as const).map((type) => (
                                                    <button
                                                        key={type}
                                                        onClick={() => setFrontendType(type)}
                                                        className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                                                            frontendType === type
                                                                ? 'bg-indigo-600 text-white shadow-lg'
                                                                : 'text-neutral-400 hover:text-white hover:bg-white/5'
                                                        }`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                        {section.tools.length > 0 ? (
                                            section.tools.map((tool) => (
                                                <button
                                                    key={tool.slug}
                                                    onClick={() => section.setSelected(tool.slug === section.selected ? null : tool.slug)}
                                                    className={`relative p-4 rounded-xl border text-left transition-all ${
                                                        section.selected === tool.slug
                                                            ? 'bg-indigo-600/20 border-indigo-500 ring-1 ring-indigo-500'
                                                            : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                                    }`}
                                                >
                                                    <div className="font-medium text-white mb-1 truncate">{tool.name}</div>
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
                                disabled={!selectedFrontend && !selectedBackend && !selectedDatabase && !selectedDeployment}
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
