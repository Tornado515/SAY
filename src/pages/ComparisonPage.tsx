import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { tools } from '../data/tools';
import { Check, X, ArrowRightLeft, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function ComparisonPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [tool1Slug, setTool1Slug] = useState<string>(searchParams.get('tool1') || '');
    const [tool2Slug, setTool2Slug] = useState<string>(searchParams.get('tool2') || '');

    // Update URL when selection changes
    useEffect(() => {
        const params: Record<string, string> = {};
        if (tool1Slug) params.tool1 = tool1Slug;
        if (tool2Slug) params.tool2 = tool2Slug;
        setSearchParams(params, { replace: true });
    }, [tool1Slug, tool2Slug, setSearchParams]);

    const tool1 = tools.find(t => t.slug === tool1Slug);
    const tool2 = tools.find(t => t.slug === tool2Slug);

    const categories = Array.from(new Set(tools.map(t => t.category))).sort();

    const handleSwap = () => {
        const temp = tool1Slug;
        setTool1Slug(tool2Slug);
        setTool2Slug(temp);
    };

    // Helper to render a comparison row
    const renderRow = (label: string, val1: any, val2: any, isList = false) => (
        <div className="grid grid-cols-3 gap-4 py-4 border-b border-white/5 items-center">
            <div className="col-span-1 text-neutral-400 font-medium">{label}</div>
            <div className="col-span-1 text-neutral-200">
                {isList ? (
                    <ul className="list-disc list-inside space-y-1">
                        {val1?.map((item: string, i: number) => <li key={i} className="text-sm">{item}</li>) || <span className="text-neutral-600 italic">N/A</span>}
                    </ul>
                ) : (
                    val1 || <span className="text-neutral-600 italic">N/A</span>
                )}
            </div>
            <div className="col-span-1 text-neutral-200">
                {isList ? (
                    <ul className="list-disc list-inside space-y-1">
                        {val2?.map((item: string, i: number) => <li key={i} className="text-sm">{item}</li>) || <span className="text-neutral-600 italic">N/A</span>}
                    </ul>
                ) : (
                    val2 || <span className="text-neutral-600 italic">N/A</span>
                )}
            </div>
        </div>
    );

    return (
        <Layout>
            <div className="relative isolate min-h-[50vh] py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            Compare Tools
                        </h1>
                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                            Select two tools to compare their features, pros, cons, and best use cases side-by-side.
                        </p>
                    </div>

                    {/* Tool Selectors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 bg-neutral-900/50 p-8 rounded-3xl border border-white/5">
                        <div className="relative">
                            <label className="block text-sm font-medium text-neutral-400 mb-2">Tool 1</label>
                            <div className="relative">
                                <select
                                    value={tool1Slug}
                                    onChange={(e) => setTool1Slug(e.target.value)}
                                    className="w-full appearance-none bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-neutral-600"
                                >
                                    <option value="">Select a tool...</option>
                                    {categories.map(cat => (
                                        <optgroup key={cat} label={cat}>
                                            {tools.filter(t => t.category === cat).map(t => (
                                                <option key={t.slug} value={t.slug}>{t.name}</option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                            </div>
                        </div>

                        <div className="hidden md:flex items-center justify-center pt-6">
                            <button
                                onClick={handleSwap}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                                title="Swap tools"
                            >
                                <ArrowRightLeft className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-neutral-400 mb-2">Tool 2</label>
                            <div className="relative">
                                <select
                                    value={tool2Slug}
                                    onChange={(e) => setTool2Slug(e.target.value)}
                                    className="w-full appearance-none bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                >
                                    <option value="">Select a tool...</option>
                                    {categories.map(cat => (
                                        <optgroup key={cat} label={cat}>
                                            {tools.filter(t => t.category === cat).map(t => (
                                                <option key={t.slug} value={t.slug}>{t.name}</option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    {tool1 && tool2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-5xl mx-auto"
                        >
                            {/* Headings */}
                            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                                <div className="col-span-1"></div>
                                <div className="col-span-1">
                                    <h2 className="text-2xl font-bold text-white mb-2">{tool1.name}</h2>
                                    <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                                        {tool1.category}
                                    </span>
                                </div>
                                <div className="col-span-1">
                                    <h2 className="text-2xl font-bold text-white mb-2">{tool2.name}</h2>
                                    <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                                        {tool2.category}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-3xl border border-white/10 p-8 space-y-2">
                                {/* Core Info */}
                                {renderRow('Price Model', tool1.comparisonData?.priceModel, tool2.comparisonData?.priceModel)}
                                {renderRow('Learning Curve', tool1.comparisonData?.learningCurve, tool2.comparisonData?.learningCurve)}
                                {renderRow('Community Support', tool1.comparisonData?.communitySupport, tool2.comparisonData?.communitySupport)}

                                {/* Lists */}
                                {renderRow('Best For', tool1.comparisonData?.bestFor, tool2.comparisonData?.bestFor, true)}

                                <div className="grid grid-cols-3 gap-4 py-6 border-b border-white/5">
                                    <div className="col-span-1 text-neutral-400 font-medium">Pros</div>
                                    <div className="col-span-1 text-green-400/90 space-y-2">
                                        {tool1.comparisonData?.pros.map((pro, i) => (
                                            <div key={i} className="flex gap-2 text-sm">
                                                <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-500" />
                                                <span>{pro}</span>
                                            </div>
                                        )) || <span className="text-neutral-600 italic">N/A</span>}
                                    </div>
                                    <div className="col-span-1 text-green-400/90 space-y-2">
                                        {tool2.comparisonData?.pros.map((pro, i) => (
                                            <div key={i} className="flex gap-2 text-sm">
                                                <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-500" />
                                                <span>{pro}</span>
                                            </div>
                                        )) || <span className="text-neutral-600 italic">N/A</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 py-6">
                                    <div className="col-span-1 text-neutral-400 font-medium">Cons</div>
                                    <div className="col-span-1 text-red-400/90 space-y-2">
                                        {tool1.comparisonData?.cons.map((con, i) => (
                                            <div key={i} className="flex gap-2 text-sm">
                                                <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
                                                <span>{con}</span>
                                            </div>
                                        )) || <span className="text-neutral-600 italic">N/A</span>}
                                    </div>
                                    <div className="col-span-1 text-red-400/90 space-y-2">
                                        {tool2.comparisonData?.cons.map((con, i) => (
                                            <div key={i} className="flex gap-2 text-sm">
                                                <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
                                                <span>{con}</span>
                                            </div>
                                        )) || <span className="text-neutral-600 italic">N/A</span>}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    )}

                    {!tool1 || !tool2 ? (
                        <div className="text-center mt-20 p-12 border border-dashed border-white/10 rounded-3xl bg-white/5/50">
                            <ArrowRightLeft className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-neutral-400">Ready to Compare</h3>
                            <p className="text-neutral-500 mt-2">Select two tools above to see how they stack up.</p>
                        </div>
                    ) : null}

                </div>
            </div>
        </Layout>
    );
}
