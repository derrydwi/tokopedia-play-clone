const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
)

videoSchema.set('toJSON', {
  versionKey: false,
})

module.exports = mongoose.model('Video', videoSchema)
