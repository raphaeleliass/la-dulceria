export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-400/95 to-rose-500/95">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-red-300/30 blur-3xl" />
      </div>

      {/* Content container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <span className="text-pink-100 text-sm md:text-base uppercase tracking-wider font-medium">
                Bem-vindo à
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                La Dulceria
              </h1>
              <p className="text-2xl sm:text-3xl text-pink-100 font-light">
                Sabores que encantam seu paladar
              </p>
            </div>

            <p className="text-lg text-rose-100/90 max-w-2xl mx-auto lg:mx-0">
              Especializados em doces artesanais feitos com amor. Cada doce é
              cuidadosamente preparado para tornar seus momentos ainda mais
              especiais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 rounded-full bg-white text-rose-500 font-semibold hover:bg-rose-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Peça Agora
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors duration-300">
                Conheça Nossos Doces
              </button>
            </div>

            {/* Featured items */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <span className="text-pink-100 text-sm">Especialidades:</span>
              <div className="flex gap-2">
                {["Brigadeiros", "Bolos", "Doces Finos"].map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/10 text-white text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image container */}
          <div className="relative lg:block">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-pink-300/30 rounded-full mix-blend-multiply blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-rose-400/30 rounded-full mix-blend-multiply blur-2xl" />

              {/* Main image container */}
              <div className="relative">
                <div className="w-full h-[500px] rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-4 shadow-2xl overflow-hidden group">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-pink-400/40 to-rose-400/40 flex items-center justify-center relative">
                    <img
                      className="h-full object-cover object-center rounded-2xl"
                      src="https://images.pexels.com/photos/28504167/pexels-photo-28504167/free-photo-of-trufas-de-chocolate-elegantes-em-exposicao-rosa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="imagem de doces na mesa"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 w-full max-w-sm">
              {[
                { icon: "🎂", label: "Bolos Artesanais" },
                { icon: "✨", label: "Doces Finos" },
                { icon: "🎯", label: "Sob Encomenda" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center shadow-lg"
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-sm text-rose-100">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
