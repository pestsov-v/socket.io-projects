"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const socket_io_1 = require("socket.io");
const path_1 = __importDefault(require("path"));
const port = 4000;
class App {
    constructor(port) {
        this.port = port;
        const app = (0, express_1.default)();
        app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
        this.server = new http.Server(app);
        const io = new socket_io_1.Server(this.server, { serveClient: true });
        io.on('connection', function (socket) {
            console.log('User is connected: ' + socket.id);
            socket.broadcast.emit("message", "Каждому сказать привет " + socket.id);
            socket.emit("message", "Hello" + socket.id);
            socket.on('disconnect', function () {
                console.log('User is disconnected: ' + socket.id);
            });
        });
    }
    ;
    Start() {
        this.server.listen(this.port);
        console.log(`Server is running on Port ${this.port}`);
    }
}
new App(port).Start();
//# sourceMappingURL=server.js.map