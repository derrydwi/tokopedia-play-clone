const Product = require('../models/product')

const get = async ({ videoId }) => {
  return await Product.find({ videoId }).sort({ createdAt: 'desc' })
}

const create = async ({ title, image, link, price, videoId }) => {
  return await Product.create({ title, image, link, price, videoId })
}

const remove = async ({ id }) => {
  return await Product.findByIdAndDelete(id)
}

module.exports = { get, create, remove }
