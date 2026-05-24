import mongoose from 'mongoose'

const researchSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    abstract: {
      type: String,
      required: true,
    },

    authors: {
      type: [String],
      default: [],
    },

    tags: {
      type: [String],
      default: [],
    },

    paperLink: {
      type: String,
      default: '',
    },

    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Research = mongoose.model('Research', researchSchema)

export default Research