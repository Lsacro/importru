import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const StoreHome = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-[#1b0e0f] dark:text-[#fcf8f9] min-h-screen flex flex-col">
            {/* Top Navigation */}
            <Navbar type="store" />

            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="relative rounded-2xl overflow-hidden bg-gray-900 group">
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Modern gaming laptop setup with RGB lighting in a dark room" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBap6GbO4B8bAiNhOEJt0UmuNkOWOelJsdSXeZCKUkdU3JJrRebJXY7KNVim_Wqr8zb8GnKIj3RRde6gcKI_sTbGd5hCaZVpm1ykkikVt-PPXgGWbJ93p2zR8H_g2rMSZv1GhT1HS43nqFneR7AlcANFP-nwCYI5e8jxrWSE0iFq_coSvryT1A5jvebI9brsZOru4o4pfjqt-WCRrQ3OvBo35lgL2pgvYWk02jye9Fi7Tot8IKkOQFyBmPSxObJwPmPOvRriRERLRCI")' }}>
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                        {/* Content */}
                        <div className="relative h-[480px] md:h-[560px] flex flex-col justify-center px-8 md:px-16 max-w-2xl">
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider w-fit mb-4 backdrop-blur-sm">New Arrivals</span>
                            <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
                                Level Up <br />Your Setup
                            </h1>
                            <p className="text-gray-200 text-lg md:text-xl mb-8 font-light max-w-md">
                                Experience the raw power of the latest RTX 40-Series. Unmatched performance for gaming and creation.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-primary hover:bg-red-600 text-white font-bold py-3.5 px-8 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/30 flex items-center gap-2">
                                    Shop Gaming
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-3.5 px-8 rounded-lg transition-all flex items-center gap-2">
                                    View Specs
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Category Pills */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h2 className="font-display text-2xl font-bold mb-6 dark:text-white">Shop by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {/* Card 1 */}
                        <a className="flex flex-col items-center p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 transition-all group" href="#">
                            <div className="size-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">laptop_chromebook</span>
                            </div>
                            <span className="font-medium text-sm dark:text-gray-200">Laptops</span>
                        </a>
                        {/* Card 2 */}
                        <a className="flex flex-col items-center p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 transition-all group" href="#">
                            <div className="size-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">desktop_windows</span>
                            </div>
                            <span className="font-medium text-sm dark:text-gray-200">Desktops</span>
                        </a>
                        {/* Card 3 */}
                        <a className="flex flex-col items-center p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 transition-all group" href="#">
                            <div className="size-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">monitor</span>
                            </div>
                            <span className="font-medium text-sm dark:text-gray-200">Monitors</span>
                        </a>
                        {/* Card 4 */}
                        <a className="flex flex-col items-center p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 transition-all group" href="#">
                            <div className="size-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">headphones</span>
                            </div>
                            <span className="font-medium text-sm dark:text-gray-200">Audio</span>
                        </a>
                        {/* Card 5 */}
                        <a className="flex flex-col items-center p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 transition-all group" href="#">
                            <div className="size-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">keyboard</span>
                            </div>
                            <span className="font-medium text-sm dark:text-gray-200">Peripherals</span>
                        </a>
                        {/* Card 6 */}
                        <a className="flex flex-col items-center p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 transition-all group" href="#">
                            <div className="size-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">memory</span>
                            </div>
                            <span className="font-medium text-sm dark:text-gray-200">Components</span>
                        </a>
                    </div>
                </section>
                {/* Featured Products */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="font-display text-2xl font-bold dark:text-white">Featured Products</h2>
                        <a className="text-primary font-medium hover:text-red-700 flex items-center text-sm" href="#">
                            View All <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Product 1 */}
                        <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="relative aspect-[4/3] bg-gray-50 dark:bg-gray-800 overflow-hidden">
                                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">Sale</span>
                                <img alt="Silver laptop open on a white desk" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" data-alt="Silver laptop open on a white desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn4rt5Tt3d-jOsZ_cTesqNAIlSkzuJtjZGC73XZ4e2PQ1UIuFrarzh84IMcNx0JIt-AyGK48l9ekBBWV660S6dssMAMqmvJKsNgSsQKBtZWoiO79KooiXMyHlTIialIOhVLutk-rWOmUcyGPqlcVxQxV3bydCDbT4bt4Q4YyXnyijMjFNTi2bdQkwUkHePIsjfKg2wBXAL6M5VQGfTI5Yc2251iaAwcpoMboEesca3e4tAAwAeEn70ZyEc2gd_-crE7rd7SqtDTbQP" />
                                <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                </button>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="text-xs text-gray-500 mb-1">Laptops</div>
                                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">UltraSlim Pro 15</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">The thinnest high-performance laptop in its class with M2 chip.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 line-through">$1,299</span>
                                        <span className="font-bold text-xl text-primary">$999</span>
                                    </div>
                                    <div className="flex text-yellow-400 text-xs">
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star_half</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product 2 */}
                        <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="relative aspect-[4/3] bg-gray-50 dark:bg-gray-800 overflow-hidden">
                                <img alt="Mechanical keyboard with RGB lighting" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" data-alt="Mechanical keyboard with RGB lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoKHoa0LPTRCkvk2tkBHA0WZsi6L8apNFFgSlP0MKrW6tcbSBqWYBQX8B13oquPnFJprfTlHziF0orGD1AEEZMO5FyLUPAObPaGQxB8vvVLhRyQIgcFe70BuN4AnW5Yo3msKZY2YOHh4cft7xgaycFUNv8hmeXf70oHvGtWcjK-PSQNn5YrRoosaYyxphzs3VVTVT6U5XvazEXlXs5YmLdPhZ7SCIROtWh0Cdb_dYYJQTX5lre_cq0LXaLLySyLze_lH0JqRvWEDpW" />
                                <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                </button>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="text-xs text-gray-500 mb-1">Peripherals</div>
                                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">MechKey RGB</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">Customizable mechanical switches with per-key RGB lighting.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-xl text-gray-900 dark:text-white">$129</span>
                                    </div>
                                    <div className="flex text-yellow-400 text-xs">
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px]">star</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product 3 */}
                        <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="relative aspect-[4/3] bg-gray-50 dark:bg-gray-800 overflow-hidden">
                                <img alt="Over ear headphones on yellow background" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" data-alt="Over ear headphones product shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0czJA-SCPIY-yZZwFZqee1E2susebwummxRF5cpjoacUbtJsPRWiDQ7hQ4iTXM1LfETPcK8yFwan70i4BY8JqEaW4VvDq5k2y7I5TVNPZes6ZJ4KvZeYtA73I2KVeDjS2PNpI5F9FVLnbWwuBWdZZziLmHaHmKn2MG2KN2H4SiOEau4dkRwhZJqin6LddOQWjPcv-m86S__oxih54Jh1-tbPIMYWHMhmawYVJEqggoJkE_ZT6oKPwtphQ8Jul_Lz25Cv48OatSm4H" />
                                <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                </button>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="text-xs text-gray-500 mb-1">Audio</div>
                                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">SonicBass Pro</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">Wireless noise cancelling headphones with 30h battery life.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-xl text-gray-900 dark:text-white">$249</span>
                                    </div>
                                    <div className="flex text-yellow-400 text-xs">
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product 4 */}
                        <div className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group flex flex-col h-full">
                            <div className="relative aspect-[4/3] bg-gray-50 dark:bg-gray-800 overflow-hidden">
                                <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">New</span>
                                <img alt="Modern computer monitor on desk" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" data-alt="4k Monitor setup on a wooden desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1Q30SGa3xN6wuMDjGqPI1jMjD79gf8NSPdBjyQT-StiFpTLHJvoEXloYxl0vTr1gzR8ciwHQJOTfPjtirnUyOWDND1OVTxRiF292jcpkrcUou4nnwRdwtYEdNldyr6rVSPWnET5OVVDQQxjDKXk1NKO4wOkHwIB2mQywVmCIEzjtEmZpTkfP9x-pvWYTKhyNpBO3Li8wBwzsUDoG65wfMJ7bi_1kbsdg4gRBqlfe1CU2qtwOXw8tpkGlux8xtwduX_6I2YMKQ67uK" />
                                <button className="absolute bottom-3 right-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                </button>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="text-xs text-gray-500 mb-1">Monitors</div>
                                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">Vision 4K Ultra</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">27-inch IPS panel with 144Hz refresh rate for creators.</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-xl text-gray-900 dark:text-white">$350</span>
                                    </div>
                                    <div className="flex text-yellow-400 text-xs">
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px] filled">star</span>
                                        <span className="material-symbols-outlined text-[16px]">star_half</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Promo Banner */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="rounded-2xl bg-primary text-white p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-red-200 dark:shadow-none">
                        {/* Abstract Pattern BG */}
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none transform skew-x-12 translate-x-12 bg-white"></div>
                        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10 pointer-events-none transform -skew-x-12 -translate-x-12 bg-black"></div>
                        <div className="relative z-10 max-w-xl text-center md:text-left">
                            <span className="inline-block py-1 px-3 rounded bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider mb-4">Limited Time Offer</span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Student & Teacher Discount</h2>
                            <p className="text-white/90 text-lg mb-6">Get up to 15% off on select laptops and tablets. Verified academic status required.</p>
                            <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
                                Learn More
                            </button>
                        </div>
                        <div className="relative z-10 hidden md:block">
                            <span className="material-symbols-outlined text-[120px] text-white/20 rotate-12">school</span>
                        </div>
                    </div>
                </section>
                {/* Trust Signals */}
                <section className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark mt-auto">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center">
                                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full text-primary mb-4">
                                    <span className="material-symbols-outlined text-[32px]">local_shipping</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2 dark:text-white">Free Shipping</h3>
                                <p className="text-gray-500 text-sm max-w-xs">On all orders over $50 within the continental US.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full text-primary mb-4">
                                    <span className="material-symbols-outlined text-[32px]">verified_user</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2 dark:text-white">2-Year Warranty</h3>
                                <p className="text-gray-500 text-sm max-w-xs">Standard warranty on all hardware purchases.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full text-primary mb-4">
                                    <span className="material-symbols-outlined text-[32px]">support_agent</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2 dark:text-white">24/7 Expert Support</h3>
                                <p className="text-gray-500 text-sm max-w-xs">Get help from our tech experts anytime, anywhere.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#f3e7e9] dark:bg-[#1a0d0f] pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="size-6 text-primary">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <span className="font-display font-bold text-xl dark:text-white">IMPROTRU</span>
                            </div>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                Empowering your digital life with premium hardware and solutions. From gaming rigs to office essentials.
                            </p>
                            <div className="flex gap-4">
                                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                                <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">rss_feed</span></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-gray-900 dark:text-white mb-6">Shop</h4>
                            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                                <li><a className="hover:text-primary transition-colors" href="#">Laptops</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Desktops</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Monitors</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Components</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-gray-900 dark:text-white mb-6">Support</h4>
                            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                                <li><a className="hover:text-primary transition-colors" href="#">Order Status</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Returns & Warranty</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Store Locator</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-gray-900 dark:text-white mb-6">Newsletter</h4>
                            <p className="text-sm text-gray-500 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                            <form className="flex flex-col gap-2">
                                <input className="w-full px-4 py-2 rounded-lg bg-white dark:bg-[#2d1b1e] border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary text-sm" placeholder="Enter your email" type="email" />
                                <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2024 IMPROTRU Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Privacy Policy</a>
                        <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Terms of Service</a>
                        <a className="hover:text-gray-600 dark:hover:text-gray-200" href="#">Cookies Settings</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StoreHome;
