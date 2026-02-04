import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const EnterpriseContact = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar type="enterprise" />

            <main className="flex-grow">
                <section className="relative bg-background-light dark:bg-[#1a0e10] py-20 border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                            Direct Support
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-6">
                            Meet our Specialists
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-text-secondary dark:text-gray-400">
                            Skip the generic support queues. Connect directly with the expert assigned to your specific business area for immediate, tailored solutions.
                        </p>
                    </div>
                </section>
                <section className="py-16 bg-white dark:bg-[#211113]">
                    <div className="max-w-7xl mx-auto px-4 md:px-10">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group relative bg-background-light dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="size-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
                                            <img alt="Carlos Rodriguez" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPyYN4POiFka4WVtRjE5WgUJ_VhQwx5vTnkFgC06CFMogTD26oGPYg9cYTje-ZwarFXpEqr7tluk0MY7MsHHOtO3djCbyPfGnQrdxRwsSPvCFNSD27p7CPRe1bEeO-lwquwKARDcMSxpw0S9v-7OMzXyk4OZFwF6xaua0oTdP23CVhg3mjKqZXx6jpRIcAMICk4SB4hM_WNtgDahvtSu6hVvCw6sdX7FI8M3l8GEUosJXQz0rcbpDI7Nqxj3TfKs4tsphgvJrzL2C7" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-text-main dark:text-white">Carlos Rodriguez</h3>
                                            <p className="text-primary text-sm font-medium">Infrastructure Specialist</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary text-[20px]">dns</span>
                                        <span>Data Center & Hardware</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                                        <span>Mon-Fri: 08:30 - 17:30</span>
                                    </div>
                                    <a className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link" href="mailto:carlos.r@improtru.com">
                                        <span className="material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]">mail</span>
                                        carlos.r@improtru.com
                                    </a>
                                    <a className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link" href="tel:+593999999999">
                                        <span className="material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]">call</span>
                                        +593 99 123 4567
                                    </a>
                                </div>
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Avg. Response</span>
                                        <span className="text-xs font-bold text-text-main dark:text-white">&lt; 2 Hours</span>
                                    </div>
                                    <button className="size-10 rounded-full bg-white dark:bg-gray-800 text-primary border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                            <div className="group relative bg-background-light dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="size-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
                                            <img alt="Ana Mikovic" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSCSi6Mn3_MORK9HgV38BXiXQoe23BDe9c9cLUpaq_vX1eWB4s8ySSjQ_1WVSO8i0Cwx2m3FmEdRSMiNplwCXYizsYb36QKQqAgOIfcAsb4dhc6DEv6KayFtQxjkpcllrNMYg361FJKm-vJWAfl4gGoENZGWELFUExNlBRfWnSN1q-wzzwq0n26xvhSuGtgh_fYcexVpUDoV1Raddj0j7GMF2o1iFfkbt5zEojFOQw5sM6st8OPZ_5P7tntlQ0kbDPJggQmtjIhPE-" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-text-main dark:text-white">Ana Mikovic</h3>
                                            <p className="text-primary text-sm font-medium">Licensing Consultant</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                                        <span>Software & Compliance</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                                        <span>Mon-Fri: 09:00 - 18:00</span>
                                    </div>
                                    <a className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link" href="mailto:ana.m@improtru.com">
                                        <span className="material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]">mail</span>
                                        ana.m@improtru.com
                                    </a>
                                    <a className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link" href="tel:+593999999998">
                                        <span className="material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]">call</span>
                                        +593 99 765 4321
                                    </a>
                                </div>
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Avg. Response</span>
                                        <span className="text-xs font-bold text-text-main dark:text-white">&lt; 1 Hour</span>
                                    </div>
                                    <button className="size-10 rounded-full bg-white dark:bg-gray-800 text-primary border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                            <div className="group relative bg-background-light dark:bg-[#1a0e10] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="size-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
                                            <img alt="David Chen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4yt5s6ipWo1OAFVtbULtizBwK4pLIV9ArF8IzrzL42ucBXamojE3ZgB5Y85Etf_Mh0d1CxiOxGLwaMkPdKrsT2h09bty0PXK7UpNI8y-AHj9hshnmf8LQlQKBu6JA0RMoB-SO4T0FgQn4KtG3oEr_pMnMfLZU3iiC5x0NLXLKkPzOjw_ZxxeAx8r5uQp9FlNk3Hl65iJ0Inz3z0d3QpH-nDwQar0-8UtRj5VQflG_MyzTMIgDhVbXiPCDmlKC_RbaeXdznNl8Lgkq" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-text-main dark:text-white">David Chen</h3>
                                            <p className="text-primary text-sm font-medium">Cloud Architect</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary text-[20px]">cloud_queue</span>
                                        <span>Virtualization & Cloud</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400">
                                        <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                                        <span>Mon-Fri: 08:00 - 16:00</span>
                                    </div>
                                    <a className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link" href="mailto:david.c@improtru.com">
                                        <span className="material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]">mail</span>
                                        david.c@improtru.com
                                    </a>
                                    <a className="flex items-center gap-3 text-sm text-text-secondary dark:text-gray-400 hover:text-primary transition-colors group/link" href="tel:+593999999997">
                                        <span className="material-symbols-outlined text-gray-400 group-hover/link:text-primary text-[20px]">call</span>
                                        +593 99 555 0199
                                    </a>
                                </div>
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Avg. Response</span>
                                        <span className="text-xs font-bold text-text-main dark:text-white">&lt; 3 Hours</span>
                                    </div>
                                    <button className="size-10 rounded-full bg-white dark:bg-gray-800 text-primary border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-background-light dark:bg-[#1a0e10] border-t border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 md:px-10">
                        <div className="bg-white dark:bg-[#211113] rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <div className="space-y-10">
                                    <div>
                                        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">Visit Our Office</h2>
                                        <p className="text-text-secondary dark:text-gray-400">
                                            Experience our solutions in person at our dedicated demo center. Schedule a visit or drop by during our business hours.
                                        </p>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="flex gap-5">
                                            <div className="size-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-text-main dark:text-white text-lg mb-2">Corporate Headquarters</h4>
                                                <p className="text-text-secondary dark:text-gray-400 font-medium leading-relaxed">
                                                    Av. Eloy Alfaro n34-118,<br />
                                                    Edificio Maldonado ofi 2000
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-5">
                                            <div className="size-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-text-main dark:text-white text-lg mb-2">Business Hours</h4>
                                                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-text-secondary dark:text-gray-400">
                                                    <span className="font-medium">Monday - Friday</span>
                                                    <span className="text-right">09:00 - 18:00</span>
                                                    <span className="font-medium">Saturday</span>
                                                    <span className="text-right">By Appointment</span>
                                                    <span className="font-medium">Sunday</span>
                                                    <span className="text-right">Closed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 pt-4">
                                            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-red-600 transition-colors shadow-lg shadow-primary/25">
                                                <span className="material-symbols-outlined">map</span>
                                                Get Directions
                                            </button>
                                            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-text-main dark:text-white rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                <span className="material-symbols-outlined">calendar_month</span>
                                                Schedule Visit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-[400px] lg:h-[500px] w-full bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-inner border border-gray-200 dark:border-gray-800">
                                    <iframe allowFullScreen="" className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7963625712366!2d-78.4854586852467!3d-0.1876527998632616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7a1c7c7c7d%3A0x7c7c7c7c7c7c7c7c!2sAv.%20Eloy%20Alfaro%20N34-118!5e0!3m2!1sen!2sec!4v1620000000000!5m2!1sen!2sec" style={{ border: 0 }} width="100%"></iframe>
                                    <div className="absolute top-4 right-4 bg-white dark:bg-[#211113] p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 pointer-events-none">
                                        <div className="flex items-center gap-2 text-xs font-bold text-text-main dark:text-white">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                            </span>
                                            Live Traffic
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <a className="fixed bottom-6 right-6 z-[60] size-14 bg-whatsapp-green text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer overflow-hidden" href="#">
                <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.045a11.871 11.871 0 001.592 5.962L0 24l6.117-1.604a11.815 11.815 0 005.928 1.588h.005c6.637 0 12.046-5.411 12.05-12.046a11.824 11.824 0 00-3.576-8.528"></path>
                </svg>
            </a>

            <footer className="footer-section bg-[#1b0e0f] text-white pt-16 pb-8" id="contact">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <div className="size-6 text-primary">
                                    <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <span className="text-lg font-bold">IMPROTRU Corp.</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Delivering enterprise-grade IT infrastructure and hardware solutions to businesses worldwide.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">Solutions</h4>
                            <a className="text-gray-300 hover:text-primary transition-colors text-sm" href="#">Data Centers</a>
                            <a className="text-gray-300 hover:text-primary transition-colors text-sm" href="#">Cloud Services</a>
                            <a className="text-gray-300 hover:text-primary transition-colors text-sm" href="#">Cybersecurity</a>
                            <a className="text-gray-300 hover:text-primary transition-colors text-sm" href="#">Consulting</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">Company</h4>
                            <a className="text-gray-300 hover:text-primary transition-colors text-sm" href="#">About Us</a>
                            <a className="text-gray-300 hover:text-primary transition-colors text-sm" href="#">Careers</a>
                            <a className="text-gray-300 hover:text-primary transition-colors text-sm" href="#">Partners</a>
                            <a className="text-gray-300 hover:text-primary transition-colors text-sm" href="#">Press</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">Contact</h4>
                            <div className="flex items-start gap-3 text-gray-300 text-sm">
                                <span className="material-symbols-outlined text-gray-500 text-[20px]">location_on</span>
                                <span>Av. Eloy Alfaro n34-118, edificio Maldonado ofi 2000</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <span className="material-symbols-outlined text-gray-500 text-[20px]">call</span>
                                <span>+593 999951096</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <span className="material-symbols-outlined text-gray-500 text-[20px]">mail</span>
                                <span>contact@importru.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EnterpriseContact;
