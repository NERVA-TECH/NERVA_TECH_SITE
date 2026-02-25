import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Menu, X } from "lucide-react";

import AreaCliente from "./pages/AreaCliente";
import ServicesSection from "./components/ServicesSection";
import NervaRH from "./pages/servicos/NervaRH";
import ServiceTemplate from "./pages/servicos/ServiceTemplate";
import { ArchitectureSection } from "./components/home/ArchitectureSection";
import IntelligenceFlowSection from "./components/home/IntelligenceFlowSection";
import MetricsSection from "./components/home/MetricsSection";
import SectionDivider from "./components/ui/SectionDivider";
import escopoVideo from "./assets/videos/Nerva_Tech__O_Sistema_Nervoso.mp4";




// =======================
// FUNDO NEURAL
// =======================
const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: any[] = [];
    const config = {
      count: window.innerWidth < 768 ? 30 : 50,
      speed: 0.2,
      maxDist: 180,
    };

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      create();
    };

    window.addEventListener("resize", resize);

    class Particle {
      x = Math.random() * w;
      y = Math.random() * h;
      vx = (Math.random() - 0.5) * config.speed;
      vy = (Math.random() - 0.5) * config.speed;
      r = Math.random() * 1.5 + 0.5;

      move() {
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "#00f0ff";
        ctx.globalAlpha = 0.4;
        ctx.fill();
      }
    }

    function create() {
      particles.length = 0;
      for (let i = 0; i < config.count; i++) {
        particles.push(new Particle());
      }
    }

    function connect() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < config.maxDist) {
            ctx.strokeStyle = `rgba(0,240,255,${1 - d / config.maxDist})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.move();
        p.draw();
      });
      connect();
      requestAnimationFrame(loop);
    }

    create();
    loop();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
    />
  );
};

// =======================
// NAVBAR 
// =======================
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050508]/80 backdrop-blur border-b border-white/5">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <button onClick={() => navigate("/")} className="flex items-center gap-2">
          <BrainCircuit className="text-[#00f0ff]" />
          <span className="font-bold text-white">NERVA.TECH</span>
        </button>

        <div className="hidden md:flex gap-6">
          <button
            onClick={() => navigate("/servicos/nerva-rh")}
            className="text-gray-400 hover:text-white"
          >
            Nerva RH
          </button>

          <button
            onClick={() => navigate("/area-cliente")}
            className="relative px-6 py-2 text-xs font-bold uppercase tracking-wider text-[#00f0ff]"
          >
            <span className="absolute inset-0 rounded-lg border border-[#00f0ff]/40"></span>
            <span className="absolute inset-0 rounded-lg animate-pulse border border-[#00f0ff]/20"></span>
            <span className="absolute inset-0 rounded-lg bg-[#00f0ff]/25 opacity-0 hover:opacity-100 transition-opacity"></span>
            <span className="relative z-10">Área do Cliente</span>
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

// =======================
// HOME PAGE
// =======================
const HomePage = () => {
  const [showScope, setShowScope] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 pt-40 text-white bg-[#050508]"
    >
      <Navbar />

      {/* HERO */}
      <section className="container mx-auto px-6 mb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          O sistema nervoso <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff]">
            da sua operação
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Desenvolvemos soluções sob medida em software, automação,
          infraestrutura e inteligência operacional.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-[#00f0ff] text-black font-bold rounded-lg"
          >
            Conhecer Soluções
          </button>

          <button
            onClick={() => setShowScope((prev) => !prev)}
            className="px-8 py-4 border border-[#00f0ff]/40 text-[#00f0ff] font-bold rounded-lg hover:bg-[#00f0ff]/10 transition"
          >
            {showScope ? "Ocultar Escopo" : "Ver Escopo Completo"}
          </button>
        </div>
      </section>

      {/* SEÇÃO OCULTA – ESCOPO EM VÍDEO */}
      <AnimatePresence>
        {showScope && (
          <motion.section
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 mb-40"
          >
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/5 bg-[#0C0C12]">
              <div className="p-6 border-b border-white/5">
                <h2 className="text-3xl font-bold mb-2">
                  Escopo do Nerva Tech
                </h2>
                <p className="text-gray-400">
                  Visão completa da arquitetura, fluxos, módulos e integrações
                  das soluções desenvolvidas pela NERVA.
                </p>
              </div>

              <div className="aspect-video bg-black">
                <video
                  src={escopoVideo}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* SERVIÇOS */}
      <SectionDivider />
      <ServicesSection />

      {/* SEÇÕES ESTRATÉGICAS */}
      <SectionDivider />
      <ArchitectureSection />

      <SectionDivider />
      <IntelligenceFlowSection />

      <SectionDivider />
      <MetricsSection />
    </motion.div>
  );
};

// =======================
// APP
// =======================
const App = () => {
  return (
    <BrowserRouter>
      <NeuralBackground />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/area-cliente" element={<AreaCliente />} />
          <Route path="/servicos/nerva-rh" element={<NervaRH />} />
          <Route path="/servicos/:slug" element={<ServiceTemplate />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
