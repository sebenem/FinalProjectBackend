import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

const userControl = async (req, res, next) => {
    let token

    token=req.cookies.jwt
    if (!token) {
         res.json('token tapilmadi')
    }
    try {
        const docoded = jwt.verify(token, process.env.JWK_SEARCH)
        req.user = await userModel.findById(docoded.id).select('-password')
       
        next()

    } catch (error) {
        console.log(error);
        
    }
}

export default userControl