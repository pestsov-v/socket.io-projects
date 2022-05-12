const socket = io('/')


socket.on('hello', () => {
    console.log('Кто-то сказал привет')
})

function sendMessage(message) {
    socket.emit("newMessage", { message })
    console.log(`Вы: ${message}`)
}

function setNickname(nickname) {
    socket.emit('setNickname', {nickname})
}

function handleMessageNotification(data) {
    const {message, nickname } = data;
    console.log(`${nickname}: ${message}`)
}

socket.on("messageNotification", handleMessageNotification)