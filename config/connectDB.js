const mongoose = require("mongoose")

const dotenv = require('dotenv');
dotenv.config();

const connectDB = async ()=>{

    mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Connected to Db");
    }).catch((err)=>{
        console.log("Failed To connect to DB",err);
        process.exit(1)
    })
}

module.exports = connectDB;