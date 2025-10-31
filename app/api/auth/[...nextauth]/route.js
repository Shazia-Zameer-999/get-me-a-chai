import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import mongoose from 'mongoose';
import User from '@/models/User';
import connectDB from '@/components/ConnectDb';

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),

        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            await connectDB();
            const existingUser = await User.findOne({ email: user.email });

            if (!existingUser) {
                await User.create({
                    email: user.email,
                    username: user.email.split('@')[0],
                    name: user.name,
                    // profile: user.image,

                });
            }
            return true;
        },
        async session({ session }) {
            await connectDB();
            const dbUser = await User.findOne({ email: session.user.email });

            if (dbUser) {
                session.user.name = dbUser.name;
                session.user.email = dbUser.email;
                session.user.image = dbUser.profile;
                session.user.username = dbUser.username;
                session.user.cover = dbUser.cover;
                session.user.razorpayid = dbUser.razorpayid;
                session.user.razorpaysecret = dbUser.razorpaysecret;
                session.user.bio = dbUser.bio;
            }

            return session;
        }
    }
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }