import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import User from "@/models/User";
import Razorpay from "razorpay";
import connectDB from "@/components/ConnectDb";

export const POST = async (req) => {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    let p = await Payment.findOne({ oid: body.razorpay_order_id });

    if (!p) {
        return NextResponse.json({ success: false, message: "Order Id not found" });
    }
    let user = await User.findOne({ username: p.to_username });
    const secret = user.razorpaysecret;




    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)

    if (xx) {
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true });
        // return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_username}?paymentdone=true`);
        return NextResponse.redirect(`/${updatedPayment.to_username}?paymentdone=true`);
    }
    else {
        return NextResponse.json("Payment verification failed");
    }
}