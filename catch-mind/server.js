import {join} from 'path';
import express from 'express';
import socketIo from 'socket.io';
import morgan from 'morgan'

const PORT = 4001;
const app = express();
app.set('view engine', 'pug');
app.set('views', join(__dirname, "src/views"));
app.use(express.static(join(__dirname, 'src/static')));
app.use(morgan('dev'));
app.get('/', (req, res) => {res.render('home')});

const handleListening = () => console.log(`Server is running on http://localhost:${PORT}`);
const server = app.listen(PORT, handleListening);
const io = socketIo(server);

io.on('connection', (socket) => {
    socket.on('newMessage', ({message}) => {
        socket.broadcast.emit("messageNotification", { message, nickname: socket.nickname || 'Аноним' } )
    })

    socket.on('setNickname', ({nickname}) => {
        socket.nickname = nickname;
    })
})