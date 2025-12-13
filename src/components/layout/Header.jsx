import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Blog', href: '/blog' },
        { name: 'Podcasts', href: '/podcasts' },
        { name: 'Events', href: '/events' },
        { name: 'Get Involved', href: '/get-involved' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center flex-shrink-0 min-w-0 mr-8">
                        <Link to="/" className="flex items-center min-w-0">
                            <img className="h-12 w-12 flex-shrink-0 mr-3 rounded-lg object-cover" src={`${import.meta.env.BASE_URL}assets/imgs/logo.jpg`} alt="Ronnia Langston Foundation" />
                            <span className="font-bold text-lg lg:text-xl text-gray-900 tracking-tight hidden sm:inline truncate">
                                Ronnia Langston Foundation
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-2.5 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${isActive(item.href)
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button to="/donate" variant="accent" className="ml-2 xl:ml-4 flex items-center gap-2 flex-shrink-0">
                            <Heart className="w-4 h-4" />
                            Donate
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href)
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 px-3">
                            <Button to="/donate" variant="accent" className="w-full justify-center flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                <Heart className="w-4 h-4" />
                                Donate
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
