function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-white/10 backdrop-blur-sm">
      <h1 className="text-2xl font-bold tracking-widest">
        SHUVOJIT BANIK
      </h1>

      <div className="flex gap-6 text-sm text-gray-400">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Research</a>
      </div>
    </nav>
  )
}

export default Navbar