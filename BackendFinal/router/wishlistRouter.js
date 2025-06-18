import express from 'express'
import { deleteWishlist, getWishlist, postWishlist, updateWishlist } from '../controllers/wishlistController.js'

const router = express.Router()
router.route('/')
.get(getWishlist)
.post(postWishlist)

router.route('/:id')
.delete(deleteWishlist)
.put(updateWishlist)

export default router