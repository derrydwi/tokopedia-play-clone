require('../config/database')
const mongoose = require('mongoose')
const Video = require('../models/video')
const Products = require('../models/product')
const Comments = require('../models/comment')
const videos = require('../data/videos.json')
const products = require('../data/products.json')
const comments = require('../data/comments.json')

const seedDatabase = async () => {
  try {
    console.log('Drop database')
    await Comments.deleteMany()
    await Products.deleteMany()
    await Video.deleteMany()
    console.log('Seeding database')
    await Video.insertMany(videos)
    await Products.insertMany(products)
    await Comments.insertMany(comments)
    console.log('Database seeded successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    mongoose.disconnect()
  }
}

seedDatabase()
