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
            <section className="relative px-gutter pt-32 pb-16 md:pt-40 md:pb-24 bg-primary flex items-center">
                <div className="relative max-w-container-max mx-auto w-full z-10 grid md:grid-cols-2 gap-10 items-center">
                    <motion.div className="max-w-2xl" initial="initial" animate="animate" variants={stagger}>
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 border border-secondary/30 text-secondary-container text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-5 rounded bg-secondary/10 text-center">
                            Powering a Smart, Sustainable & Trusted Future
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-4 text-center md:text-left">
                            Ashwin Group<br className="hidden md:block"/>
                            <span className="text-secondary-container">of Companies.</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-xl text-center md:text-left mx-auto md:mx-0">
                            Driving regional development and operational excellence across packaged water beverages, renewable energy solutions, and trading logistics since inception.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded hover:bg-secondary/90 transition-colors shadow-sm text-base w-full sm:w-auto">
                                Explore Portfolio
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="/about" className="inline-flex items-center justify-center border-2 border-white/20 text-white font-semibold px-8 py-3.5 rounded hover:border-white/40 hover:bg-white/5 transition-colors text-base w-full sm:w-auto">
                                Our Legacy
                            </Link>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:block relative w-full h-[400px] overflow-hidden rounded shadow-lg border border-white/10 bg-black/20"
                    >
                        <div className="absolute top-0 left-0 w-full flex flex-col animate-vertical-scroll cursor-pointer">
                            {/* Set 1 */}
                            <div className="h-[400px] w-full flex-shrink-0 relative">
                                <img src="/images/home-headquarters.png" alt="Corporate Headquarters" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[10px] font-bold text-secondary-container uppercase tracking-wider mb-1">Infrastructure</span>
                                    <h3 className="text-white font-serif font-bold text-lg">Corporate Headquarters</h3>
                                </div>
                            </div>
                            <div className="h-[400px] w-full flex-shrink-0 relative">
                                <img src="/images/portfolio-water-1.png" alt="Signature Mineral Water Unit" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[10px] font-bold text-secondary-container uppercase tracking-wider mb-1">Beverage & Water</span>
                                    <h3 className="text-white font-serif font-bold text-lg">Signature Mineral Water</h3>
                                </div>
                            </div>
                            <div className="h-[400px] w-full flex-shrink-0 relative">
                                <img src="/images/portfolio-energy-1.png" alt="Eco-Plug EV Charging Hubs" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[10px] font-bold text-secondary-container uppercase tracking-wider mb-1">Renewable Energy</span>
                                    <h3 className="text-white font-serif font-bold text-lg">EV Charging & Solar Hubs</h3>
                                </div>
                            </div>
                            <div className="h-[400px] w-full flex-shrink-0 relative">
                                <img src="/images/portfolio-traders-1.png" alt="Barista Coffee Cafe" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[10px] font-bold text-secondary-container uppercase tracking-wider mb-1">Franchise & Trade</span>
                                    <h3 className="text-white font-serif font-bold text-lg">Barista Coffee Operations</h3>
                                </div>
                            </div>

                            {/* Set 2 (Duplicate for Infinite Loop) */}
                            <div className="h-[400px] w-full flex-shrink-0 relative">
                                <img src="/images/home-headquarters.png" alt="Corporate Headquarters" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[10px] font-bold text-secondary-container uppercase tracking-wider mb-1">Infrastructure</span>
                                    <h3 className="text-white font-serif font-bold text-lg">Corporate Headquarters</h3>
                                </div>
                            </div>
                            <div className="h-[400px] w-full flex-shrink-0 relative">
                                <img src="/images/portfolio-water-1.png" alt="Signature Mineral Water Unit" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[10px] font-bold text-secondary-container uppercase tracking-wider mb-1">Beverage & Water</span>
                                    <h3 className="text-white font-serif font-bold text-lg">Signature Mineral Water</h3>
                                </div>
                            </div>
                            <div className="h-[400px] w-full flex-shrink-0 relative">
                                <img src="/images/portfolio-energy-1.png" alt="Eco-Plug EV Charging Hubs" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[10px] font-bold text-secondary-container uppercase tracking-wider mb-1">Renewable Energy</span>
                                    <h3 className="text-white font-serif font-bold text-lg">EV Charging & Solar Hubs</h3>
                                </div>
                            </div>
                            <div className="h-[400px] w-full flex-shrink-0 relative">
                                <img src="/images/portfolio-traders-1.png" alt="Barista Coffee Cafe" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-[10px] font-bold text-secondary-container uppercase tracking-wider mb-1">Franchise & Trade</span>
                                    <h3 className="text-white font-serif font-bold text-lg">Barista Coffee Operations</h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Stats ─── */}
            <section className="px-gutter py-8 bg-white border-b border-outline-variant">
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant">
                        {stats.map(({ value, label, icon: Icon }) => (
                            <div key={label} className="flex items-center justify-between p-4 md:p-6">
                                <div>
                                    <div className="text-2xl md:text-3xl font-serif font-bold text-primary">{value}</div>
                                    <div className="text-xs font-semibold text-on-surface-variant mt-1 uppercase tracking-wide">{label}</div>
                                </div>
                                <Icon size={28} strokeWidth={1.5} className="text-secondary opacity-80 shrink-0" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Become a Distributor Campaign ─── */}
            <section className="px-gutter py-16 md:py-20 bg-surface-container-high border-b border-outline-variant">
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Interactive Video & Poster Player */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, margin: '-60px' }} 
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative rounded overflow-hidden bg-white border border-outline-variant shadow-sm flex flex-col">
                            {/* Tabs Switcher Header */}
                            <div className="flex border-b border-outline-variant bg-white p-2 gap-2">
                                <button 
                                    onClick={() => setMediaTab('video')}
                                    className={`flex-1 py-2 px-3 rounded text-sm font-semibold transition-all flex items-center justify-center gap-2 ${mediaTab === 'video' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-variant hover:text-primary'}`}
                                >
                                    <Play size={16} />
                                    Watch TV Commercial
                                </button>
                                <button 
                                    onClick={() => setMediaTab('poster')}
                                    className={`flex-1 py-2 px-3 rounded text-sm font-semibold transition-all flex items-center justify-center gap-2 ${mediaTab === 'poster' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:bg-surface-variant hover:text-primary'}`}
                                >
                                    <FileText size={16} />
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
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 mx-auto md:mx-0">
                            Now Appointing Distributors
                        </span>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight leading-tight mb-4 text-center md:text-left">
                            Distributor Opportunities: Signature & Royal Challenge
                        </h2>
                        <p className="text-on-surface-variant text-sm md:text-lg leading-relaxed mb-6 text-center md:text-left">
                            Ashwin Water Industries is launching **Signature** and **Royal Challenge Packaged Drinking Water** across Bihar & Jharkhand. We are actively seeking local distribution partners.
                        </p>

                        {/* Campaign USP Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                            {[
                                { title: 'Low Investment', desc: 'Secure a high-margin franchise unit with low initial capital.' },
                                { title: 'Marketing Support', desc: 'Direct corporate sales force assistance and regional advertising.' },
                                { title: 'Diageo Group Heritage', desc: 'Distribute world-class brands with gold standard quality.' },
                                { title: 'High Turnover', desc: 'FMCG packaged mineral water has rapid stock rotation.' }
                            ].map(usp => (
                                <div key={usp.title} className="flex gap-3">
                                    <div className="w-6 h-6 rounded bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5 border border-secondary/20">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-base">{usp.title}</h4>
                                        <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{usp.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Callouts */}
                        <div className="bg-white rounded border border-outline-variant p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                            <div>
                                <div className="text-xs md:text-sm text-on-surface-variant font-semibold uppercase tracking-wide">Distributor Support Hotline</div>
                                <div className="text-xl md:text-2xl font-serif font-bold text-primary mt-1 flex items-center justify-center sm:justify-start gap-2">
                                    <span>9507488833</span>
                                    <span className="text-outline">/</span>
                                    <span>44</span>
                                </div>
                            </div>
                            <a 
                                href="tel:9507488833" 
                                className="w-full sm:w-auto text-center bg-secondary text-white text-base font-semibold px-8 py-3 rounded hover:bg-secondary/90 transition-colors shadow-sm"
                            >
                                Call Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Business Divisions ─── */}
            <section className="px-gutter py-16 md:py-20 bg-white border-b border-outline-variant">
                <div className="max-w-container-max mx-auto">
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 mb-10 text-center sm:text-left">
                            <div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight mb-2">Our Group Companies</h2>
                                <p className="text-on-surface-variant text-sm md:text-lg">Multi-sector business units driving sustainable commercial synergy.</p>
                            </div>
                            <Link href="/industries" className="inline-flex items-center gap-2 text-secondary font-bold text-sm md:text-base hover:underline group mt-2 sm:mt-0">
                                View Sectors
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {divisions.map(({ title, subtitle, desc, image, icon: Icon, badge, hasDeck }) => (
                                <motion.div
                                    key={title}
                                    variants={fadeIn}
                                    className="bg-white border border-outline-variant shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Division Graphic Panel */}
                                        <div className="aspect-[16/10] bg-surface-container-high p-4 flex items-center justify-center relative border-b border-outline-variant">
                                            <img 
                                                src={image} 
                                                alt={title} 
                                                className="w-full h-full object-contain"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="text-[10px] font-bold text-secondary bg-white border border-outline-variant px-2 py-1 uppercase tracking-widest shadow-sm">
                                                    {badge}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center text-primary shrink-0 bg-surface-container-low">
                                                    <Icon size={18} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-serif font-bold text-primary leading-tight">{title}</h3>
                                                    <div className="text-xs text-secondary font-semibold uppercase tracking-widest mt-0.5">{subtitle}</div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                                        {hasDeck ? (
                                            <a 
                                                href="/images/Barista_Brand_Deck_2026.pdf" 
                                                download 
                                                className="inline-flex items-center gap-2 text-xs font-bold text-primary border border-outline-variant hover:bg-surface-variant transition-colors px-3 py-2 rounded"
                                            >
                                                <Download size={14} />
                                                Deck
                                            </a>
                                        ) : (
                                            <span />
                                        )}
                                        <Link href="/industries" className="text-sm font-semibold text-secondary flex items-center gap-1 hover:underline">
                                            Details <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive Structure Callout */}
                        <div className="mt-12 bg-surface-container-low border border-outline-variant shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-5 p-6 lg:p-8">
                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 border border-secondary/20">Corporate Synergy</span>
                                <h3 className="text-2xl font-serif font-bold text-primary mt-3 mb-3">Master Franchise & Retail Ecosystem</h3>
                                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                                    Our companies operate as parts of a unified distribution and innovation model. Ashwin Traders leverages the Master Franchise of **Barista Coffee** for Patna, Bihar and distribution networks with **Reliance Malls** to establish high-performing retail points.
                                </p>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-secondary pl-4">
                                        <div className="font-bold text-primary text-sm uppercase tracking-wide">Barista Coffee Master Franchise</div>
                                        <p className="text-sm text-on-surface-variant mt-1">Running multiple successful cafes and vending formats across key cities.</p>
                                    </div>
                                    <div className="border-l-4 border-secondary pl-4">
                                        <div className="font-bold text-primary text-sm uppercase tracking-wide">Packaged Water Units</div>
                                        <p className="text-sm text-on-surface-variant mt-1">Appointing distributors for licensed Signature & Royal Challenge beverages.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 bg-white p-6 border-l border-outline-variant h-full flex flex-col justify-center items-center">
                                <div className="w-full text-center mb-5">
                                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest border-b border-outline-variant pb-2 inline-block">Corporate Blueprint Structure</h4>
                                </div>
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    {[
                                        { name: 'Water Industries', file: '/images/ashwin-water-division.jpg' },
                                        { name: 'Energie Solar', file: '/images/ashwin-energie-division.jpg' },
                                        { name: 'Traders & Barista', file: '/images/ashwin-traders-division.jpg' }
                                    ].map(imgData => (
                                        <div key={imgData.name} className="flex flex-col items-center">
                                            <div className="border border-outline-variant bg-surface-container-low p-2 w-full aspect-square flex items-center justify-center mb-2">
                                                <img src={imgData.file} alt={imgData.name} className="w-full h-full object-contain" />
                                            </div>
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-wide text-center">{imgData.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Legacy CTA ─── */}
            <section className="px-gutter py-16 md:py-24 bg-surface-container-high">
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <p className="text-xs md:text-sm font-bold text-secondary uppercase tracking-widest mb-2 text-center lg:text-left">Corporate Heritage</p>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight tracking-tight mb-4 text-center lg:text-left">
                            Committed to Enduring Quality & Innovation.
                        </h2>
                        <p className="text-on-surface-variant leading-relaxed text-sm md:text-lg mb-8 text-center lg:text-left">
                            Ashwin Group of Companies has transformed from local trading roots to a modern, multi-sector conglomerate. Our legacy is built on standard operating models, licensed quality control, and clean technology systems.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <Link href="/about" className="inline-flex items-center justify-center border-2 border-primary text-primary font-bold px-8 py-3 hover:bg-primary hover:text-white transition-colors text-sm md:text-base w-full sm:w-auto">
                                Read Our Story
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                        className="relative aspect-[4/3] bg-white border border-outline-variant shadow-sm p-3">
                        <img src="/images/home-headquarters.png" alt="Ashwin Group Corporate Headquarters" className="w-full h-full object-cover border border-outline-variant/50" />
                        <div className="absolute bottom-6 left-6 right-6 bg-white p-4 border border-outline-variant shadow-lg">
                            <div className="font-bold text-primary text-base mb-1 uppercase tracking-wider">Regional Footprint</div>
                            <div className="text-sm text-on-surface-variant leading-relaxed">Growing operations across Bihar, Jharkhand, and neighboring Indian states.</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
}
