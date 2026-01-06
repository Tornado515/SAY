import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { tools } from '../data/tools';
import { Layout } from '../components/Layout';
import { ToolCard } from '../components/ToolCard';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ToolsPage() {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(tools.map(t => t.category))).sort();
        return ['All', ...uniqueCategories];
    }, [tools]);

    const filteredTools = useMemo(() => {
        return tools.filter(tool => {
            const matchesSearch = (
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory, tools]);

    return (
        <Layout>
            <div className="relative isolate min-h-[50vh]">
                {/* Header Section */}
                <div className="bg-neutral-50 dark:bg-neutral-900/50 border-b border-neutral-200 dark:border-white/5 py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl mb-6">
                            {t('toolsPage.title', { defaultValue: 'Explore All Tools' })}
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
                            {t('toolsPage.subtitle', { defaultValue: 'Browse our complete collection of developer tools, frameworks, and AI assistants. Find exactly what you need for your next project.' })}
                        </p>

                        {/* Search and Filter */}
                        <div className="max-w-xl mx-auto space-y-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500 rtl:left-auto rtl:right-4" />
                                <input
                                    type="text"
                                    placeholder={t('toolsPage.searchPlaceholder', { defaultValue: 'Search tools, tags, or descriptions...' })}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full h-12 rounded-full bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 pl-12 pr-4 rtl:pl-4 rtl:pr-12 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters & Grid */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    {/* Category Chips */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-4xl mx-auto">
                        {categories.map((category) => {
                            let categoryLabel = category;
                            if (category === 'All') {
                                categoryLabel = t('common.all', { defaultValue: 'All' });
                            } else {
                                categoryLabel = t(`categories.${category.toLowerCase().replace(' ', '-')}.title`, { defaultValue: category });
                            }

                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400'
                                        : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:bg-white/5 dark:border-transparent dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white ring-1 ring-transparent dark:ring-white/10'
                                        }`}
                                >
                                    {categoryLabel}
                                </button>
                            );
                        })}
                    </div>

                    {/* Browse Categories Link - Requested Feature */}
                    <div className="flex justify-end mb-6">
                        <Link to="/categories" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group">
                            {t('toolsPage.viewCategories', { defaultValue: 'View By Categories Page' })}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                        </Link>
                    </div>

                    {/* Results Grid */}
                    {filteredTools.length > 0 ? (
                        <motion.div
                            key={selectedCategory}
                            layout
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {filteredTools.map((tool) => (
                                <ToolCard key={tool.slug} tool={tool} />
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-20">
                            <Filter className="h-12 w-12 text-neutral-700 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                                {t('toolsPage.noToolsFound', { defaultValue: 'No tools found' })}
                            </h3>
                            <p className="text-neutral-500 mt-2">
                                {t('toolsPage.tryAdjusting', { defaultValue: 'Try adjusting your search or category filter.' })}
                            </p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                className="mt-6 text-indigo-400 hover:text-indigo-300 font-medium"
                            >
                                {t('common.clearFilters', { defaultValue: 'Clear all filters' })}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}