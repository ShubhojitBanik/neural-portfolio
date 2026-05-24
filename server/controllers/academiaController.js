import Academia from '../models/Academia.js'

export const getAcademia = async (req, res) => {
  try {
    const academia = await Academia.find()

    res.json(academia)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}