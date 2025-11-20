import { CheckCircle, Phone, MessageCircle, Globe, Zap, Lock, Heart, Shield, Eye, Target, FileText, Users, Video, Briefcase, Calendar, User, ArrowRight, Mail, MapPin, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
    { icon: <Target className="w-8 h-8" />, title: "Compromisso com resultado" },
  ];

  const civilServices = [
    "Contratos (elaboração, revisão e rescisão)",
    "Responsabilidade civil e indenizações",
    "Direito do consumidor",
    "Conflitos imobiliários e de vizinhança",
    "Direito de família (divórcio, guarda, pensão)",
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

  const faqs = [
    {
      question: "Qual é o primeiro passo para contratar seus serviços?",
      answer: "O primeiro passo é entrar em contato via WhatsApp ou e-mail para uma conversa inicial. Você descreve sua situação e recebe uma orientação inicial com clareza sobre seus direitos e possibilidades.",
    },
    {
      question: "Como funciona o atendimento online?",
      answer: "O atendimento online é realizado por vídeo chamada, telefone ou WhatsApp. Você escolhe a forma que se sente mais confortável. Todos os atendimentos online têm a mesma qualidade que os presenciais.",
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
              Advocacia Civil e Criminal
              <br />
              <span className="gradient-text">com técnica, estratégia e acolhimento</span>
            </h1>

            <p className="text-lg md:text-xl text-[#C8A96A] mb-8 leading-relaxed animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "200ms" }}>
              Atuação personalizada, análise detalhada e acompanhamento próximo em todas as
              etapas do caso. Aqui, cada cliente é atendido com respeito, clareza e absoluto
              sigilo profissional.
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
            {/* Text Content */}
            <AnimatedSection>
              <div>
                <div className="text-[#C8A96A] font-semibold mb-4">SOBRE</div>
                <h2 className="title-medium text-[#F3F1ED] mb-6">
                  Técnica, Estratégia e Humanidade
                </h2>

                <p className="text-[#E7F0F6] text-lg mb-6 leading-relaxed">
                  Atuo nas áreas de Direito Civil e Criminal com foco em oferecer um atendimento
                  humano, estratégico e totalmente transparente. Cada situação é tratada com
                  responsabilidade, ética e dedicação.
                </p>

                <p className="text-[#E7F0F6] text-lg mb-6 leading-relaxed">
                  Minha abordagem combina técnica, estudo constante e comunicação clara, permitindo
                  que o cliente compreenda seus direitos, riscos e possibilidades.
                </p>

                <div className="bg-[#0B2E4A]/50 border-l-4 border-[#C8A96A] p-6 rounded-lg mb-8">
                  <p className="text-[#C8A96A] font-semibold text-lg italic">
                    "Unir técnica, estratégia e humanidade para proteger os direitos de cada cliente."
                  </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-[#C8A96A]">{value.icon}</div>
                      <p className="text-sm font-semibold text-[#F3F1ED]">{value.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

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
                  <div className="text-[#C8A96A] font-semibold mb-4">DIREITO CIVIL</div>
                  <h3 className="title-medium text-[#0B2E4A] mb-6">Soluções para Conflitos do Dia a Dia</h3>

                  <p className="text-[#2C2C2C] text-lg mb-8 leading-relaxed">
                    Atendimento completo voltado à solução prática dos conflitos, sempre com foco em orientação clara e prevenção de litígios.
                  </p>

                  <div className="space-y-3 mb-8">
                    {civilServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-1" />
                        <span className="text-[#2C2C2C]">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

          {/* Direito Criminal */}
          <div className="mb-20">
            <AnimatedSection delay={200}>
              <div>
                <div className="text-[#C8A96A] font-semibold mb-4">DIREITO CRIMINAL</div>
                <h3 className="title-medium text-[#0B2E4A] mb-6">Defesa Estratégica e Firme</h3>

                <p className="text-[#2C2C2C] text-lg mb-8 leading-relaxed">
                  Atuação estratégica e firme para garantir o exercício pleno dos direitos do cliente em todas as fases do processo penal.
                </p>

                <div className="space-y-3 mb-8">
                  {criminalServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-1" />
                      <span className="text-[#2C2C2C]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-[#FFFFFF] rounded-lg p-8 border border-[#E0E0E0] hover:border-[#C8A96A] hover:shadow-lg hover:shadow-[#C8A96A]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-8 h-8 text-[#C8A96A]" />
                  <h3 className="text-2xl font-bold text-[#0B2E4A]">Consultoria Jurídica Preventiva</h3>
                </div>

                <p className="text-[#666666] mb-6">
                  Análise e orientação para evitar processos, trazendo segurança jurídica.
                </p>

                <ul className="space-y-3">
                  {["Análise preventiva de contratos", "Orientação sobre riscos legais", "Assessoria contínua"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#C8A96A]" />
                      <span className="text-[#2C2C2C]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-[#FFFFFF] rounded-lg p-8 border border-[#E0E0E0] hover:border-[#C8A96A] hover:shadow-lg hover:shadow-[#C8A96A]/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-8 h-8 text-[#C8A96A]" />
                  <h3 className="text-2xl font-bold text-[#0B2E4A]">Atendimento Online</h3>
                </div>

                <p className="text-[#666666] mb-6">
                  Consultas e acompanhamento jurídico realizados por vídeo ou telefone.
                </p>

                <ul className="space-y-3">
                  {["Consultas por vídeo", "Atendimento por telefone", "Flexibilidade de horários"].map((item, i) => (
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
                  <p className="text-[#C8A96A] font-semibold">Passo Fundo, RS</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.5832404856635!2d-52.40937!3d-28.2478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f7b8c8c8c8c8c9%3A0x0!2sPasso%20Fundo%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
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
