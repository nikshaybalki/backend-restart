import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
      const  connectioninstant = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB CONNECTED !! DB host: ${connectioninstant.connection.host}`);
    }
    catch (error) {
        console.log(" MONGO DB connection fail",error);
        process.exit(1)
    }
}

export default connectDB