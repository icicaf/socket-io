import Server from "./class/server";
import router from './routes/router';
import express from 'express';
import cors from 'cors'

const server = new Server();

server.app.use(express.urlencoded({ extended:true }));
server.app.use(express.json())

server.app.use( cors({ origin: true, credentials:true }));

server.app.use('/', router)

server.start( () => {
    console.log(`Server runing in the port ${ server.port }`)
})