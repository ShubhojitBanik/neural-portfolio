import express from 'express'
import { getWritings } from '../controllers/writingController.js'

const router = express.Router()

router.get('/', getWritings)

export default router