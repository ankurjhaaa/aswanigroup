import MainLayout from '../layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';

const projects = [
    { id: 1, title: 'Skyline Metro Hub', category: 'Infrastructure', location: 'Dubai, UAE', year: '2023', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'EcoTech Manufacturing Plant', category: 'Manufacturing', location: 'Stuttgart, Germany', year: '2022', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, title: 'Solar Array Complex Alpha', category: 'Energy', location: 'Nevada, USA', year: '2024', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop' },
    { id: 4, title: 'Global Trade Port', category: 'Logistics', location: 'Singapore', year: '2021', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop' },
    { id: 5, title: 'Financial District Tower', category: 'Construction', location: 'London, UK', year: '2023', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
    { id: 6, title: 'Wind Farm Delta', category: 'Energy', location: 'North Sea', year: '2025', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop' },
];

const categories = ['All', 'Infrastructure', 'Construction', 'Energy', 'Manufacturing', 'Logistics'];

export default function Portfolio() {
    const [filter, setFilter] = useState('All');
    const filtered = projects.filter(p => filter === 'All' || p.category === filter);

    return (
        <MainLayout>
            <Head title="Portfolio - Aswani Group" />

            {/* Hero + Filters */}
            <section className="px-gutter py-16 md:py-20 bg-surface-variant border-b border-outline-variant">
                <div className="max-w-container-max mx-auto text-center max-w-2xl">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
                            Featured <span className="text-secondary">Projects</span>
                        </h1>
                        <p className="text-on-surface-variant leading-relaxed mb-8">
                            Discover how we transform blueprints into landmarks, powering communities and economies across the globe.
                        </p>

                        {/* Filter Chips */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map(cat => (
                                <button key={cat} onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border ${
                                        filter === cat
                                            ? 'bg-primary text-white border-primary'
                                            : 'bg-white text-on-surface-variant border-outline-variant hover:bg-surface-container-high'
                                    }`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>
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
