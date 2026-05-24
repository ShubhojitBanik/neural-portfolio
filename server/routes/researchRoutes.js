import express from 'express'
import { getResearch } from '../controllers/researchController.js'

const router = express.Router()

router.get('/', getResearch)

export default router