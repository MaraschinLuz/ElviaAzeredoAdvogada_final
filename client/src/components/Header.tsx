import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F3F1ED]/95 backdrop-blur-md shadow-lg border-b border-[#C8A96A]/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 cursor-pointer hover-scale">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0B2E4A] to-[#C8A96A] rounded-lg flex items-center justify-center shadow-lg">
            <img
              src="/elvia_logo.jpg"
              alt="Elvia Azeredo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <span className="font-bold text-[#0B2E4A] hidden sm:inline text-lg">Élvia Azeredo</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#0B2E4A] hover:text-[#C8A96A] transition-colors font-medium relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0B2E4A] to-[#C8A96A] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20uma%20orientação%20inicial"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-[#0B2E4A] to-[#062032] text-[#F3F1ED] px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#C8A96A]/30 hover-lift font-medium shadow-lg transition-all duration-300"
        >
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#0B2E4A] p-2 hover-scale"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#F3F1ED]/95 backdrop-blur-md border-t border-[#C8A96A]/30 animate-fade-in-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#0B2E4A] hover:text-[#C8A96A] transition-colors font-medium block py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20uma%20orientação%20inicial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#0B2E4A] to-[#062032] text-[#F3F1ED] px-6 py-2.5 rounded-lg hover-lift font-medium text-center shadow-lg transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
