import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "O que fazer ao receber uma citação judicial",
      excerpt:
        "Receber uma citação pode gerar ansiedade. Conheça os passos corretos para agir com segurança e proteger seus direitos.",
      date: "15 de novembro, 2024",
      author: "Élvia Azeredo",
      category: "Direito Civil",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Como funciona um inquérito policial",
      excerpt:
        "Entenda as fases de um inquérito, seus direitos e como se preparar para depor com segurança e clareza.",
      date: "10 de novembro, 2024",
      author: "Élvia Azeredo",
      category: "Direito Criminal",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "Direitos do consumidor ao comprar na internet",
      excerpt:
        "Compras online têm proteção legal. Saiba quais são seus direitos como consumidor e como agir em caso de problemas.",
      date: "5 de novembro, 2024",
      author: "Élvia Azeredo",
      category: "Direito Civil",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "Quando é recomendado procurar um advogado",
      excerpt:
        "Nem toda situação requer advogado, mas há momentos em que a orientação profissional é essencial. Conheça os sinais.",
      date: "1 de novembro, 2024",
      author: "Élvia Azeredo",
      category: "Consultoria",
      readTime: "4 min",
    },
    {
      id: 5,
      title: "Diferença entre boletim de ocorrência e representação",
      excerpt:
        "Confunda-se com esses termos? Explicamos a diferença e quando cada um é necessário para proteger seus direitos.",
      date: "28 de outubro, 2024",
      author: "Élvia Azeredo",
      category: "Direito Criminal",
      readTime: "5 min",
    },
    {
      id: 6,
      title: "Como funciona um processo de divórcio",
      excerpt:
        "Divórcio é um processo que requer clareza. Conheça as etapas, direitos e como garantir um acordo justo.",
      date: "22 de outubro, 2024",
      author: "Élvia Azeredo",
      category: "Direito de Família",
      readTime: "8 min",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Direito Civil": "bg-blue-100 text-blue-800",
      "Direito Criminal": "bg-red-100 text-red-800",
      "Direito de Família": "bg-purple-100 text-purple-800",
      Consultoria: "bg-green-100 text-green-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-[#F4EFE9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B3248] to-[#1A3A4A] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog e Notícias</h1>
          <p className="text-xl text-[#E8F2F7] max-w-2xl">
            Conteúdos educativos sobre direito, orientações práticas e informações relevantes
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B3248] mb-4">Artigos Recentes</h2>
            <p className="text-gray-700 text-lg">
              Leia nossos artigos para compreender melhor seus direitos e procedimentos jurídicos
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
                      article.category
                    )}`}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B3248] mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-700 mb-6 line-clamp-3">{article.excerpt}</p>

                  {/* Meta Information */}
                  <div className="space-y-2 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{article.author}</span>
                    </div>
                    <div className="text-[#C8A96A] font-semibold">{article.readTime} de leitura</div>
                  </div>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#0B3248] font-bold hover:text-[#C8A96A] transition-colors"
                  >
                    Ler artigo completo
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="bg-[#0B3248] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#0B3248]/90 transition-all">
              Carregar mais artigos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0B3248] mb-4">
              Receba atualizações jurídicas
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Inscreva-se para receber novos artigos e orientações direto no seu e-mail
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0B3248]"
                required
              />
              <button
                type="submit"
                className="bg-[#C8A96A] text-[#0B3248] px-8 py-3 rounded-lg font-bold hover:bg-[#D4B876] transition-all"
              >
                Inscrever
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4">
              Respeitamos sua privacidade. Você pode se desinscrever a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B3248] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Dúvidas sobre seus direitos?</h2>
          <p className="text-lg text-[#E8F2F7] mb-8">
            Não encontrou a resposta que procurava? Fale com um profissional
          </p>
          <a
            href="https://wa.me/5554991163710?text=Olá%20Élvia,%20tenho%20uma%20dúvida%20sobre%20meus%20direitos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C8A96A] text-[#0B3248] px-10 py-4 rounded-lg font-bold hover:bg-[#D4B876] transition-all inline-block"
          >
            Enviar mensagem via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
