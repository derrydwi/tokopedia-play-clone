const io = require('./socketio')

const socket = io()

socket.on('connection', (socket) => {
  socket.on('join', (room) => {
    socket.join(room)
  })
})

module.exports = socket
