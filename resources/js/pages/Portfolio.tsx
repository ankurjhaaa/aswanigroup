import MainLayout from '../layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Download } from 'lucide-react';

const projects = [
    { id: 1, title: 'Signature Mineral Water Unit', category: 'Water', location: 'Patna, Bihar', year: '2024', image: '/images/portfolio-water-1.png' },
    { id: 2, title: 'Royal Challenge Bottling Plant', category: 'Water', location: 'Ranchi, Jharkhand', year: '2025', image: '/images/portfolio-water-2.png' },
    { id: 3, title: 'Eco-Plug EV Charging Hubs', category: 'Energie', location: 'Kolkata, West Bengal', year: '2024', image: '/images/portfolio-energy-1.png' },
    { id: 4, title: 'Enaure Digital Retail Platform', category: 'Energie', location: 'National Coverage', year: '2023', image: '/images/portfolio-energy-2.png' },
    { id: 5, title: 'Barista Coffee Cafe - Patliputra', category: 'Traders', location: 'Patliputra, Patna', year: '2022', image: '/images/portfolio-traders-1.png' },
    { id: 6, title: 'Barista Coffee Cafe - Gandhi Maidan', category: 'Traders', location: 'Gandhi Maidan, Patna', year: '2019', image: '/images/portfolio-traders-2.png' },
    { id: 7, title: 'Barista Corporate Vending Network', category: 'Traders', location: 'Patna, Bihar', year: '2025', image: '/images/portfolio-traders-3.png' },
    { id: 8, title: 'FMCG Distribution Depot', category: 'Traders', location: 'Patna, Bihar', year: '2025', image: '/images/portfolio-traders-4.png' },
];

const categories = ['All', 'Water', 'Energie', 'Traders'];

const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5 }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

const fadeIn = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Portfolio() {
    const [filter, setFilter] = useState('All');
    const filtered = projects.filter(p => filter === 'All' || p.category === filter);

    return (
        <MainLayout>
            <Head title="Portfolio - Ashwin Group" />

            {/* Hero */}
            <section className="relative px-gutter pt-32 pb-16 md:pt-40 md:pb-24 bg-primary border-b border-outline-variant flex items-center">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/portfolio-hero-bg.png" 
                        alt="Portfolio Hub" 
                        className="w-full h-full object-cover opacity-20" 
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                </div>
                
                <div className="max-w-container-max mx-auto relative z-10 w-full text-center md:text-left">
                    <div className="max-w-4xl mx-auto md:mx-0">
                        <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-3xl text-center md:text-left">
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 border border-secondary/30 text-secondary-container text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-5 rounded bg-secondary/10 mx-auto md:mx-0">
                                Our Brands
                            </motion.div>
                            <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                                Products & <span className="text-secondary-container">Portfolio.</span>
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8">
                                Explore our premium range of packaged drinking water, crafted for purity and trusted by millions across the region.
                            </motion.p>
                        </motion.div>

                        {/* Filter Chips */}
                        <div className="flex flex-wrap justify-center gap-3 mb-6">
                            {categories.map(cat => (
                                <button key={cat} onClick={() => setFilter(cat)}
                                    className={`px-5 py-2.5 rounded text-sm font-bold tracking-wide transition-all border ${
                                        filter === cat
                                            ? 'bg-secondary text-white border-secondary'
                                            : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
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
                                    className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-white hover:bg-surface-variant transition-colors px-6 py-3 rounded border border-outline-variant"
                                >
                                    <Download size={18} />
                                    Download Barista Brand Deck
                                </a>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="px-gutter py-12 md:py-16 bg-surface-container-low">
                <div className="max-w-container-max mx-auto">
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map(project => (
                                <motion.div layout key={project.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                    className="group cursor-pointer bg-white border border-outline-variant rounded p-4 shadow-sm hover:shadow-md transition-shadow">

                                    <div className="relative aspect-[4/3] rounded overflow-hidden bg-outline-variant mb-4 border border-outline-variant">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                        
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded">{project.category}</span>
                                        </div>
                                    </div>

                                    <div className="px-2 pb-2">
                                        <h3 className="text-xl font-serif font-bold text-primary mb-3 leading-tight">{project.title}</h3>
                                        <div className="flex flex-wrap items-center gap-4 text-on-surface-variant text-sm font-semibold">
                                            <span className="flex items-center gap-1.5"><MapPin size={16} className="text-secondary" /> {project.location}</span>
                                            <span className="flex items-center gap-1.5"><Calendar size={16} className="text-secondary" /> {project.year}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-on-surface-variant font-serif text-lg">No projects found for this category.</div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
