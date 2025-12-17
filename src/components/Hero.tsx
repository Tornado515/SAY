import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40">
            <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                        <Sparkles className="h-4 w-4" />
                        <span>Discover the Future of Development</span>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
                        Start All Yourself.
                        <span className="block text-indigo-400 mt-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">The Modern Stack.</span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-neutral-400 max-w-2xl mx-auto">
                        A curated directory of the best tools, frameworks, and AI assistants to help you build and ship your next big idea.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#frameworks"
                            className="group flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:scale-105"
                        >
                            Explore Tools
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[68.5625rem] bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 animate-pulse"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10 mask-image-gradient" />
        </section>
    );
}
