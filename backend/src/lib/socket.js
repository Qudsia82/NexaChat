import {Server} from "socket.io";
import http from "http";
import express from "express";
import dotenv from "dotenv";
import { socketAuthMiddleware } from "../middlewares/socket.middleware.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:process.env.CLIENT_URL,
        credentials:true,
    },
});

io.use(socketAuthMiddleware)

export function getUserSocketId(userId){
  return userSocketMap[userId];
}

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user connected", socket.user.username);

  const userId = socket.userId;
  userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.user.username);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };