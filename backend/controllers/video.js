const video = require('../services/video')

const get = async (req, res, next) => {
  try {
    const data = await video.get({})
    if (!data.length) {
      return res.status(404).send({ message: 'Video not found' })
    }
    return res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await video.getById({ id })
    if (!data) {
      return res.status(404).send({ message: 'Video not found' })
    }
    return res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const play = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await video.play({ id })
    if (!data) {
      return res.status(404).send({ message: 'Video not found' })
    }
    return res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const { title, image, link } = req.body
    const data = await video.create({ title, image, link })
    if (!data) {
      return res.status(404).send({ message: "Video can't be saved" })
    }
    return res.status(201).send({ data })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await video.remove({ id })
    if (!data) {
      return res.status(404).send({ message: 'Video not found' })
    }
    return res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = { get, getById, play, create, remove }
