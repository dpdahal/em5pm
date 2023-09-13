import express, { Application,Request,Response } from 'express';
import dotenv from 'dotenv';
import router from './router';
import connection from './config/db';
import cors from 'cors';
let app : Application = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

dotenv.config();
 
app.use(cors())
app.use(router);

// ========== connection to database ==========
connection.then(()=>{
    console.log('Database Connected');
}).catch((err)=>{
    console.log(err);
});
// ========== end connection to database ==========


const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
console.log(port);

app.listen(port,()=>{
    console.log(`Server is running on http://${host}:${port}`);
});