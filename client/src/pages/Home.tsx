import { CheckCircle, Phone, MessageCircle, Globe, Zap, Lock, Heart, Shield, Eye, Target, FileText, Users, Video, Briefcase, Calendar, User, ArrowRight, Mail, MapPin, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
        }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ServiceItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[#E0E0E0] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-3 flex items-start gap-3 text-left hover:bg-[#F3F1ED] transition-colors rounded-lg px-2 -mx-2"
      >
        <CheckCircle className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-1" />
        <span className="text-[#2C2C2C] font-semibold flex-grow">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#C8A96A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pl-8 pr-2 pb-3 pt-1">
          <p className="text-[#666666] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-[#C8A96A] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#C8A96A]/30 transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between bg-[#FFFFFF] hover:bg-[#F3F1ED] transition-colors"
      >
        <h3 className="font-bold text-[#0B2E4A] text-left">{question}</h3>
        <ChevronDown
          size={20}
          className={`text-[#C8A96A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-[#F3F1ED] border-t border-[#C8A96A]">
          <p className="text-[#2C2C2C] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const highlights = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Atendimento direto",
      description: "Você fala diretamente com o profissional responsável pelo seu caso.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Respostas via WhatsApp",
      description: "Comunicação ágil e prática para suas dúvidas e necessidades.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Online e presencial",
      description: "Flexibilidade para atender conforme sua conveniência.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Linguagem clara",
      description: "Explicações acessíveis sobre seus direitos e procedimentos.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Sigilo garantido",
      description: "Absoluto respeito à confidencialidade em todas as etapas.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Defesa técnica",
      description: "Estratégia e conhecimento para casos desafiadores.",
    },
  ];

const values = [
    { icon: <Shield className="w-8 h-8" />, title: "Ética e responsabilidade" },
    { icon: <Eye className="w-8 h-8" />, title: "Comunicação transparente" },
    { icon: <Heart className="w-8 h-8" />, title: "Respeito ao cliente" },
    { icon: <Target className="w-8 h-8" />, title: "Compromisso com o máximo empenho" },
  ];

  const civilServices = [
    {
      question: "Advocacia Preventiva e Consultiva",
      answer: "Orientação jurídica para mitigar riscos e prevenir litígios, garantindo segurança jurídica em negócios e relações pessoais.",
    },
    {
      question: "Direito Contratual",
      answer: "Elaboração, análise, revisão e distrato de contratos cíveis, assegurando a proteção dos interesses e a validade dos negócios jurídicos.",
    },
    {
      question: "Direito do Consumidor",
      answer: "Defesa dos direitos do consumidor em face de práticas abusivas, produtos ou serviços defeituosos e cobranças indevidas.",
    },
    {
      question: "Direito de Família e Sucessões",
      answer: "Atuação especializada em questões de divórcio (consensual e litigioso), reconhecimento e dissolução de união estável, partilha de bens, guarda de filhos, regulamentação de convivência, fixação e revisão de alimentos (pensão alimentícia), além de inventários e testamentos.",
    },
    {
      question: "Direito Imobiliário e de Vizinhança",
      answer: "Assessoria em conflitos relacionados a imóveis, como posse, propriedade, aluguéis, e questões de direito de vizinhança.",
    },
    {
      question: "Responsabilidade Civil",
      answer: "Busca por reparação de danos materiais, morais e estéticos decorrentes de atos ilícitos, acidentes ou falhas na prestação de serviços.",
    },
  ];

  const criminalServices = [
    {
      question: "Acompanhamento em Sede Policial e Prisão em Flagrante",
      answer: "Assistência jurídica imediata em delegacias, garantindo a observância dos direitos e garantias fundamentais do cliente durante o auto de prisão em flagrante e no curso do inquérito policial.",
    },
    {
      question: "Atuação em Execução Penal e Revisão Criminal",
      answer: "Defesa dos interesses do sentenciado na fase de execução da pena, buscando a progressão de regime, livramento condicional e outros benefícios legais, bem como o ajuizamento de revisões criminais para desconstituir sentenças condenatórias.",
    },
    {
      question: "Defesa em Inquéritos Policiais e Ações Penais",
      answer: "Elaboração de respostas à acusação, alegações finais e interposição de recursos em todas as instâncias, com o objetivo de assegurar o devido processo legal, a ampla defesa e o contraditório.",
    },
    {
      question: "Defesa em Crimes em Espécie",
      answer: "Atuação especializada na defesa de acusações relativas a crimes contra a vida (homicídio), contra o patrimônio (furto, roubo, estelionato) e contra a honra (calúnia, injúria, difamação), entre outros.",
    },
    {
      question: "Orientação Estratégica para Atos Processuais",
      answer: "Preparação técnica do cliente para participação em oitivas, interrogatórios e demais atos da persecução penal, visando a proteção de seus direitos e a melhor estratégia defensiva.",
    },
    {
      question: "Tribunal do Júri",
      answer: "Atuação combativa em todas as fases do procedimento do Júri, culminando na defesa em plenário perante o Conselho de Sentença nos casos de crimes dolosos contra a vida.",
    },
  ];

  const trabalhistaServices = [
    {
      question: "Vínculo Empregatício e Contratação",
      answer: "Atuação na análise e discussão sobre a existência ou não da relação de emprego, bem como nas formalidades da contratação. (Sub-itens: Reconhecimento de Vínculo Empregatício, Modalidades de Contrato de Trabalho, Alteração do Contrato de Trabalho)",
    },
    {
      question: "Jornada de Trabalho e Descansos",
      answer: "Defesa relacionada ao controle, à duração e aos intervalos da jornada de trabalho. (Sub-itens: Horas Extras e Banco de Horas, Intervalos Intrajornada e Interjornada, Trabalho Noturno, Cargos de Confiança e Exceções ao Controle de Ponto)",
    },
    {
      question: "Remuneração e Direitos Salariais",
      answer: "Atuação focada na correta contraprestação pelo trabalho e na isonomia salarial. (Sub-itens: Equiparação Salarial, Desvio e Acúmulo de Função, Adicionais de Insalubridade e Periculosidade, Comissões e Prêmios)",
    },
    {
      question: "Saúde, Segurança e Estabilidade",
      answer: "Defesa dos direitos relacionados ao meio ambiente de trabalho seguro e à proteção contra a dispensa arbitrária. (Sub-itens: Acidente de Trabalho e Doenças Ocupacionais, Estabilidades Provisórias, Assédio Moral e Sexual)",
    },
    {
      question: "Extinção do Contrato de Trabalho",
      answer: "Atuação nas diversas modalidades de término do contrato e na correta apuração das verbas devidas. (Sub-itens: Rescisão Indireta do FGTS, Reversão de Justa Causa, Verbas Rescisórias)",
    },
    {
      question: "Relações Coletivas e Sindicais",
      answer: "Atuação na interface entre empresas, empregados e sindicatos. (Sub-itens: Negociações Coletivas, Direito de Greve)",
    },
    {
      question: "Contencioso Trabalhista",
      answer: "Representação em todas as fases do processo judicial na Justiça do Trabalho. (Sub-itens: Reclamação Trabalhista, Defesa e Recursos, Execução Trabalhista)",
    },
  ];

  const faqs = [
    {
      question: "Qual o procedimento para contratação?",
      answer: "O contato inicial deve ser realizado por WhatsApp ou e-mail para uma análise preliminar do caso. Nesta primeira etapa, o cliente expõe a situação fática e recebe um parecer jurídico inicial, com orientações claras sobre os direitos aplicáveis e as estratégias processuais ou extrajudiciais cabíveis.",
    },
    {
      question: "Qual a modalidades de atendimento remoto?",
      answer: "A assessoria jurídica pode ser prestada por meios digitais, como videoconferência, contato telefônico ou aplicativos de mensagem instantânea, conforme a conveniência do cliente. Independentemente da plataforma escolhida, são assegurados o mesmo padrão de excelência, confidencialidade e rigor técnico do atendimento presencial, garantindo um serviço completo e seguro.",
    },
    {
      question: "Qual é o valor da consulta inicial?",
      answer: "A orientação inicial é oferecida com clareza e segurança. Os valores dos serviços são discutidos após você descrever sua situação, considerando a complexidade do caso.",
    },
    {
      question: "Vocês atuam em qual área geográfica?",
      answer: "Atuo em Passo Fundo e região. Com o atendimento online, posso acompanhar casos em outras localidades também.",
    },
    {
      question: "Qual é a diferença entre direito civil e criminal?",
      answer: "Direito Civil envolve conflitos entre pessoas ou empresas. Direito Criminal envolve crimes e infrações penais. Ambas as áreas exigem estratégias diferentes.",
    },
    {
      question: "Como é mantido o sigilo profissional?",
      answer: "O sigilo profissional é uma obrigação ética e legal. Todas as informações que você compartilha são confidenciais e protegidas.",
    },
    {
      question: "Posso fazer uma consulta antes de contratar?",
      answer: "Sim! Você pode entrar em contato para uma orientação inicial sem compromisso. Essa conversa ajuda a esclarecer sua situação.",
    },
    {
      question: "Qual é o tempo médio para resolver um caso?",
      answer: "O tempo varia dependendo da complexidade do caso. Vou orientá-lo sobre o tempo estimado após analisar seu caso.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F1ED]">
      {/* Hero Section com Fundo */}
      <section id="home" className="relative min-h-screen bg-[#0B2E4A] overflow-hidden flex items-center">
        {/* Background Image com Overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('/hero-justice.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E4A] via-[#0B2E4A]/80 to-[#0B2E4A]/60" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C8A96A] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#E7F0F6] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl mx-auto">


            <h1 className="title-large text-[#F3F1ED] mb-6 leading-tight animate-fade-in-down">
              Élvia Azeredo Advocacia Civil, Criminal e Trabalhista
            </h1>

            <p className="text-lg md:text-xl text-[#C8A96A] mb-8 leading-relaxed animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "200ms" }}>
              Aqui, reconhecemos a singularidade de cada cliente, oferecendo um atendimento pautado na empatia, no respeito, na clareza e no absoluto sigilo profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <a
                href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20uma%20orientação%20inicial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C8A96A] text-[#0B2E4A] px-8 py-4 rounded-lg font-bold hover:bg-[#B39855] hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Fale agora pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="border-2 border-[#C8A96A] text-[#C8A96A] px-8 py-4 rounded-lg font-bold hover:bg-[#C8A96A]/10 transition-all duration-300"
              >
                Conheça os Serviços
              </a>
            </div>

            {/* Stats */}
          </div>
        </div>
      </section>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20uma%20orientação%20inicial"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        aria-label="Fale no WhatsApp"
      >
        <img
          src="/whatsapp-float.svg"
          alt="WhatsApp"
          className="w-14 h-14 drop-shadow-2xl hover:scale-105 transition-transform duration-200"
        />
      </a>
      {/* Sobre Section com Imagem de Fundo */}
      <section id="sobre" className="py-20 bg-[#062032] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/about-section.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062032] to-[#062032]/70" />

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border-2 border-[#C8A96A] shadow-2xl shadow-[#C8A96A]/30">
                  <img
                    src="/about-section.jpg"
                    alt="Élvia Azeredo"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Text Content */}
            <AnimatedSection>
              <div>
                {/* Values Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-[#C8A96A]">{value.icon}</div>
                      <p className="text-sm font-semibold text-[#F3F1ED]">{value.title}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0B2E4A]/50 border-l-4 border-[#C8A96A] p-6 rounded-lg mb-8">
                  <p className="text-[#C8A96A] font-semibold text-lg italic">
                    "Articulamos inteligência estratégica, precisão técnica e empatia para construir defesas eficazes e proteger os interesses de nossos clientes."
                  </p>
                </div>
                <div className="text-[#C8A96A] font-semibold mb-4">SOBRE</div>
                <h2 className="title-medium text-[#F3F1ED] mb-6">
                  Empatia, Estratégia e Técnica.
                </h2>

                <p className="text-[#E7F0F6] text-lg mb-6 leading-relaxed">
                  A atuação profissional concentra-se nas áreas do Direito Civil, Criminal e Trabalhista, com a prática jurídica pautada em um atendimento humanizado, na elaboração de soluções estratégicas e na mais absoluta transparência na condução de cada caso.
                </p>

                <p className="text-[#E7F0F6] text-lg mb-6 leading-relaxed">
                  A metodologia de trabalho alia o rigor técnico ao estudo aprofundado e contínuo da legislação, doutrina e jurisprudência. Essa abordagem, somada a uma comunicação clara e precisa, visa assegurar ao cliente a plena compreensão de seus direitos, bem como dos riscos e das reais possibilidades inerentes à sua demanda, sempre com a máxima responsabilidade, ética e dedicação.
                </p>

              




              </div>
            </AnimatedSection>


          </div>
        </div>
      </section>

      {/* Por Que Escolher Section */}
      <section className="py-20 bg-[#F3F1ED] relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="title-medium text-[#0B2E4A] mb-4">Por Que Escolher?</h2>
              <p className="text-[#666666] text-lg max-w-2xl mx-auto">
                Atendimento profissional, humanizado e focado nos seus resultados
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-lg p-6 hover:border-[#C8A96A] hover:shadow-lg hover:shadow-[#C8A96A]/20 transition-all duration-300 group">
                  <div className="text-[#C8A96A] mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2E4A] mb-3">{item.title}</h3>
                  <p className="text-[#666666] text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>



      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-[#F3F1ED]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="title-medium text-[#0B2E4A] mb-4">Áreas de Atuação</h2>
              <p className="text-[#666666] text-lg">Serviços jurídicos especializados</p>
            </div>
          </AnimatedSection>

          {/* Direito Civil */}
          <div className="mb-20">
            <AnimatedSection>
              <div>
                <div className="text-xl text-[#C8A96A] font-semibold mb-6">DIREITO CIVIL</div>
                <h3 className="title-medium text-[#0B2E4A] mb-6">Advocacia Consultiva e Contenciosa</h3>

                <p className="text-[#2C2C2C] text-lg mb-8 leading-relaxed">
                  Prática jurídica dedicada à tutela de direitos e à composição de lides, com especial enfoque na orientação jurídica e na prevenção de litígios, garantindo uma atuação clara e eficaz na defesa dos interesses do cliente.
                </p>

                <div className="space-y-3 mb-8">
                  {civilServices.map((service, index) => (
                    <AnimatedSection key={index} delay={index * 50}>
                      <ServiceItem
                        question={service.question}
                        answer={service.answer}
                        isOpen={openFAQ === `civil-${index}`}
                        onClick={() => setOpenFAQ(openFAQ === `civil-${index}` ? null : `civil-${index}`)}
                      />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Direito Criminal */}
          <div className="mb-20">
            <AnimatedSection delay={200}>
              <div>
                <div className="text-xl text-[#C8A96A] font-semibold mb-6">DIREITO CRIMINAL</div>
                <h3 className="title-medium text-[#0B2E4A] mb-6">Defesa Criminal Técnica e Combativa</h3>

                <p className="text-[#2C2C2C] text-lg mb-8 leading-relaxed">
                  Atuação técnica e intransigente na salvaguarda das garantias fundamentais do cliente, assegurando uma defesa robusta e estratégica em todas as fases da persecução penal, desde a investigação até a execução da pena.
                </p>

                <div className="space-y-3 mb-8">
                  {criminalServices.map((service, index) => (
                    <AnimatedSection key={index} delay={index * 50}>
                      <ServiceItem
                        question={service.question}
                        answer={service.answer}
                        isOpen={openFAQ === `criminal-${index}`}
                        onClick={() => setOpenFAQ(openFAQ === `criminal-${index}` ? null : `criminal-${index}`)}
                      />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Direito Trabalhista */}
          <div className="mb-20">
            <AnimatedSection delay={400}>
              <div>
                <div className="text-xl text-[#C8A96A] font-semibold mb-6">DIREITO TRABALHISTA</div>
                <h3 className="title-medium text-[#0B2E4A] mb-6">Defesa dos Direitos do Trabalhador e da Empresa</h3>

                <p className="text-[#2C2C2C] text-lg mb-8 leading-relaxed">
                  Atuação consultiva e contenciosa, defendendo os interesses de empregados e empregadores em questões de vínculo, jornada, remuneração, segurança e extinção do contrato de trabalho.
                </p>

                <div className="space-y-3 mb-8">
                  {trabalhistaServices.map((service, index) => (
                    <AnimatedSection key={index} delay={index * 50}>
                      <ServiceItem
                        question={service.question}
                        answer={service.answer}
                        isOpen={openFAQ === `trabalhista-${index}`}
                        onClick={() => setOpenFAQ(openFAQ === `trabalhista-${index}` ? null : `trabalhista-${index}`)}
                      />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={600}>
              <div className="bg-[#FFFFFF] rounded-lg p-8 border border-[#E0E0E0] hover:border-[#C8A96A] hover:shadow-lg hover:shadow-[#C8A96A]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-8 h-8 text-[#C8A96A]" />
                  <h3 className="text-2xl font-bold text-[#0B2E4A]">Assessoria Jurídica Digital</h3>
                </div>

                <p className="text-[#666666] mb-6">
                  Prestação de consultoria e acompanhamento jurídico por meio de plataformas virtuais, garantindo conveniência, agilidade e a mesma confidencialidade do atendimento presencial.
                </p>

                <ul className="space-y-3">
                  {["Consultas por Videoconferência: Realização de reuniões estratégicas por meio de plataformas digitais para a análise aprofundada de casos, documentos e para a definição de teses jurídicas.", "Atendimento Telefônico: Canal direto para o esclarecimento de dúvidas pontuais e para o acompanhamento célere do andamento processual.", "Agendamento Flexível: Disponibilidade de horários adaptados à rotina do cliente, otimizando a comunicação e a gestão do tempo."].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#C8A96A]" />
                      <span className="text-[#2C2C2C]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#062032]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="title-medium text-[#F3F1ED] mb-4">Perguntas Frequentes</h2>
              <p className="text-[#C8A96A] text-lg">Dúvidas comuns respondidas com clareza</p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 50}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-[#F3F1ED]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="title-medium text-[#0B2E4A] mb-4">Entre em Contato</h2>
              <p className="text-[#666666] text-lg">Descreva sua situação e receba orientação</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-6">
                <div className="bg-[#FFFFFF] rounded-lg p-6 border-l-4 border-[#C8A96A] hover:shadow-lg hover:shadow-[#C8A96A]/20 transition-all duration-300">
                  <h3 className="font-bold text-[#0B2E4A] mb-2 flex items-center gap-2">
                    <Phone size={20} className="text-[#C8A96A]" />
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/5554991163710"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A96A] hover:text-[#0B2E4A] transition-colors font-semibold"
                  >
                    (54) 99116-3710
                  </a>
                </div>

                <div className="bg-[#FFFFFF] rounded-lg p-6 border-l-4 border-[#C8A96A] hover:shadow-lg hover:shadow-[#C8A96A]/20 transition-all duration-300">
                  <h3 className="font-bold text-[#0B2E4A] mb-2 flex items-center gap-2">
                    <Mail size={20} className="text-[#C8A96A]" />
                    E-mail
                  </h3>
                  <a
                    href="mailto:advogelviaazeredo@gmail.com"
                    className="text-[#C8A96A] hover:text-[#0B2E4A] transition-colors font-semibold break-all"
                  >
                    advogelviaazeredo@gmail.com
                  </a>
                </div>

                <div className="bg-[#FFFFFF] rounded-lg p-6 border-l-4 border-[#C8A96A] hover:shadow-lg hover:shadow-[#C8A96A]/20 transition-all duration-300">
                  <h3 className="font-bold text-[#0B2E4A] mb-2 flex items-center gap-2">
                    <MapPin size={20} className="text-[#C8A96A]" />
                    Localização
                  </h3>
                  <p className="text-[#C8A96A] font-semibold">R. Lava Pés, 386 - Petrópolis, Passo Fundo - RS, 99050-040</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Google Maps */}
            <AnimatedSection delay={200}>
              <div className="rounded-2xl overflow-hidden border-2 border-[#C8A96A] shadow-2xl shadow-[#C8A96A]/30 h-full min-h-[400px]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.750029468356!2d-52.394531424513396!3d-28.245265875878513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2c0701ff6ec19%3A0x41e2a83eb8879d34!2sR.%20Lava%20P%C3%A9s%2C%20386%20-%20Petr%C3%B3polis%2C%20Passo%20Fundo%20-%20RS%2C%2099050-040!5e0!3m2!1spt-BR!2sbr!4v1765461588285!5m2!1spt-BR!2sbr"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#062032] to-[#0B2E4A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <AnimatedSection>
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="title-medium text-[#F3F1ED] mb-6">
              Qual é sua situação?
            </h2>
            <p className="text-lg text-[#E7F0F6] mb-8 max-w-2xl mx-auto">
              Descreva brevemente sua situação e receba uma orientação inicial com clareza e
              segurança
            </p>
            <a
              href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20uma%20orientação%20inicial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C8A96A] text-[#0B2E4A] px-10 py-4 rounded-lg font-bold hover:bg-[#B39855] hover:shadow-lg inline-block transition-all duration-300"
            >
              Enviar mensagem via WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
