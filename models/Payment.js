import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const PaymentSchema = new Schema({
    name: { type: String, required: true },
    to_username: { type: String, required: true },
    oid: { type: String, required: true },
    message: { type: String, required: true },
    amount: {
        type: Number,
        required: true,
        set: (v) => v / 100
    },
    done: { type: Boolean, default: false },
}, { timestamps: true });

export default models.Payment || model('Payment', PaymentSchema); 