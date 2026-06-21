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
            <Head title="About Us - Aswani Group" />

            {/* Hero */}
            <section className="px-gutter py-16 md:py-24 text-center">
                <div className="max-w-container-max mx-auto max-w-2xl">
                    <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
                        Our <span className="text-secondary">Legacy</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                        A tradition of excellence spanning over four decades, driven by innovation, integrity, and commitment to shaping a better tomorrow.
                    </motion.p>
                </div>
            </section>

            {/* Chairman's Message */}
            <section className="px-gutter pb-16">
                <div className="max-w-container-max mx-auto">
                    <div className="bg-surface-variant rounded-md p-6 md:p-10 border border-outline-variant relative overflow-hidden">
                        <div className="absolute -top-8 -right-8 text-outline/10">
                            <Quote size={180} />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                            <motion.div {...fadeUp} className="lg:col-span-4">
                                <div className="aspect-[3/4] rounded-md overflow-hidden bg-outline-variant">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Chairman" className="w-full h-full object-cover" />
                                </div>
                            </motion.div>

                            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="lg:col-span-8">
                                <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Chairman's Message</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-6">
                                    "Our growth is measured not just in numbers, but in the enduring value we create for our stakeholders and the communities we serve."
                                </h2>
                                <div className="space-y-4 text-on-surface-variant leading-relaxed">
                                    <p>
                                        When Aswani Group was founded, our vision was simple: to build a conglomerate that stands for quality and trust. Today, as we operate across multiple sectors globally, that vision remains our guiding principle.
                                    </p>
                                    <p>
                                        We believe that true leadership in industry requires a delicate balance of aggressive innovation and steadfast adherence to our core values. We don't just build infrastructure; we build relationships that stand the test of time.
                                    </p>
                                </div>
                                <div className="mt-8 pt-5 border-t border-outline-variant">
                                    <div className="text-lg font-bold text-primary">Mr. R.K. Aswani</div>
                                    <div className="text-sm text-on-surface-variant">Founder & Chairman</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="px-gutter py-16 bg-white border-y border-outline-variant">
                <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        { icon: Eye, title: 'Our Vision', text: 'To be the global benchmark for excellence, sustainability, and innovation in every sector we operate in.' },
                        { icon: Target, title: 'Our Mission', text: 'To deliver superior value through technological advancement, operational efficiency, and unwavering commitment to quality.' },
                        { icon: Trophy, title: 'Core Values', list: ['Integrity & Transparency', 'Pursuit of Excellence', 'Sustainable Practices', 'Customer Centricity'] },
                    ].map(({ icon: Icon, title, text, list }) => (
                        <motion.div key={title} {...fadeUp} className="bg-surface-variant rounded-md p-6 border border-outline-variant">
                            <div className="w-11 h-11 bg-white rounded-md border border-outline-variant flex items-center justify-center text-primary mb-5">
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
            <section className="px-gutter py-16 md:py-20">
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Journey</h2>
                        <p className="text-on-surface-variant mt-2">Key milestones that have shaped our legacy.</p>
                    </div>

                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant md:-translate-x-px" />

                        {[
                            { year: '1985', title: 'Foundation', desc: 'Established with our first manufacturing facility in India.' },
                            { year: '1998', title: 'Infrastructure Expansion', desc: 'Secured major civic contracts, expanding the core portfolio.' },
                            { year: '2010', title: 'Global Reach', desc: 'Opened offices in the Middle East and Southeast Asia.' },
                            { year: '2024', title: 'Sustainable Future', desc: 'Launched a $500M green energy initiative.' }
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
