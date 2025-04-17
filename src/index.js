import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/database.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is listening at port ${PORT}`);
    });
}).catch((err)=>{
    console.error("Failed to start server due to DB connection error:", err);
});
