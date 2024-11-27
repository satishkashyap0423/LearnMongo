const mongoose = require("mongoose")
require('dotenv').config();

const connectDB = async() => {
    try {
        // Connectivity with DB
        console.log("Start MongoDB Successfully ", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected Successfully")
    } catch(error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectDB;