"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'
import { FiSave, FiLoader, FiEye } from 'react-icons/fi'

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setForm] = useState({
        name: "", email: "", username: "", profile: "",
        cover: "", razorpayid: "", razorpaysecret: "", bio: ""
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (session) {
            setForm({
                name: session.user.name || "",
                username: session.user.username || "",
                email: session.user.email || "",
                profile: session.user.image || "",
                cover: session.user.cover || "",
                razorpayid: session.user.razorpayid || "",
                razorpaysecret: session.user.razorpaysecret || "",
                bio: session.user.bio || ""
            });
        }
    }, [session]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const result = await response.json();
            if (response.ok) {
                await update();
                toast('✅ Profile updated successfully!', {
                    position: "top-right", autoClose: 3000, theme: "dark", transition: Bounce,
                });
            } else {
                toast.error(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error("Failed to update profile:", error);
            toast.error("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <>
            <ToastContainer />
            <motion.div
                className='container mx-auto py-10 px-4'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className='text-3xl font-bold my-8 text-center' variants={itemVariants}>
                    Welcome to your Dashboard
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <motion.div className="lg:col-span-1" variants={itemVariants}>
                        <div className="sticky top-24">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><FiEye /> Live Preview</h2>
                            <div className="w-full h-[40vh] relative rounded-xl overflow-hidden border border-slate-700">
                                <img className='w-full h-full object-cover' src={form.cover || "https://placehold.co/600x400/1e293b/ffffff?text=Cover"} alt="Cover Preview" />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
                                    <div
                                        className="profile -translate-y-6 border-4 border-white/50 rounded-full w-24 h-24 overflow-hidden shadow-lg"
                                    >
                                        <img className='w-full h-full object-cover' src={form.profile || "https://placehold.co/100x100/475569/ffffff?text=User"} alt="Profile Preview" />
                                    </div>
                                    <div
                                        className="info text-center -mt-8 p-4 bg-black/20 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg w-[90%]"
                                    >
                                        <h1 className='text-xl font-bold'>@{form.username || "username"}</h1>
                                        <p className="text-slate-300 text-xs mt-1 truncate">{form.bio || "Your bio appears here"}</p>
                                        <div className="mt-3 px-2 py-1 bg-slate-800/50 rounded-lg text-xs">
                                            <span className="font-bold text-purple-400">0</span> Supporters · <span className="font-bold text-purple-400">₹0</span> Raised
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Public Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InputField label="Name" name="name" value={form.name} onChange={handleChange} />
                                <InputField label="Username" name="username" value={form.username} onChange={handleChange} />
                            </div>
                            <div className="mt-4">
                                <InputField label="Your Bio" name="bio" value={form.bio} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Appearance</h2>
                            <InputField label="Profile Picture URL" name="profile" value={form.profile} onChange={handleChange} />
                            <InputField label="Cover Picture URL" name="cover" value={form.cover} onChange={handleChange} />
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Payment Settings</h2>
                            <p className="text-sm text-slate-400 mb-4">These are required to receive payments.</p>
                            <InputField label="Razorpay Id" name="razorpayid" value={form.razorpayid} onChange={handleChange} />
                            <InputField label="Razorpay Secret Key" name="razorpaysecret" type="password" value={form.razorpaysecret} onChange={handleChange} />
                        </div>

                        <motion.button
                            onClick={handleSubmit}
                            disabled={loading}
                            className='w-full flex justify-center items-center gap-2 bg-blue-600 my-3 p-3 font-bold rounded-lg disabled:bg-blue-900 disabled:cursor-not-allowed'
                            whileHover={{ scale: loading ? 1 : 1.02 }}
                            whileTap={{ scale: loading ? 1 : 0.98 }}
                        >
                            {loading ? (
                                <>
                                    <FiLoader className="animate-spin" />
                                    <span>Saving...</span>
                                </>
                            ) : (
                                <>
                                    <FiSave />
                                    <span>Save Changes</span>
                                </>
                            )}
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

const InputField = ({ label, name, type = "text", value, onChange }) => (
    <div className="flex flex-col w-full">
        <label className='font-bold text-sm mb-1 text-slate-300' htmlFor={name}>{label}</label>
        <input
            onChange={onChange}
            value={value || ""}
            className='bg-slate-900 border border-slate-700 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all'
            type={type}
            name={name}
            id={name}
        />
    </div>
);


export default Dashboard;