import React from 'react'
import User from '@/models/User'
import PaymentPage from '@/components/PaymentPage'
import connectDB from '@/components/ConnectDb'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
    await connectDB();
    const user = await User.findOne({ username: params.username });

    if (!user) {
        return {
            title: "User not Found - Get me a Chai"
        }
    }

    return {
        title: `${user.username}'s Profile - Get me a Chai`,
        description: `Support ${user.username} with a chai. Help your favorite creators fund their passion.`,
    };
}
const ProfilePage = async ({ params }) => {
    await connectDB();
    const user = await User.findOne({ username: params.username }).lean();


    if (!user) {
        return notFound();
    }

    return (
        <>

            <PaymentPage username={params.username} />
        </>
    )
}

export default ProfilePage;