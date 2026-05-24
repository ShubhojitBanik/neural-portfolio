function NeuralBackground() {
  return (
    <div className="absolute inset-0">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  )
}

export default NeuralBackground