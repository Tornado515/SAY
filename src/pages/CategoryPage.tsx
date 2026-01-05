import { useParams, Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { Layout } from '../components/Layout';
import { ToolCard } from '../components/ToolCard';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { categoryMetadata } from '../data/categories';
import { useTranslation } from 'react-i18next';

export function CategoryPage() {
    const { t } = useTranslation();
    const { slug } = useParams();

    // Find category info from metadata
    const categoryInfo = Object.values(categoryMetadata).find(c => c.slug === slug);
    const categoryName = categoryInfo ? t(`categories.${categoryInfo.slug}.title`, { defaultValue: categoryInfo.title }) : undefined;

    // Filter tools based on the title (which maps to Tool['category'] key in metadata usually, but we need to match Tool interface)
    // Actually, the keys in categoryMetadata ARE the Tool['category'] values.
    // So we should find the KEY in categoryMetadata where value.slug === slug.

    const categoryKey = Object.keys(categoryMetadata).find(key => categoryMetadata[key].slug === slug);
    const categoryTools = tools.filter((t) => t.category === categoryKey);

    if (!categoryKey || !categoryInfo) {
        return (
            <Layout>
                <div className="flex h-[50vh] flex-col items-center justify-center text-center">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Category Not Found</h1>
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
                            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                            {t('nav.viewAllCategories', { defaultValue: 'Back to Categories' })}
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl mb-4">
                                {t(`categories.${categoryInfo.slug}.title`, { defaultValue: categoryInfo.title })}
                            </h1>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                                {t(`categories.${categoryInfo.slug}.description`, { defaultValue: categoryInfo.description })}
                            </p>
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
                        <div className="flex flex-col items-center justify-center py-12 text-center border border-dashed border-neutral-200 dark:border-white/10 rounded-2xl bg-neutral-50 dark:bg-white/5">
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{t('categoryPage.noToolsTitle', { defaultValue: 'No tools yet' })}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
                                {t('categoryPage.noToolsDescription', { category: categoryName, defaultValue: `We haven't added any tools to the ${categoryName} category yet. Check back soon!` })}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
