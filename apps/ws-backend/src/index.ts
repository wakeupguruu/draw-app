import {WebSocketServer} from "ws"
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws, request) => {
    const url = request.url
    if(!url){
        return
    }

    const queryParams = new URLSearchParams(url.split("?")[1]);
    const  token = queryParams.get("token") || "";

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_here');
    if(!decoded || !(decoded as JwtPayload).userId) {
        ws.close(1008, "Invalid token");
        return;
    }
    ws.on("message", function message(data){
        ws.send(`Received: ${data}`);
    })
});