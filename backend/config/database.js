require('dotenv').config()
const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to DB')
  })
  .catch(({ message }) => {
    console.log(message)
  })

process.on('unhandledRejection', ({ message }) => {
  console.log('unhandledRejection', message)
})

module.exports = { mongoose }
