class Client {
    private readonly socket

    constructor() {
        this.socket = io()

        this.socket.on("message", function (message: any) {
         console.log(message)
            document.body.innerHTML = message
        })
    }
}
const client = new Client()