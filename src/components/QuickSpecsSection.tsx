import { useState } from 'react';
import { ArrowRightLeft, ChevronDown, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Tool } from '../data/tools';

export function QuickSpecsSection({ tool }: { tool: Tool }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!tool.comparisonData) return null;

    return (
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors"
            >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                    <ArrowRightLeft className="h-4 w-4 text-indigo-400" />
                    Quick Specs
                </h3>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <span>{isOpen ? 'Hide' : 'Show'}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="grid gap-6 p-6 border-t border-white/10 sm:grid-cols-2">
                            <div className="space-y-6">
                                <div>
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">Best For</div>
                                    <div className="flex flex-wrap gap-2">
                                        {tool.comparisonData.bestFor.map((item, i) => (
                                            <span key={i} className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2 py-1 text-xs text-indigo-400">{item}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">Pricing</div>
                                    <span className="text-sm text-neutral-200">{tool.comparisonData.priceModel}</span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">Pros</div>
                                    <ul className="space-y-2">
                                        {tool.comparisonData.pros.slice(0, 3).map((pro, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-neutral-300">
                                                <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">Cons</div>
                                    <ul className="space-y-2">
                                        {tool.comparisonData.cons.slice(0, 3).map((con, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-neutral-300">
                                                <X className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-red-500" />
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
