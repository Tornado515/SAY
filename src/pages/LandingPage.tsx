import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { tools } from '../data/tools';
import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { Layout } from '../components/Layout';

export function LandingPage() {
    const location = useLocation();

    useEffect(() => {
        if (location.state && (location.state as any).scrollTo) {
            const element = document.getElementById((location.state as any).scrollTo);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);
    const categories = [
        { title: 'Frontend Frameworks', id: 'frameworks', slug: 'frontend', data: tools.filter(t => t.category === 'Frontend') },
        { title: 'Mobile Frameworks', id: 'mobile', slug: 'mobile', data: tools.filter(t => t.category === 'Mobile') },
        { title: 'AI Coding Tools', id: 'ai-coding', slug: 'ai-coding', data: tools.filter(t => t.category === 'AI Coding') },
        { title: 'Deployment', id: 'deployment', slug: 'deployment', data: tools.filter(t => t.category === 'Deployment') },
        { title: 'Database', id: 'database', slug: 'database', data: tools.filter(t => t.category === 'Database') },
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
                            <a href={`/category/${cat.slug}`} className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                                View all {cat.title} <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                ))}

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Looking for more?</h2>
                    <p className="text-neutral-400 mb-8">Explore all our tool categories to find exactly what you need.</p>
                    <a
                        href="/categories"
                        className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/20 ring-1 ring-inset ring-white/10 transition-all"
                    >
                        View All Categories
                    </a>
                </div>
            </div>
        </Layout>
    );
}
