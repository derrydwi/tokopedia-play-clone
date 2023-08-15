const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
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
    price: {
      type: Number,
      required: true,
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video',
    },
  },
  { timestamps: true },
)

productSchema.set('toJSON', {
  versionKey: false,
})

module.exports = mongoose.model('Product', productSchema)
