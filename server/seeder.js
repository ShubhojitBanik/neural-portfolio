import dotenv from 'dotenv'
import mongoose from 'mongoose'

import connectDB from './config/db.js'

import Profile from './models/Profile.js'
import Social from './models/Social.js'
import Project from './models/Project.js'

dotenv.config()

connectDB()

const seedData = async () => {
  try {

    await Profile.deleteMany()
    await Social.deleteMany()
    await Project.deleteMany()

    await Profile.create({
      name: 'Rakin',
      title: 'MERN Developer • Researcher',
      bio: 'Building neural interfaces and computational systems.',
      resume: '',
    })

    await Social.insertMany([
      {
        platform: 'GitHub',
        link: 'https://github.com/',
      },
      {
        platform: 'LinkedIn',
        link: 'https://linkedin.com/',
      },
    ])

    await Project.insertMany([
      {
        title: 'Neural Portfolio',
        description: 'Neural network inspired portfolio system.',
        techStack: ['React', 'MongoDB', 'Express'],
        category: 'Web Development',
        featured: true,
      },
      {
        title: 'OS Scheduler',
        description: 'Process scheduling simulation.',
        techStack: ['C++'],
        category: 'Course Project',
        course: 'CSE321',
      },
    ])

    console.log('Data Seeded')
    process.exit()

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seedData()