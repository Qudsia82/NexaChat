import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import messagesRouter from "./routes/messages.js"
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { app, server } from "./lib/socket.js";


dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "5mb" }));
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}));
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use("/api/message",messagesRouter);


server.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    connectDB();
});
