require('dotenv').config()
require('./config/database')
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const http = require('http')
const index = require('./routes/index')
const video = require('./routes/video')
const product = require('./routes/product')
const commment = require('./routes/comment')

const app = express()

app.use(compression())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index)
app.use('/videos', video)
app.use('/products', product)
app.use('/comments', commment)

const httpServer = http.createServer(app)
require('./utils/socketio')(httpServer)
require('./utils/socketioRoom')

httpServer.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
