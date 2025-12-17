import type { Tool } from '../data/tools';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
    tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
    return (
        <Link
            to={`/tool/${tool.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-white/10 hover:bg-white/10"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {tool.name}
                </h3>
                <ArrowRight className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors" />
            </div>
            <p className="flex-auto text-sm text-neutral-400 mb-6 line-clamp-2">
                {tool.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tool.tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-neutral-400 ring-1 ring-inset ring-white/10"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
