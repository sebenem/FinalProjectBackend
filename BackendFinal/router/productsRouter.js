import express from 'express'
import { deleteProduct, getProduct, getProductById, postProduct } from '../controllers/productsController.js'

const router=express.Router()
router.route('/')
.get(getProduct)
.post(postProduct)

router.route('/:id')
.delete(deleteProduct)
router.get("/:id", getProductById); 
export default router