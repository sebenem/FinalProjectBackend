import express from 'express'
import { createUser, deleteUser, getAllUsers, getUser, loginUser, logoutUser } from '../controllers/userController.js'
import userControl from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', getAllUsers)  // buradakı 'report' əvəzinə 'get' olmalıdır

router.route('/signup').post(createUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)

router.route('/getuser').get(userControl, getUser)
router.route('/deleteuser/:id').delete(deleteUser)

export default router
