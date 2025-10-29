// import { NextResponse } from "next/server";
// import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
// import Payment from "@/models/Payment";
// import User from "@/models/User";
// import Razorpay from "razorpay";
// import connectDB from "@/components/ConnectDb";

// export const POST = async (req) => {
//     await connectDB();
//     // let body = await req.formData();
//     const body = await req.json();

//     body = Object.fromEntries(body);

//     let p = await Payment.findOne({ oid: body.razorpay_order_id });

//     if (!p) {
//         return NextResponse.json({ success: false, message: "Order Id not found" });
//     }
//     let user = await User.findOne({ username: p.to_username });
//     const secret = user.razorpaysecret;




//     let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)

//     if (xx) {
//         const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true });
//         // return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_username}?paymentdone=true`);
//         return NextResponse.redirect(`https://get-me-a-chai-gilt-pi.vercel.app/${updatedPayment.to_username}?paymentdone=true`);
//     }
//     else {
//         return NextResponse.json("Payment verification failed");
//     }
// }

import { NextResponse } from "next/server";
import crypto from "crypto";
import Payment from "@/models/Payment";
import User from "@/models/User";
import connectDB from "@/components/ConnectDb";

export const POST = async (req) => {
  await connectDB();

  let body;
  try {
    // Try JSON first (used in frontend handler)
    body = await req.json();
  } catch (err) {
    // Fallback to formData (used if callback_url is used)
    const form = await req.formData();
    body = Object.fromEntries(form);
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  const p = await Payment.findOne({ oid: razorpay_order_id });
  if (!p) {
    return NextResponse.json({ success: false, message: "Order Id not found" });
  }

  const user = await User.findOne({ username: p.to_username });
  if (!user) {
    return NextResponse.json({ success: false, message: "User not found" });
  }

  const generatedSignature = crypto
    .createHmac("sha256", user.razorpaysecret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generatedSignature === razorpay_signature) {
    p.done = true;
    await p.save();
    return NextResponse.redirect(
      `https://get-me-a-chai-gilt-pi.vercel.app/${p.to_username}?paymentdone=true`
    );
  } else {
    return NextResponse.json({
      success: false,
      message: "Payment verification failed",
    });
  }
};