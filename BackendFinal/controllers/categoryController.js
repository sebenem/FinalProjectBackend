import categoryModel from "../models/categoryModel.js"


const getCategory = async (req,res) => {
    const category = await categoryModel.find()

    res.json(category)
}


const postCategory = async (req,res) => {
    const {image, title, price, category} = req.body
    let newProduct ={image, title, price, category}
    await categoryModel.create(newProduct)

    res.json(newProduct)
}


const deleteCategory = async (req,res) => {
    const {id} = req.params

    await categoryModel.findByIdAndDelete(id)

    res.json('product deleted')
}



export {getCategory, postCategory, deleteCategory}