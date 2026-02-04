import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const EnterpriseSolutions = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar type="enterprise" />

            <main className="flex-grow">
                <section className="py-24 bg-background-light dark:bg-background-dark" id="solutions">
                    <div className="max-w-7xl mx-auto px-4 md:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6">Enterprise-Grade Solutions</h2>
                            <p className="text-lg text-text-secondary dark:text-gray-400">High-performance infrastructure strategies designed to secure and scale your business operations.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="group bg-white dark:bg-[#211113] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                                <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                                    <img alt="Modern Data Center Infrastructure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh19dMF8EXeg5Ub0_HJoJymwRbrr2ryK4Om5HOdvdyxGk1mb92kvUOf2eXOm0hjjoDsZ2qDHl6T1xyd-eGEOSgwu-SHKz3PJ3abwwF9IJpedF3EMxtKKWq70njgqaKWnn1b6YdVfcpylFEeNw94cuLEYH9x4X0-KI_FI_v24oVKm5sVDXTU7j5w5920HN0tfvz7cARWzEREEWo8f4447JC_J5D9-JEalIErwJjyoGtCWTdvnd-GakcdUrec0plySxFcoreU8mBRy6y" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="size-14 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-700">
                                            <span className="material-symbols-outlined text-3xl">dns</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-text-main dark:text-white">Data Center Solutions</h3>
                                    </div>
                                    <p className="text-text-secondary dark:text-gray-400 mb-8 leading-relaxed">
                                        Power your mission-critical applications with robust hardware. We partner with industry leaders to deliver servers, storage, and networking designed for maximum uptime and scalability.
                                    </p>
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block text-sm">High-Performance Compute</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Latest gen processors for AI/Big Data.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block text-sm">Scalable Storage</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Unified SAN/NAS architectures.</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-auto">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Powered By</p>
                                        <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500">
                                            <div className="flex items-center gap-1">
                                                <span className="font-bold border border-primary rounded-full w-5 h-5 flex items-center justify-center text-[8px] p-0.5 text-text-main dark:text-white">DE</span>
                                                <span className="font-light text-sm text-text-main dark:text-white">DELL</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-4 h-2 bg-primary"></div>
                                                <span className="font-black text-sm text-text-main dark:text-white tracking-widest">HPE</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <button className="w-full h-12 rounded-lg bg-primary text-white font-bold text-sm shadow-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
                                            Request Technical Consult <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-[#211113] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                                <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                                    <img alt="Software Compliance Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJSQzsxgmSrOglFHcEOl7pVNJ0Ehx6joYNck4AX-N1HSb62GyQWc88w8JSjcO1yY6VruKonX06qp91ZlAMP8ihUeQa9GZlKich2l2pUpISSQfCmoK7FrA0D_Sy4g1VQKbMMzACabbqUBEx1rqtanrEbRG-6jTGqz1VlsU1Ol88u79gyfvRY4VDmdEkobMKsb3Nhp0rohzgawz1CvrOM9v88SPkSJqE9pdAlvDggbMRJw84o3XnlZDGMS2SWgbFLG1OGl1BQ4BCOpSe" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="size-14 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-700">
                                            <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-text-main dark:text-white">Enterprise Licensing</h3>
                                    </div>
                                    <p className="text-text-secondary dark:text-gray-400 mb-8 leading-relaxed">
                                        Simplify software procurement and assure complete compliance. We provide centralized licensing management, reducing overhead and maximizing value across your organization.
                                    </p>
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block text-sm">Strategic Partners</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Direct partners of major vendors.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block text-sm">Compliance & Optimization</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Proactive audits and cost control.</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-auto">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Powered By</p>
                                        <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-primary text-lg">star</span>
                                                <span className="font-bold text-sm text-text-main dark:text-white">RedHat</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-primary text-lg">window</span>
                                                <span className="font-bold text-sm text-text-main dark:text-white">Microsoft</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <button className="w-full h-12 rounded-lg bg-primary text-white font-bold text-sm shadow-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
                                            Request Licensing Audit <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-[#211113] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                                <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                                    <img alt="Cloud and Hybrid Connectivity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_RfdtLMCMBF5stIuGTOm0Iri1qoKhEVdjMln7Q78oBV2mPPwjO13ePb86qqEX2QB6-R4LgSduag4LdsRM-pTvSfn94bYtjwKJAUx-cDaccRVgDtiEA-hhsIDfs4yVlfDzLjIBYndbJ5yxZF77rSG2HZKPKYFvObwIhCC-eNV-2tRhyLjtwFT8XR8pLwrfxfpMP8E3cLj1ge90k8CIlDMA6O8PoCHFfJ2k5b-HCyABFrkTsnK7icdc7u6pPkbLPwhUYKtwWjXVF1Er" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="size-14 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-700">
                                            <span className="material-symbols-outlined text-3xl">cloud_queue</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-text-main dark:text-white">Virtualization & Cloud</h3>
                                    </div>
                                    <p className="text-text-secondary dark:text-gray-400 mb-8 leading-relaxed">
                                        Bridge the gap between on-premise infrastructure and cloud agility. Our solutions optimize resource utilization and streamline application deployment across hybrid environments.
                                    </p>
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block text-sm">Hybrid Cloud Management</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Unified workload orchestration.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block text-sm">Container Platforms</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Scalable Kubernetes and orchestration.</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-auto">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Powered By</p>
                                        <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500">
                                            <div className="flex items-center gap-1">
                                                <div className="h-4 w-4 rounded-full border-2 border-primary"></div>
                                                <span className="font-bold text-sm text-text-main dark:text-white">BROADCOM</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-primary text-lg">change_history</span>
                                                <span className="font-bold text-sm text-text-main dark:text-white">Azure</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <button className="w-full h-12 rounded-lg bg-primary text-white font-bold text-sm shadow-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
                                            Schedule a Demo <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-[#211113] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                                <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                                    <img alt="High Security Data Vault Illustration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV5lv2boqYPlYRZC2Tf4kGeC4sf-MQqsrqN_51ansx5ucl9DZ1gPY2cp_N6VRXxS7cURtD2eZsatelEVo_g5NxJW80JDbZQJQQitwlpE6qp_ouWYNEfoYp1CfTc4jiaJvEICgB2AWGwAWzL2WbASqG47kj0f0oKkBTAtshgkcxh_otCTn-pjzFiqWF66OT8R1rCjLxGqCJko4rCxHys6wL2-byT56bSOzZ8Au9jOUazkscjRUYEechellYoolUQvVxESCWbZ9bYajG" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="size-14 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-700">
                                            <span className="material-symbols-outlined text-3xl">shield_lock</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-text-main dark:text-white">Data Protection</h3>
                                    </div>
                                    <p className="text-text-secondary dark:text-gray-400 mb-8 leading-relaxed">
                                        In an era of increasing cyber threats, your data is your most valuable asset. We implement comprehensive backup and disaster recovery strategies to ensure business continuity.
                                    </p>
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block text-sm">Immutable Backups</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Ransomware-proof storage.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block text-sm">Instant Recovery</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Reduce RTOs dramatically.</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-auto">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Powered By</p>
                                        <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500">
                                            <div className="flex items-center gap-0.5 font-black text-sm text-text-main dark:text-white tracking-tighter scale-110 origin-left">
                                                <span className="text-primary">V</span>EEAM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <button className="w-full h-12 rounded-lg bg-primary text-white font-bold text-sm shadow-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
                                            Consult Security Expert <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-32 bg-white dark:bg-[#211113] overflow-hidden border-t border-gray-100 dark:border-gray-800">
                    <div className="max-w-4xl mx-auto px-4 md:px-10 relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white mb-6 tracking-tight">
                            Ready to work with us?
                        </h2>
                        <p className="text-lg text-text-secondary dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Experience the difference of enterprise-grade IT solutions. Whether you're looking for infrastructure modernization, cloud strategy, or professional support, our team is here to help you scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="flex items-center justify-center h-14 px-10 rounded-lg bg-[#ED1A37] text-white font-bold text-base hover:bg-red-600 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                                Contact Us
                            </button>
                            <button className="flex items-center justify-center h-14 px-10 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-text-main dark:text-white font-bold text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-colors w-full sm:w-auto">
                                View Careers
                            </button>
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

export default EnterpriseSolutions;
