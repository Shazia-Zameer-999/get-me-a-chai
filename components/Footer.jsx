"use client" 
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-gray-900 text-white'>
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="font-bold text-xl flex items-center gap-2 mb-2">
                            <span>Get me a Chai</span>
                            <img className="w-8" src="/chai.gif" alt="Chai Logo" />
                        </div>
                        <p className="text-sm text-slate-400">
                            Empowering creators, one chai at a time. A crowdfunding platform for the creative community.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-center md:text-left">Quick Links</h3>
                        <ul className="space-y-2 text-center md:text-left">
                            <li><Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/login" className="text-slate-300 hover:text-blue-400 transition-colors">Login</Link></li>
                            <li><Link href="/faq" className="text-slate-300 hover:text-blue-400 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-center md:text-left">Legal</h3>
                        <ul className="space-y-2 text-center md:text-left">
                            <li><Link href="/terms" className="text-slate-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-slate-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-center md:text-left">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a href="#" aria-label="Twitter" className="text-slate-300 hover:text-blue-400 transition-colors">
                                <FaTwitter size={24} /> 
                            </a>
                            <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-blue-400 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-blue-400 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" aria-label="Github" className="text-slate-300 hover:text-blue-400 transition-colors">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-slate-400">
                    <p>Copyright &copy; {currentYear} Get me a Chai - All rights reserved.</p>
                    <p className="mt-2">
                        A portfolio project by{' '}
                        <a
                            href="https://github.com/your-github-username" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            DatenDiva
                        </a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;