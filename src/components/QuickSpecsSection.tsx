import { useState } from 'react';
import { ArrowRightLeft, ChevronDown, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Tool } from '../data/tools';
import { useTranslation } from 'react-i18next';

export function QuickSpecsSection({ tool }: { tool: Tool }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    if (!tool.comparisonData) return null;

    return (
        <section className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm dark:shadow-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors"
            >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white">
                    <ArrowRightLeft className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                    {t('tool.quickSpecs', { defaultValue: 'Quick Specs' })}
                </h3>
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <span>{isOpen ? t('common.hide', { defaultValue: 'Hide' }) : t('common.show', { defaultValue: 'Show' })}</span>
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

                        <div className="grid gap-6 p-6 border-t border-neutral-200 dark:border-white/10 sm:grid-cols-2">
                            <div className="space-y-6">
                                <div>
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">{t('tool.bestFor', { defaultValue: 'Best For' })}</div>
                                    <div className="flex flex-wrap gap-2">
                                        {tool.comparisonData.bestFor.map((item, i) => (
                                            <span key={i} className="rounded-md border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 text-xs text-indigo-600 dark:text-indigo-400">
                                                {t(`tools.${tool.slug}.comparisonData.bestFor.${i}`, { defaultValue: item })}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">{t('tool.pricing', { defaultValue: 'Pricing' })}</div>
                                    <span className="text-sm text-neutral-900 dark:text-neutral-200">
                                        {t(`tools.${tool.slug}.comparisonData.priceModel`, { defaultValue: tool.comparisonData.priceModel })}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">{t('tool.pros', { defaultValue: 'Pros' })}</div>
                                    <ul className="space-y-2">
                                        {tool.comparisonData.pros.slice(0, 3).map((pro, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                                                <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                                                {t(`tools.${tool.slug}.comparisonData.pros.${i}`, { defaultValue: pro })}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">{t('tool.cons', { defaultValue: 'Cons' })}</div>
                                    <ul className="space-y-2">
                                        {tool.comparisonData.cons.slice(0, 3).map((con, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                                                <X className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-red-500" />
                                                {t(`tools.${tool.slug}.comparisonData.cons.${i}`, { defaultValue: con })}
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
