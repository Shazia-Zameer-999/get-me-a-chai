"use client"
import React, { useState } from 'react';
import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGrid, FiUser, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { data: session } = useSession();

    const dropdownVariants = {
        hidden: { opacity: 0, scale: 0.95, y: -10 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -10 }
    };
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/${searchQuery}`);
            setSearchQuery("")
        }
    };


    return (
        <nav className='bg-slate-900/50 backdrop-blur-lg text-white flex justify-between items-center px-4 md:px-6 h-16 fixed w-full top-0 z-50 border-b border-slate-800'>
            <Link href={'/'} className='flex justify-center items-center gap-2 group'>
                <img width={32} src="/chai.gif" alt="Chai Logo" />
                <span className="font-bold text-lg hidden sm:inline group-hover:text-purple-400 transition-colors">
                    GetMeaChai
                </span>
            </Link>


            <div className="search-bar">
                <form onSubmit={handleSearch} className="flex items-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Find a creator..."
                        className="px-3 py-1.5 rounded-l-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 lg:w-120  max-[410px]:w-40 transition-all duration-500 ease-in "
                    />
                    <button
                        type="submit"
                        className="px-4 py-1.5 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 transition-colors"
                    >
                        Search
                    </button>
                </form>
            </div>

            <div>
                {session ? (
                    <div className='relative'>
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                            className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-800/70 transition-colors"
                        >
                            <img
                                src={session.user.image || "/user.gif"}
                                alt="User Avatar"
                                className="w-9 h-9 rounded-full object-cover border-2 border-slate-600"
                            />
                            <span className="font-medium text-sm hidden md:inline">
                                {session.user.name}
                            </span>
                        </button>


                        <AnimatePresence>
                            {showDropdown && (
                                <motion.div
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="z-10 bg-slate-800/80 backdrop-blur-lg border border-slate-700 divide-y divide-slate-700 rounded-lg shadow-xl w-48 absolute top-full mt-2 right-0"
                                >
                                    <ul className="py-2 text-sm text-gray-200">
                                        <li>
                                            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2 hover:bg-slate-700/50">
                                                <FiGrid /> Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/${session.user.username}`} className="flex items-center gap-3 px-4 py-2 hover:bg-slate-700/50">
                                                <FiUser /> Your Page
                                            </Link>
                                        </li>
                                        <li>
                                            <button onClick={() => signOut({ callbackUrl: '/' })} className="flex items-center w-full text-left gap-3 px-4 py-2 hover:bg-slate-700/50 text-red-400">
                                                <FiLogOut /> Sign out
                                            </button>
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <Link href={'/login'}>
                        <motion.button
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Login
                        </motion.button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;