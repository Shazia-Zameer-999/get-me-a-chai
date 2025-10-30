"use client"
import React from 'react'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import { useEffect } from 'react'

const SocialLoginButton = ({ provider, bgColor, hoverColor, children }) => (
    <motion.button
        onClick={() => signIn(provider)}
        className={`flex items-center justify-center w-full bg-slate-800 text-white border border-slate-700 rounded-lg shadow-md px-6 py-3 text-sm font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-purple-500 transition-colors duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </motion.button>
);


const Login = () => {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        if (session?.user?.username) {
            router.push(`/${session.user.username}`);
        }
    }, [session, router])


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const leftVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const rightVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    };


    return (
        <div className='text-white min-h-screen flex items-center justify-center container mx-auto p-4 bg-grid-slate-800/[0.2]'>
            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-5xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="text-center lg:text-left" variants={leftVariants}>
                    <h1 className='font-bold text-4xl md:text-5xl leading-tight'>
                        Turn Your <span className="text-purple-400">Passion</span> into Profit.
                    </h1>
                    <p className="text-slate-400 mt-4 text-lg">
                        GetMeAChai is the perfect place for creators to receive support from their audience and build a loyal community.
                    </p>
                </motion.div>

                <motion.div
                    className="w-full bg-slate-900/50 backdrop-blur-lg border border-slate-800 rounded-2xl p-8 shadow-2xl"
                    variants={rightVariants}
                >
                    <h2 className="text-2xl font-bold text-center mb-6">Join the Community</h2>
                    <div className="flex flex-col gap-4">

                        <SocialLoginButton provider="github">
                            <svg className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                            <span>Continue with Github</span>
                        </SocialLoginButton>

                        <SocialLoginButton provider="google">
                            <svg className="w-6 h-6 mr-3" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.901,36.639,44,30.825,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                            <span>Continue with Google</span>
                        </SocialLoginButton>
                        <SocialLoginButton provider="facebook">
                            <svg className="h-6 w-6 mr-3" fill="#1877F2" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                            <span>Continue with Facebook</span>
                        </SocialLoginButton>

                        


                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Login
