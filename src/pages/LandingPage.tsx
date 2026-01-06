import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { Layout } from '../components/Layout';

import { useTranslation } from 'react-i18next';

export function LandingPage() {
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        if (location.state && (location.state as any).scrollTo) {
            const element = document.getElementById((location.state as any).scrollTo);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);
    const categories = [
        { title: t('categories.frontend.title', { defaultValue: 'Frontend Frameworks' }), id: 'frameworks', slug: 'frontend', data: tools.filter(t => t.category === 'Frontend') },
        { title: t('categories.mobile.title', { defaultValue: 'Mobile Frameworks' }), id: 'mobile', slug: 'mobile', data: tools.filter(t => t.category === 'Mobile') },
        { title: t('categories.ai-coding.title', { defaultValue: 'AI Coding Tools' }), id: 'ai-coding', slug: 'ai-coding', data: tools.filter(t => t.category === 'AI Coding') },
        { title: t('categories.ai-chatbots.title', { defaultValue: 'AI Chatbots' }), id: 'ai-chatbots', slug: 'ai-chatbots', data: tools.filter(t => t.category === 'AI Chatbots') },
        { title: t('categories.deployment.title', { defaultValue: 'Deployment' }), id: 'deployment', slug: 'deployment', data: tools.filter(t => t.category === 'Deployment') },
        { title: t('categories.database.title', { defaultValue: 'Database' }), id: 'database', slug: 'database', data: tools.filter(t => t.category === 'Database') },
    ];

    return (
        <Layout>
            <Hero />
            <div className="space-y-4 pb-20">
                {categories.map((cat) => (
                    <div key={cat.id} className="relative">
                        <CategorySection
                            title={cat.title}
                            tools={cat.data.slice(0, 3)}
                            id={cat.id}
                        />
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
                            <a href={`/category/${cat.slug}`} className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1">
                                {t('home.categories.viewAll', { category: cat.title, defaultValue: `View all ${cat.title}` })} <span aria-hidden="true" className="rtl:rotate-180">&rarr;</span>
                            </a>
                        </div>
                    </div>
                ))}

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                        {t('home.cta.title', { defaultValue: 'Looking for more?' })}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                        {t('home.cta.description', { defaultValue: 'Explore our complete tools directory to find exactly what you need.' })}
                    </p>
                    <Link
                        to="/tools"
                        className="inline-flex items-center justify-center rounded-full bg-neutral-100 dark:bg-white/10 px-6 py-3 text-base font-semibold text-neutral-900 dark:text-white shadow-sm hover:bg-neutral-200 dark:hover:bg-white/20 ring-1 ring-inset ring-neutral-300 dark:ring-white/10 transition-all"
                    >
                        {t('home.cta.button')}
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
