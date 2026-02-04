import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EnterpriseHome = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('datacenter');

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="px-4 md:px-10 py-4 max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-8 text-primary">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h1 className="text-text-main dark:text-white text-xl font-bold tracking-tight">IMPROTRU <span className="text-text-secondary font-normal">Corporate</span></h1>
                    </div>
                    <div className="hidden lg:flex items-center gap-8">
                        <nav className="flex gap-6 items-center">
                            <Link className="text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200" to="/enterprise">Home</Link>
                            <Link className="text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200" to="/enterprise/solutions">Solutions</Link>
                            <Link className="text-sm font-medium text-text-main hover:text-primary transition-colors dark:text-gray-200" to="/enterprise/contact">Contact</Link>
                        </nav>
                        <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <button className="flex items-center gap-2 text-sm font-medium text-text-main dark:text-white hover:text-primary transition-colors">
                                    🇺🇸 EN <span className="material-symbols-outlined text-sm">expand_more</span>
                                </button>
                                <div className="absolute right-0 top-full pt-2 w-32 hidden group-hover:block">
                                    <div className="bg-white dark:bg-[#211113] border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl p-1 flex flex-col">
                                        <a className="flex items-center gap-3 px-3 py-2 text-sm text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors" href="#">
                                            <span className="text-lg">🇪🇸</span> ES
                                        </a>
                                        <a className="flex items-center gap-3 px-3 py-2 text-sm text-primary font-bold bg-gray-50 dark:bg-gray-800/50 rounded transition-colors" href="#">
                                            <span className="text-lg">🇺🇸</span> EN
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/store')}
                                className="flex items-center gap-2 rounded-full h-10 pl-4 pr-5 bg-[#ED1A37] text-white text-sm font-bold hover:bg-[#d61731] transition-all shadow-md"
                            >
                                <span className="material-symbols-outlined text-lg">shopping_bag</span>
                                <span className="tracking-wide">Switch to Store</span>
                            </button>
                        </div>
                    </div>
                    <button className="lg:hidden text-text-main dark:text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </header>

            <main className="flex-grow relative group">
                {/* Hero Section */}
                <section className="relative w-full bg-[#211113] overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW_8a1bKYpyuj5rzVUR_3BKUcQxDnV6oxVeSoZSzRzm2eQb_vgpq8DKMA5Zvre6RKJ3t7zC_mymfqvgRca-CQ_uaAuvOZzaDDlWUPG0VMdXF6ucKX-uk0ONfuDqGC66H6Tok9FrrK1XByHShy8b9qeflEt2gSDK5um7asYMA7pwuZNS3iE1g_ezW-TvcjMJToU72_CiJnEKULeXinH6HwBqDkUGFGvdVnSTbe5-JXct3UKi-rqqcFSE18OPoh0OUTI65qI2c6jbkFw")' }}>
                        </div>
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 py-24 md:py-32 flex flex-col justify-center min-h-[600px]">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-primary/30 text-white text-xs font-medium mb-8 backdrop-blur-md shadow-lg">
                                <span className="material-symbols-outlined text-[16px]">layers</span>
                                Infrastructure Solutions
                            </div>
                            <div className="relative h-[160px] md:h-[180px] lg:h-[200px] mb-6 drop-shadow-lg">
                                <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight invisible">
                                    Enterprise IT Infrastructure <br /> Built for Scale
                                </h1>
                                <h1 className="absolute inset-0 text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight animate-fade-slide [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]" style={{ animationDelay: '0s' }}>
                                    Modernize Your <br /> IT Backbone
                                </h1>
                                <h1 className="absolute inset-0 text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight opacity-0 animate-fade-slide [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]" style={{ animationDelay: '3s' }}>
                                    Enterprise IT Infrastructure <br /> Built for Scale
                                </h1>
                                <h1 className="absolute inset-0 text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight opacity-0 animate-fade-slide [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]" style={{ animationDelay: '6s' }}>
                                    Future-Proof Your <br /> Digital Strategy
                                </h1>
                            </div>
                            <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
                                From high-performance data center hardware to resilient cloud virtualization and impenetrable data protection. We engineer the foundation for your enterprise growth.
                            </p>
                            <div className="flex gap-4">
                                <button className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-black/40 hover:bg-red-600 transition-colors">
                                    Explore Solutions
                                </button>
                                <button className="flex items-center justify-center h-12 px-8 rounded-lg border border-white/30 bg-black/40 backdrop-blur-md text-white text-sm font-bold hover:bg-black/60 transition-colors shadow-lg shadow-black/30">
                                    View Case Studies
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-white dark:bg-[#1a0e10] border-b border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-gray-200 dark:divide-gray-800">
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <span className="text-3xl md:text-4xl font-bold text-primary mb-1">+5</span>
                                <span className="text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide">Years Experience</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                                <span className="text-3xl md:text-4xl font-bold text-primary mb-1">20+</span>
                                <span className="text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide">Enterprise Clients</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                                <span className="text-3xl md:text-4xl font-bold text-primary mb-1">99%</span>
                                <span className="text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide">Uptime Guarantee</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                                <span className="text-3xl md:text-4xl font-bold text-primary mb-1">24/7</span>
                                <span className="text-sm font-medium text-text-secondary dark:text-gray-400 uppercase tracking-wide">Expert Support</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tab Navigation */}
                <div className="sticky top-[73px] z-40 bg-white/90 dark:bg-[#1a0e10]/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm tab-nav-container" id="solutions">
                    <div className="max-w-7xl mx-auto px-4 md:px-10 overflow-x-auto">
                        <nav className="flex items-center justify-center gap-8 text-sm font-bold whitespace-nowrap h-14 w-full">
                            <button
                                onClick={() => setActiveTab('datacenter')}
                                className={`h-full flex items-center px-1 transition-colors cursor-pointer border-b-2 select-none ${activeTab === 'datacenter' ? 'text-text-main dark:text-white border-primary !text-[#ED1A37]' : 'text-text-secondary dark:text-gray-400 border-transparent hover:text-text-main dark:hover:text-white'}`}
                            >
                                Data Center Solutions
                            </button>
                            <button
                                onClick={() => setActiveTab('licensing')}
                                className={`h-full flex items-center px-1 transition-colors cursor-pointer border-b-2 select-none ${activeTab === 'licensing' ? 'text-text-main dark:text-white border-primary !text-[#ED1A37]' : 'text-text-secondary dark:text-gray-400 border-transparent hover:text-text-main dark:hover:text-white'}`}
                            >
                                Enterprise Licensing
                            </button>
                            <button
                                onClick={() => setActiveTab('virtualization')}
                                className={`h-full flex items-center px-1 transition-colors cursor-pointer border-b-2 select-none ${activeTab === 'virtualization' ? 'text-text-main dark:text-white border-primary !text-[#ED1A37]' : 'text-text-secondary dark:text-gray-400 border-transparent hover:text-text-main dark:hover:text-white'}`}
                            >
                                Virtualization & Cloud
                            </button>
                            <button
                                onClick={() => setActiveTab('protection')}
                                className={`h-full flex items-center px-1 transition-colors cursor-pointer border-b-2 select-none ${activeTab === 'protection' ? 'text-text-main dark:text-white border-primary !text-[#ED1A37]' : 'text-text-secondary dark:text-gray-400 border-transparent hover:text-text-main dark:hover:text-white'}`}
                            >
                                Data Protection
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Content Sections - Using React Conditional Rendering instead of radio hacks for cleaner React code, while keeping Tailwind classes */}

                {/* Data Center Section */}
                {activeTab === 'datacenter' && (
                    <section className="py-20 bg-white dark:bg-[#211113] animate-in fade-in zoom-in-95 duration-300">
                        <div className="max-w-7xl mx-auto px-4 md:px-10">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary"><span className="material-symbols-outlined">dns</span></span>
                                        Data Center Solutions
                                    </h2>
                                    <p className="text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed">
                                        Power your mission-critical applications with our robust hardware solutions. We partner with industry leaders to deliver servers, storage, and networking equipment designed for maximum uptime and scalability.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block">High-Performance Compute</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Latest gen processors tailored for AI and big data workloads.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block">Scalable Storage Systems</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Unified SAN/NAS architectures with flash-optimized performance.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block">Intelligent Networking</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Low-latency switching and software-defined networking (SDN) readiness.</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <button className="flex items-center justify-center h-12 px-6 rounded-lg bg-text-main dark:bg-white text-white dark:text-text-main text-sm font-bold shadow hover:bg-primary dark:hover:bg-gray-200 transition-colors w-full sm:w-auto">
                                        Request Technical Consult
                                    </button>
                                </div>
                                <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW_8a1bKYpyuj5rzVUR_3BKUcQxDnV6oxVeSoZSzRzm2eQb_vgpq8DKMA5Zvre6RKJ3t7zC_mymfqvgRca-CQ_uaAuvOZzaDDlWUPG0VMdXF6ucKX-uk0ONfuDqGC66H6Tok9FrrK1XByHShy8b9qeflEt2gSDK5um7asYMA7pwuZNS3iE1g_ezW-TvcjMJToU72_CiJnEKULeXinH6HwBqDkUGFGvdVnSTbe5-JXct3UKi-rqqcFSE18OPoh0OUTI65qI2c6jbkFw")' }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl w-full">
                                            <div className="flex items-center gap-3 text-white mb-2">
                                                <span className="material-symbols-outlined">settings_suggest</span>
                                                <span className="font-bold">Hardware Optimization</span>
                                            </div>
                                            <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-primary h-full w-3/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Licensing Section */}
                {activeTab === 'licensing' && (
                    <section className="py-20 bg-background-light dark:bg-[#1a0e10] animate-in fade-in zoom-in-95 duration-300">
                        <div className="max-w-7xl mx-auto px-4 md:px-10">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-white dark:bg-gray-800 text-primary shadow-sm"><span className="material-symbols-outlined">workspace_premium</span></span>
                                        Enterprise Licensing
                                    </h2>
                                    <p className="text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed">
                                        Simplify your software procurement and assure complete compliance. We provide centralized licensing management for enterprise-grade solutions, reducing overhead and maximizing value.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block">Official Strategic Partners</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Official Partner of RedHat, Broadcom, Veeam, and Microsoft.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block">License Compliance & Optimization</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Proactive audits to prevent overspending and ensure audit readiness.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block">Subscription Management</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Streamlined lifecycle management for renewals and upgrades.</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <button className="flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-white text-sm font-bold shadow hover:bg-red-600 transition-colors w-full sm:w-auto">
                                        Request Licensing Audit
                                    </button>
                                </div>
                                <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group border border-gray-200 dark:border-gray-700">
                                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#ED1A37 0.5px, transparent 0.5px)', backgroundSize: '15px 15px' }}></div>
                                    <div className="relative z-10 w-4/5 max-w-md bg-white dark:bg-[#211113] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                                        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-black/20">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">pie_chart</span>
                                                <span className="font-bold text-sm text-text-main dark:text-white">License Overview</span>
                                            </div>
                                            <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">Compliant</span>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 transition-colors cursor-default">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 font-bold text-xs">RH</div>
                                                    <div>
                                                        <div className="text-sm font-bold text-text-main dark:text-white">Red Hat Enterprise</div>
                                                        <div className="text-[10px] text-gray-400">240 Cores • Sub-ID: 8829</div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs font-bold text-green-600">Active</div>
                                                    <div className="text-[10px] text-gray-400">Expires: 2025</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 transition-colors cursor-default">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 font-bold text-xs">VM</div>
                                                    <div>
                                                        <div className="text-sm font-bold text-text-main dark:text-white">vSphere 8 Ent+</div>
                                                        <div className="text-[10px] text-gray-400">12 Hosts • Sub-ID: 4410</div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs font-bold text-green-600">Active</div>
                                                    <div className="text-[10px] text-gray-400">Auto-Renew</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-3 rounded-lg border border-yellow-100 bg-yellow-50/50 dark:bg-yellow-900/10 hover:bg-yellow-50 transition-colors cursor-default">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 font-bold text-xs">V</div>
                                                    <div>
                                                        <div className="text-sm font-bold text-text-main dark:text-white">Veeam Backup</div>
                                                        <div className="text-[10px] text-gray-400">50 Instances • Sub-ID: 1102</div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs font-bold text-yellow-600">Attention</div>
                                                    <div className="text-[10px] text-gray-400">Exp: 15 Days</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-6 py-3 bg-gray-50 dark:bg-black/20 border-t border-gray-100 dark:border-gray-800 text-center">
                                            <span className="text-xs font-bold text-primary cursor-pointer hover:underline">View Full Audit Report</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Virtualization Section */}
                {activeTab === 'virtualization' && (
                    <section className="py-20 bg-background-light dark:bg-[#1a0e10] animate-in fade-in zoom-in-95 duration-300">
                        <div className="max-w-7xl mx-auto px-4 md:px-10">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl bg-[#0f0809] border border-gray-800 group">
                                    <div className="absolute inset-0 z-0">
                                        <div className="w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBB-gjcxV_D5fBw6ZgjshRu8-TMaNByN4_PO1FnB48epuJQTksp4ErynvkU6Y25WnYwu6mhowL3L5D4dVSQOCh790OlLQ5mtWHO40olrhL6fMnRb9cRxe7HTaSN9FxGXlDpuG-yNU9yFRq7MgcZ0o6sjUQs7nI4plKZg_y9w_tbvhGOgI-NPu25-_otafVengQEZdk29UQ6s63V9KPLGRnByEDbvLDew0QXCnLu_yKscoZMbsBQS3TIIVnQOIm1kS9o0e3qYPvTEbWN")' }}></div>
                                    </div>
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#150a0b] via-[#150a0b]/80 to-transparent"></div>
                                    <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                    <div className="absolute top-1/4 left-1/4 w-[2px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60 blur-[2px]"></div>
                                    <div className="absolute bottom-1/3 right-1/3 w-[2px] h-48 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-40 blur-[2px]"></div>
                                    <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-[2px]"></div>
                                    <div className="relative z-20 h-full flex flex-col justify-end p-8">
                                        <div className="absolute top-12 right-8 p-4 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 shadow-xl transform hover:scale-105 transition-transform duration-500">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                                                <span className="text-xs font-mono text-green-400">KUBERNETES_CLUSTER_01</span>
                                            </div>
                                            <div className="h-1 w-32 bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full w-[85%] bg-green-500"></div>
                                            </div>
                                        </div>
                                        <div className="absolute top-40 left-12 p-4 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 shadow-xl transform hover:scale-105 transition-transform duration-500">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="size-2 rounded-full bg-blue-500 animate-pulse"></div>
                                                <span className="text-xs font-mono text-blue-400">VMWARE_HOST_POOL</span>
                                            </div>
                                            <div className="h-1 w-32 bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full w-[62%] bg-blue-500"></div>
                                            </div>
                                        </div>
                                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-white font-bold flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-primary">monitoring</span>
                                                    Cloud Performance
                                                </h4>
                                                <span className="text-xs font-mono text-green-400 bg-green-900/30 px-2 py-1 rounded border border-green-900/50">OPTIMIZED</span>
                                            </div>
                                            <div className="space-y-4">
                                                <div>
                                                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                                                        <span>Hybrid Load Balancing</span>
                                                        <span>98.2% Efficiency</span>
                                                    </div>
                                                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                                        <div className="h-full bg-gradient-to-r from-primary to-orange-500 w-[98.2%] shadow-[0_0_10px_rgba(237,26,55,0.5)]"></div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center pt-2">
                                                    <div className="text-xs text-gray-400">
                                                        <div className="mb-1">Active Nodes</div>
                                                        <div className="text-white font-mono text-lg">1,248</div>
                                                    </div>
                                                    <div className="text-xs text-gray-400 text-right">
                                                        <div className="mb-1">Throughput</div>
                                                        <div className="text-white font-mono text-lg">40 Gbps</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-white dark:bg-gray-800 text-primary shadow-sm"><span className="material-symbols-outlined">cloud_queue</span></span>
                                        Virtualization & Cloud
                                    </h2>
                                    <p className="text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed">
                                        Bridge the gap between on-premise infrastructure and cloud agility. Our virtualization solutions optimize resource utilization and streamline application deployment across hybrid environments.
                                    </p>
                                    <ul className="space-y-6 mb-10">
                                        <li className="flex items-start gap-4">
                                            <div className="size-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0 border border-red-100 dark:border-red-900/30">
                                                <span className="material-symbols-outlined text-primary">settings_system_daydream</span>
                                            </div>
                                            <div>
                                                <strong className="text-text-main dark:text-white text-lg block mb-1">Hybrid Cloud Management</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">Unified control plane for seamless orchestration of workloads across on-premise data centers and public cloud providers.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="size-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0 border border-red-100 dark:border-red-900/30">
                                                <span className="material-symbols-outlined text-primary">deployed_code</span>
                                            </div>
                                            <div>
                                                <strong className="text-text-main dark:text-white text-lg block mb-1">Scalable Kubernetes with RedHat OpenShift</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">Enterprise-ready container platform to build, deploy, and manage applications at scale with automated operations.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="size-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0 border border-red-100 dark:border-red-900/30">
                                                <span className="material-symbols-outlined text-primary">developer_board</span>
                                            </div>
                                            <div>
                                                <strong className="text-text-main dark:text-white text-lg block mb-1">VMware/Broadcom Infrastructure Modernization</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">Upgrade legacy systems to a modern software-defined data center (SDDC) architecture for improved agility and cost efficiency.</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <button className="flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-white text-sm font-bold shadow hover:bg-red-600 transition-colors w-full sm:w-auto">
                                        Schedule a Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Protection Section */}
                {activeTab === 'protection' && (
                    <section className="py-20 bg-white dark:bg-[#211113] animate-in fade-in zoom-in-95 duration-300">
                        <div className="max-w-7xl mx-auto px-4 md:px-10">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1">
                                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3">
                                        <span className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-primary"><span className="material-symbols-outlined">shield_lock</span></span>
                                        Data Protection & Backup
                                    </h2>
                                    <p className="text-lg text-text-secondary dark:text-gray-300 mb-8 leading-relaxed">
                                        In an era of increasing cyber threats, your data is your most valuable asset. We implement comprehensive backup and disaster recovery strategies powered by Veeam to ensure business continuity.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block">Immutable Backups</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Ransomware-proof storage that prevents data deletion or modification.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block">Instant Recovery</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Drastically reduce RTOs by running VMs directly from backup files.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                                            <div>
                                                <strong className="text-text-main dark:text-white block">Cloud Mobility</strong>
                                                <span className="text-sm text-text-secondary dark:text-gray-400">Seamlessly move backups between on-prem storage and cloud repositories.</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <button className="flex items-center justify-center h-12 px-6 rounded-lg bg-text-main dark:bg-white text-white dark:text-text-main text-sm font-bold shadow hover:bg-primary dark:hover:bg-gray-200 transition-colors w-full sm:w-auto">
                                        Consult Security Expert
                                    </button>
                                </div>
                                <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-[#00b336]/5 border border-[#00b336]/10 flex items-center justify-center group">
                                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 179, 54, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 179, 54, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                                    <div className="relative z-10 w-3/4 max-w-sm bg-white dark:bg-[#1a0e10] p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-sm font-bold text-gray-400">STATUS</span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-bold">SECURE</span>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-full bg-green-50 flex items-center justify-center text-[#00b336]">
                                                    <span className="material-symbols-outlined">backup</span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded full mb-1">
                                                        <div className="h-full bg-[#00b336] rounded-full w-full"></div>
                                                    </div>
                                                    <p className="text-xs text-gray-500">Last Backup: Just now</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-full bg-green-50 flex items-center justify-center text-[#00b336]">
                                                    <span className="material-symbols-outlined">cloud_done</span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded full mb-1">
                                                        <div className="h-full bg-[#00b336] rounded-full w-[98%]"></div>
                                                    </div>
                                                    <p className="text-xs text-gray-500">Cloud Sync: 98% Complete</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Powered By</p>
                                            <span className="text-2xl font-black text-[#00b336]">VEEAM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Partners Section */}
                <section className="py-16 bg-white dark:bg-[#150a0b] border-t border-gray-100 dark:border-gray-800 overflow-hidden relative">
                    <div className="max-w-7xl mx-auto px-4 md:px-10 mb-10 text-center relative z-10">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary dark:text-gray-400 mb-2">Strategic Technology Partners</h3>
                        <div className="h-0.5 w-12 bg-primary mx-auto"></div>
                    </div>
                    <div className="relative w-full mask-linear">
                        <div className="flex w-max animate-scroll">
                            <div className="flex gap-16 md:gap-24 items-center px-8 md:px-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white">
                                    <span className="material-symbols-outlined text-primary text-4xl">star</span> RedHat
                                </div>
                                <div className="flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white">
                                    <div className="h-8 w-8 rounded-full border-4 border-primary"></div> BROADCOM
                                </div>
                                <div className="flex items-center gap-1 font-black text-2xl text-text-main dark:text-white tracking-tighter">
                                    <span className="text-primary">V</span>EEAM
                                </div>
                                <div className="flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white">
                                    <div className="flex gap-[2px] items-end h-6 pb-1">
                                        <div className="w-1 h-2 bg-primary"></div>
                                        <div className="w-1 h-4 bg-primary"></div>
                                        <div className="w-1 h-2 bg-primary"></div>
                                        <div className="w-1 h-4 bg-primary"></div>
                                        <div className="w-1 h-2 bg-primary"></div>
                                    </div>
                                    CISCO
                                </div>
                                <div className="flex items-center gap-2 font-light text-2xl text-text-main dark:text-white">
                                    <span className="font-bold border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center text-xs p-1">DE</span>
                                    DELL <span className="text-xs font-bold text-gray-500 -ml-1 mt-1">Technologies</span>
                                </div>
                                <div className="flex items-center gap-2 font-black text-2xl text-text-main dark:text-white tracking-widest">
                                    <div className="w-6 h-3 bg-primary"></div> HPE
                                </div>
                                <div className="flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white">
                                    <span className="material-symbols-outlined text-primary text-3xl">change_history</span> Microsoft Azure
                                </div>
                            </div>
                            <div className="flex gap-16 md:gap-24 items-center px-8 md:px-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white">
                                    <span className="material-symbols-outlined text-primary text-4xl">star</span> RedHat
                                </div>
                                <div className="flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white">
                                    <div className="h-8 w-8 rounded-full border-4 border-primary"></div> BROADCOM
                                </div>
                                <div className="flex items-center gap-1 font-black text-2xl text-text-main dark:text-white tracking-tighter">
                                    <span className="text-primary">V</span>EEAM
                                </div>
                                <div className="flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white">
                                    <div className="flex gap-[2px] items-end h-6 pb-1">
                                        <div className="w-1 h-2 bg-primary"></div>
                                        <div className="w-1 h-4 bg-primary"></div>
                                        <div className="w-1 h-2 bg-primary"></div>
                                        <div className="w-1 h-4 bg-primary"></div>
                                        <div className="w-1 h-2 bg-primary"></div>
                                    </div>
                                    CISCO
                                </div>
                                <div className="flex items-center gap-2 font-light text-2xl text-text-main dark:text-white">
                                    <span className="font-bold border-2 border-primary rounded-full w-8 h-8 flex items-center justify-center text-xs p-1">DE</span>
                                    DELL <span className="text-xs font-bold text-gray-500 -ml-1 mt-1">Technologies</span>
                                </div>
                                <div className="flex items-center gap-2 font-black text-2xl text-text-main dark:text-white tracking-widest">
                                    <div className="w-6 h-3 bg-primary"></div> HPE
                                </div>
                                <div className="flex items-center gap-2 font-bold text-2xl text-text-main dark:text-white">
                                    <span className="material-symbols-outlined text-primary text-3xl">change_history</span> Microsoft Azure
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
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

export default EnterpriseHome;
