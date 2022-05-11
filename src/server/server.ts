import * as http from 'http'
import { Server } from 'socket.io'

const port: number = 4000

class App {
    private readonly server: http.Server;
    private readonly port: number;

    constructor(port: number) {
        this.port = port

        this.server = new http.Server()
        const io: Server = new Server(this.server)
    }

    public Start() {
        this.server.listen(this.port)
        console.log(`Server is running on Port ${this.port}`)
    }
}

new App(port).Start()