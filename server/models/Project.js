import mongoose from 'mongoose'

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    techStack: {
      type: [String],
      default: [],
    },

    category: {
      type: String,
      default: 'General',
    },

    course: {
      type: String,
      default: '',
    },

    semester: {
      type: String,
      default: '',
    },

    github: {
      type: String,
      default: '',
    },

    liveDemo: {
      type: String,
      default: '',
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Project = mongoose.model('Project', projectSchema)

export default Project