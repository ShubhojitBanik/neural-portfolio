import express from 'express'
import { getAcademia } from '../controllers/academiaController.js'

const router = express.Router()

router.get('/', getAcademia)

export default router