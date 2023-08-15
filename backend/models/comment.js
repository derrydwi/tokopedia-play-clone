const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video',
    },
  },
  { timestamps: true },
)

commentSchema.set('toJSON', {
  versionKey: false,
})

module.exports = mongoose.model('Comment', commentSchema)
