import React from 'react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { usePage } from '@inertiajs/react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { url } = usePage();
    const isHome = url === '/';

    return (
        <div className="min-h-screen flex flex-col bg-white text-on-surface antialiased">
            <TopNavBar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={typeof window !== 'undefined' ? window.location.pathname : 'server'}
                    className="flex-1"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
}
