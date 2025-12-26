import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import messagesRouter from "./routes/messages.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRouter);
app.use("/api/message",messagesRouter);


app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});
