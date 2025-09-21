import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    profile: { type: String },
    cover: { type: String },
    bio: { type: String }, 
    razorpayid: { type: String },
    razorpaysecret: { type: String },
}, { timestamps: true });

export default models.User || model('User', UserSchema); 