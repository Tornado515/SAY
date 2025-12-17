import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { name: 'Frontend', path: '/category/frontend' },
        { name: 'Mobile', path: '/category/mobile' },
        { name: 'Design', path: '/category/design' },
        { name: 'AI Coding', path: '/category/ai-coding' },
        { name: 'AI Mockup', path: '/category/ai-mockup' },
        { name: 'Backend', path: '/category/backend' },
        { name: 'Database', path: '/category/database' },
        { name: 'Version Control', path: '/category/version-control' },
        { name: 'IDE', path: '/category/ide' },
        { name: 'Deployment', path: '/category/deployment' },
        { name: 'Categories', path: '/categories' },
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
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-neutral-400'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
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
                <div className="lg:hidden fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-3xl pt-20 px-6">
                    <nav className="flex flex-col gap-6 text-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={closeMenu}
                                className={`font-medium transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-neutral-400'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
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
                        <Link to="/categories" className="hover:text-white transition-colors">Categories</Link>
                        <a href="https://github.com/Tornado515/SAY" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                    <p>© {new Date().getFullYear()} SAY. Open source and community driven.</p>
                </div>
            </footer>
        </div>
    );
}
