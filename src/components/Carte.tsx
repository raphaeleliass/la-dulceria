import { useState } from "react";

type MenuItem = {
  name: string;
  description: string;
  price?: string;
  highlight?: boolean;
  image?: string;
};

type Category = {
  id: string;
  name: string;
  items: MenuItem[];
};

export default function Carte() {
  const [activeCategory, setActiveCategory] = useState("bolos");

  const categories: Category[] = [
    {
      id: "bolos",
      name: "Bolos Artesanais",
      items: [
        {
          name: "Bolo Red Velvet",
          description: "Massa aveludada com cobertura de cream cheese",
          price: "R$ 120,00",
          highlight: true,
          image:
            "https://images.pexels.com/photos/15071192/pexels-photo-15071192/free-photo-of-comida-alimento-refeicao-doce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Naked Cake",
          description: "Recheios de frutas vermelhas ou chocolate",
          price: "R$ 95,00",
          image:
            "https://images.pexels.com/photos/9808344/pexels-photo-9808344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Bolo de Chocolate",
          description: "Com ganache belga e morangos frescos",
          price: "R$ 110,00",
          image:
            "https://images.pexels.com/photos/4110007/pexels-photo-4110007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    {
      id: "doces",
      name: "Doces Caseiros",
      items: [
        {
          name: "Brigadeiros Gourmet",
          description: "Chocolate belga, tradicional ou com nuts",
          price: "R$ 5,00/un",
          highlight: true,
          image:
            "https://images.pexels.com/photos/10390468/pexels-photo-10390468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Beijinho de Coco",
          description: "Coco fresco e creme de leite",
          price: "R$ 4,50/un",
          image:
            "https://images.pexels.com/photos/19882165/pexels-photo-19882165/free-photo-of-chocolate-doce-bala-agradavel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Camafeu de Nozes",
          description: "Nozes selecionadas e cobertura crocante",
          price: "R$ 6,00/un",
          image:
            "https://s2-receitas.glbimg.com/nrdmioWPbzuZ1QgJfnEWLuW-oyU=/0x0:1366x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/2/W/7iRfjHTTyzEIKac2dOFg/camafeu-de-nozes-da-palmirinha-receita.jpg",
        },
      ],
    },
    {
      id: "sobremesas",
      name: "Sobremesas Especiais",
      items: [
        {
          name: "Pavlova",
          description: "Merengue com frutas frescas e chantilly",
          price: "R$ 85,00",
          highlight: true,
          image:
            "https://images.pexels.com/photos/29625647/pexels-photo-29625647/free-photo-of-deliciosa-sobremesa-pavlova-com-mirtilos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Cheesecake",
          description: "Base crocante e cobertura de frutas vermelhas",
          price: "R$ 95,00",
          image:
            "https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Torta de Limão",
          description: "Massa artesanal e limão siciliano",
          price: "R$ 75,00",
          image:
            "https://images.pexels.com/photos/5419122/pexels-photo-5419122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
    {
      id: "festas",
      name: "Doces para Festas",
      items: [
        {
          name: "Kit Festa 100 Doces",
          description: "Brigadeiros, beijinhos e doces especiais",
          price: "R$ 180,00",
          highlight: true,
          image:
            "https://images.pexels.com/photos/18180778/pexels-photo-18180778/free-photo-of-doces-guloseimas-doce-bala.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Mesa de Doces Completa",
          description: "Consultoria personalizada",
          price: "Sob consulta",
          image:
            "https://images.pexels.com/photos/18180778/pexels-photo-18180778/free-photo-of-doces-guloseimas-doce-bala.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Kit Celebração",
          description: "50 doces finos + bolo de 1kg",
          price: "R$ 250,00",
          image:
            "https://images.pexels.com/photos/18180778/pexels-photo-18180778/free-photo-of-doces-guloseimas-doce-bala.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Nossas Delícias
          </h2>
          <p className="text-lg text-gray-600">
            Sabores que encantam em cada momento especial
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-rose-500 text-white shadow-md"
                    : "bg-rose-50 text-rose-600 hover:bg-rose-100"
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories
            .find((cat) => cat.id === activeCategory)
            ?.items.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300
                  ${
                    item.highlight
                      ? "shadow-lg hover:shadow-xl border-2 border-rose-100"
                      : "shadow hover:shadow-lg"
                  }
                `}
              >
                {/* Image placeholder - replace with actual images */}
                <div className="aspect-square bg-rose-50">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-rose-300">Imagem do Produto</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 font-poppins">
                      {item.name}
                    </h3>
                    {item.price && (
                      <span className="text-rose-500 font-medium">
                        {item.price}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  {item.highlight && (
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-rose-50 text-rose-500 text-xs rounded-full">
                        Mais Vendido
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Encomendas especiais? Entre em contato!
          </p>
          <button className="px-8 py-3 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-colors duration-300 shadow-md hover:shadow-lg">
            Fazer Pedido
          </button>
        </div>
      </div>
    </section>
  );
}
