import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { categoryMetadata } from '../data/categories';
import { useTranslation } from 'react-i18next';

export function CategoriesPage() {
    const { t } = useTranslation();

    // Convert metadata object to array and sort by title
    const categoriesToDisplay = Object.values(categoryMetadata).sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    return (
        <Layout>
            <div className="py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <Link
                            to="/tools"
                            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                            {t('nav.backToTools', { defaultValue: 'Back to Tools' })}
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                                {t('categoriesPage.title', { defaultValue: 'Explore Categories' })}
                            </h1>
                            <p className="text-lg text-neutral-400 max-w-2xl">
                                {t('categoriesPage.description', { defaultValue: 'Browse our curated directory by category to find the perfect tools for every part of your stack.' })}
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categoriesToDisplay.map((category, index) => (
                            <motion.div
                                key={category.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/category/${category.slug}`}
                                    className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-indigo-500/10"
                                >
                                    <div className={`mb-4 inline-flex items-center justify-center rounded-xl p-3 ${category.bg} ${category.color} ring-1 ring-inset ring-white/5`}>
                                        <category.icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                        {t(`categories.${category.slug}.title`, { defaultValue: category.title })}
                                    </h3>

                                    <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-grow">
                                        {t(`categories.${category.slug}.description`, { defaultValue: category.description })}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-neutral-500 group-hover:text-indigo-400 transition-colors mt-auto">
                                        {t('categoriesPage.browseTools', { defaultValue: 'Browse Tools' })} <span className="ml-1 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">&rarr;</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
