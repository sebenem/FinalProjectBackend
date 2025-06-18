import mongoose from "mongoose";

export const wislistSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, default: 1 },
  }, { timestamps: true });

  const wishlistModel = mongoose.model('wishlist', wislistSchema)

  export default wishlistModel
