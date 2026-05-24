import mongoose from 'mongoose'

const profileSchema = mongoose.Schema(
  {
    name: String,
    title: String,
    bio: String,
    resume: String,
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model('Profile', profileSchema)

export default Profile