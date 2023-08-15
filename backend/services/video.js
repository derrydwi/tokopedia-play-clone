const Video = require('../models/video')

const get = async () => {
  return await Video.find().sort({ createdAt: 'desc' })
}

const getById = async ({ id }) => {
  return await Video.findById(id)
}

const play = async ({ id }) => {
  return await Video.findByIdAndUpdate(
    id,
    { $inc: { viewsCount: 1 } },
    { new: true },
  )
}

const create = async ({ title, image, link }) => {
  return await Video.create({ title, image, link })
}

const remove = async ({ id }) => {
  return await Video.findByIdAndDelete(id)
}

module.exports = { get, getById, play, create, remove }
