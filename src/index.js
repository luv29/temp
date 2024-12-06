// require('dotenv').config(path, './env')

import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()

/* if all in single file
import mongoose from 'mongoose';
import { DB_NAME } from './constants';

import express from 'express';
const app = express()

const port = process.env.PORT

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=> {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(port, ()=>{
            console.log(`Process is listening on port ${port}`)
        })
    }
    catch (error){
        console.log("ERROR: ", error);
        throw error;
    }
}) ()
    */