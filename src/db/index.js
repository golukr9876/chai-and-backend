// import mongoose, { Connection } from "mongoose";
import mongoose from 'mongoose';
const { Connection } = mongoose;

import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }   catch(error) {
        console.log("MONGODB connection error ", error);
        throw err;
        
    }
}

export default connectDB