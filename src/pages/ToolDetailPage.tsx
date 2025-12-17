import { useParams, Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { ExternalLink, ArrowLeft, CheckCircle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';

export function ToolDetailPage() {
    const { slug } = useParams();
    const tool = tools.find((t) => t.slug === slug);

    if (!tool) {
        return (
            <Layout>
                <div className="flex h-[50vh] flex-col items-center justify-center text-center">
                    <h1 className="text-3xl font-bold text-white">Tool Not Found</h1>
                    <Link to="/" className="mt-4 text-indigo-400 hover:text-indigo-300">
                        Go back home
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Back Link */}
                    <Link
                        to="/"
                        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Tools
                    </Link>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                {tool.name}
                            </h1>
                            <span className="inline-flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/20">
                                {tool.category}
                            </span>
                        </div>
                        <p className="text-xl leading-8 text-neutral-300">
                            {tool.description}
                        </p>
                        <div className="mt-6">
                            <a
                                href={tool.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition-colors"
                            >
                                Visit Official Website
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Video Embed */}
                            {tool.youtubeVideoId && (
                                <div className="overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 aspect-video">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${tool.youtubeVideoId}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                            )}

                            {/* Description */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">What is {tool.name}?</h2>
                                <div className="prose prose-invert max-w-none text-neutral-300">
                                    <p className="leading-relaxed whitespace-pre-line">{tool.longDescription}</p>
                                </div>
                            </section>

                            {/* How to use */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">How to get started</h2>
                                <div className="space-y-8 border-l-2 border-white/10 pl-6 ml-3">
                                    {tool.steps?.map((step, index) => (
                                        <div key={index} className="relative">
                                            <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/20 text-xs font-mono text-white/70">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                                            <div className="text-neutral-400 leading-relaxed bg-white/5 rounded-xl p-4 border border-white/5">
                                                <p>{step.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                {/* Features */}
                                <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
                                    <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {tool.features?.map((feature) => (
                                            <li key={feature} className="flex gap-3 text-neutral-300">
                                                <CheckCircle className="h-5 w-5 flex-none text-indigo-400" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div>
                                    <h3 className="text-sm font-medium text-neutral-400 mb-3">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {tool.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-neutral-400 ring-1 ring-inset ring-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
