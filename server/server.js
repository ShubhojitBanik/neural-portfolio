import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './config/db.js'

import projectRoutes from './routes/projectRoutes.js'
import researchRoutes from './routes/researchRoutes.js'
import academiaRoutes from './routes/academiaRoutes.js'
import writingRoutes from './routes/writingRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import socialRoutes from './routes/socialRoutes.js'
import homeRoutes from './routes/homeRoutes.js'


dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/projects', projectRoutes)
app.use('/api/research', researchRoutes)
app.use('/api/academia', academiaRoutes)
app.use('/api/writings', writingRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/socials', socialRoutes)
app.use('/api/home', homeRoutes)

app.get('/', (req, res) => {
  res.send('Neural Portfolio API Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})