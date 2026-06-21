import MainLayout from '../layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Bolt, Cpu, HardHat, Truck, Users } from 'lucide-react';

const fadeIn = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const stagger = {
    animate: { transition: { staggerChildren: 0.08 } }
};

const industries = [
    { title: 'Infrastructure', icon: Building2, desc: 'Developing resilient civic and commercial frameworks for modern cities.' },
    { title: 'Construction', icon: HardHat, desc: 'Precision engineering and sustainable building practices at scale.' },
    { title: 'Manufacturing', icon: Cpu, desc: 'Advanced production facilities optimizing output and quality control.' },
    { title: 'Logistics', icon: Truck, desc: 'Global supply chain management and efficient distribution networks.' },
    { title: 'Energy', icon: Bolt, desc: 'Investing in sustainable and conventional power generation solutions.' },
    { title: 'Technology', icon: Cpu, desc: 'Digital transformation and smart infrastructure integration.' }
];

const stats = [
    { value: '45+', label: 'Years of Experience', icon: Building2 },
    { value: '120+', label: 'Global Projects', icon: Users },
    { value: '85', label: 'Strategic Partners', icon: HardHat },
];

export default function Home() {
    return (
        <MainLayout>
            <Head title="Aswani Group | Building Industries. Creating Futures." />

            {/* ─── Hero ─── */}
            <section className="relative px-gutter pt-[calc(4rem+2rem)] md:pt-[calc(4rem+6rem)] pb-16 md:pb-32 overflow-hidden flex items-center min-h-[70vh] md:min-h-[85vh]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                        alt="Corporate Architecture" 
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative max-w-container-max mx-auto w-full z-10">
                    <motion.div className="max-w-3xl" initial="initial" animate="animate" variants={stagger}>
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/90 text-xs md:text-sm mb-5 md:mb-6 bg-white/10 backdrop-blur-md shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inset-0 rounded-full bg-secondary opacity-75" />
                                <span className="relative rounded-full h-2 w-2 bg-secondary" />
                            </span>
                            Building the Foundations of Tomorrow
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
                            Building Industries.<br className="hidden md:block"/>
                            <span className="text-secondary">Creating Futures.</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-sm md:text-lg text-white/80 leading-relaxed mb-8 md:mb-10 max-w-xl">
                            Aswani Group drives global progress through strategic investments and operational excellence across core industrial sectors.
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
                                    <div className="text-3xl md:text-4xl font-extrabold text-primary">{value}</div>
                                    <div className="text-sm md:text-base font-medium text-on-surface-variant mt-1">{label}</div>
                                </div>
                                <Icon size={36} strokeWidth={1.5} className="text-outline group-hover:text-secondary transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Industries ─── */}
            <section className="px-gutter py-16 md:py-20 bg-surface-variant">
                <div className="max-w-container-max mx-auto">
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Core Industries</h2>
                                <p className="text-on-surface-variant mt-2">Strategic focus areas driving global development.</p>
                            </div>
                            <Link href="/industries" className="inline-flex items-center gap-1.5 text-secondary font-semibold text-sm hover:underline group">
                                View All Sectors
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                            {industries.map(({ title, icon: Icon, desc }) => (
                                <motion.div
                                    key={title}
                                    variants={fadeIn}
                                    whileHover={{ y: -3 }}
                                    className="bg-white border border-outline-variant rounded-md p-6 hover:border-secondary hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="w-11 h-11 bg-surface-variant rounded-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-5">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
                                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Legacy CTA ─── */}
            <section className="px-gutter py-16 md:py-20">
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Our Legacy</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight tracking-tight mb-5">
                            Decades of Unwavering Excellence.
                        </h2>
                        <p className="text-on-surface-variant leading-relaxed mb-8">
                            Since our inception, Aswani Group has maintained a singular focus: delivering uncompromising quality across complex industrial landscapes. Our legacy is built on rigorous standards and strategic foresight.
                        </p>
                        <Link href="/about" className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-all group">
                            Read Our Story
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                        className="relative aspect-[4/3] rounded-md overflow-hidden bg-surface-variant border border-outline-variant shadow-sm">
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop" alt="Corporate Boardroom" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-4 border-t border-outline-variant">
                            <div className="font-semibold text-primary">Global Operations</div>
                            <div className="text-sm text-on-surface-variant">Operating in over 15 countries worldwide.</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
}
