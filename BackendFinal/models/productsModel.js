import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true }
}, { timestamps: true });

const productsModel = mongoose.model('products', productSchema);

export default productsModel;
