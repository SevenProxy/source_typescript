import express from "express";
import { createServer } from "http";
import { Server } from 'socket.io';
import connectSocketClient from "../services/websocket/connectSocket";

const app = express();
const server = createServer(app);
const socketIO = new Server(server, { cors: { origin: "http://localhost:5173" } });

connectSocketClient(socketIO);

export { server, app };