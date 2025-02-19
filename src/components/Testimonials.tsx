type Testimonial = {
  name: string;
  role: string;
  content: string;
  image?: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Maria Silva",
      image:
        "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      role: "Noiva",
      content:
        "Os doces da La Dulceria fizeram meu casamento ainda mais especial. Todos os convidados elogiaram a qualidade e a apresentação. Simplesmente perfeito!",
    },
    {
      name: "João Santos",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      role: "Aniversariante",
      content:
        "Encomendei uma mesa de doces para minha festa de aniversário e superou todas as expectativas. Cada doce é uma verdadeira obra de arte!",
    },
    {
      name: "Carla Oliveira",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      role: "Cliente Frequente",
      content:
        "Sou cliente há anos e nunca me decepcionei. A qualidade é sempre impecável e o atendimento é excepcional. Recomendo de olhos fechados!",
    },
  ];

  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center">
                "
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  {testimonial.image ? (
                    <img
                      className="w-full h-full object-center rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  ) : (
                    <span className="text-rose-500 text-xl">
                      {testimonial.name[0]}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-poppins">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8">
            Junte-se aos nossos clientes satisfeitos
          </p>
          <button className="px-8 py-3 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-colors duration-300 shadow-md hover:shadow-lg">
            Faça seu Pedido
          </button>
        </div>
      </div>
    </section>
  );
}
