const product = require('../services/product')

const get = async (req, res, next) => {
  try {
    const { videoId } = req.params
    const data = await product.get({ videoId })
    if (!data.length) {
      return res.status(404).send({ message: 'Product not found' })
    }
    return res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const { title, image, link, price, videoId } = req.body
    const data = await product.create({ title, image, link, price, videoId })
    if (!data) {
      return res.status(404).send({ message: "Product can't be saved" })
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
    const data = await product.remove({ id })
    if (!data) {
      return res.status(404).send({ message: 'Product not found' })
    }
    return res.status(200).send({ data })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = { get, create, remove }
