import { Heart, Shield, Eye, Target } from "lucide-react";

export default function Sobre() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ética e responsabilidade",
      description: "Compromisso com os mais altos padrões profissionais e legais",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Comunicação transparente",
      description: "Clareza total sobre seus direitos, riscos e possibilidades",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Respeito à história do cliente",
      description: "Compreensão genuína da vulnerabilidade e contexto de cada caso",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Compromisso com o resultado",
      description: "Dedicação total para alcançar os melhores desfechos possíveis",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4EFE9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B3248] to-[#1A3A4A] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h1>
          <p className="text-xl text-[#E8F2F7] max-w-2xl">
            Conheca minha história, valores e abordagem na advocacia
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-section.jpg"
                  alt="Élvia Azeredo"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C8A96A] rounded-full opacity-20" />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-[#0B3248] mb-6">
                Técnica, Estratégia e Humanidade
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Atuo nas áreas de Direito Civil e Criminal com foco em oferecer um atendimento
                humano, estratégico e totalmente transparente. Cada situação é tratada com
                responsabilidade, ética e dedicação, sempre analisando o caso de forma
                individualizada.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Minha abordagem combina técnica, estudo constante e comunicação clara, permitindo
                que o cliente compreenda seus direitos, riscos e possibilidades antes de qualquer
                decisão. Busco oferecer um serviço jurídico moderno, próximo e comprometido com
                resultados reais.
              </p>

              <div className="bg-[#E8F2F7] border-l-4 border-[#C8A96A] p-6 rounded-lg">
                <p className="text-[#0B3248] font-semibold text-lg italic">
                  "Unir técnica, estratégia e humanidade para proteger os direitos e interesses
                  de cada cliente."
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-2xl p-12 mb-20">
            <h3 className="text-3xl font-bold text-[#0B3248] mb-12 text-center">Meus Valores</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-6">
                  <div className="text-[#C8A96A] flex-shrink-0">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B3248] mb-2">{value.title}</h4>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Value */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex gap-6">
                <div className="text-[#C8A96A] flex-shrink-0">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0B3248] mb-2">
                    Sigilo profissional em todas as etapas
                  </h4>
                  <p className="text-gray-700">
                    Confidencialidade absoluta é garantida em cada interação e procedimento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Approach Section */}
          <div className="bg-gradient-to-r from-[#0B3248] to-[#1A3A4A] text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-8">Minha Abordagem</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#C8A96A] mb-4">01</div>
                <h4 className="text-xl font-bold mb-3">Análise Profunda</h4>
                <p className="text-[#E8F2F7]">
                  Estudo minucioso de cada caso para identificar as melhores estratégias.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold text-[#C8A96A] mb-4">02</div>
                <h4 className="text-xl font-bold mb-3">Comunicação Clara</h4>
                <p className="text-[#E8F2F7]">
                  Explicações acessíveis sobre procedimentos, direitos e possibilidades.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold text-[#C8A96A] mb-4">03</div>
                <h4 className="text-xl font-bold mb-3">Resultados Reais</h4>
                <p className="text-[#E8F2F7]">
                  Dedicação total para alcançar os melhores desfechos para seu caso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0B3248] mb-6">
            Pronto para conversar?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Entre em contato e receba uma orientação inicial com clareza e segurança
          </p>
          <a
            href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20uma%20orientação%20inicial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B3248] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#0B3248]/90 transition-all inline-flex items-center gap-2"
          >
            Enviar mensagem
          </a>
        </div>
      </section>
    </div>
  );
}
