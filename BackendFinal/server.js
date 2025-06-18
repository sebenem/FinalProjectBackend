import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import  connectDB  from './config/config.js'
import UserRouter from './router/userRouter.js'
import cookieParser from 'cookie-parser'
import ProductsRouter from './router/productsRouter.js'
import BasketRouter from './router/basketRouter.js'
import WishlistRouter from './router/wishlistRouter.js'
import CategoryRouter from './router/categoryRouter.js'
configDotenv()
const app=express()
app.use(cors({
    origin: '*',
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const PORT=5008
app.use('/api/users', UserRouter)
app.use('/products', ProductsRouter )
app.use('/basket', BasketRouter )
app.use('/wishlist', WishlistRouter)
app.use('/category', CategoryRouter)
connectDB()
app.listen(PORT, ()=>{
    console.log(`bakend ${PORT} işləyir`);
    
})