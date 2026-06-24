import MainLayout from '../layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Download } from 'lucide-react';

const projects = [
    { id: 1, title: 'Signature Mineral Water Unit', category: 'Water', location: 'Patna, Bihar', year: '2024', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2000&auto=format&fit=crop' },
    { id: 2, title: 'Royal Challenge Bottling Plant', category: 'Water', location: 'Ranchi, Jharkhand', year: '2025', image: 'https://images.unsplash.com/photo-1518152006812-cdab29b069a8?q=80&w=2000&auto=format&fit=crop' },
    { id: 3, title: 'Eco-Plug EV Charging Hubs', category: 'Energie', location: 'Kolkata, West Bengal', year: '2024', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2000&auto=format&fit=crop' },
    { id: 4, title: 'Enaure Digital Retail Platform', category: 'Energie', location: 'National Coverage', year: '2023', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop' },
    { id: 5, title: 'Barista Coffee Cafe - Patliputra', category: 'Traders', location: 'Patliputra, Patna', year: '2022', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop' },
    { id: 6, title: 'Barista Coffee Cafe - Gandhi Maidan', category: 'Traders', location: 'Gandhi Maidan, Patna', year: '2019', image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=2000&auto=format&fit=crop' },
    { id: 7, title: 'Barista Corporate Vending Network', category: 'Traders', location: 'Patna, Bihar', year: '2025', image: 'https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?q=80&w=2000&auto=format&fit=crop' },
    { id: 8, title: 'FMCG Distribution Depot', category: 'Traders', location: 'Patna, Bihar', year: '2025', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop' },
];

const categories = ['All', 'Water', 'Energie', 'Traders'];

export default function Portfolio() {
    const [filter, setFilter] = useState('All');
    const filtered = projects.filter(p => filter === 'All' || p.category === filter);

    return (
        <MainLayout>
            <Head title="Portfolio - Ashwin Group" />

            {/* Hero */}
            <section className="relative px-gutter pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary border-b border-outline-variant">
                {/* Visual Backdrop Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
                        alt="Portfolio Hub" 
                        className="w-full h-full object-cover opacity-25 mix-blend-luminosity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary"></div>
                    {/* Ambient Glow */}
                    <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
                    {/* Dotted Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
                </div>
                
                <div className="max-w-container-max mx-auto relative z-10 text-center max-w-3xl">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block text-xs font-bold text-secondary uppercase tracking-widest bg-secondary-container px-3 py-1 rounded mb-4"
                    >
                        Project Showcases
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 16 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
                    >
                        Our Operational <span className="text-secondary">Portfolio</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 16 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white/80 leading-relaxed mb-8 text-sm md:text-base max-w-2xl mx-auto"
                    >
                        Explore our state-of-the-art packaging facilities, green solar complexes, smart EV charging stations, and Master Franchise Barista Coffee operations in Patna.
                    </motion.p>

                    {/* Filter Chips */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all border ${
                                    filter === cat
                                        ? 'bg-secondary text-white border-secondary shadow-md scale-102'
                                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                                }`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    {filter === 'Traders' && (
                        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="inline-flex justify-center mt-2">
                            <a 
                                href="/images/Barista_Brand_Deck_2026.pdf" 
                                download 
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary bg-secondary-container hover:bg-secondary hover:text-white transition-all px-4 py-2 rounded-md shadow-sm"
                            >
                                <Download size={13} />
                                Download Barista Brand Deck (PDF)
                            </a>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Grid */}
            <section className="px-gutter py-12 md:py-16">
                <div className="max-w-container-max mx-auto">
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map(project => (
                                <motion.div layout key={project.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="group cursor-pointer">

                                    <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-primary shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <span className="bg-white text-primary text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">{project.category}</span>
                                                <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center text-white opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                                    <ArrowUpRight size={16} />
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 text-white/90 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="flex items-center gap-1"><MapPin size={13} /> {project.location}</span>
                                                <span className="flex items-center gap-1"><Calendar size={13} /> {project.year}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-primary mt-3 mb-1 group-hover:text-secondary transition-colors">{project.title}</h3>
                                    <div className="h-0.5 w-8 bg-secondary rounded-full group-hover:w-full transition-all duration-400" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-on-surface-variant">No projects found for this category.</div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
