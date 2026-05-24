import mongoose from 'mongoose'

const writingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

const Writing = mongoose.model('Writing', writingSchema)

export default Writing