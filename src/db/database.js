import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const mongoURI = process.env.MONGODB_URI;
        if(!mongoURI){
            console.error("Mongo URI is not found");
        }
        const connectionInstance = await mongoose.connect(`${mongoURI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED: ",error);
        process.exit(1);
    }
}

export default connectDB;