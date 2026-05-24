import Writing from '../models/Writing.js'

export const getWritings = async (req, res) => {
  try {
    const writings = await Writing.find()

    res.json(writings)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}