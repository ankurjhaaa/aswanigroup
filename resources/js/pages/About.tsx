import MainLayout from '../layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Quote, Trophy, Target, Eye } from 'lucide-react';

const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5 }
};

export default function About() {
    return (
        <MainLayout>
            <Head title="About Us - Ashwin Group" />

            {/* Hero */}
            <section className="relative px-gutter pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-primary border-b border-outline-variant">
                {/* Visual Backdrop Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                        alt="Corporate Background" 
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
                            Our History & Trust
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 16 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
                        >
                            Our Corporate <span className="text-secondary">Legacy</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 16 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-white/80 text-base md:text-lg leading-relaxed"
                        >
                            A rich history of regional growth and operational excellence, driven by our customer-first values, smart technology investments, and clean energy solutions.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Chairman's Message */}
            <section className="px-gutter py-16">
                <div className="max-w-container-max mx-auto">
                    <div className="bg-white rounded-md p-6 md:p-10 border border-outline-variant relative overflow-hidden shadow-sm">
                        <div className="absolute -top-8 -right-8 text-outline/10">
                            <Quote size={180} />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                            <motion.div {...fadeUp} className="lg:col-span-4">
                                <div className="aspect-[3/4] rounded-md overflow-hidden bg-outline-variant">
                                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" alt="Chairman" className="w-full h-full object-cover" />
                                </div>
                            </motion.div>

                            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="lg:col-span-8">
                                <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Chairman's Message</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-6">
                                    "Our growth is anchored in trust, quality distribution partnerships, and building sustainable solutions for the communities we serve."
                               </h2>
                                <div className="space-y-4 text-on-surface-variant leading-relaxed text-sm md:text-base">
                                    <p>
                                        When Ashwin Group was established, our goal was straightforward: to create a values-driven enterprise that delivers top-tier quality and builds long-term distribution partnerships. Today, as we operate across multiple sectors including packaged mineral water beverages, solar technology, and retail logistics, that core mission remains unchanged.
                                    </p>
                                    <p>
                                        We believe that market leadership requires combining robust quality control (including manufacturing products licensed by Diageo Group) with forward-looking sustainable technology like solar arrays and EV smart chargers. Our strength lies in the trust of our distributors, partners, and retail consumers.
                                    </p>
                                </div>
                                <div className="mt-8 pt-5 border-t border-outline-variant">
                                    <div className="text-lg font-bold text-primary">Mr. R.K. Ashwin</div>
                                    <div className="text-sm text-on-surface-variant">Founder & Chairman</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="px-gutter py-16 bg-surface-variant border-y border-outline-variant">
                <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        { icon: Eye, title: 'Our Vision', text: 'To be the regional benchmark for sustainable quality, trusted trade operations, and smart energy systems across India.' },
                        { icon: Target, title: 'Our Mission', text: 'To empower distributors with profitable opportunities, deliver premium packaged beverages, and engineer clean energy tech for a better future.' },
                        { icon: Trophy, title: 'Core Values', list: ['Uncompromising Quality Control', 'Distributor-First Partnership', 'Sustainable Clean Technologies', 'Transparency & Integrity'] },
                    ].map(({ icon: Icon, title, text, list }) => (
                        <motion.div key={title} {...fadeUp} className="bg-white rounded-md p-6 border border-outline-variant shadow-sm">
                            <div className="w-11 h-11 bg-surface-variant rounded-md border border-outline-variant flex items-center justify-center text-primary mb-5">
                                <Icon size={22} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                            {text && <p className="text-on-surface-variant leading-relaxed text-sm">{text}</p>}
                            {list && (
                                <ul className="text-on-surface-variant text-sm space-y-2">
                                    {list.map(item => (
                                        <li key={item} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="px-gutter py-16 md:py-20 bg-white">
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Journey</h2>
                        <p className="text-on-surface-variant mt-2">Key milestones that have shaped our corporate legacy.</p>
                    </div>

                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant md:-translate-x-px" />

                        {[
                            { year: '1995', title: 'Corporate Foundation', desc: 'Ashwin Group was established, focusing initially on local trade, logistics, and distribution partnerships.' },
                            { year: '2008', title: 'Water Industries Division', desc: 'Launched Ashwin Water Industries, obtaining premium franchises for Signature and Royal Challenge Packaged Drinking Water.' },
                            { year: '2018', title: 'Energie Pvt. Ltd. & Solar', desc: 'Diversified into clean technologies, launching Ashwin Energie, Enaure online storefront, and Eco-Plug EV chargers.' },
                            { year: '2026', title: 'Major Regional Expansion', desc: 'Launched flagship water campaigns and appointed local distribution partners across Bihar & Jharkhand.' }
                        ].map((item, i) => (
                            <motion.div key={item.year} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className={`relative flex items-start mb-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-5/12" />
                                <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 bg-white border-2 border-secondary rounded-full -translate-x-1/2 mt-1.5 z-10" />
                                <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <div className="bg-white border border-outline-variant rounded-md p-5 shadow-sm">
                                        <div className="text-xl font-bold text-secondary">{item.year}</div>
                                        <div className="font-semibold text-primary mt-1">{item.title}</div>
                                        <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
