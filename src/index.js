// require('dotenv').config()   ---> modified version

import dotenv from "dotenv"  // s-1
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'               // s-2
})

connectDB();





                  // APPROACH - 1

// import express from "express"

// const app = express()


// // function connectDB(){

// // }

// // connectDB()

// (async () => {

//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error:",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
// console.log(`app is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch (error) {
//         console.error("ERROR:", error)
//         throw err
//     }

// })()