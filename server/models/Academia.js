import mongoose from 'mongoose'

const academiaSchema = mongoose.Schema(
  {
    institution: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    cgpa: {
      type: String,
      default: '',
    },

    courses: {
      type: [String],
      default: [],
    },

    achievements: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

const Academia = mongoose.model('Academia', academiaSchema)

export default Academia