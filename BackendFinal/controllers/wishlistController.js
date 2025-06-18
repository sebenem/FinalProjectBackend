    import wishlistModel from "../models/wishlistModel.js"

   const getWishlist = async (req, res) => {
    try {
        const wishlist = await wishlistModel.find();
        res.status(200).json({ success: true, data: wishlist });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

  const postWishlist = async (req, res) => {
    try {
        const { image, title, price, category } = req.body;

        let existingProduct = await wishlistModel.findOne({ title, price, category });

        if (existingProduct) {
            existingProduct.quantity = (existingProduct.quantity || 1) + 1;
            await existingProduct.save();
            return res.status(200).json({
                success: true,
                message: "Product quantity increased",
                data: existingProduct
            });
        }

        const newProduct = await wishlistModel.create({
            image,
            title,
            price,
            category,
            quantity: 1
        });

        res.status(201).json({
            success: true,
            message: "Product added",
            data: newProduct
        });

    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};
const deleteWishlist = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await wishlistModel.findById(id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        if (product.quantity > 1) {
            product.quantity -= 1;
            await product.save();
            return res.status(200).json({
                success: true,
                message: "Product quantity decreased",
                data: product
            });
        }

        await wishlistModel.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });

    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

const updateWishlist = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        const product = await wishlistModel.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        product.quantity = quantity;
        await product.save();
        res.status(200).json({ success: true, message: "Product updated", data: product });

    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

export { getWishlist, postWishlist, deleteWishlist, updateWishlist };