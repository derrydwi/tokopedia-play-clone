const Comment = require('../models/comment')
const io = require('../utils/socketio')

const get = async ({ videoId }) => {
  return await Comment.find({ videoId })
}

const create = async ({ username, content, videoId }) => {
  const comment = await Comment.create({ username, content, videoId })
  const socket = io()
  socket.to(videoId).emit('newComment', comment)
  return comment
}

const remove = async ({ id }) => {
  return await Comment.findByIdAndDelete(id)
}

module.exports = { get, create, remove }
