import express from 'express';
import Db_connection from './config/connection.js';
import dotenv from 'dotenv';
import route from './router/route.js';
import bodyParser from 'body-parser'
import cors from 'cors'
import { upload } from './middleWare/configFile.js';
const app=express();
dotenv.config();
const port=process.env.PORT || 3000 ;
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('./uploads'));

Db_connection('mongodb://127.0.0.1:27017/mern-practice');
app.use('/api/',route)
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded

app.get('/',(req,res)=>{
   res.status(501).send("ok listen")


})






app.listen(port,()=>{


    console.log(`server runing at http://localhost:${port}`)
})