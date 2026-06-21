import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopNavBar() {
    const { url } = usePage();
    const isHome = url === '/';
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        onScroll(); // initial check
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => setOpen(false), [url]);

    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Industries', href: '/industries' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Contact', href: '/contact' },
    ];

    const isTransparent = isHome && !scrolled && !open;

    const navClass = isTransparent
        ? 'bg-transparent border-b border-transparent'
        : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-outline-variant';

    const textClass = isTransparent ? 'text-white' : 'text-primary';
    const logoBg = isTransparent ? 'bg-white text-primary' : 'bg-primary text-white group-hover:bg-secondary';
    const hoverText = isTransparent ? 'hover:text-white hover:bg-white/10' : 'hover:text-primary hover:bg-surface-variant';

    return (
        <>
        <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${navClass}`}>
            <div className="max-w-container-max mx-auto px-gutter flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className={`flex items-center gap-2.5 group ${textClass}`}>
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold transition-colors ${logoBg}`}>
                        A
                    </div>
                    <span className="text-lg font-bold tracking-tight">Aswani Group</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {links.map(({ label, href }) => {
                        const active = url === href;
                        return (
                            <Link
                                key={label}
                                href={href}
                                className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                                    active
                                        ? `after:w-full ${isTransparent ? 'text-white after:bg-white' : 'text-primary after:bg-primary'}`
                                        : `after:w-0 hover:after:w-full ${isTransparent ? 'text-white/80 hover:text-white after:bg-white' : 'text-on-surface-variant hover:text-primary after:bg-primary'}`
                                }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        className={`ml-3 text-sm font-semibold px-5 py-2 rounded-md transition-colors ${
                            isTransparent
                                ? 'bg-white text-primary hover:bg-white/90 shadow-sm shadow-black/10'
                                : 'bg-primary text-white hover:bg-secondary'
                        }`}
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(true)}
                    className={`md:hidden p-2 rounded-md transition-colors ${
                        isTransparent ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-surface-variant'
                    }`}
                    aria-label="Open menu"
                >
                    <Menu size={22} />
                </button>
            </div>
        </header>

        {/* Mobile Sidebar */}
        <AnimatePresence>
            {open && (
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 z-[90] md:hidden backdrop-blur-sm"
                />
            )}
            {open && (
                <motion.nav
                    key="sidebar"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[100] md:hidden flex flex-col shadow-2xl"
                >
                    <div className="flex items-center justify-between p-4 md:p-6 border-b border-outline-variant">
                        <span className="font-bold text-lg text-primary">Menu</span>
                        <button
                            onClick={() => setOpen(false)}
                            className="p-2 rounded-md text-on-surface-variant hover:bg-surface-variant transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={22} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                        {links.map(({ label, href }) => {
                            const active = url === href;
                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                                        active
                                            ? 'bg-secondary/5 text-secondary'
                                            : 'text-on-surface hover:bg-surface-variant'
                                    }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="p-4 border-t border-outline-variant">
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="block text-center bg-primary text-white font-semibold px-4 py-3 rounded-md hover:bg-secondary transition-colors shadow-sm"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
        </>
    );
}
