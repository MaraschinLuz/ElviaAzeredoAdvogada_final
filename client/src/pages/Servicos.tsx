import { CheckCircle, FileText, Users, Shield, Video, Briefcase } from "lucide-react";

export default function Servicos() {
  const civilServices = [
    "Contratos (elaboração, revisão e rescisão)",
    "Responsabilidade civil e indenizações",
    "Direito do consumidor",
    "Conflitos imobiliários e de vizinhança",
    "Direito de família (divórcio, guarda, pensão alimentícia)",
    "Assessoria jurídica preventiva",
  ];

  const criminalServices = [
    "Acompanhamento em delegacias e flagrantes",
    "Defesa em inquéritos e ações penais",
    "Tribunal do Júri",
    "Crimes contra a vida, patrimônio ou honra",
    "Execução penal e revisões criminais",
    "Orientação antes de oitivas e depoimentos",
  ];

  return (
    <div className="min-h-screen bg-[#F4EFE9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B3248] to-[#1A3A4A] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Áreas de Atuação</h1>
          <p className="text-xl text-[#E8F2F7] max-w-2xl">
            Serviços jurídicos especializados em Civil, Criminal e Consultoria
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Direito Civil */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/civil-law-section.jpg"
                    alt="Direito Civil"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-[#C8A96A]" />
                  <h2 className="text-4xl font-bold text-[#0B3248]">Direito Civil</h2>
                </div>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Atendimento completo voltado à solução prática dos conflitos do dia a dia,
                  sempre com foco em orientação clara e prevenção de litígios.
                </p>

                <div className="space-y-4 mb-8">
                  {civilServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5554991163710?text=Olá%20Élvia,%20tenho%20uma%20dúvida%20sobre%20Direito%20Civil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B3248] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0B3248]/90 transition-all inline-block"
                >
                  Consultar sobre Direito Civil
                </a>
              </div>
            </div>
          </div>

          {/* Direito Criminal */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/criminal-law-section.jpg"
                    alt="Direito Criminal"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-[#C8A96A]" />
                  <h2 className="text-4xl font-bold text-[#0B3248]">Direito Criminal</h2>
                </div>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Atuação estratégica e firme para garantir o exercício pleno dos direitos do
                  cliente em todas as fases do processo penal.
                </p>

                <div className="space-y-4 mb-8">
                  {criminalServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/5554991163710?text=Olá%20Élvia,%20tenho%20uma%20dúvida%20sobre%20Direito%20Criminal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B3248] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0B3248]/90 transition-all inline-block"
                >
                  Consultar sobre Direito Criminal
                </a>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Consultoria Jurídica Preventiva */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-[#C8A96A]" />
                <h3 className="text-2xl font-bold text-[#0B3248]">
                  Consultoria Jurídica Preventiva
                </h3>
              </div>

              <p className="text-gray-700 mb-6">
                Análise e orientação para evitar processos, trazendo segurança jurídica para
                indivíduos, profissionais e empresas.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#C8A96A]" />
                  <span className="text-gray-700">Análise preventiva de contratos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#C8A96A]" />
                  <span className="text-gray-700">Orientação sobre riscos legais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#C8A96A]" />
                  <span className="text-gray-700">Assessoria contínua</span>
                </li>
              </ul>

              <a
                href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20uma%20consultoria%20preventiva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3248] font-bold hover:text-[#C8A96A] transition-colors"
              >
                Saiba mais →
              </a>
            </div>

            {/* Atendimento Online */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Video className="w-8 h-8 text-[#C8A96A]" />
                <h3 className="text-2xl font-bold text-[#0B3248]">Atendimento Online</h3>
              </div>

              <p className="text-gray-700 mb-6">
                Consultas e acompanhamento jurídico realizados por vídeo ou telefone, com a
                mesma qualidade técnica e sigilo do atendimento presencial.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#C8A96A]" />
                  <span className="text-gray-700">Consultas por vídeo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#C8A96A]" />
                  <span className="text-gray-700">Atendimento por telefone</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#C8A96A]" />
                  <span className="text-gray-700">Flexibilidade de horários</span>
                </li>
              </ul>

              <a
                href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20um%20atendimento%20online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3248] font-bold hover:text-[#C8A96A] transition-colors"
              >
                Agendar consulta →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B3248] text-white mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Qual é sua situação?
          </h2>
          <p className="text-lg text-[#E8F2F7] mb-8 max-w-2xl mx-auto">
            Descreva brevemente sua situação e receba uma orientação inicial com clareza e
            segurança
          </p>
          <a
            href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20uma%20orientação%20inicial"
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
