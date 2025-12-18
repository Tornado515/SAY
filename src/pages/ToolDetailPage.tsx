import { useParams, Link } from 'react-router-dom';
import { tools } from '../data/tools';
import { ExternalLink, ArrowLeft, CheckCircle, ArrowRightLeft, Check, X } from 'lucide-react';
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
                        to="/tools"
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
                        <div className="mt-6 flex flex-wrap gap-4">
                            <a
                                href={tool.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 transition-colors"
                            >
                                Visit Official Website
                                <ExternalLink className="h-4 w-4" />
                            </a>
                            <Link
                                to={`/compare?tool1=${tool.slug}`}
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 ring-1 ring-inset ring-white/10 transition-colors"
                            >
                                Compare Tool
                                <ArrowRightLeft className="h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Quick Specs (Comparison Data) */}
                            {tool.comparisonData && (
                                <section className="bg-white/5 rounded-2xl border border-white/10 p-6">
                                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <ArrowRightLeft className="h-4 w-4 text-indigo-400" />
                                        Quick Specs
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Best For</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {tool.comparisonData.bestFor.map((item, i) => (
                                                        <span key={i} className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded-md border border-indigo-500/20">{item}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Pricing</div>
                                                <span className="text-sm text-neutral-200">{tool.comparisonData.priceModel}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Pros</div>
                                                <ul className="space-y-1">
                                                    {tool.comparisonData.pros.slice(0, 3).map((pro, i) => (
                                                        <li key={i} className="flex gap-2 text-sm text-neutral-300">
                                                            <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                            {pro}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Cons</div>
                                                <ul className="space-y-1">
                                                    {tool.comparisonData.cons.slice(0, 3).map((con, i) => (
                                                        <li key={i} className="flex gap-2 text-sm text-neutral-300">
                                                            <X className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                                                            {con}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Description */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">What is {tool.name}?</h2>
                                <div className="prose prose-invert max-w-none text-neutral-300">
                                    <p className="leading-relaxed whitespace-pre-line">{tool.longDescription}</p>
                                </div>
                            </section>

                            {/* Video Embed - Stacked for better visibility */}
                            <div className="space-y-8">
                                {tool.youtubeVideoId && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                            Overview
                                        </h3>
                                        <div className="overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 aspect-video">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${tool.youtubeVideoId}?origin=http://localhost:5173`}
                                                title="Explainer Video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                className="w-full h-full"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                                {tool.setupVideoId && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                            Setup Guide
                                        </h3>
                                        <div className="overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 aspect-video">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${tool.setupVideoId}?origin=http://localhost:5173`}
                                                title="Setup Video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                className="w-full h-full"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* How to use */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">How to get started</h2>
                                <div className="space-y-8 border-l-2 border-white/10 pl-10 ml-3">
                                    {tool.steps?.map((step, index) => (
                                        <div key={index} className="relative group">
                                            {/* Step Number */}
                                            <span className="absolute -left-[39px] flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-white/20 text-sm font-mono text-white/70 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 group-hover:ring-indigo-500/30 transition-colors">
                                                {index + 1}
                                            </span>

                                            {/* Content */}
                                            <div className="bg-neutral-900/50 rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                                                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                                                <p className="text-neutral-300 leading-relaxed mb-4">{step.content}</p>

                                                {/* Optional Code Block */}
                                                {step.code && (
                                                    <div className="mb-4 bg-black/50 rounded-lg border border-white/5 overflow-hidden">
                                                        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                                                            <span className="text-xs font-mono text-neutral-500">{step.language || 'bash'}</span>
                                                        </div>
                                                        <div className="p-4 overflow-x-auto">
                                                            <pre className="text-sm font-mono text-indigo-300 whitespace-pre-wrap break-words">
                                                                {step.code}
                                                            </pre>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Optional Links */}
                                                {step.links && step.links.length > 0 && (
                                                    <div className="flex flex-wrap gap-3 mt-4">
                                                        {step.links.map((link, i) => (
                                                            <a
                                                                key={i}
                                                                href={link.url}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${link.primary
                                                                    ? 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 ring-1 ring-indigo-500/30'
                                                                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                                                                    }`}
                                                            >
                                                                {link.text}
                                                                <ExternalLink className="w-3 h-3" />
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Additional Info Section */}
                            {tool.additionalInfo && tool.additionalInfo.length > 0 && (
                                <div className="space-y-6 pt-8 border-t border-white/10">
                                    <h2 className="text-2xl font-bold text-white">Good to Know</h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {tool.additionalInfo.map((info, idx) => (
                                            <div key={idx} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                                                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                                                <p className="text-neutral-300 leading-relaxed">{info.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Related Tools Section */}
                            {tool.relatedTools && tool.relatedTools.length > 0 && (
                                <div className="space-y-6 pt-8 border-t border-white/10">
                                    <h2 className="text-2xl font-bold text-white">Related Tools</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {tool.relatedTools.map((related) => {
                                            const relatedTool = tools.find(t => t.slug === related.slug);
                                            if (!relatedTool) return null;
                                            return (
                                                <Link
                                                    key={related.slug}
                                                    to={`/tool/${related.slug}`}
                                                    className="group flex flex-col p-4 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all"
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                                                            {relatedTool.name}
                                                        </span>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${related.relation === 'alternative'
                                                            ? 'border-orange-500/30 text-orange-400 bg-orange-500/10'
                                                            : related.relation === 'prerequisite'
                                                                ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'
                                                                : 'border-blue-500/30 text-blue-400 bg-blue-500/10'
                                                            }`}>
                                                            {related.relation}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-neutral-400 line-clamp-2">
                                                        {relatedTool.description}
                                                    </p>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
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
