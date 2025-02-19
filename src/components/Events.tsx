type EventService = {
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export default function Events() {
  const services: EventService[] = [
    {
      title: "Casamentos",
      description:
        "Doces que tornam o dia mais especial do casal ainda mais memorável",
      icon: "💑",
      features: [
        "Mesa de doces personalizada",
        "Bolo de casamento exclusivo",
        "Doces finos decorados",
        "Consultoria especializada",
      ],
    },
    {
      title: "Festas & Eventos",
      description: "Buffet de sobremesas completo para suas celebrações",
      icon: "🎉",
      features: [
        "Variedade de doces tradicionais",
        "Sobremesas exclusivas",
        "Decoração temática",
        "Atendimento no local",
      ],
    },
    {
      title: "Kits Presente",
      description: "Surpreenda alguém especial com nossas caixas de doces",
      icon: "🎁",
      features: [
        "Caixas personalizadas",
        "Seleção premium de doces",
        "Embalagem especial",
        "Cartão personalizado",
      ],
    },
  ];

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Celebre Momentos Especiais
          </h2>
          <p className="text-lg text-gray-600">
            Transformamos suas celebrações em momentos únicos e inesquecíveis
            com doces artesanais feitos especialmente para você
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-rose-100 text-rose-500 text-sm">
                      ✓
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Event Section */}
        <div className="bg-rose-500 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Image side */}
            <div className="relative h-64 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-rose-400 flex items-center justify-center">
                <img
                  className="w-full h-64 md:w-full md:h-full object-cover object-center"
                  src="https://images.pexels.com/photos/18180778/pexels-photo-18180778/free-photo-of-doces-guloseimas-doce-bala.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="imagem de mesa de doces"
                />
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4 font-poppins">
                Monte sua Mesa de Doces
              </h3>
              <p className="mb-6 text-rose-100">
                Criamos uma experiência única para seu evento com uma seleção
                especial de doces artesanais, decoração personalizada e
                atendimento exclusivo.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "Casamentos",
                  "Aniversários",
                  "Corporativo",
                  "Formaturas",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="px-8 py-3 bg-white text-rose-500 rounded-full font-medium hover:bg-rose-50 transition-colors duration-300 shadow-md hover:shadow-lg">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Quer saber mais sobre nossos serviços para eventos?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors duration-300"
            >
              <span className="mr-2">📞</span>
              (11) 99999-9999
            </a>
            <a
              href="mailto:contato@docesdaana.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors duration-300"
            >
              <span className="mr-2">✉️</span>
              contato@docesdaana.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
