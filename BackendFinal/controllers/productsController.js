    import mongoose from "mongoose";
    import productsModel from "../models/productsModel.js"


    const getProduct = async (req,res) => {
        const products = await productsModel.find()
        res.json(products);
    }

    const postProduct = async (req, res) => {
        const { image, title, price, category } = req.body;
        const newProduct = await productsModel.create({ image, title, price, category });
        res.json(newProduct);
    };



    const deleteProduct = async (req,res) => {
        const {id} = req.params
        await productsModel.findByIdAndDelete(id)
        res.json("silindi");
    }

    const getProductById = async (req, res) => {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Yanlış məhsul ID formatı' });
        }

        const product = await productsModel.findById(id);

        if (!product) {
            return res.status(404).json({ error: 'Məhsul tapılmadı' });
        }

        res.json(product);
    };

    export {getProduct, postProduct, deleteProduct, getProductById }
