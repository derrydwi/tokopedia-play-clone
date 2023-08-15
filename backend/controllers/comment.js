const comment = require('../services/comment')

const get = async (req, res, next) => {
  try {
    const { videoId } = req.params
    const data = await comment.get({ videoId })
    if (!data.length) {
      return res.status(404).send({ message: 'Comment not found' })
    }
    return res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const { username, content, videoId } = req.body
    const data = await comment.create({ username, content, videoId })
    if (!data) {
      return res.status(404).send({ message: "Comment can't be saved" })
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
    const data = await comment.remove({ id })
    if (!data) {
      return res.status(404).send({ message: 'Comment not found' })
    }
    return res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = { get, create, remove }
