import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0B2E4A] to-[#062032] text-[#F3F1ED] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div className="animate-fade-in-up">
            <h3 className="font-bold text-lg mb-4 text-[#C8A96A]">Élvia Azeredo</h3>
            <p className="text-[#E7F0F6] text-sm leading-relaxed">
              Advocacia Civil e Criminal com técnica, estratégia e acolhimento.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold mb-4 text-[#C8A96A]">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Sobre", "Serviços", "FAQ", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#E7F0F6] hover:text-[#C8A96A] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-4 text-[#C8A96A]">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 hover:text-[#C8A96A] transition-colors">
                <Phone size={16} className="text-[#C8A96A]" />
                <a
                  href="https://wa.me/5554991163710"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (54) 99116-3710
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#C8A96A] transition-colors">
                <Mail size={16} className="text-[#C8A96A]" />
                <a href="mailto:advogelviaazeredo@gmail.com">
                  advogelviaazeredo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#C8A96A]" />
                <span>Passo Fundo, RS</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-4 text-[#C8A96A]">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C8A96A] text-[#0B2E4A] p-3 rounded-lg hover-scale shadow-lg hover:shadow-lg hover:shadow-[#C8A96A]/50 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C8A96A] text-[#0B2E4A] p-3 rounded-lg hover-scale shadow-lg hover:shadow-lg hover:shadow-[#C8A96A]/50 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C8A96A]/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#E7F0F6]">
            <p>© {currentYear} Élvia Azeredo Advogada. Todos os direitos reservados.</p>
            <p className="md:text-right">Desenvolvido com dedicação para a advocacia moderna.</p>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="mt-6 text-xs text-[#C8A96A] border-t border-[#C8A96A]/30 pt-6">
          <p>
            Este site é apenas informativo e não constitui aconselhamento jurídico. Para
            orientação legal específica, entre em contato para uma consulta personalizada.
          </p>
        </div>
      </div>
    </footer>
  );
}
