export default function AboutUs() {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-rose-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rose-100/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-red-100/50 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-rose-200 rounded-2xl transform -rotate-3" />
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-rose-300 rounded-2xl transform rotate-1" />

              {/* Main image container */}
              <div className="relative bg-white p-3 rounded-2xl shadow-xl">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Image caption */}
            <div className="absolute -bottom-6 -right-6 bg-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-rose-600 font-medium text-sm">Desde 2015 ❤️</p>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Doces feitos com amor e tradição
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A La Dulceria nasceu do amor pela confeitaria e do desejo de
                tornar momentos especiais ainda mais doces. Nossa jornada
                começou na pequena cozinha de casa, onde cada receita era
                preparada com carinho e dedicação.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoje, mantemos a mesma essência artesanal em cada doce que
                preparamos, usando ingredientes selecionados e receitas
                exclusivas que encantam paladares há mais de 8 anos.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                {
                  title: "Ingredientes",
                  description: "Selecionados com cuidado",
                  icon: "🌟",
                },
                {
                  title: "Receitas",
                  description: "Exclusivas e artesanais",
                  icon: "📖",
                },
                {
                  title: "Preparo",
                  description: "Com amor e dedicação",
                  icon: "💝",
                },
                {
                  title: "Experiência",
                  description: "+1000 clientes felizes",
                  icon: "🎯",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-medium text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Qualidade", "Compromisso", "Criatividade", "Sabor único"].map(
                (value, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
