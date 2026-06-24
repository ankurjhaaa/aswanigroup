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

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
};

const fadeIn = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact Us - Ashwin Group" />

            {/* Hero */}
            <section className="relative px-gutter pt-32 pb-16 md:pt-40 md:pb-24 bg-primary flex items-center border-b border-outline-variant">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/contact-hero-bg.png" 
                        alt="Office Workspace" 
                        className="w-full h-full object-cover opacity-20" 
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                </div>
                
                <div className="max-w-container-max mx-auto relative z-10 w-full text-center md:text-left">
                    <div className="max-w-4xl mx-auto md:mx-0">
                        <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-3xl text-center md:text-left">
                            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 border border-secondary/30 text-secondary-container text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-5 rounded bg-secondary/10 mx-auto md:mx-0">
                                Get In Touch
                            </motion.div>
                            <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                                Connect With <span className="text-secondary-container">Us.</span>
                            </motion.h1>
                            <motion.p variants={fadeIn} className="text-base md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                Interested in becoming a distributor, investing in clean energy solutions, or discussing master franchise options? Reach out to our teams.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Card */}
            <section className="px-gutter py-12 md:py-16 bg-surface-container-low">
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 border border-outline-variant rounded shadow-sm overflow-hidden bg-white">

                        {/* Sidebar */}
                        <motion.div {...fadeUp} className="lg:col-span-5 bg-primary text-white p-8 md:p-12 relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 -translate-y-1/2 translate-x-1/2 rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 translate-y-1/3 -translate-x-1/3 rounded-full" />

                            <div className="relative z-10">
                                <h2 className="text-3xl font-serif font-bold mb-3">Corporate Office</h2>
                                <p className="text-white/80 text-base mb-10">Direct lines to our division managers.</p>

                                <div className="space-y-8">
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <Building className="text-secondary" size={24} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-secondary text-sm tracking-widest uppercase mb-1.5">HQ Address</div>
                                            <p className="text-white/80 text-base leading-relaxed">
                                                Ashwin House, Corporate Lane<br />
                                                Exhibition Road Area<br />
                                                Patna, Bihar 800001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <Phone className="text-secondary" size={24} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-secondary text-sm tracking-widest uppercase mb-1.5">Distributor Hotlines</div>
                                            <p className="text-white/80 text-base font-serif">9507488833</p>
                                            <p className="text-white/80 text-base font-serif">9507488844</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <Mail className="text-secondary" size={24} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-secondary text-sm tracking-widest uppercase mb-1.5">Emails</div>
                                            <p className="text-white/80 text-base">distributors@ashwingroup.com</p>
                                            <p className="text-white/80 text-base">info@ashwingroup.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <Clock className="text-secondary" size={24} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-secondary text-sm tracking-widest uppercase mb-1.5">Office Hours</div>
                                            <p className="text-white/80 text-base">Mon – Sat: 10:00 AM – 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="lg:col-span-7 p-8 md:p-12">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Send us a Message</h2>
                            <p className="text-on-surface-variant text-base mb-8">We will connect you with the appropriate division head within 24 hours.</p>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">Full Name</label>
                                        <input type="text" id="name" placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2">Phone Number</label>
                                        <input type="text" id="phone" placeholder="9507488833"
                                            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Email Address</label>
                                        <input type="email" id="email" placeholder="john@example.com"
                                            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors" />
                                    </div>
                                    <div>
                                        <label htmlFor="interest" className="block text-sm font-bold text-primary mb-2">Division of Interest</label>
                                        <select id="interest"
                                            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors">
                                            <option value="water">Ashwin Water Industries (Beverages)</option>
                                            <option value="energy">Ashwin Energie Pvt. Ltd. (Solar & EV)</option>
                                            <option value="traders">Ashwin Traders (Distribution & Logistics)</option>
                                            <option value="general">General Inquiries</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold text-primary mb-2">Subject</label>
                                    <input type="text" id="subject" placeholder="Distributor Application"
                                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Message Details</label>
                                    <textarea id="message" rows={5} placeholder="Let us know your location, business background, and investment capability..."
                                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-sm text-primary placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none" />
                                </div>

                                <button type="button"
                                    className="w-full sm:w-auto bg-primary text-white font-bold tracking-wide px-8 py-3.5 hover:bg-secondary transition-colors flex items-center justify-center gap-2 group mt-4 border border-transparent hover:border-secondary">
                                    Submit Inquiry
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
