import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  BrainCircuit, 
  ArrowLeft, 
  Lock, 
  Mail, 
  Eye,
  EyeOff,
  LogIn,
  Shield,
  Zap,
  CheckCircle2
} from "lucide-react";

const AreaCliente = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de autenticação (substituir por chamada API real)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Login:", formData);
    setIsLoading(false);
    
    // Após login bem-sucedido, redirecionar para dashboard (a criar)
    // navigate("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#050508] text-gray-200 relative overflow-hidden flex items-center justify-center">
      
      {/* Fundo Animado com Gradientes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#00f0ff] blur-[150px] opacity-20 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-[#7000ff] blur-[150px] opacity-20 rounded-full"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* Header Minimalista */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute top-0 left-0 right-0 z-10 border-b border-white/5 bg-[#050508]/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <button 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <BrainCircuit className="w-8 h-8 text-[#00f0ff]" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-white leading-none">
                NERVA<span className="text-[#00f0ff]">.RH</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] text-gray-500 uppercase">Área do Cliente</span>
            </div>
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-[#00f0ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Site
          </motion.button>
        </div>
      </motion.header>

      {/* Container Principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna Esquerda - Informações */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden lg:block"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-bold tracking-widest mb-6">
                <Shield className="w-4 h-4" />
                ACESSO SEGURO
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Bem-vindo de volta ao
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff]">
                Nerva RH
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Acesse sua conta para gerenciar colaboradores, visualizar relatórios e acompanhar a performance da sua equipe em tempo real.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                { icon: Zap, text: "Acesso instantâneo ao dashboard" },
                { icon: Shield, text: "Autenticação segura e criptografada" },
                { icon: CheckCircle2, text: "Dados sempre atualizados" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#00f0ff]" />
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna Direita - Formulário de Login */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-[#0A0A0F] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              
              {/* Header do Card */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.5 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#7000ff] flex items-center justify-center mx-auto mb-4"
                >
                  <Lock className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-2xl font-bold text-white mb-2">Acessar Sistema</h2>
                <p className="text-sm text-gray-400">Entre com suas credenciais</p>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00f0ff]" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </motion.div>

                {/* Senha */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#00f0ff]" />
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="senha"
                      required
                      value={formData.senha}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/20 transition-all pr-12"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00f0ff] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </motion.div>

                {/* Lembrar-me & Esqueci Senha */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-between text-sm"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/20 bg-[#050508] text-[#00f0ff] focus:ring-[#00f0ff] focus:ring-offset-0"
                    />
                    <span className="text-gray-400">Lembrar-me</span>
                  </label>
                  <button
                    type="button"
                    className="text-[#00f0ff] hover:underline"
                  >
                    Esqueci minha senha
                  </button>
                </motion.div>

                {/* Botão de Login */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#00f0ff] to-[#00d4e0] text-black font-bold rounded-lg hover:from-white hover:to-[#00f0ff] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      />
                      Autenticando...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      Entrar no Sistema
                    </>
                  )}
                </motion.button>
              </form>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="relative my-6"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-[#0A0A0F] text-gray-500 uppercase tracking-wider">
                    Ainda não tem acesso?
                  </span>
                </div>
              </motion.div>

              {/* Link para Demonstração */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-center"
              >
                <button
                  onClick={() => navigate("/solicitar-demonstracao")}
                  className="text-sm text-gray-400 hover:text-[#00f0ff] transition-colors"
                >
                  Solicitar uma demonstração →
                </button>
              </motion.div>
            </div>

            {/* Nota de Segurança */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xs text-gray-600 text-center mt-6 flex items-center justify-center gap-2"
            >
              <Shield className="w-3 h-3" />
              Conexão segura com criptografia de ponta a ponta
            </motion.p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AreaCliente;
