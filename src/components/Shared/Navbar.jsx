import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ type }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper to check if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="px-4 md:px-10 py-4 max-w-7xl mx-auto flex items-center justify-between gap-4">
                {/* Logo Section */}
                <div className="flex items-center gap-3 shrink-0">
                    <div className="size-8 text-primary">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h1 className="text-text-main dark:text-white text-xl font-bold tracking-tight">
                        IMPROTRU{type === 'enterprise' && <span className="text-text-secondary font-normal ml-1">Corporate</span>}
                    </h1>
                </div>

                {/* Middle Section: Navigation (Enterprise) or Search (Store) */}
                <div className="hidden lg:flex flex-1 justify-center">
                    {type === 'enterprise' ? (
                        <nav className="flex gap-6 items-center">
                            <Link
                                className={`text-sm font-medium transition-colors ${isActive('/enterprise') ? 'text-primary' : 'text-text-main hover:text-primary dark:text-gray-200'}`}
                                to="/enterprise"
                            >
                                Home
                            </Link>
                            <Link
                                className={`text-sm font-medium transition-colors ${isActive('/enterprise/solutions') ? 'text-primary' : 'text-text-main hover:text-primary dark:text-gray-200'}`}
                                to="/enterprise/solutions"
                            >
                                Solutions
                            </Link>
                            <Link
                                className={`text-sm font-medium transition-colors ${isActive('/enterprise/contact') ? 'text-primary' : 'text-text-main hover:text-primary dark:text-gray-200'}`}
                                to="/enterprise/contact"
                            >
                                Contact
                            </Link>
                        </nav>
                    ) : (
                        <div className="w-full max-w-xl px-4">
                            <div className="relative w-full group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400">search</span>
                                </div>
                                <input
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-full leading-5 bg-gray-50 dark:bg-[#2d1b1e] text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-[#2d1b1e] transition-all duration-200 sm:text-sm"
                                    placeholder="Search for laptops, monitors, accessories..."
                                    type="text"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Section */}
                <div className="hidden lg:flex items-center gap-6">
                    {type === 'enterprise' && (
                        <>
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
                            </div>
                            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
                        </>
                    )}

                    {type === 'store' && (
                        <div className="flex items-center gap-4 mr-2">
                            <a className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">
                                <span className="material-symbols-outlined">person</span>
                                <span className="text-[10px] font-bold uppercase mt-0.5">Account</span>
                            </a>
                            <a className="relative flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors group" href="#">
                                <div className="relative">
                                    <span className="material-symbols-outlined group-hover:animate-bounce">shopping_cart</span>
                                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white dark:border-[#2d1b1e]">2</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase mt-0.5">Cart</span>
                            </a>
                        </div>
                    )}

                    <button
                        onClick={() => navigate(type === 'enterprise' ? '/store' : '/enterprise')}
                        className="flex items-center gap-2 rounded-full h-10 pl-4 pr-5 bg-[#ED1A37] text-white text-sm font-bold hover:bg-[#d61731] transition-all shadow-md shrink-0"
                    >
                        <span className="material-symbols-outlined text-lg">
                            {type === 'enterprise' ? 'shopping_bag' : 'domain'}
                        </span>
                        <span className="tracking-wide">
                            {type === 'enterprise' ? 'Switch to Store' : 'Enterprise'}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-text-main dark:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>

            {/* Mobile Menu (Simple implementation for now) */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 p-4 shadow-xl">
                    <div className="flex flex-col gap-4">
                        {type === 'enterprise' ? (
                            <>
                                <Link className="text-sm font-medium text-text-main dark:text-white" to="/enterprise">Home</Link>
                                <Link className="text-sm font-medium text-text-main dark:text-white" to="/enterprise/solutions">Solutions</Link>
                                <Link className="text-sm font-medium text-text-main dark:text-white" to="/enterprise/contact">Contact</Link>
                            </>
                        ) : (
                            <input
                                className="block w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-[#2d1b1e] text-gray-900 dark:text-white"
                                placeholder="Search..."
                                type="text"
                            />
                        )}
                        <hr className="border-gray-200 dark:border-gray-800" />
                        <button
                            onClick={() => navigate(type === 'enterprise' ? '/store' : '/enterprise')}
                            className="flex items-center justify-center gap-2 rounded-lg h-10 w-full bg-[#ED1A37] text-white text-sm font-bold"
                        >
                            <span className="material-symbols-outlined text-lg">
                                {type === 'enterprise' ? 'shopping_bag' : 'domain'}
                            </span>
                            {type === 'enterprise' ? 'Switch to Store' : 'Enterprise'}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
