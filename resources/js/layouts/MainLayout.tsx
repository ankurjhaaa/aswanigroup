import React from 'react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import { usePage } from '@inertiajs/react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { url } = usePage();
    const isHome = url === '/';

    return (
        <div className="min-h-screen flex flex-col bg-white text-on-surface antialiased">
            <TopNavBar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
