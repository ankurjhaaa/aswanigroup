import MainLayout from '../layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, HardHat, Cpu, Truck, Bolt, ShieldCheck } from 'lucide-react';

const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5 }
};

const industries = [
    {
        title: 'Infrastructure & Urban Development',
        icon: Building2,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        desc: 'Developing scalable, resilient civic frameworks redefining modern cityscapes. From smart cities to high-capacity transit hubs.',
        span: 'sm:col-span-2'
    },
    {
        title: 'Heavy Construction',
        icon: HardHat,
        image: 'https://images.unsplash.com/photo-1541888087525-0740a6b7e6ee?q=80&w=2070&auto=format&fit=crop',
        desc: 'Precision engineering and heavy-duty structural execution for monumental projects.',
        span: ''
    },
    {
        title: 'Advanced Manufacturing',
        icon: Cpu,
        image: 'https://images.unsplash.com/photo-1565439390117-6415777dd0d4?q=80&w=2070&auto=format&fit=crop',
        desc: 'State-of-the-art production facilities optimized for maximum output and quality.',
        span: ''
    },
    {
        title: 'Global Logistics',
        icon: Truck,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
        desc: 'End-to-end supply chain management ensuring efficient, secure distribution across borders.',
        span: 'sm:col-span-2'
    },
    {
        title: 'Energy & Power',
        icon: Bolt,
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop',
        desc: 'Investing in renewable solutions and upgrading conventional power grids for reliable energy.',
        span: 'sm:col-span-2'
    },
    {
        title: 'Defense & Aerospace',
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1612403756303-3467e2126da3?q=80&w=2070&auto=format&fit=crop',
        desc: 'High-precision components and secure infrastructure for critical national assets.',
        span: ''
    }
];

export default function Industries() {
    return (
        <MainLayout>
            <Head title="Industries - Aswani Group" />

            {/* Hero */}
            <section className="px-gutter py-16 md:py-24 bg-surface-variant border-b border-outline-variant">
                <div className="max-w-container-max mx-auto text-center max-w-2xl">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Sectors of Operation</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
                            Powering Global <span className="text-secondary">Ecosystems.</span>
                        </h1>
                        <p className="text-on-surface-variant leading-relaxed">
                            Our diverse portfolio spans critical sectors, enabling us to leverage synergies, mitigate risks, and drive comprehensive economic growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid */}
            <section className="px-gutter py-12 md:py-16">
                <div className="max-w-container-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[320px]">
                    {industries.map(({ title, icon: Icon, image, desc, span }) => (
                        <motion.div key={title} {...fadeUp}
                            className={`group relative rounded-md overflow-hidden border border-outline-variant shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer ${span}`}>
                            {/* Image BG */}
                            <div className="absolute inset-0 bg-primary">
                                <img src={image} alt={title} className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 p-5 md:p-6 flex flex-col justify-end">
                                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-primary mb-4 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <Icon size={22} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:-translate-y-1 transition-transform duration-300">{title}</h3>
                                <p className="text-sm text-white/80 max-w-md leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300">{desc}</p>
                            </div>

                            {/* Arrow */}
                            <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight size={18} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
}
