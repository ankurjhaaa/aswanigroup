import MainLayout from '../layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Bolt, Truck, Users, Download, Play, FileText } from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.08 } }
};

export default function Home() {
    const [mediaTab, setMediaTab] = useState<'video' | 'poster'>('video');

    const divisions = [
        {
            title: 'Ashwin Water Industries',
            subtitle: 'Beverage & Packaged Drinking Water',
            desc: 'Official franchisee of United Spirits (Diageo Group) for "Signature Packaged Drinking Water with Minerals" and "Royal Challenge Packaged Drinking Water". Currently launching across Bihar & Jharkhand.',
            image: '/images/ashwin-water-division.jpg',
            badge: 'Diageo Franchisee',
            icon: Building2
        },
        {
            title: 'Ashwin Energie Pvt. Ltd.',
            subtitle: 'Smart & Sustainable Energy',
            desc: 'Engineering green technologies and clean power infrastructure. Operates the Eco-Plug smart EV chargers, commercial solar setups, and Enaure digital retail platforms.',
            image: '/images/ashwin-energie-division.jpg',
            badge: 'Green Tech & Solar',
            icon: Bolt
        },
        {
            title: 'Ashwin Traders',
            subtitle: 'Retail & Distribution Partner',
            desc: 'Master Franchisee of Barista Coffee Company for Patna, Bihar and commercial retail distribution partner with Reliance Malls, managing FMCG logistics and cafe formats.',
            image: '/images/ashwin-traders-division.jpg',
            badge: 'Barista Franchise Partner',
            icon: Truck,
            hasDeck: true
        }
    ];

    const stats = [
        { value: '3', label: 'Core Business Divisions', icon: Building2 },
        { value: 'Bihar & Jharkhand', label: 'Distributor Launch Area', icon: Users },
        { value: 'Hotline', label: '9507488833 / 44', icon: Bolt },
    ];

    return (
        <MainLayout>
            <Head title="Ashwin Group of Companies | Beverage, Energy & Trade" />

            {/* ─── Hero ─── */}
            <section className="relative px-gutter pt-[calc(4rem+2rem)] md:pt-[calc(4rem+6rem)] pb-16 md:pb-32 overflow-hidden flex items-center min-h-[70vh] md:min-h-[85vh]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2074&auto=format&fit=crop" 
                        alt="Sustainable Corporate Growth" 
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-primary/75 backdrop-blur-[2px]"></div>
                    {/* Ambient Glows */}
                    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
                    <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
                    {/* Dotted Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
                </div>

                <div className="relative max-w-container-max mx-auto w-full z-10">
                    <motion.div className="max-w-3xl" initial="initial" animate="animate" variants={stagger}>
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/90 text-xs md:text-sm mb-5 md:mb-6 bg-white/10 backdrop-blur-md shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inset-0 rounded-full bg-secondary opacity-75" />
                                <span className="relative rounded-full h-2 w-2 bg-secondary" />
                            </span>
                            Powering a Smart, Sustainable & Trusted Future
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
                            Ashwin Group<br className="hidden md:block"/>
                            <span className="text-secondary">of Companies.</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-sm md:text-lg text-white/85 leading-relaxed mb-8 md:mb-10 max-w-xl">
                            Driving regional development and operational excellence across packaged water beverages, renewable energy solutions, and trading logistics.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-semibold px-6 py-3 md:px-7 md:py-3.5 rounded-md hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 group text-base md:text-lg w-full sm:w-auto">
                                Explore Portfolio
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/about" className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-6 py-3 md:px-7 md:py-3.5 rounded-md hover:bg-white/10 backdrop-blur-md transition-colors text-base md:text-lg w-full sm:w-auto">
                                Our Legacy
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Stats ─── */}
            <section className="px-gutter pb-16 md:pb-24 -mt-8 md:-mt-12 relative z-20">
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 rounded-md divide-y sm:divide-y-0 sm:divide-x divide-outline-variant bg-white shadow-xl shadow-black/5 ring-1 ring-black/5">
                        {stats.map(({ value, label, icon: Icon }) => (
                            <div key={label} className="flex items-center justify-between p-6 md:p-8 group hover:bg-surface-variant/50 transition-colors">
                                <div>
                                    <div className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">{value}</div>
                                    <div className="text-xs md:text-sm font-medium text-on-surface-variant mt-1">{label}</div>
                                </div>
                                <Icon size={32} strokeWidth={1.5} className="text-outline group-hover:text-secondary transition-colors shrink-0" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Become a Distributor Campaign ─── */}
            <section className="px-gutter py-12 md:py-16 bg-white">
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left: Interactive Video & Poster Player */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, margin: '-60px' }} 
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-secondary rounded-tl-md"></div>
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-secondary rounded-br-md"></div>
                        
                        <div className="relative rounded-md overflow-hidden bg-black border border-outline-variant shadow-lg flex flex-col">
                            {/* Tabs Switcher Header */}
                            <div className="flex border-b border-outline-variant bg-white/95 backdrop-blur-sm p-1.5 gap-2">
                                <button 
                                    onClick={() => setMediaTab('video')}
                                    className={`flex-1 py-2 px-3 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${mediaTab === 'video' ? 'bg-secondary text-white shadow-sm' : 'text-primary hover:bg-surface-variant'}`}
                                >
                                    <Play size={14} />
                                    Watch TV Commercial
                                </button>
                                <button 
                                    onClick={() => setMediaTab('poster')}
                                    className={`flex-1 py-2 px-3 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${mediaTab === 'poster' ? 'bg-secondary text-white shadow-sm' : 'text-primary hover:bg-surface-variant'}`}
                                >
                                    <FileText size={14} />
                                    View Campaign Poster
                                </button>
                            </div>

                            {/* Content Display */}
                            <div className="relative aspect-[4/3] bg-black flex items-center justify-center overflow-hidden">
                                {mediaTab === 'video' ? (
                                    <video 
                                        src="/images/ashwani_water_ad.mp4" 
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <img 
                                        src="/images/ashwin-distributor.jpg" 
                                        alt="Signature & Royal Challenge Packaged Drinking Water Campaign Poster" 
                                        className="w-full h-full object-contain"
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Campaign Text & CTA */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, margin: '-60px' }} 
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-6"
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary-container text-on-secondary-container text-xs font-semibold uppercase tracking-wider mb-4">
                            Now Appointing Distributors
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4">
                            Distributor Opportunities: Signature & Royal Challenge Packaged Water
                        </h2>
                        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                            Ashwin Water Industries is launching **Signature Packaged Drinking Water with Minerals** (Franchisee of United Spirits / Diageo Group Company) and **Royal Challenge Packaged Drinking Water** across Bihar & Jharkhand. We are actively seeking local distribution partners.
                        </p>

                        {/* Campaign USP Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                { title: 'Low Investment', desc: 'Secure a high-margin franchise unit with low initial capital.' },
                                { title: 'Marketing Support', desc: 'Direct corporate sales force assistance and regional advertising.' },
                                { title: 'Diageo Group Heritage', desc: 'Distribute world-class brands with gold standard quality.' },
                                { title: 'High Turnover', desc: 'FMCG packaged mineral water has rapid stock rotation.' }
                            ].map(usp => (
                                <div key={usp.title} className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-secondary-container text-secondary flex items-center justify-center shrink-0 mt-0.5">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-sm">{usp.title}</h4>
                                        <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{usp.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Callouts */}
                        <div className="bg-surface-variant rounded-md border border-outline-variant p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <div className="text-xs text-on-surface-variant font-medium">Distributor Support Hotline</div>
                                <div className="text-lg md:text-xl font-extrabold text-primary mt-0.5 flex items-center gap-2">
                                    <span>9507488833</span>
                                    <span className="text-outline">/</span>
                                    <span>9507488844</span>
                                </div>
                            </div>
                            <a 
                                href="tel:9507488833" 
                                className="w-full sm:w-auto text-center bg-secondary text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-secondary/90 transition-colors shadow-sm"
                            >
                                Call Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Business Divisions ─── */}
            <section className="px-gutter py-16 md:py-20 bg-surface-variant border-y border-outline-variant">
                <div className="max-w-container-max mx-auto">
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">Our Group Companies</h2>
                                <p className="text-on-surface-variant text-sm mt-1">Multi-sector business units driving sustainable commercial synergy.</p>
                            </div>
                            <Link href="/industries" className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:underline group">
                                View Sectors
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {divisions.map(({ title, subtitle, desc, image, icon: Icon, badge, hasDeck }) => (
                                <motion.div
                                    key={title}
                                    variants={fadeIn}
                                    whileHover={{ y: -3 }}
                                    className="bg-white border border-outline-variant rounded-md overflow-hidden hover:border-secondary hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Division Graphic Panel */}
                                        <div className="aspect-[16/10] bg-white p-4 overflow-hidden relative border-b border-outline-variant">
                                            <img 
                                                src={image} 
                                                alt={title} 
                                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="text-[10px] font-bold text-secondary bg-secondary-container px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                                                    {badge}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 bg-surface-variant rounded-md flex items-center justify-center text-primary shrink-0">
                                                    <Icon size={16} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-primary">{title}</h3>
                                                    <div className="text-[11px] text-secondary font-semibold uppercase tracking-wider">{subtitle}</div>
                                                </div>
                                            </div>
                                            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mt-2">{desc}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="px-6 pb-6 pt-4 border-t border-outline-variant/60 flex items-center justify-between">
                                        {hasDeck ? (
                                            <a 
                                                href="/images/Barista_Brand_Deck_2026.pdf" 
                                                download 
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary bg-secondary-container hover:bg-secondary hover:text-white transition-all px-3 py-1.5 rounded-md"
                                            >
                                                <Download size={12} />
                                                Download Brand Deck
                                            </a>
                                        ) : (
                                            <span />
                                        )}
                                        <Link href="/industries" className="text-xs font-semibold text-secondary flex items-center gap-1 hover:underline">
                                            Details <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive Structure Callout */}
                        <div className="mt-12 bg-white rounded-md border border-outline-variant p-6 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-5">
                                <span className="text-[10px] font-semibold text-secondary uppercase tracking-wider bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-md">Corporate Synergy</span>
                                <h3 className="text-xl md:text-2xl font-bold text-primary mt-3 mb-3">Master Franchise & Retail Ecosystem</h3>
                                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                                    Our companies operate as parts of a unified distribution and innovation model. Ashwin Traders leverages the Master Franchise of **Barista Coffee** for Patna, Bihar and distribution networks with **Reliance Malls** to establish high-performing retail points.
                                </p>
                                <div className="space-y-3.5">
                                    <div className="border-l-2 border-secondary pl-3">
                                        <div className="font-bold text-primary text-xs">Barista Coffee Master Franchise</div>
                                        <p className="text-[11px] text-on-surface-variant mt-0.5">Running multiple successful cafes and vending formats across key cities.</p>
                                    </div>
                                    <div className="border-l-2 border-secondary pl-3">
                                        <div className="font-bold text-primary text-xs">Packaged Water Units</div>
                                        <p className="text-[11px] text-on-surface-variant mt-0.5">Appointing distributors for licensed Signature & Royal Challenge beverages.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 relative rounded-md overflow-hidden border border-outline-variant bg-surface-variant flex flex-col p-4 items-center">
                                <div className="w-full text-center mb-3">
                                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Corporate Blueprint Structure</h4>
                                </div>
                                <div className="flex gap-4 overflow-x-auto w-full pb-2">
                                    {[
                                        { name: 'Water Industries', file: '/images/ashwin-water-division.jpg' },
                                        { name: 'Energie Solar', file: '/images/ashwin-energie-division.jpg' },
                                        { name: 'Traders & Barista', file: '/images/ashwin-traders-division.jpg' }
                                    ].map(imgData => (
                                        <div key={imgData.name} className="flex-1 min-w-[150px] border border-outline-variant rounded-md overflow-hidden bg-white p-1.5 flex flex-col items-center">
                                            <img src={imgData.file} alt={imgData.name} className="h-40 w-full object-contain" />
                                            <span className="text-[10px] font-bold text-primary mt-2">{imgData.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Legacy CTA ─── */}
            <section className="px-gutter py-16 md:py-20 bg-white">
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Corporate Heritage</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight tracking-tight mb-5">
                            Committed to Enduring Quality & Innovation.
                        </h2>
                        <p className="text-on-surface-variant leading-relaxed text-sm md:text-base mb-8">
                            Founded on principles of trust and growth, Ashwin Group of Companies has transformed from local trading roots to a modern, multi-sector conglomerate. Our legacy is built on standard operating models, Diageo-licensed quality control, and clean technology systems.
                        </p>
                        <Link href="/about" className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all group text-sm">
                            Read Our Story
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                        className="relative aspect-[4/3] rounded-md overflow-hidden bg-surface-variant border border-outline-variant shadow-sm">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Ashwin Group Corporate Headquarters" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm p-4 border-t border-outline-variant">
                            <div className="font-semibold text-primary text-sm">Regional Footprint</div>
                            <div className="text-xs text-on-surface-variant">Growing operations across Bihar, Jharkhand, and neighboring Indian states.</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
}
