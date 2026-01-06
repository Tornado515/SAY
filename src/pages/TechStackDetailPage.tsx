import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { techStacks } from '../data/techStacks';
import { tools } from '../data/tools';
import { CheckCircle2, XCircle, ChevronRight, Terminal, BookOpen, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';

export function TechStackDetailPage() {
    const { slug } = useParams();
    const stack = techStacks.find(s => s.slug === slug);

    if (!stack) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Stack Not Found</h1>
                    <Link to="/tech-stacks" className="text-indigo-400 hover:text-indigo-300">
                        Back to all stacks
                    </Link>
                </div>
            </Layout>
        );
    }

    // Resolve tool objects
    const stackTools = stack.tools.map(toolSlug => tools.find(t => t.slug === toolSlug)).filter(Boolean);

    const { t } = useTranslation();


    return (
        <Layout>
            <div className="min-h-screen bg-white dark:bg-neutral-950">
                {/* Hero */}
                <div className="relative border-b border-neutral-200 dark:border-white/5 bg-neutral-50/50 dark:bg-neutral-900/30 py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            to="/tech-stacks"
                            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                            {t('nav.techStacks', { defaultValue: 'Back to Tech Stacks' })}
                        </Link>
                        <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                            {t(`techStacks.${stack.slug}.name`, { defaultValue: stack.name })}
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
                            {t(`techStacks.${stack.slug}.description`, { defaultValue: stack.description })}
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* LEFT COLUMN - Main Content */}
                        <div className="lg:col-span-2 space-y-16 min-w-0">

                            {/* Included Tools */}
                            <section>
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
                                    <BookOpen className="w-6 h-6 text-indigo-400" />
                                    Included Tools
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {stackTools.map((tool) => (
                                        <Link
                                            key={tool!.slug}
                                            to={`/tool/${tool!.slug}`}
                                            className="flex items-center p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 hover:border-indigo-500/30 transition-all group min-w-0"
                                        >
                                            <div className="flex-grow min-w-0">
                                                <h4 className="font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                                                    {t(`tools.${tool!.slug}.name`, { defaultValue: tool!.name })}
                                                </h4>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-1">
                                                    {t(`tools.${tool!.slug}.description`, { defaultValue: tool!.description })}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-neutral-400 dark:text-neutral-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 flex-shrink-0 ml-4 rtl:rotate-180" />
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Walkthrough */}
                            <section>
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                                        <Terminal className="w-6 h-6 text-emerald-400" />
                                        {t(`techStacks.${stack.slug}.walkthrough.title`, { defaultValue: stack.walkthrough.title })}
                                    </h2>
                                    <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-lg">
                                        {t(`techStacks.${stack.slug}.walkthrough.description`, { defaultValue: stack.walkthrough.description })}
                                    </p>
                                </div>

                                <div className="space-y-12">
                                    {stack.walkthrough.steps.map((step, idx) => (
                                        <div key={idx} className="relative pl-8 sm:pl-12 rtl:pl-0 rtl:pr-8 sm:rtl:pr-12 group">
                                            {/* Vertical Line */}
                                            {idx !== stack.walkthrough.steps.length - 1 && (
                                                <div className="absolute left-[15px] sm:left-[23px] rtl:left-auto rtl:right-[15px] sm:rtl:right-[23px] top-8 bottom-[-48px] w-0.5 bg-neutral-200 dark:bg-neutral-800 group-last:hidden" />
                            )}

                            {/* Number Bubble */}
                            <div className="absolute left-0 sm:left-2 rtl:left-auto rtl:right-0 sm:rtl:right-2 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-white/20 text-sm font-mono text-neutral-500 dark:text-white/70 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:ring-indigo-300 dark:group-hover:ring-indigo-500/30 transition-colors z-10">
                                {idx + 1}
                            </div>

                            <div className="bg-white dark:bg-neutral-900/50 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/10 transition-colors max-w-full">
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                                    {t(`techStacks.${stack.slug}.walkthrough.steps.${idx}.title`, { defaultValue: step.title })}
                                </h3>
                                <div className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed whitespace-pre-line break-words">
                                                    <ReactMarkdown
                                                        components={{
                                                            strong: ({ node, ...props }) => <strong className="font-semibold text-neutral-900 dark:text-white" {...props} />,
                                                            code: ({ node, ...props }) => <code className="bg-neutral-100 dark:bg-white/10 text-indigo-700 dark:text-indigo-300 rounded px-1 py-0.5 text-sm font-mono" {...props} />,
                                                            a: ({ node, ...props }) => <a className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                                                            p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />
                                                        }}
                                                    >
                                                        {t(`techStacks.${stack.slug}.walkthrough.steps.${idx}.content`, { defaultValue: step.content })}
                                                    </ReactMarkdown>
                                                </div>
                                                {step.code && (
                                                    <div className="mt-4 bg-neutral-900 dark:bg-black/50 rounded-lg border border-neutral-200 dark:border-white/5 overflow-hidden" dir="ltr">
                                                        <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 dark:bg-white/5 border-b border-neutral-700 dark:border-white/5">
                                                            <span className="text-xs font-mono text-neutral-500 font-bold uppercase tracking-wider">{step.language || 'bash'}</span>
                                                        </div>
                                                        <div className="p-4 overflow-x-auto text-left">
                                                            <pre className="text-sm font-mono text-indigo-300 whitespace-pre-wrap break-words">
                                                                <code>{step.code}</code>
                                                            </pre>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN - Sidebar Info */}
                        <div className="space-y-8 min-w-0">

                            {/* When to Use */}
                            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    When to Use
                                </h3>
                                <ul className="space-y-3">
                                    {stack.whenToUse.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 mr-3 flex-shrink-0 rtl:mr-0 rtl:ml-3" />
                                            {t(`techStacks.${stack.slug}.whenToUse.${idx}`, { defaultValue: item })}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-500/5 border border-red-200 dark:border-red-500/10">
                                <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" />
                                    When to avoid
                                </h3>
                                <ul className="space-y-3">
                                    {stack.whenNotToUse.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-neutral-600 dark:text-neutral-300">
                                            <span className="mr-3 rtl:mr-0 rtl:ml-3 mt-1.5 w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                                            {t(`techStacks.${stack.slug}.whenNotToUse.${idx}`, { defaultValue: item })}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

