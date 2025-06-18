import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION_URI);
        console.log("Mongodb connected successfully");
    }
    catch(error){
        console.error(`ERROR: connecting db: ${error}`);
        process.exit(1);
    }
}

export default connectDB;