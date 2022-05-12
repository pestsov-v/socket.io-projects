const socketController = (socket) => {
    socket.on('setNickname', ({nickname}) => {
        socket.nickname = nickname
        console.log(nickname)
    })
}

export default socketController