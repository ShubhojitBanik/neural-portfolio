import mongoose from 'mongoose'

const socialSchema = mongoose.Schema(
  {
    platform: String,
    link: String,
  },
  {
    timestamps: true,
  }
)

const Social = mongoose.model('Social', socialSchema)

export default Social