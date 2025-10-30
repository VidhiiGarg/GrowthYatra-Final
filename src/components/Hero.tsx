import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, TrendingUp, Shield, Sparkles, Zap, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLElement>(null);
  const texts = ["Growth Journey", "Success Story", "Digital Transformation", "Growth Yatra"];
  const navigate = useNavigate();

  // Memoized particles
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 5,
      color: ['rgba(6, 182, 212, 0.2)', 'rgba(59, 130, 246, 0.2)', 'rgba(168, 85, 247, 0.2)', 'rgba(236, 72, 153, 0.2)'][i % 4]
    }))
  , []);

  const sparkles = useMemo(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }))
  , []);

  // Typewriter effect
  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Mouse parallax
  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const stats = [
    { value: "500+", label: "Projects Delivered", icon: Rocket, gradient: "from-cyan-400 to-blue-500" },
    { value: "98%", label: "Client Satisfaction", icon: Star, gradient: "from-yellow-400 to-orange-500" },
    { value: "150%", label: "Avg ROI Increase", icon: TrendingUp, gradient: "from-green-400 to-emerald-500" },
    { value: "24/7", label: "Support Available", icon: Shield, gradient: "from-purple-400 to-pink-500" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translate3d(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px, 0) scale(1.1)`
        }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full will-change-transform"
            initial={{ x: `${p.initialX}%`, y: `${p.initialY}%`, scale: 0, opacity: 0 }}
            animate={{ 
              x: [`${p.initialX}%`, `${(p.initialX + 20) % 100}%`, `${p.initialX}%`],
              y: [`${p.initialY}%`, `${(p.initialY + 20) % 100}%`, `${p.initialY}%`],
              scale: [0, 1, 0.8, 0],
              opacity: [0, 0.5, 0.3, 0],
            }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
            style={{
              width: p.size,
              height: p.size,
              background: `radial-gradient(circle, ${p.color}, transparent)`,
              filter: "blur(30px)",
            }}
          />
        ))}
        {sparkles.map((s) => (
          <motion.div
            key={`sparkle-${s.id}`}
            className="absolute will-change-transform"
            initial={{ x: `${s.initialX}%`, y: `${s.initialY}%`, scale: 0 }}
            animate={{ y: [`${s.initialY}%`, `${s.initialY - 10}%`], scale: [0, 1, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeOut" }}
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 mb-8 shadow-lg shadow-cyan-500/20">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-white">Trusted by 500+ companies worldwide</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-bold text-5xl md:text-7xl text-white mb-8">
            Begin Your{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {displayText}
            </span>
            <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="ml-1 text-cyan-400">
              |
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto">
            Transform your digital presence with{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              AI-powered marketing strategies
            </span>{" "}
            to achieve measurable results.
          </motion.p>

          {/* ✅ Buttons Section */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            {/* START FREE TRIAL -> Navigates to /contact */}
            <Button
              variant="hero"
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 px-10 py-7 text-lg font-bold shadow-2xl transition-all duration-500"
              onClick={() => navigate("/contact")}
            >
              <span className="relative z-10 flex items-center text-white">
                Start Free Trial
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>

            {/* View Demo Button */}
            <Button
              variant="heroOutline"
              size="lg"
              className="group border-2 border-white/40 bg-white/5 backdrop-blur-md hover:bg-white/15 hover:border-white/60 px-8 py-6 text-base font-bold transition-all duration-300"
              onClick={() => navigate("/portfolio")}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-all duration-300" />
              View Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 border-t border-white/20 pt-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${stat.gradient} p-3 shadow-lg`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className={`font-extrabold text-4xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm font-semibold mt-2">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
