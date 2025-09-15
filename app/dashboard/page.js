"use client"
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [session, router])
    return (
        <div className='flex justify-center flex-col items-center mt-25 gap-5'>
            <h1 className='text-3xl font-bold my-3'>Welcome to yout Dashboard</h1>
            <div className="labels flex flex-col w-[45%]">
                    <label className='font-bold text-lg' htmlFor="Name">Name</label>
                    <input className='bg-slate-800 border border-slate-600 rounded-lg p-2  my-2 ' type="text" name="name" id="name" />
                    <label className='font-bold text-lg' htmlFor="Email">Email</label>
                    <input className='bg-slate-800 border border-slate-600 rounded-lg p-2  my-2 ' type="text" name="name" id="name" />
                    <label className='font-bold text-lg' htmlFor="Username">Username</label>
                    <input className='bg-slate-800 border border-slate-600 rounded-lg p-2  my-2 ' type="text" name="name" id="name" />
                    <label className='font-bold text-lg' htmlFor="Profile Picture">Profile Picture</label>
                    <input className='bg-slate-800 border border-slate-600 rounded-lg p-2  my-2 ' type="text" name="name" id="name" />
                    <label className='font-bold text-lg' htmlFor="Cover Picture">Cover Picture</label>
                    <input className='bg-slate-800 border border-slate-600 rounded-lg p-2  my-2 ' type="text" name="name" id="name" />
                    <label className='font-bold text-lg' htmlFor="Razorpay Credentials">Razorpay Credentials</label>
                    <input className='bg-slate-800 border border-slate-600 rounded-lg p-2  my-2 ' type="text" name="name" id="name" />
                    <button className='bg-blue-600 my-3 p-2 rounded-lg'>Save</button>
            </div>



        </div>
    )
}

export default Dashboard
