import { Link } from '@inertiajs/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary text-white w-full">
            <div className="max-w-container-max mx-auto px-gutter py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-2.5 mb-4">
                            <img 
                                src="/images/logo.png" 
                                alt="Ashwin Group Logo" 
                                className="w-8 h-8 object-contain" 
                            />
                            <span className="text-xl font-bold tracking-tight">Ashwin Group</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
                            Powering a smart, sustainable, and trusted future across water, energy, and trade industries.
                        </p>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                            <MapPin size={14} />
                            <span>Bihar · Jharkhand · West Bengal</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Company</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Industries', href: '/industries' },
                                { label: 'Portfolio', href: '/portfolio' },
                                { label: 'Contact', href: '/contact' },
                            ].map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Divisions</h4>
                        <ul className="space-y-3">
                            {['Water Industries', 'Energie Pvt. Ltd.', 'Traders & Logistics'].map(ind => (
                                <li key={ind}>
                                    <Link href="/industries" className="text-white/70 hover:text-white transition-colors text-sm">
                                        {ind}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Get in Touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-white/70">
                                <Phone size={16} className="text-secondary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-white/70">
                                <Mail size={16} className="text-secondary shrink-0" />
                                <span>info@ashwingroup.com</span>
                            </div>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-block mt-6 bg-secondary text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-secondary/90 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <span>© {new Date().getFullYear()} Ashwin Group. All rights reserved.</span>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
