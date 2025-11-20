import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F4EFE9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B3248] to-[#1A3A4A] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-[#E8F2F7] max-w-2xl">
            Descreva brevemente sua situação para receber uma orientação inicial
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0B3248] mb-8">Informações de Contato</h2>

              {/* WhatsApp */}
              <div className="bg-white rounded-xl p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C8A96A] text-white p-3 rounded-lg">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B3248] mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/5554991163710"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0B3248] hover:text-[#C8A96A] transition-colors font-semibold"
                    >
                      (54) 99116-3710
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Respostas rápidas via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C8A96A] text-white p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B3248] mb-2">E-mail</h3>
                    <a
                      href="mailto:advogelviaazeredo@gmail.com"
                      className="text-[#0B3248] hover:text-[#C8A96A] transition-colors font-semibold break-all"
                    >
                      advogelviaazeredo@gmail.com
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Envie sua consulta por e-mail
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C8A96A] text-white p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B3248] mb-2">Localização</h3>
                    <p className="text-[#0B3248] font-semibold">Passo Fundo, RS</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Atendimento online e presencial
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C8A96A] text-white p-3 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B3248] mb-2">Horários</h3>
                    <p className="text-sm text-gray-700">
                      Segunda a Sexta<br />
                      08:00 - 18:00
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Atendimento por agendamento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#0B3248] mb-6">Envie sua Mensagem</h2>

                {submitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-lg text-center">
                    <p className="font-bold mb-2">Mensagem enviada com sucesso!</p>
                    <p className="text-sm">
                      Obrigado pelo contato. Responderemos em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#0B3248] mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0B3248] focus:ring-2 focus:ring-[#0B3248]/10"
                        placeholder="Seu nome"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0B3248] mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0B3248] focus:ring-2 focus:ring-[#0B3248]/10"
                        placeholder="seu@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#0B3248] mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0B3248] focus:ring-2 focus:ring-[#0B3248]/10"
                        placeholder="(54) 99999-9999"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#0B3248] mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0B3248] focus:ring-2 focus:ring-[#0B3248]/10"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="civil">Direito Civil</option>
                        <option value="criminal">Direito Criminal</option>
                        <option value="consultoria">Consultoria Jurídica</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#0B3248] mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0B3248] focus:ring-2 focus:ring-[#0B3248]/10 resize-none"
                        placeholder="Descreva brevemente sua situação..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#0B3248] text-white py-3 rounded-lg font-bold hover:bg-[#0B3248]/90 transition-all"
                    >
                      Enviar Mensagem
                    </button>

                    <p className="text-xs text-gray-600 text-center">
                      Todas as informações são tratadas com absoluto sigilo e respeito.
                    </p>
                  </form>
                )}
              </div>

              {/* WhatsApp Quick Link */}
              <div className="mt-8 bg-[#25D366] rounded-2xl p-8 text-white text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Preferir WhatsApp?</h3>
                <p className="mb-6">
                  Envie uma mensagem agora e receba uma resposta rápida
                </p>
                <a
                  href="https://wa.me/5554991163710?text=Olá%20Élvia,%20gostaria%20de%20uma%20orientação%20inicial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#25D366] px-10 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#E8F2F7] border-l-4 border-[#0B3248] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-[#0B3248] mb-4">Informações Importantes</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#C8A96A] font-bold">•</span>
                <span>
                  <strong>Sigilo profissional:</strong> Todas as informações fornecidas são
                  tratadas com absoluto sigilo e respeito.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C8A96A] font-bold">•</span>
                <span>
                  <strong>Atendimento personalizado:</strong> O atendimento pode ser realizado
                  de forma online ou presencial mediante agendamento.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C8A96A] font-bold">•</span>
                <span>
                  <strong>Orientação inicial:</strong> Você receberá uma orientação inicial
                  com clareza sobre seus direitos e possibilidades.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
