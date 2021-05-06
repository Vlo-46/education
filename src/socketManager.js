import openSocket from "socket.io-client";

export const socketClient = openSocket(`http://localhost:5000/`, {transports: ['websocket']})