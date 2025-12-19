import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { techStacks } from '../data/techStacks';
import { tools } from '../data/tools';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, CheckCircle2, XCircle } from 'lucide-react';

export function TechStacksPage() {
    return (
        <Layout>
            <div className="relative isolate min-h-[50vh]">
                {/* Header Section */}
                <div className="bg-neutral-900/50 border-b border-white/5 py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                                <Layers className="w-8 h-8 text-indigo-400" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            Recommended Tech Stacks
                        </h1>
                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
                            Don't know where to start? We've curated the best modern technology combinations for beginners and pros alike.
                            Choose a path and follow our step-by-step guides.
                        </p>
                    </div>
                </div>

                {/* Stacks Grid */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {techStacks.map((stack) => (
                            <motion.div
                                key={stack.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-indigo-500/50"
                            >
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                        {stack.name}
                                    </h3>
                                    <p className="text-neutral-400 mb-6 leading-relaxed">
                                        {stack.description}
                                    </p>

                                    {/* Quick visual pros/cons summary (first 2) */}
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500/80 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-neutral-300">{stack.whenToUse[0]}</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <XCircle className="w-5 h-5 text-red-500/80 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-neutral-300">{stack.whenNotToUse[0]}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-6 mt-auto pt-6 sm:flex-row sm:items-end sm:justify-between">
                                        <div className="flex -space-x-2 overflow-visible flex-wrap gap-y-2 pl-2">
                                            {/* Interactive Tool Circles */}
                                            {stack.tools.map((toolSlug) => {
                                                const tool = tools.find(t => t.slug === toolSlug);
                                                if (!tool) return null;
                                                return (
                                                    <Link
                                                        key={toolSlug}
                                                        to={`/tool/${toolSlug}`}
                                                        className="relative group/tool z-0 hover:z-10 block transition-transform hover:-translate-y-1"
                                                    >
                                                        <motion.div
                                                            whileHover={{ scale: 1.1 }}
                                                            className="h-10 w-10 rounded-full ring-2 ring-neutral-900 bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-300 uppercase relative cursor-pointer hover:ring-indigo-500 hover:bg-neutral-700 transition-all shadow-lg"
                                                            title={tool.name}
                                                        >
                                                            {tool.name.substring(0, 1)}

                                                            {/* Tooltip */}
                                                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 text-white text-[10px] rounded border border-white/10 opacity-0 group-hover/tool:opacity-100 whitespace-nowrap pointer-events-none transition-opacity z-20">
                                                                {tool.name}
                                                            </div>
                                                        </motion.div>
                                                    </Link>
                                                );
                                            })}
                                        </div>

                                        <Link
                                            to={`/tech-stacks/${stack.slug}`}
                                            className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-6 py-2.5 text-sm font-semibold transition-transform active:scale-95 hover:bg-neutral-200 whitespace-nowrap"
                                        >
                                            View Guide
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
