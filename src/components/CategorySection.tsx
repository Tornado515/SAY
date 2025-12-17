import type { Tool } from '../data/tools';
import { ToolCard } from './ToolCard';
import { motion } from 'framer-motion';

interface CategorySectionProps {
    title: string;
    tools: Tool[];
    id: string;
}

export function CategorySection({ title, tools, id }: CategorySectionProps) {
    if (tools.length === 0) return null;

    return (
        <section id={id} className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 border-b border-white/5 pb-4">
                    <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {tools.map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
