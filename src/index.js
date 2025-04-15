import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/database.js";
import express from "express";

connectDB()