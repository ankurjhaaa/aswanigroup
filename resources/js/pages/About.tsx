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

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

const fadeIn = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


export default function About() {
    return (
        <MainLayout>
            <Head title="About Us - Ashwin Group" />

            {/* Hero */}
            <section className="relative px-gutter pt-32 pb-16 md:pt-40 md:pb-24 bg-primary flex items-center border-b border-outline-variant">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                        alt="Corporate Background" 
                        className="w-full h-full object-cover opacity-20" 
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                </div>
                
                <div className="max-w-container-max mx-auto relative z-10 w-full text-center md:text-left">
                    <div className="max-w-4xl mx-auto md:mx-0">
                        <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-3xl text-center md:text-left">
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 border border-secondary/30 text-secondary-container text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-5 rounded bg-secondary/10 mx-auto md:mx-0">
                                Est. 1999
                            </motion.div>
                            <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                                Our <span className="text-secondary-container">Legacy.</span>
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                Two decades of enduring excellence, building businesses that power regional growth and sustainability.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Chairman's Message */}
            <section className="px-gutter py-16 md:py-20 bg-white">
                <div className="max-w-container-max mx-auto">
                    <div className="bg-white rounded border border-outline-variant relative overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center relative z-10">
                            <motion.div {...fadeUp} className="lg:col-span-5 h-full">
                                <div className="h-full aspect-square lg:aspect-auto w-full bg-surface-container-low border-b lg:border-b-0 lg:border-r border-outline-variant">
                                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" alt="Chairman" className="w-full h-full object-cover" />
                                </div>
                            </motion.div>

                            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="lg:col-span-7 p-8 lg:p-12 relative">
                                <div className="absolute top-8 right-10 text-outline-variant/30">
                                    <Quote size={80} />
                                </div>
                                <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Chairman's Message</p>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary leading-tight mb-6">
                                    "Our growth is anchored in trust, quality distribution partnerships, and building sustainable solutions for the communities we serve."
                                </h2>
                                <div className="space-y-4 text-on-surface-variant leading-relaxed text-base">
                                    <p>
                                        When Ashwin Group was established, our goal was straightforward: to create a values-driven enterprise that delivers top-tier quality and builds long-term distribution partnerships. Today, as we operate across multiple sectors including packaged mineral water beverages, solar technology, and retail logistics, that core mission remains unchanged.
                                    </p>
                                    <p>
                                        We believe that market leadership requires combining robust quality control (including manufacturing products licensed by Diageo Group) with forward-looking sustainable technology like solar arrays and EV smart chargers. Our strength lies in the trust of our distributors, partners, and retail consumers.
                                    </p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-outline-variant">
                                    <div className="text-xl font-serif font-bold text-primary">Mr. R.K. Ashwin</div>
                                    <div className="text-sm font-semibold text-secondary uppercase tracking-widest mt-1">Founder & Chairman</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="px-gutter py-12 md:py-16 bg-surface-variant border-y border-outline-variant">
                <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        { icon: Eye, title: 'Our Vision', text: 'To be the regional benchmark for sustainable quality, trusted trade operations, and smart energy systems across India.' },
                        { icon: Target, title: 'Our Mission', text: 'To empower distributors with profitable opportunities, deliver premium packaged beverages, and engineer clean energy tech for a better future.' },
                        { icon: Trophy, title: 'Core Values', list: ['Uncompromising Quality Control', 'Distributor-First Partnership', 'Sustainable Clean Technologies', 'Transparency & Integrity'] },
                    ].map(({ icon: Icon, title, text, list }) => (
                        <motion.div key={title} {...fadeUp} className="bg-white p-6 border border-outline-variant shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-surface-container-low border border-outline-variant flex items-center justify-center text-primary mb-5">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-3">{title}</h3>
                                {text && <p className="text-on-surface-variant leading-relaxed text-base">{text}</p>}
                                {list && (
                                    <ul className="text-on-surface-variant text-base space-y-3 mt-2">
                                        {list.map(item => (
                                            <li key={item} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-secondary shrink-0 mt-2" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="px-gutter py-16 md:py-24 bg-surface-container-low border-b border-outline-variant">
                <div className="max-w-container-max mx-auto">
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2 variants={fadeIn} className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight mb-4">Our Journey</motion.h2>
                        <motion.p variants={fadeIn} className="text-on-surface-variant text-sm md:text-lg">Key milestones that have shaped our corporate legacy.</motion.p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant md:-translate-x-px" />

                        {[
                            { year: '1995', title: 'Corporate Foundation', desc: 'Ashwin Group was established, focusing initially on local trade, logistics, and distribution partnerships.' },
                            { year: '2008', title: 'Water Industries Division', desc: 'Launched Ashwin Water Industries, obtaining premium franchises for Signature and Royal Challenge Packaged Drinking Water.' },
                            { year: '2018', title: 'Energie Pvt. Ltd. & Solar', desc: 'Diversified into clean technologies, launching Ashwin Energie, Enaure online storefront, and Eco-Plug EV chargers.' },
                            { year: '2026', title: 'Major Regional Expansion', desc: 'Launched flagship water campaigns and appointed local distribution partners across Bihar & Jharkhand.' }
                        ].map((item, i) => (
                            <motion.div key={item.year} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className={`relative flex items-start mb-10 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-5/12" />
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-secondary rounded-full -translate-x-[0.45rem] md:-translate-x-1/2 mt-1 z-10" />
                                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className="bg-white border border-outline-variant p-6 shadow-sm relative">
                                        <div className="text-2xl font-serif font-bold text-secondary mb-1">{item.year}</div>
                                        <div className="font-bold text-primary text-lg">{item.title}</div>
                                        <p className="text-base text-on-surface-variant mt-2 leading-relaxed">{item.desc}</p>
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
