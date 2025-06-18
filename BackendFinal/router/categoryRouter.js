import express from 'express'
import { deleteCategory, getCategory, postCategory } from '../controllers/categoryController.js'

const router = express.Router()
router.route('/')
.get(getCategory)
.post(postCategory)

router.route('/:id')
.delete(deleteCategory)

export default router