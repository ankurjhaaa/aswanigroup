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
            <Head title="Contact Us - Ashwin Group" />

            {/* Hero */}
            <section className="relative px-gutter pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-primary border-b border-outline-variant">
                {/* Visual Backdrop Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                        alt="Office Workspace" 
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
                            Get In Touch
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 16 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
                        >
                            Connect With <span className="text-secondary">Us</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 16 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-white/80 text-base md:text-lg leading-relaxed"
                        >
                            Interested in becoming a distributor, investing in clean energy solutions, or discussing master franchise options? Reach out to our teams.
                        </motion.p>
                    </div>
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
                                <h2 className="text-2xl font-bold mb-2">Corporate Office</h2>
                                <p className="text-white/60 text-sm mb-8">Direct lines to our division managers.</p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center shrink-0">
                                            <Building className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-secondary text-sm mb-1">HQ Address</div>
                                            <p className="text-white/70 text-sm leading-relaxed">
                                                Ashwin House, Corporate Lane<br />
                                                Exhibition Road Area<br />
                                                Patna, Bihar 800001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center shrink-0">
                                            <Phone className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-secondary text-sm mb-1">Distributor Hotlines</div>
                                            <p className="text-white/70 text-sm">9507488833</p>
                                            <p className="text-white/70 text-sm">9507488844</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center shrink-0">
                                            <Mail className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-secondary text-sm mb-1">Emails</div>
                                            <p className="text-white/70 text-sm">distributors@ashwingroup.com</p>
                                            <p className="text-white/70 text-sm">info@ashwingroup.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center shrink-0">
                                            <Clock className="text-secondary" size={20} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-secondary text-sm mb-1">Office Hours</div>
                                            <p className="text-white/70 text-sm">Mon – Sat: 10:00 AM – 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="lg:col-span-7 p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-primary mb-1">Send us a Message</h2>
                            <p className="text-on-surface-variant text-sm mb-8">We will connect you with the appropriate division head within 24 hours.</p>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">Full Name</label>
                                        <input type="text" id="name" placeholder="John Doe"
                                            className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">Phone Number</label>
                                        <input type="text" id="phone" placeholder="9507488833"
                                            className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">Email Address</label>
                                        <input type="email" id="email" placeholder="john@example.com"
                                            className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="interest" className="block text-sm font-medium text-primary mb-1.5">Division of Interest</label>
                                        <select id="interest"
                                            className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors">
                                            <option value="water">Ashwin Water Industries (Beverages)</option>
                                            <option value="energy">Ashwin Energie Pvt. Ltd. (Solar & EV)</option>
                                            <option value="traders">Ashwin Traders (Distribution & Logistics)</option>
                                            <option value="general">General Inquiries</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1.5">Subject</label>
                                    <input type="text" id="subject" placeholder="Distributor Application"
                                        className="w-full px-4 py-2.5 bg-surface-variant border border-outline-variant rounded-md text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">Message / Message Details</label>
                                    <textarea id="message" rows={4} placeholder="Let us know your location, business background, and investment capability..."
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
