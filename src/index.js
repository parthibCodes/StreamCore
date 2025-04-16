import dotenv from "dotenv";
dotenv.config();
import "./db/database.js";
import express from "express";
import { app } from "./app.js";


const PORT = process.env.PORT || 8000;

app.listen(PORT , ()=>{
    console.log(`Server is listening in port ${PORT}`);
});