import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
     image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
}, {timestamps:true})

const categoryModel = mongoose.model('category',categorySchema)

export default categoryModel