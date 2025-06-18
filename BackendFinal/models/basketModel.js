import mongoose from "mongoose";

const basketSchema = mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, default: 1 }
}, { timestamps: true });

const basketModel = mongoose.model('basket', basketSchema);

export default basketModel;
