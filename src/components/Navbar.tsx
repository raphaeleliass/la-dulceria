import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "carte", label: "Cardápio" },
    { id: "events", label: "Eventos" },
    { id: "testimonials", label: "Depoimentos" },
    { id: "contact", label: "Contato" },
  ];

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-rose-500/90 backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-base md:text-lg font-medium text-white">
              La Dulceria
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300 relative
                  ${
                    activeItem === item.id
                      ? "text-rose-600 bg-white"
                      : "text-white hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300"
              style={{ transform: isMenuOpen ? "rotate(180deg)" : "rotate(0)" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 py-2 bg-rose-500/95 backdrop-blur-sm space-y-1 shadow-lg">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleItemClick(item.id)}
              className={`block px-3 py-2 rounded-lg text-sm transition-all duration-300
                ${
                  activeItem === item.id
                    ? "text-rose-600 bg-white"
                    : "text-white hover:bg-white/10"
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
