import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import mongoose from 'mongoose';
import { authOptions } from '../auth/[...nextauth]/route';
import User from '@/models/User';
import Payment from '@/models/Payment'; 

export async function POST(req) {
    await mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    const userEmail = session.user.email;
    const formData = await req.json();

    try {
        const currentUser = await User.findOne({ email: userEmail });
        const oldUsername = currentUser.username;

        await User.updateOne({ email: userEmail }, formData);

        if (formData.username && formData.username !== oldUsername) {
            await Payment.updateMany(
                { to_username: oldUsername },      
                { to_username: formData.username } 
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ success: false, message: 'An error occurred.' }, { status: 500 });
    }
}