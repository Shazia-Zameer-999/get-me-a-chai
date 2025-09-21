"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/components/ConnectDb"
import User from "@/models/User"


export const initiate = async ({ amount, to_username, paymentform }) => {
    await connectDB();

    let user = await User.findOne({ username: to_username });
    const secret = user.razorpaysecret;
    let key = user.razorpayid;
    var instance = new Razorpay({
        key_id: key,
        key_secret: secret,
    });

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)


    await Payment.create({
        oid: x.id,
        to_username: to_username,
        amount: amount,
        name: paymentform.name,
        message: paymentform.message
    })

    return x;

    f

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