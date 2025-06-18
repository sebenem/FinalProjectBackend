import basketModel from "../models/basketModel.js";

// Səbətdəki bütün məhsulları gətir
const getBasket = async (req, res) => {
    try {
        const basket = await basketModel.find();
        res.json(basket);
    } catch (error) {
        res.status(500).json({ message: 'Səbəti gətirmək mümkün olmadı', error });
    }
};

// Səbətə məhsul əlavə et (əgər varsa, quantity artır)
const postBasket = async (req, res) => {
    try {
        const { image, title, price, category } = req.body;

        // Əgər məhsul artıq səbətdə varsa
        let existingProduct = await basketModel.findOne({ title });

        if (existingProduct) {
            existingProduct.quantity += 1;
            await existingProduct.save();
            return res.json(existingProduct);
        }

        // Əgər məhsul səbətdə yoxdursa, yeni əlavə et
        const newProduct = await basketModel.create({ image, title, price, category });
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Məhsul əlavə olunmadı', error });
    }
};

// Səbətdən məhsulu sil
const deleteBasket = async (req, res) => {
    try {
        const { id } = req.params;
        await basketModel.findByIdAndDelete(id);
        res.json("Məhsul səbətdən silindi");
    } catch (error) {
        res.status(500).json({ message: 'Silinmə zamanı xəta baş verdi', error });
    }
};

// Səbətdə məhsulun sayını dəyiş
const updateBasket = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        const product = await basketModel.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Məhsul tapılmadı' });
        }

        product.quantity = quantity;
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Quantity yenilənmədi', error });
    }
};

export {
    getBasket,
    postBasket,
    deleteBasket,
    updateBasket
};
