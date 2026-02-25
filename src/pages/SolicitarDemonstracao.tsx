import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  BrainCircuit, 
  ArrowLeft, 
  Send, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Users,
  MessageSquare,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const SolicitarDemonstracao = ({ onVoltar }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    cargo: "",
    numeroColaboradores: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com uma API de backend
    console.log("Formulário enviado:", formData);
    setIsSubmitted(true);
    
    // Resetar após 3 segundos e voltar à home
    setTimeout(() => {
      onVoltar();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-24 rounded-full bg-[#00f0ff]/20 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-12 h-12 text-[#00f0ff]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Solicitação Enviada! ✨
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400"
          >
            Entraremos em contato em breve...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050508] text-gray-200 relative overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 -right-20 w-96 h-96 bg-[#00f0ff] blur-[150px] opacity-10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#7000ff] blur-[150px] opacity-10 rounded-full"
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Cabeçalho da página */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-bold tracking-widest mb-6"
            >
              <Sparkles className="w-4 h-4" />
              DEMONSTRAÇÃO GRATUITA
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Veja o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff]">Nerva RH</span> em Ação
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para agendar uma demonstração personalizada do sistema.
            </p>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0A0A0F] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Grid de 2 colunas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Nome Completo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#00f0ff]" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20 transition-all"
                    placeholder="João da Silva"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00f0ff]" />
                    Email Profissional *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20 transition-all"
                    placeholder="joao@empresa.com"
                  />
                </motion.div>

                {/* Telefone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#00f0ff]" />
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20 transition-all"
                    placeholder="(48) 99999-9999"
                  />
                </motion.div>

                {/* Empresa */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#00f0ff]" />
                    Empresa/Organização *
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20 transition-all"
                    placeholder="Minha Empresa Ltda"
                  />
                </motion.div>

                {/* Cargo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#00f0ff]" />
                    Cargo/Função *
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    required
                    value={formData.cargo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20 transition-all"
                    placeholder="Gestor de RH"
                  />
                </motion.div>

                {/* Número de Colaboradores */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#00f0ff]" />
                    Número de Colaboradores *
                  </label>
                  <select
                    name="numeroColaboradores"
                    required
                    value={formData.numeroColaboradores}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-lg text-white focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20 transition-all"
                  >
                    <option value="" className="bg-[#050508]">Selecione...</option>
                    <option value="1-10" className="bg-[#050508]">1 a 10</option>
                    <option value="11-50" className="bg-[#050508]">11 a 50</option>
                    <option value="51-200" className="bg-[#050508]">51 a 200</option>
                    <option value="201-500" className="bg-[#050508]">201 a 500</option>
                    <option value="500+" className="bg-[#050508]">Mais de 500</option>
                  </select>
                </motion.div>
              </div>

              {/* Mensagem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
                  Conte-nos mais sobre suas necessidades (opcional)
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20 transition-all resize-none"
                  placeholder="Descreva os principais desafios que sua equipe de RH enfrenta atualmente..."
                />
              </motion.div>

              {/* Botão de Envio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 px-8 py-4 bg-[#00f0ff] text-black font-bold rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                >
                  <Send className="w-5 h-5" />
                  Solicitar Demonstração
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-xs text-gray-500 text-center mt-4"
              >
                Ao enviar este formulário, você concorda com nossa política de privacidade. 
                <br className="hidden sm:block" />
                Seus dados serão tratados com total segurança e confidencialidade.
              </motion.p>
            </form>
          </motion.div>

          {/* Cards de Benefícios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: CheckCircle2, title: "Demonstração Gratuita", desc: "Sem compromisso" },
              { icon: Sparkles, title: "Personalizada", desc: "Para seu negócio" },
              { icon: Users, title: "Suporte Dedicado", desc: "Time especializado" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg border border-white/5 bg-[#0A0A0F]/50"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SolicitarDemonstracao;
