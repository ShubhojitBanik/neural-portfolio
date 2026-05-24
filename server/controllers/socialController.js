import Social from '../models/Social.js'

export const getSocials = async (req, res) => {
  try {
    const socials = await Social.find()

    res.json(socials)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}