"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/components/ConnectDb"
import User from "@/models/User"


export const initiate = async ({ amount, to_username, paymentform }) => {
    await connectDB();

    let user = await User.findOne({ username: to_username });
    if (!user?.razorpayid || !user?.razorpaysecret) {
        return { success: false, message: "Creator payment settings are incomplete" };
    }

    const secret = user.razorpaysecret.trim();
    let key = user.razorpayid.trim();
    var instance = new Razorpay({
        key_id: key,
        key_secret: secret,
    });

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x;
    try {
        x = await instance.orders.create(options)
    } catch (error) {
        if (error?.statusCode === 401 || error?.error?.code === "BAD_AUTH") {
            return {
                success: false,
                message: "Razorpay authentication failed. Check the creator's key id and secret.",
            };
        }

        return {
            success: false,
            message: error?.error?.description || error?.message || "Failed to create Razorpay order",
        };
    }


    await Payment.create({
        oid: x.id,
        to_username: to_username,
        amount: amount,
        name: paymentform.name,
        message: paymentform.message
    })

    return { success: true, order: x };
}


export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username }).lean();

    if (!u) return null;

    const user = {
        ...u,
        _id: u._id.toString(),
    };

    return user;
}

export const fetchpayments = async (username) => {
    await connectDB();
    let payments = await Payment.find({ to_username: username, done: true }).sort({ amount: -1 }).lean();

    return payments.map(p => {
        return {
            ...p,
            _id: p._id.toString(),
        };
    });
}