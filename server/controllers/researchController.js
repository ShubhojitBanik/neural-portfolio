import Research from '../models/Research.js'

export const getResearch = async (req, res) => {
  try {
    const research = await Research.find()

    res.json(research)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}