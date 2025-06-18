import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

 const connectDB=async () => {
    console.log('connectDb işə düşdü');
    try {
        const connect= await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB baglantisi: ${connect.connection.host}`);
    } catch (error) {
   console.error('Xəta baş verdi:', error.message);
        process.exit(1);
    }
    
}

export default connectDB