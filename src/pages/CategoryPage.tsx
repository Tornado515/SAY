import { useParams, Link } from 'react-router-dom';
import type { Tool } from '../data/tools';
import { tools } from '../data/tools';
import { Layout } from '../components/Layout';
import { ToolCard } from '../components/ToolCard';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function CategoryPage() {
    const { slug } = useParams();

    // Helper to normalize slugs to category names
    const getCategoryName = (slug: string | undefined): Tool['category'] | undefined => {
        if (!slug) return undefined;
        const map: Record<string, Tool['category']> = {
            'frontend': 'Frontend',
            'mobile': 'Mobile',
            'ai-coding': 'AI Coding',
            'ai-mockup': 'AI Mockup',
            'deployment': 'Deployment',
            'testing': 'Testing',
            'design': 'Design',
            'database': 'Database',
            'backend': 'Backend',
            'version-control': 'Version Control',
            'ide': 'IDE',
            'ai-chatbots': 'AI Chatbots',
            'productivity': 'Productivity',
        };
        return map[slug];
    };

    const categoryName = getCategoryName(slug);
    const categoryTools = tools.filter((t) => t.category === categoryName);

    if (!categoryName) {
        return (
            <Layout>
                <div className="flex h-[50vh] flex-col items-center justify-center text-center">
                    <h1 className="text-3xl font-bold text-white">Category Not Found</h1>
                    <Link to="/" className="mt-4 text-indigo-400 hover:text-indigo-300">
                        Go back home
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <Link
                            to="/categories"
                            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Categories
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                                {categoryName} Tools
                            </h1>
                            <p className="text-lg text-neutral-400 max-w-2xl">
                                Explore the best {typeof categoryName === 'string' ? categoryName.toLowerCase() : 'development'} tools for your modern development stack.
                            </p>
                        </motion.div>
                    </div>

                    {categoryTools.length > 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {categoryTools.map((tool) => (
                                <ToolCard key={tool.name} tool={tool} />
                            ))}
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-center border border-dashed border-white/10 rounded-2xl bg-white/5">
                            <h3 className="text-xl font-semibold text-white mb-2">No tools yet</h3>
                            <p className="text-neutral-400 max-w-md">
                                We haven't added any tools to the {categoryName} category yet. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
