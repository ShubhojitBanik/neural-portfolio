import Profile from '../models/Profile.js'

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne()

    res.json(profile)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}