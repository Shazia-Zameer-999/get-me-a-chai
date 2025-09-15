"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const [showdropdown, setshowdropdown] = useState(false)
    const { data: session } = useSession()


    return (
        <nav className='bg-gray-900 text-white flex justify-between items-center px-6 h-16 fixed w-full top-0 z-50 '>
            <div className="logo font-bold text-lg flex justify-center items-center">
                <Link href={'/'} className='flex justify-center items-center gap-2'>
                    <span>GetMeaChai!</span>
                    <span><img width={35} src="/chai.gif" alt="" /></span>
                </Link>
            </div>

            <div className='relative'>
                {session && <>
                    <button onClick={() => { setshowdropdown(!showdropdown) }} onBlur={() => setTimeout(() => setshowdropdown(false), 50)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-4 my-2 bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>

                    <div id="dropdown" className={`z-10  ${showdropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute top-15 right-4`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="/yourpage" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                            </li>

                            <li>
                                <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Sign out
                                </button>
                            </li>
                        </ul>
                    </div>
                </>}
                {/* {session && <><Link href={'/dashboard'} className='me-4'>
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Dashboard
                    </button>
                </Link> </>} */}
                {/* {session && <>
                    <button onClick={() => { signIn() }} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Sign Out
                    </button>
                </>} */}
                {!session && <><Link href={'/login'} className='me-4'>
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login
                    </button>
                </Link></>}

            </div>
        </nav>
    )
}



export default Navbar
