import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dburl:string = process.env.DB_URL || "mongodb://localhost:27017/ecommerce";

const connection = mongoose.connect(dburl);

export default connection;