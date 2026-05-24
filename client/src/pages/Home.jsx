import { useState } from 'react'
import { motion } from 'framer-motion'

function Hero() {

  const x = 1
  const bias = -2

  const [weight, setWeight] = useState(0)

  // RELU
  const activation = Math.max(0, weight * x + bias)

  const outputs = [
    {
      label: 'Projects',
      threshold: 1,
    },
    {
      label: 'Research',
      threshold: 3,
    },
    {
      label: 'Academia',
      threshold: 5,
    },
    {
      label: 'Writings',
      threshold: 7,
    },
    {
      label: 'Socials',
      threshold: 9,
    },
  ]

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[88vh] overflow-hidden px-8">

      {/* TITLE */}
      <div className="text-center mb-20">

        <h1 className="text-7xl md:text-9xl font-black tracking-tight">
          NEURAL
        </h1>

        <p className="mt-5 text-gray-400 text-lg">
          Interactive Neural Portfolio
        </p>
      </div>

      {/* WEIGHT CONTROL */}
      <div className="mb-16 w-full max-w-md">

        <div className="flex justify-between mb-3 text-sm text-gray-400">
          <span>w₁ Weight</span>
          <span>{weight}</span>
        </div>

        <input
          type="range"
          min="-5"
          max="15"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-full"
        />

        <div className="mt-4 text-center text-cyan-300">
          Activation: {activation}
        </div>
      </div>

      {/* NETWORK */}
      <div className="relative w-full max-w-7xl h-[420px]">

        {/* LINES */}
        <svg className="absolute inset-0 w-full h-full">

          <line
            x1="12%"
            y1="50%"
            x2="36%"
            y2="50%"
            stroke={
              activation > 0
                ? 'rgba(0,255,255,0.9)'
                : 'rgba(255,255,255,0.15)'
            }
            strokeWidth="3"
          />

          <line
            x1="28%"
            y1="18%"
            x2="39%"
            y2="45%"
            stroke={
              activation > 0
                ? 'rgba(0,255,255,0.9)'
                : 'rgba(255,255,255,0.15)'
            }
            strokeWidth="3"
          />

          <line
            x1="44%"
            y1="50%"
            x2="58%"
            y2="50%"
            stroke={
              activation > 0
                ? 'rgba(0,255,255,0.9)'
                : 'rgba(255,255,255,0.15)'
            }
            strokeWidth="3"
          />

          <line
            x1="70%"
            y1="50%"
            x2="78%"
            y2="50%"
            stroke={
              activation > 0
                ? 'rgba(0,255,255,0.9)'
                : 'rgba(255,255,255,0.15)'
            }
            strokeWidth="3"
          />
        </svg>

        {/* INPUT */}
        <div className="absolute left-[6%] top-1/2 -translate-y-1/2">

          <div className="w-24 h-24 rounded-full border border-cyan-400 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.35)]">

            <span className="text-4xl font-black">
              x
            </span>
          </div>
        </div>

        {/* WEIGHT */}
        <div className="absolute left-[23%] top-[44%] text-cyan-300 text-xl font-bold">
          w₁ = {weight}
        </div>

        {/* BIAS */}
        <div className="absolute left-[24%] top-[8%]">

          <div className="px-4 py-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10">

            <span className="text-cyan-300 font-semibold">
              b = {bias}
            </span>
          </div>
        </div>

        {/* NEURON */}
        <motion.div
          animate={{
            scale: activation > 0 ? 1.1 : 1,
            boxShadow:
              activation > 0
                ? '0 0 70px rgba(0,255,255,0.8)'
                : '0 0 20px rgba(255,255,255,0.1)',
          }}
          className="absolute left-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-24 h-24 rounded-full border border-cyan-400 bg-cyan-400/10 flex items-center justify-center">

            <span className="text-4xl font-black">
              Σ
            </span>
          </div>
        </motion.div>

        {/* RELU */}
        <motion.div
          animate={{
            scale: activation > 0 ? 1.05 : 1,
          }}
          className="absolute left-[58%] top-1/2 -translate-y-1/2"
        >
          <div className="w-36 h-20 rounded-2xl border border-purple-400 bg-purple-400/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.35)]">

            <span className="text-2xl font-bold text-purple-300">
              ReLU
            </span>
          </div>
        </motion.div>

        {/* y */}
        <div className="absolute left-[78%] top-1/2 -translate-y-1/2">

          <div className="w-20 h-20 rounded-2xl border border-cyan-400 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.35)]">

            <span className="text-3xl font-black text-cyan-300">
              y
            </span>
          </div>
        </div>

        {/* OUTPUTS */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">

          {outputs.map((output, i) => {

            const active = activation >= output.threshold

            return (
              <motion.div
                key={i}
                animate={{
                  opacity: active ? 1 : 0.3,
                  x: active ? -10 : 0,
                  scale: active ? 1.03 : 1,
                }}
              >
                <div
                  className={`
                    w-40 h-12 rounded-xl border flex items-center justify-center
                    transition-all duration-300
                    ${
                      active
                        ? 'border-cyan-400 bg-cyan-400/10 shadow-[0_0_30px_rgba(0,255,255,0.4)]'
                        : 'border-white/10 bg-white/5'
                    }
                  `}
                >
                  {output.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero