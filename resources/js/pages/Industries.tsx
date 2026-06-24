import MainLayout from '../layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Bolt, Truck, ShieldCheck, Mail, Phone, Download, Play, FileText } from 'lucide-react';

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

export default function Industries() {
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
            <section className="relative px-gutter pt-32 pb-16 md:pt-40 md:pb-24 bg-primary flex items-center border-b border-outline-variant">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Industries Collaboration" 
                        className="w-full h-full object-cover opacity-20" 
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                </div>
                
                <div className="max-w-container-max mx-auto relative z-10 w-full text-center md:text-left">
                    <div className="max-w-4xl mx-auto md:mx-0">
                        <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-3xl text-center md:text-left">
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 border border-secondary/30 text-secondary-container text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-5 rounded bg-secondary/10 mx-auto md:mx-0">
                                Diverse Expertise
                            </motion.div>
                            <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                                Our Business <span className="text-secondary-container">Sectors.</span>
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                Engineering growth across essential industries: clean drinking water, renewable energy ecosystems, and comprehensive distribution channels.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Divisions List */}
            <section className="px-gutter py-12 md:py-16 bg-white">
                <div className="max-w-container-max mx-auto space-y-16">
                    {divisions.map((div, index) => (
                        <motion.div 
                            key={div.title} 
                            {...fadeUp}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Visual column */}
                            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className={`aspect-[4/3] relative rounded overflow-hidden border border-outline-variant shadow-sm flex flex-col ${div.isVideo ? 'bg-black' : 'bg-surface-container-low p-2'}`}>
                                    <div className="w-full h-full relative">
                                        {div.isVideo ? (
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

                            <div className={`lg:col-span-7 text-center lg:text-left ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <span className="inline-block text-xs font-bold text-secondary uppercase tracking-widest mb-3">
                                    {div.badge}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-tight mb-2">
                                    {div.title}
                                </h2>
                                <div className="text-base font-semibold text-secondary mb-5">{div.subtitle}</div>
                                <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                                    {div.desc}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left">
                                    {div.details.map(detail => (
                                        <li key={detail} className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-secondary shrink-0 mt-2" />
                                            <span className="text-sm md:text-base text-on-surface-variant leading-tight">{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                {div.hasDeck && (
                                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 border-t border-outline-variant">
                                        <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-bold px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors w-full sm:w-auto">
                                            View Projects <ArrowRight size={16} />
                                        </Link>
                                        <a 
                                            href="/images/Barista_Brand_Deck_2026.pdf" 
                                            download 
                                            className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded hover:bg-primary/90 transition-colors"
                                        >
                                            <FileText size={18} />
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
            <section className="px-gutter py-16 md:py-20 bg-surface-container-low border-t border-outline-variant">
                <div className="max-w-4xl mx-auto bg-white rounded border border-outline-variant p-10 md:p-14 shadow-sm text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
                    <span className="text-sm font-bold text-secondary uppercase tracking-widest">Distributor Program</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-tight mt-6 mb-6">
                        Expand Your Business with Ashwin Water Industries
                    </h2>
                    <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                        We are actively appointing wholesale and retail distributors for Signature Packaged Mineral Water and Royal Challenge Packaged Drinking Water in Bihar & Jharkhand. Reach out to our dealer acquisition desk to learn about territories and margins.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-4 bg-surface-container-low border border-outline-variant px-6 py-4 rounded">
                            <Phone size={24} className="text-secondary" />
                            <div className="text-left">
                                <div className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Call Hotline</div>
                                <div className="font-serif font-bold text-primary text-lg md:text-xl mt-1">9507488833 / 44</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-surface-container-low border border-outline-variant px-6 py-4 rounded">
                            <Mail size={24} className="text-secondary" />
                            <div className="text-left">
                                <div className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Email Desk</div>
                                <div className="font-serif font-bold text-primary text-lg md:text-xl mt-1">distributors@ashwingroup.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
