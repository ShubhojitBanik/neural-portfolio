import { motion } from 'framer-motion'

function Hero() {
  const outputs = [
    'About',
    'Projects',
    'Research',
    'Academia',
    'Writings',
    'Socials',
  ]

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[88vh] overflow-hidden px-8">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h1 className="text-7xl md:text-9xl font-black tracking-tight">
          NEURAL
        </h1>

        <p className="mt-5 text-gray-400 text-lg">
          MERN Stack Developer • Researcher • Builder
        </p>
      </div>

      {/* SYSTEM */}
      <div className="relative w-full max-w-7xl h-[420px]">

        {/* CONNECTIONS */}
        <svg className="absolute inset-0 w-full h-full">

          {/* x -> neuron */}
          <line
            x1="12%"
            y1="50%"
            x2="36%"
            y2="50%"
            stroke="rgba(0,255,255,0.5)"
            strokeWidth="2"
          />

          {/* bias -> neuron */}
          <line
            x1="28%"
            y1="18%"
            x2="39%"
            y2="45%"
            stroke="rgba(0,255,255,0.4)"
            strokeWidth="2"
          />

          {/* neuron -> relu */}
          <line
            x1="44%"
            y1="50%"
            x2="58%"
            y2="50%"
            stroke="rgba(0,255,255,0.5)"
            strokeWidth="2"
          />

          {/* relu -> y */}
          <line
            x1="70%"
            y1="50%"
            x2="78%"
            y2="50%"
            stroke="rgba(0,255,255,0.5)"
            strokeWidth="2"
          />

          {/* y -> outputs */}
          <line
            x1="82%"
            y1="50%"
            x2="92%"
            y2="22%"
            stroke="rgba(0,255,255,0.35)"
            strokeWidth="2"
          />

          <line
            x1="82%"
            y1="50%"
            x2="92%"
            y2="34%"
            stroke="rgba(0,255,255,0.35)"
            strokeWidth="2"
          />

          <line
            x1="82%"
            y1="50%"
            x2="92%"
            y2="46%"
            stroke="rgba(0,255,255,0.35)"
            strokeWidth="2"
          />

          <line
            x1="82%"
            y1="50%"
            x2="92%"
            y2="58%"
            stroke="rgba(0,255,255,0.35)"
            strokeWidth="2"
          />

          <line
            x1="82%"
            y1="50%"
            x2="92%"
            y2="70%"
            stroke="rgba(0,255,255,0.35)"
            strokeWidth="2"
          />

          <line
            x1="82%"
            y1="50%"
            x2="92%"
            y2="82%"
            stroke="rgba(0,255,255,0.35)"
            strokeWidth="2"
          />
        </svg>

        {/* INPUT x */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="absolute left-[6%] top-1/2 -translate-y-1/2"
        >
          <div className="w-24 h-24 rounded-full border border-cyan-400 bg-cyan-400/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.35)] flex items-center justify-center">

            <span className="text-4xl font-black">
              x
            </span>
          </div>
        </motion.div>

        {/* WEIGHT */}
        <div className="absolute left-[23%] top-[44%] text-cyan-300 text-xl font-semibold">
          w₁
        </div>

        {/* BIAS */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute left-[24%] top-[8%]"
        >
          <div className="px-4 py-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-lg">

            <span className="text-cyan-300 font-semibold">
              b
            </span>
          </div>
        </motion.div>

        {/* NEURON */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(0,255,255,0.2)',
              '0 0 60px rgba(0,255,255,0.55)',
              '0 0 20px rgba(0,255,255,0.2)',
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-20 h-20 rounded-full border border-cyan-400 bg-cyan-400/10 backdrop-blur-xl flex items-center justify-center">

            <span className="text-3xl font-black">
              Σ
            </span>
          </div>
        </motion.div>

        {/* RELU */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute left-[58%] top-1/2 -translate-y-1/2"
        >
          <div className="w-36 h-20 rounded-2xl border border-purple-400 bg-purple-400/10 backdrop-blur-xl shadow-[0_0_35px_rgba(168,85,247,0.35)] flex items-center justify-center">

            <span className="text-2xl font-bold text-purple-300">
              ReLU
            </span>
          </div>
        </motion.div>

        {/* y NODE */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="absolute left-[78%] top-1/2 -translate-y-1/2"
        >
          <div className="w-20 h-20 rounded-2xl border border-cyan-400 bg-cyan-400/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_35px_rgba(0,255,255,0.35)]">

            <span className="text-3xl font-black text-cyan-300">
              y
            </span>
          </div>
        </motion.div>

        {/* OUTPUTS */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">

          {outputs.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                x: -8,
              }}
              className="group cursor-pointer"
            >
              <div className="w-40 h-12 rounded-xl border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]">

                <span className="text-sm tracking-wide">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero