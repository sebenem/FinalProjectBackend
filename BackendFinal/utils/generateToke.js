import jwt from 'jsonwebtoken'

export const generateToke = (res,id) => {
    const token=jwt.sign({id}, process.env.JWK_SEARCH, {
        expiresIn: '30d'
    })

    res.cookie('jwt', token, {
         httpOnly: true,
        secure:true,
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
}