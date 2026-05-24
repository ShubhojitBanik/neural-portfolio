import express from 'express'
import { getHomeNodes } from '../controllers/homeController.js'

const router = express.Router()

router.get('/', getHomeNodes)

export default router