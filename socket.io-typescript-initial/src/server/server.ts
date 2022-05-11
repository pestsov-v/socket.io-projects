import express from 'express'
import * as http from 'http'
import { Server, Socket } from 'socket.io'
import path from "path";

const port: number = 4000

class App {
    private readonly server: http.Server;
    private readonly port: number;

    constructor(port: number) {
        this.port = port

        const app = express()
        app.use(express.static(path.join(__dirname, '../client')))

        this.server = new http.Server(app)
        const io: Server = new Server(this.server, { serveClient: true })

        io.on('connection', function (socket: Socket) {
            console.log('User is connected: ' + socket.id)

            socket.broadcast.emit("message", "Каждому сказать привет " + socket.id)

            socket.emit("message", "Hello" + socket.id)
            socket.on('disconnect', function () {
                console.log('User is disconnected: ' + socket.id)
            });
        });
    };

    public Start() {
        this.server.listen(this.port)
        console.log(`Server is running on Port ${this.port}`)
    }
}

new App(port).Start()