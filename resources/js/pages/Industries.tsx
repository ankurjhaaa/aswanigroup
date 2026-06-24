import MainLayout from '../layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Bolt, Truck, ShieldCheck, Mail, Phone, Download, Play, FileText } from 'lucide-react';

const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5 }
};

export default function Industries() {
    const [waterView, setWaterView] = useState<'image' | 'video'>('image');

    const divisions = [
        {
            title: 'Ashwin Water Industries',
            subtitle: 'Beverage & Packaged Drinking Water',
            icon: Building2,
            image: '/images/ashwin-water-division.jpg',
            desc: 'Ashwin Water Industries is a premier manufacturer and distributor of packaged mineral water. As a licensed franchisee of United Spirits (a Diageo Group Company), we manufacture and distribute "Signature Packaged Drinking Water with Minerals" and "Royal Challenge Packaged Drinking Water" across Bihar & Jharkhand.',
            details: [
                'Diageo Group Company licensed quality control standards.',
                'Signature Packaged Mineral Water with added essential minerals.',
                'Royal Challenge Packaged Drinking Water brand distribution.',
                'Appointing regional state-wide wholesale distributors.'
            ],
            badge: 'Beverage Sector',
            isVideo: true
        },
        {
            title: 'Ashwin Energie Pvt. Ltd.',
            subtitle: 'Smart Energy & Tech Solutions',
            icon: Bolt,
            image: '/images/ashwin-energie-division.jpg',
            desc: 'Ashwin Energie is dedicated to engineering a sustainable future. We specialize in green technologies, clean power setups, and digital storefront systems. The division encompasses the Enaure digital retail platform and Eco-Plug EV smart charger infrastructure.',
            details: [
                'Eco-Plug smart EV chargers for residential and commercial spaces.',
                'Commercial and residential solar energy arrays.',
                'Enaure digital storefront retail and jewelry platform.',
                'Clean tech development and grid modernization solutions.'
            ],
            badge: 'Energy & Tech'
        },
        {
            title: 'Ashwin Traders',
            subtitle: 'Retail & Distribution Partner',
            icon: Truck,
            image: '/images/ashwin-traders-division.jpg',
            desc: 'Ashwin Traders runs a widespread logistics and trade system. We are the Master Franchisee of Barista Coffee Company for Patna, Bihar, establishing multiple cafe formats and vending services. We also partner with national giants like Reliance Mall to manage corporate FMCG supply chains.',
            details: [
                'Master Franchise rights for Barista Coffee in Patna, Bihar.',
                'Café diner, kiosk, and vending format networks.',
                'Retail partnerships with major brands like Reliance Mall.',
                'High-capacity FMCG warehousing and distribution networks.'
            ],
            badge: 'Trading & Logistics',
            hasDeck: true
        }
    ];

    return (
        <MainLayout>
            <Head title="Divisions & Sectors - Ashwin Group" />

            {/* Hero */}
            <section className="relative px-gutter pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-primary border-b border-outline-variant">
                {/* Visual Backdrop Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Industries Collaboration" 
                        className="w-full h-full object-cover opacity-25 mix-blend-luminosity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/45"></div>
                    {/* Ambient Glow */}
                    <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
                    {/* Dotted Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
                </div>
                
                <div className="max-w-container-max mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-block text-xs font-bold text-secondary uppercase tracking-widest bg-secondary-container px-3 py-1 rounded mb-4"
                        >
                            Operational Footprint
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 16 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
                        >
                            Sectors & <span className="text-secondary">Divisions</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 16 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-white/80 text-base md:text-lg leading-relaxed"
                        >
                            Discover the multi-sector business units of Ashwin Group of Companies, working together to deliver quality consumer products, sustainable energy, and logistics support.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Detailed Divisions List */}
            <section className="px-gutter py-16 bg-white">
                <div className="max-w-container-max mx-auto space-y-16">
                    {divisions.map((div, index) => (
                        <motion.div 
                            key={div.title} 
                            {...fadeUp}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Visual column */}
                            <div className={`lg:col-span-5 relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-secondary rounded-tl-md"></div>
                                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-secondary rounded-br-md"></div>
                                
                                <div className={`relative aspect-[4/3] rounded-md overflow-hidden border border-outline-variant shadow-md flex flex-col ${div.isVideo && waterView === 'video' ? 'bg-black' : 'bg-white p-4'}`}>
                                    {div.isVideo && (
                                        <div className="absolute top-2 right-2 z-10 flex gap-1 bg-white/90 backdrop-blur-sm p-1 rounded border border-outline-variant shadow-sm">
                                            <button 
                                                onClick={() => setWaterView('image')} 
                                                className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${waterView === 'image' ? 'bg-secondary text-white' : 'text-primary hover:bg-surface-variant'}`}
                                            >
                                                Image
                                            </button>
                                            <button 
                                                onClick={() => setWaterView('video')} 
                                                className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${waterView === 'video' ? 'bg-secondary text-white' : 'text-primary hover:bg-surface-variant'}`}
                                            >
                                                Play Video
                                            </button>
                                        </div>
                                    )}

                                    <div className="w-full h-full">
                                        {div.isVideo && waterView === 'video' ? (
                                            <video 
                                                src="/images/ashwani_water_ad.mp4" 
                                                controls 
                                                autoPlay 
                                                muted 
                                                loop 
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <img src={div.image} alt={div.title} className="w-full h-full object-contain" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Text column */}
                            <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <span className="inline-block text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary-container px-2.5 py-1 rounded-md mb-4">
                                    {div.badge}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-1">
                                    {div.title}
                                </h2>
                                <div className="text-sm font-semibold text-secondary mb-4">{div.subtitle}</div>
                                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-6">
                                    {div.desc}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                                    {div.details.map(detail => (
                                        <li key={detail} className="flex gap-2.5 items-start">
                                            <ShieldCheck size={16} className="text-secondary shrink-0 mt-0.5" />
                                            <span className="text-xs md:text-sm text-on-surface-variant leading-tight">{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                {div.hasDeck && (
                                    <div className="flex flex-wrap gap-3">
                                        <a 
                                            href="/images/Barista_Brand_Deck_2026.pdf" 
                                            download 
                                            className="inline-flex items-center gap-2 bg-secondary text-white font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-secondary/90 transition-colors shadow-md shadow-secondary/15"
                                        >
                                            <Download size={14} />
                                            Download Barista Brand Deck
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Distributor Promotion Block */}
            <section className="px-gutter py-16 bg-surface-variant border-t border-outline-variant">
                <div className="max-w-container-max mx-auto bg-white rounded-md border border-outline-variant p-6 md:p-10 shadow-sm">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-xs font-semibold text-secondary uppercase tracking-wider bg-secondary-container px-2.5 py-1 rounded-md">Distributor Program</span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight mt-4 mb-4">
                            Expand Your Business with Ashwin Water Industries
                        </h2>
                        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-8">
                            We are actively appointing wholesale and retail distributors for Signature Packaged Mineral Water and Royal Challenge Packaged Drinking Water in Bihar & Jharkhand. Reach out to our dealer acquisition desk to learn about territories and margins.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <div className="flex items-center gap-3 bg-surface-variant border border-outline-variant px-5 py-3 rounded-md">
                                <Phone size={18} className="text-secondary" />
                                <div className="text-left">
                                    <div className="text-[10px] text-on-surface-variant uppercase font-semibold">Call Hotline</div>
                                    <div className="font-extrabold text-primary text-sm md:text-base">9507488833 / 44</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-surface-variant border border-outline-variant px-5 py-3 rounded-md">
                                <Mail size={18} className="text-secondary" />
                                <div className="text-left">
                                    <div className="text-[10px] text-on-surface-variant uppercase font-semibold">Email Desk</div>
                                    <div className="font-extrabold text-primary text-sm md:text-base">distributors@ashwingroup.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
