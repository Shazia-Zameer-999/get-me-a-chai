"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { FiUser, FiMessageSquare, FiHeart } from 'react-icons/fi';
import { FaRupeeSign } from 'react-icons/fa6'

const PaymentPage = ({ username }) => {

    const router = useRouter();
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const getData = async () => {
        let u = await fetchuser(username)
        setCurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const [paymentform, setPaymentform] = useState({
        name: "", message: "", amount: ""
    });
    const searchparmas = useSearchParams();
    useEffect(() => {
        if (searchparmas.get("paymentdone") == "true") {
            toast('✅ Payment Successful!', {
                position: "top-right", autoClose: 5000, theme: "dark", transition: Bounce,
            });
            getData();
            router.push(`/${username}`, { scroll: false });
        }
    }, [])

    const pay = async (amount) => {
        let a = await initiate({ amount, to_username: username, paymentform })
        let orderId = a.id;
        var options = {
            "key": currentUser.razorpayid,
            "amount": amount,
            "currency": "INR",
            "name": "Get Me A Chai",
            "description": "Test Transaction",
            "image": currentUser.profile || "/chai.gif",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": paymentform.name,
                "email": "test@example.com",
            },
            "theme": { "color": "#8B5CF6" }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
    const isDisabled2 = !paymentform.name || !paymentform.message
    const isDisabled = !paymentform.name || !paymentform.message || !paymentform.amount;

    const totalSupporters = payments.length;
    const totalAmount = payments.reduce((acc, p) => acc + p.amount, 0);


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const cardVariantsLeft = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    const cardVariantsRight = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    };


    return (
        <>
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <motion.div
                className="w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="cover w-full h-[35vh] md:h-[50vh] relative">
                    <img className='w-full h-full object-cover' src={currentUser.cover || "/cover.gif"} alt="Cover Photo" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                        <motion.div
                            className="profile -translate-y-12 border-4 border-white/50 rounded-full w-28 h-28 md:w-32 md:h-32 overflow-hidden shadow-lg"
                            variants={itemVariants}
                        >
                            <img className='w-full h-full object-cover' src={currentUser.profile || "/user.gif"} alt="Profile" />
                        </motion.div>
                        <motion.div
                            className="info text-center -mt-12 p-6 bg-black/20 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg"
                            variants={itemVariants}
                        >
                            <h1 className='text-2xl md:text-3xl font-bold'>@{username}</h1>
                            <p className="text-slate-300 text-sm md:text-base mt-1">{currentUser.bio || `Support @${username}, one chai at a time.`}</p>
                            <div className="mt-4 px-4 py-2 bg-slate-800/50 rounded-lg text-sm md:text-base">
                                <span className="font-bold text-purple-400">{totalSupporters}</span> Supporters · <span className="font-bold text-purple-400">₹{totalAmount / 100}</span> Raised
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="main w-[90%] mx-auto my-12 flex flex-col lg:flex-row justify-between gap-8">

                    <motion.div className="supporters w-full lg:w-1/2" variants={cardVariantsLeft}>
                        <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 rounded-xl p-7">
                            <h2 className='text-2xl font-bold flex items-center gap-2'><FiHeart className="text-purple-400" /> Supporters</h2>
                            <ul className='text-lg my-4 space-y-4 max-h-96 overflow-y-auto pr-2'>
                                {payments.length === 0 && <div className='text-center my-10 text-slate-400'>No supporters yet. Be the first!</div>}
                                {payments.map((p) => (
                                    <motion.li key={p._id} className='flex gap-3 items-start text-base p-3 bg-slate-800/50 rounded-lg' variants={itemVariants}>
                                        <img className='w-8 h-8 rounded-full' src="/user.gif" alt="User" />
                                        <div className="flex-1">
                                            <span><span className='font-bold text-purple-300'>{p.name}</span> donated <span className='font-bold text-lg'>₹{p.amount / 100}</span></span>
                                            <p className="text-sm text-slate-400 mt-1 flex items-center gap-2">
                                                <FiMessageSquare /> "{p.message}"
                                            </p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div className="makePayments w-full lg:w-1/2" variants={cardVariantsRight}>
                        <div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 rounded-xl p-7  h-126">
                            <h2 className='text-2xl font-bold'>Make a Payment</h2>
                            <div className="pay my-4 flex flex-col gap-4">
                                <div className="relative">
                                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input onChange={handleChange} value={paymentform.name} name="name" type="text" className='w-full p-2 pl-10 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:outline-none' placeholder='Your Name' required />
                                </div>
                                <div className="relative">
                                    <FiMessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input onChange={handleChange} value={paymentform.message} name="message" type="text" className='w-full p-2 pl-10 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:outline-none' placeholder='Leave a message...' required />
                                </div>
                                <div className="relative">
                                    <FaRupeeSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className='w-full p-2 pl-10 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:outline-none' placeholder='Enter Amount (e.g., 50)' required />
                                </div>
                                <motion.button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-3 text-center disabled:from-slate-600 disabled:to-slate-900 disabled:cursor-not-allowed" disabled={isDisabled} whileHover={{ scale: isDisabled ? 1 : 1.05 }}>Pay</motion.button>
                                <div className='flex gap-3 justify-between'>
                                    {[10, 20, 30].map(amount => (
                                        <motion.button key={amount} onClick={() => pay(amount * 100)} type="button" className="flex-1 bg-slate-800 text-white rounded-lg p-2.5 text-center hover:bg-purple-700 transition-colors disabled:cursor-not-allowed disabled:bg-slate-800" disabled={isDisabled2} whileHover={{ scale: 1.1 }}>
                                            Pay ₹{amount}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default PaymentPage;