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

    const isTransparent = !scrolled && !open;

    const navClass = scrolled
        ? 'bg-white shadow-sm border-b border-outline-variant text-primary'
        : 'bg-transparent border-b border-white/10 text-white';

    const logoClass = scrolled ? 'text-primary' : 'text-white';
    const logoBgClass = scrolled ? 'bg-primary text-white' : 'bg-white text-primary';
    
    return (
        <>
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navClass}`}>
            <div className="max-w-container-max mx-auto px-gutter flex items-center justify-between h-20">
                {/* Logo */}
                <Link href="/" className={`flex items-center gap-3 group ${logoClass}`}>
                    <div className={`w-10 h-10 rounded flex items-center justify-center text-lg font-bold transition-transform group-hover:scale-105 shadow-sm ${logoBgClass}`}>
                        A
                    </div>
                    <span className="text-xl font-serif font-bold tracking-tight">Ashwin Group</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map(({ label, href }) => {
                        const active = url === href;
                        const linkColor = scrolled 
                            ? (active ? 'text-secondary after:bg-secondary' : 'text-on-surface-variant hover:text-primary after:bg-primary')
                            : (active ? 'text-white after:bg-white' : 'text-white/80 hover:text-white after:bg-white');

                        return (
                            <Link
                                key={label}
                                href={href}
                                className={`relative py-2 text-sm font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                                    active ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                                } ${linkColor}`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        className={`ml-4 text-sm font-semibold px-6 py-2.5 rounded transition-all shadow-sm ${
                            scrolled ? 'bg-primary text-white hover:bg-secondary' : 'bg-white text-primary hover:bg-white/90'
                        }`}
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(true)}
                    className={`md:hidden p-2 rounded transition-colors ${
                        scrolled ? 'text-primary hover:bg-surface-variant' : 'text-white hover:bg-white/10'
                    }`}
                    aria-label="Open menu"
                >
                    <Menu size={24} />
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
                    className="fixed inset-0 bg-black/40 z-[90] md:hidden"
                />
            )}
            {open && (
                <motion.nav
                    key="sidebar"
                    initial={{ y: '-100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed inset-0 bg-white z-[100] md:hidden flex flex-col text-primary"
                >
                    <div className="flex items-center justify-between p-5 border-b border-outline-variant">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center text-lg font-bold shadow-sm">
                                A
                            </div>
                            <span className="text-xl font-serif font-bold tracking-tight">Ashwin Group</span>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="p-2 rounded text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={28} />
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center py-4 px-4 space-y-6">
                        {links.map(({ label, href }) => {
                            const active = url === href;
                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className={`block text-3xl font-serif font-bold transition-colors ${
                                        active
                                            ? 'text-secondary'
                                            : 'text-primary hover:text-secondary'
                                    }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="p-6 pb-10 border-t border-outline-variant text-center">
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="inline-block w-full max-w-xs text-center bg-primary text-white font-bold px-6 py-4 rounded hover:bg-secondary transition-all shadow-sm text-lg"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
        </>
    );
}
