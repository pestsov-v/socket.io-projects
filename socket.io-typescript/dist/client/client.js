var Client = /** @class */ (function () {
    function Client() {
        this.socket = io();
        this.socket.on("message", function (message) {
            console.log(message);
            document.body.innerHTML = message + "<br/>";
        });
    }
    return Client;
}());
var client = new Client();
