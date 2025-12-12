import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-black border-t-4 border-blue-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-2">
                                R
                            </div>
                            <span className="font-bold text-lg tracking-tight">
                                Ronnia Langston Foundation
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transforming the lives of youth around the world through mentoring, financial literacy, and entrepreneurship.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Our Programs</Link></li>
                            <li><Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors">Get Involved</Link></li>
                            <li><Link to="/donate" className="text-gray-400 hover:text-white transition-colors">Donate</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                                <span className="text-gray-400 text-sm">3948 Legacy Dr. Ste. 106<br />Plano, TX 75023</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-blue-500 mr-3" />
                                <span className="text-gray-400 text-sm">469-213-0618</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-blue-500 mr-3" />
                                <span className="text-gray-400 text-sm">info@ronnialangstonfoundation.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Stay Connected</h3>
                        <p className="text-gray-400 text-sm mb-4">Join our newsletter to stay up to date.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="flex space-x-4 mt-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Ronnia Langston Foundation. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs mt-2 md:mt-0">
                        Designed with care for the future.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
