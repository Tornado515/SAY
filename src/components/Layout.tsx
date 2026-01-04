import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, ChevronDown, ChevronRight } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsMobileCategoriesOpen(false);
    }
    const toggleMobileCategories = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMobileCategoriesOpen(!isMobileCategoriesOpen);
    };

    const categories = [
        { name: 'AI Coding', path: '/category/ai-coding' },
        { name: 'AI Chatbots', path: '/category/ai-chatbots' },
        { name: 'AI Mockup', path: '/category/ai-mockup' },
        { name: 'Frontend', path: '/category/frontend' },
        { name: 'Backend', path: '/category/backend' },
        { name: 'Mobile', path: '/category/mobile' },
        { name: 'Database', path: '/category/database' },
        { name: 'Version Control', path: '/category/version-control' },
        { name: 'Design', path: '/category/design' },
        { name: 'IDE', path: '/category/ide' },
        { name: 'Deployment', path: '/category/deployment' },
        { name: 'Testing', path: '/category/testing' },
        { name: 'Productivity', path: '/category/productivity' },
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-indigo-500/30 font-sans flex flex-col">
            <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-950/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">SAY</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-6">
                            <Link
                                to="/"
                                className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === '/' ? 'text-white' : 'text-neutral-400'
                                    }`}
                            >
                                Home
                            </Link>

                            <Link
                                to="/getting-started"
                                className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === '/getting-started' ? 'text-white' : 'text-neutral-400'
                                    }`}
                            >
                                Getting Started
                            </Link>

                            <Link
                                to="/tech-stacks"
                                className={`text-sm font-medium transition-colors hover:text-white ${location.pathname.startsWith('/tech-stacks') ? 'text-white' : 'text-neutral-400'
                                    }`}
                            >
                                Tech Stacks
                            </Link>

                            <Link
                                to="/how-to-vibe-code"
                                className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === '/how-to-vibe-code' ? 'text-white' : 'text-neutral-400'
                                    }`}
                            >
                                Vibe Coding
                            </Link>

                            <Link
                                to="/prompt-library"
                                className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === '/prompt-library' ? 'text-white' : 'text-neutral-400'
                                    }`}
                            >
                                Prompt Library
                            </Link>

                            {/* Tools Dropdown */}
                            <div className="relative group h-16 flex items-center">
                                <Link
                                    to="/tools"
                                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-white group-hover:text-white focus:outline-none ${location.pathname.startsWith('/tool') || location.pathname === '/tools' || location.pathname.startsWith('/category') ? 'text-white' : 'text-neutral-400'
                                        }`}
                                >
                                    Tools
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                </Link>

                                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="w-56 bg-neutral-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-1">
                                        <Link
                                            to="/categories"
                                            className="block px-4 py-2 text-sm text-indigo-400 hover:bg-white/5 hover:text-indigo-300 font-medium border-b border-white/5"
                                        >
                                            View All Categories
                                        </Link>
                                        <Link
                                            to="/tools"
                                            className="block px-4 py-2 text-sm text-neutral-200 hover:bg-white/5 hover:text-white font-medium border-b border-white/5"
                                        >
                                            Browse All Tools
                                        </Link>
                                        <Link
                                            to="/compare"
                                            className="block px-4 py-2 text-sm text-neutral-200 hover:bg-white/5 hover:text-white font-medium border-b border-white/5"
                                        >
                                            Compare Tools
                                        </Link>
                                        <div className="py-1">
                                            <span className="px-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Quick Access</span>
                                        </div>
                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.name}
                                                to={cat.path}
                                                className="block px-4 py-2 text-sm text-neutral-400 hover:bg-white/5 hover:text-white"
                                            >
                                                {cat.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Tornado515/SAY"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden sm:flex text-sm font-medium text-neutral-400 transition-colors hover:text-white gap-2 items-center"
                        >
                            <Github className="h-5 w-5" />
                            <span>GitHub</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-neutral-400 hover:text-white"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-3xl pt-20 px-6 overflow-y-auto">
                    <nav className="flex flex-col gap-6 text-lg pb-10">
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className={`font-medium transition-colors hover:text-white ${location.pathname === '/' ? 'text-white' : 'text-neutral-400'
                                }`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/getting-started"
                            onClick={closeMenu}
                            className={`font-medium transition-colors hover:text-white ${location.pathname === '/getting-started' ? 'text-white' : 'text-neutral-400'
                                }`}
                        >
                            Getting Started
                        </Link>

                        <Link
                            to="/tech-stacks"
                            onClick={closeMenu}
                            className={`font-medium transition-colors hover:text-white ${location.pathname.startsWith('/tech-stacks') ? 'text-white' : 'text-neutral-400'
                                }`}
                        >
                            Tech Stacks
                        </Link>

                        <Link
                            to="/how-to-vibe-code"
                            onClick={closeMenu}
                            className={`font-medium transition-colors hover:text-white ${location.pathname === '/how-to-vibe-code' ? 'text-white' : 'text-neutral-400'
                                }`}
                        >
                            Vibe Coding
                        </Link>

                        <Link
                            to="/prompt-library"
                            onClick={closeMenu}
                            className={`font-medium transition-colors hover:text-white ${location.pathname === '/prompt-library' ? 'text-white' : 'text-neutral-400'
                                }`}
                        >
                            Prompt Library
                        </Link>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between pb-2 cursor-pointer" onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}>
                                <Link
                                    to="/tools"
                                    onClick={closeMenu}
                                    className={`font-medium flex-grow ${location.pathname.startsWith('/tool') || location.pathname === '/tools' || location.pathname.startsWith('/category') ? 'text-white' : 'text-neutral-400'}`}
                                >
                                    Tools
                                </Link>
                                <button
                                    onClick={toggleMobileCategories}
                                    className="p-2 -mr-2 text-neutral-400"
                                >
                                    {isMobileCategoriesOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                                </button>
                            </div>

                            {isMobileCategoriesOpen && (
                                <div className="pl-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <Link
                                        to="/categories"
                                        onClick={closeMenu}
                                        className="block text-base text-indigo-400 hover:text-indigo-300"
                                    >
                                        View All Categories
                                    </Link>
                                    <Link
                                        to="/tools"
                                        onClick={closeMenu}
                                        className="block text-base text-white hover:text-indigo-300"
                                    >
                                        Browse All Tools
                                    </Link>
                                    <Link
                                        to="/compare"
                                        onClick={closeMenu}
                                        className="block text-base text-white hover:text-indigo-300"
                                    >
                                        Compare Tools
                                    </Link>
                                    <div className="pt-2 pb-1 border-t border-white/5">
                                        <span className="text-xs font-medium text-neutral-500 uppercase">Categories</span>
                                    </div>
                                    {categories.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={closeMenu}
                                            className={`block text-base transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-neutral-400'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a
                            href="https://github.com/Tornado515/SAY"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white font-medium mt-4 pt-4 border-t border-white/10"
                        >
                            <Github className="h-5 w-5" />
                            GitHub
                        </a>
                    </nav>
                </div>
            )}

            <main className="flex-grow">
                {children}
            </main>

            <footer className="border-t border-white/5 bg-neutral-950 py-12 mt-20">
                <div className="container mx-auto px-4 text-center text-sm text-neutral-500 sm:px-6 lg:px-8">
                    <div className="flex justify-center gap-6 mb-4">
                        <Link to="/tools" className="hover:text-white transition-colors">Tools</Link>
                        <Link to="/compare" className="hover:text-white transition-colors">Compare</Link>
                        <a href="https://github.com/Tornado515/SAY" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                    <p>© {new Date().getFullYear()} SAY. Open source and community driven.</p>
                </div>
            </footer>
        </div>
    );
}
