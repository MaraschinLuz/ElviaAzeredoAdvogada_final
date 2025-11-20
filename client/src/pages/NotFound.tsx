import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4EFE9] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-[#0B3248] mb-4">404</h1>
          <h2 className="text-4xl font-bold text-[#0B3248] mb-4">Página não encontrada</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <a className="bg-[#0B3248] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0B3248]/90 transition-all inline-flex items-center gap-2 justify-center">
              <ArrowLeft size={20} />
              Voltar para Home
            </a>
          </Link>
          <a
            href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20ajuda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C8A96A] text-[#0B3248] px-8 py-4 rounded-lg font-bold hover:bg-[#D4B876] transition-all"
          >
            Fale com a gente
          </a>
        </div>

        <div className="mt-16 text-gray-600">
          <p>Navegação rápida:</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <Link href="/">
              <a className="text-[#0B3248] hover:text-[#C8A96A] transition-colors font-medium">
                Home
              </a>
            </Link>
            <Link href="/sobre">
              <a className="text-[#0B3248] hover:text-[#C8A96A] transition-colors font-medium">
                Sobre
              </a>
            </Link>
            <Link href="/servicos">
              <a className="text-[#0B3248] hover:text-[#C8A96A] transition-colors font-medium">
                Serviços
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-[#0B3248] hover:text-[#C8A96A] transition-colors font-medium">
                Blog
              </a>
            </Link>
            <Link href="/contato">
              <a className="text-[#0B3248] hover:text-[#C8A96A] transition-colors font-medium">
                Contato
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
