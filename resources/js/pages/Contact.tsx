import MainLayout from '../layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, Building, Clock } from 'lucide-react';

const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5 }
};

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact Us - Aswani Group" />

            {/* Hero */}
            <section className="px-gutter py-16 md:py-20 bg-surface-variant border-b border-outline-variant">
                <div className="max-w-container-max mx-auto text-center max-w-2xl">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
                            Get in <span className="text-secondary">Touch</span>
                        </h1>
                        <p className="text-on-surface-variant leading-relaxed">
                            Reach out for business inquiries, partnership opportunities, or to learn more about our global operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Card */}
            <section className="px-gutter py-12 md:py-16">
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 rounded-md border border-outline-variant shadow-sm overflow-hidden bg-white">

                        {/* Sidebar */}
                        <motion.div {...fadeUp} className="lg:col-span-5 bg-primary text-white p-8 md:p-10 relative overflow-hidden">
                            {/* Decorative circle */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full" />

                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-2">Headquarters</h2>
                                <p className="text-white/60 text-sm mb-8">We'd love to hear from you.</p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center shrink-0">
                                            <Building className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-secondary text-sm mb-1">Global Office</div>
                                            <p className="text-white/70 text-sm leading-relaxed">
                                                Aswani Tower, Level 45<br />
                                                Financial District<br />
                                                New York, NY 10004
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center shrink-0">
                                            <Phone className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-secondary text-sm mb-1">Phone</div>
                                            <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
                                            <p className="text-white/70 text-sm">+1 (555) 987-6543</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center shrink-0">
                                            <Mail className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-secondary text-sm mb-1">Email</div>
                                            <p className="text-white/70 text-sm">info@aswanigroup.com</p>
                                            <p className="text-white/70 text-sm">investors@aswanigroup.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center shrink-0">
                                            <Clock className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-secondary text-sm mb-1">Business Hours</div>
                                            <p className="text-white/70 text-sm">Mon – Fri: 9:00 AM – 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="lg:col-span-7 p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-primary mb-1">Send us a Message</h2>
                            <p className="text-on-surface-variant text-sm mb-8">We respond to all inquiries within 24 business hours.</p>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Full Name</label>
                                        <input type="text" id="name" placeholder="John Doe"
                                            className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-primary mb-1.5">Company</label>
                                        <input type="text" id="company" placeholder="Acme Corp"
                                            className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com"
                                        className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1.5">Subject</label>
                                    <input type="text" id="subject" placeholder="Partnership Inquiry"
                                        className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Message</label>
                                    <textarea id="message" rows={4} placeholder="Tell us about your project..."
                                        className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors resize-none" />
                                </div>

                                <button type="button"
                                    className="w-full sm:w-auto bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-secondary transition-colors flex items-center justify-center gap-2 group">
                                    Send Message
                                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
