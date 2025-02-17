export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600">
            Estamos aqui para tornar seu momento ainda mais especial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-rose-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors duration-300"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-rose-500 mr-3">📍</span>
                  <div>
                    <p className="font-medium text-gray-900">Endereço</p>
                    <p className="text-gray-600">
                      Rua dos Doces, 123 - Jardim das Delícias
                      <br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-rose-500 mr-3">📞</span>
                  <div>
                    <p className="font-medium text-gray-900">Telefone</p>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-rose-500 mr-3">✉️</span>
                  <div>
                    <p className="font-medium text-gray-900">E-mail</p>
                    <p className="text-gray-600">contato@ladulceria.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                {["Instagram", "Facebook", "WhatsApp"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-sm font-medium hover:bg-rose-100 transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Localização
              </h3>
              <div className="aspect-w-16 aspect-h-9 bg-rose-50 rounded-lg">
                {/* Replace with actual map component */}
                <iframe
                  className="w-full rounded-xl shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36285.306629609215!2d-43.36025983523473!3d-21.76302902544697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1739822038322!5m2!1spt-BR!2sbr"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
