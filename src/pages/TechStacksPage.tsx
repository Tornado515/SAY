import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { techStacks, type StackCategory } from '../data/techStacks';
import { tools } from '../data/tools';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, CheckCircle2, XCircle, Search, Filter, X } from 'lucide-react';

export function TechStacksPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<StackCategory | 'All'>('All');
    const [selectedTools, setSelectedTools] = useState<string[]>([]);
    const [isToolFilterOpen, setIsToolFilterOpen] = useState(false);

    // Get all unique tools used across stacks (or just all available tools)
    // Using all available tools from tools.ts is safer to ensure we cover everything
    const allTools = useMemo(() => tools.sort((a, b) => a.name.localeCompare(b.name)), []);

    const filteredStacks = useMemo(() => {
        return techStacks.filter((stack) => {
            // Text Search
            const matchesSearch =
                stack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                stack.description.toLowerCase().includes(searchQuery.toLowerCase());

            // Category Filter
            const matchesCategory = selectedCategory === 'All' || stack.category === selectedCategory;

            // Tool Filter (Must contain ALL selected tools)
            const matchesTools = selectedTools.length === 0 ||
                selectedTools.every(slug => stack.tools.includes(slug));

            return matchesSearch && matchesCategory && matchesTools;
        });
    }, [searchQuery, selectedCategory, selectedTools]);

    const categories: (StackCategory | 'All')[] = ['All', 'Web', 'Mobile', 'Backend', 'AI', 'Other'];

    const toggleTool = (slug: string) => {
        setSelectedTools(prev =>
            prev.includes(slug)
                ? prev.filter(s => s !== slug)
                : [...prev, slug]
        );
    };

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
                        </p>

                        {/* Search Bar - Matching ToolsPage Style */}
                        <div className="max-w-xl mx-auto space-y-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                                <input
                                    type="text"
                                    placeholder="Search stacks (e.g., 'SaaS', 'React', 'Enterprise')..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full h-12 rounded-full bg-white/5 border border-white/10 pl-12 pr-4 text-white placeholder:text-neutral-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Filters Container - Matching ToolsPage Style */}
                    <div className="flex flex-col gap-6 mb-12">
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                            {/* Category Tabs */}
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400'
                                                : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white ring-1 ring-white/10'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Tool Filter Toggle - Custom Style but aligned */}
                            <div className="relative z-20">
                                <button
                                    onClick={() => setIsToolFilterOpen(!isToolFilterOpen)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ring-1 ${isToolFilterOpen || selectedTools.length > 0
                                            ? 'bg-indigo-500/10 text-indigo-400 ring-indigo-500/50'
                                            : 'bg-white/5 text-neutral-400 ring-white/10 hover:bg-white/10'
                                        }`}
                                >
                                    <Filter className="w-4 h-4" />
                                    Filter by Tools
                                    {selectedTools.length > 0 && (
                                        <span className="ml-1 inline-flex items-center justify-center bg-indigo-500 text-white text-[10px] rounded-full h-5 w-5">
                                            {selectedTools.length}
                                        </span>
                                    )}
                                </button>

                                {/* Tool Dropdown */}
                                <AnimatePresence>
                                    {isToolFilterOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute right-0 mt-2 w-72 md:w-96 max-h-96 overflow-y-auto rounded-xl bg-neutral-900 border border-white/10 shadow-2xl p-4 ring-1 ring-black/5 z-50"
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-sm font-medium text-white">Select required tools</span>
                                                <button
                                                    onClick={() => setSelectedTools([])}
                                                    className="text-xs text-neutral-500 hover:text-white"
                                                >
                                                    Clear all
                                                </button>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {allTools.map((tool) => {
                                                    const isSelected = selectedTools.includes(tool.slug);
                                                    return (
                                                        <button
                                                            key={tool.slug}
                                                            onClick={() => toggleTool(tool.slug)}
                                                            className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${isSelected
                                                                    ? 'bg-indigo-600 border-indigo-500 text-white'
                                                                    : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white'
                                                                }`}
                                                        >
                                                            {tool.name}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Selected Tools Pills */}
                        {selectedTools.length > 0 && !isToolFilterOpen && (
                            <div className="flex flex-wrap gap-2 justify-center">
                                {selectedTools.map(slug => {
                                    const tool = tools.find(t => t.slug === slug);
                                    return (
                                        <span key={slug} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs">
                                            {tool?.name || slug}
                                            <button onClick={() => toggleTool(slug)} className="hover:text-white">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Stacks Grid */}
                    {filteredStacks.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                                <Search className="w-8 h-8 text-neutral-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">No matching stacks found</h3>
                            <p className="text-neutral-400">Try adjusting your filters or search terms.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedTools([]); }}
                                className="mt-6 text-indigo-400 hover:text-indigo-300 font-medium"
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                            {filteredStacks.map((stack) => (
                                <motion.div
                                    key={stack.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    layout
                                    className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-indigo-500/50 flex flex-col"
                                >
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${stack.category === 'Web' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                stack.category === 'Mobile' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                    stack.category === 'Backend' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                                                        stack.category === 'AI' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                                            'bg-neutral-500/10 text-neutral-400 border-neutral-500/20'
                                            }`}>
                                            {stack.category}
                                        </span>
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors pr-20">
                                            {stack.name}
                                        </h3>
                                        <p className="text-neutral-400 mb-6 leading-relaxed flex-1">
                                            {stack.description}
                                        </p>

                                        {/* Quick visual pros/cons summary */}
                                        <div className="space-y-3 mb-8 bg-black/20 p-4 rounded-xl">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-500/80 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-neutral-300 line-clamp-1">{stack.whenToUse[0]}</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <XCircle className="w-5 h-5 text-red-500/80 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-neutral-300 line-clamp-1">{stack.whenNotToUse[0]}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-6 mt-auto sm:flex-row sm:items-end sm:justify-between">
                                            <div className="flex -space-x-2 overflow-visible flex-wrap gap-y-2 pl-2">
                                                {/* Interactive Tool Circles */}
                                                {stack.tools.slice(0, 6).map((toolSlug) => {
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
                                                {stack.tools.length > 6 && (
                                                    <div className="h-10 w-10 rounded-full ring-2 ring-neutral-900 bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400">
                                                        +{stack.tools.length - 6}
                                                    </div>
                                                )}
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
                    )}
                </div>
            </div>
        </Layout>
    );
}
