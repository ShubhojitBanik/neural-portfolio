import { useEffect, useState } from 'react'
import axios from 'axios'

import Hero from '../components/homepage/Hero'

function Home() {

  const [projects, setProjects] = useState([])

  useEffect(() => {

    const fetchProjects = async () => {
      try {

        const { data } = await axios.get(
          'https://neural-portfolio.onrender.com/'
        )

        setProjects(data)

      } catch (error) {
        console.error(error)
      }
    }

    fetchProjects()

  }, [])

  return (
    <div className="min-h-screen bg-black text-white">

      <Hero />

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <h2 className="text-5xl font-black mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project._id}
              className="p-8 rounded-3xl border border-white/10 bg-white/5"
            >
              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">

                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home