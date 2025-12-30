import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGODB connected successfully! ",connection.connection.host);
    } catch (error) {
        console.error("Failed to connect mongoDB: ", error);
        process.exit(1);
        
    }
}