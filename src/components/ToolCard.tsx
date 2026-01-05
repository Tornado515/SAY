import type { Tool } from '../data/tools';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ToolCardProps {
    tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <Link
            to={`/tool/${tool.slug}`}
            state={{ from: location.pathname, fromName: location.pathname.includes('/category/') ? tool.category : 'All Tools' }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/5 bg-white dark:bg-white/5 p-6 transition-all hover:border-neutral-300 dark:hover:border-white/10 hover:shadow-lg dark:hover:bg-white/10"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {t(`tools.${tool.slug}.name`, { defaultValue: tool.name })}
                </h3>
                <ArrowRight className="h-4 w-4 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors rtl:rotate-180" />
            </div>
            <p className="flex-auto text-sm text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-2">
                {t(`tools.${tool.slug}.description`, { defaultValue: tool.description })}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tool.tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-neutral-100 dark:bg-white/5 px-2 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 ring-1 ring-inset ring-neutral-200 dark:ring-white/10"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
