import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 mx-auto relative perspective-1000">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-full h-full transform-3d"
            >
              <img 
                src="/Rupam's Trnasparent Logo.png" 
                alt="Rupam Karmakar Logo" 
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <Sparkles className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-gold w-6 h-6" />
              <Code className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-silver w-6 h-6" />
              <Zap className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-platinum w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6 text-gradient"
        >
          Rupam Karmakar
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-light text-white/90 mb-4">
            Architecting Tomorrow's Digital Landscape
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-white/70">
            <span className="px-4 py-2 glass-effect rounded-full">Tech Visionary</span>
            <span className="px-4 py-2 glass-effect rounded-full">Serial Entrepreneur</span>
            <span className="px-4 py-2 glass-effect rounded-full">AI/ML Expert</span>
          </div>
        </motion.div>

        {/* Premium Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {[
            { label: 'Age', value: '20', icon: '🎯' },
            { label: 'Companies Founded', value: '2', icon: '🚀' },
            { label: 'Hackathon Wins', value: '3+', icon: '🏆' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-effect p-6 rounded-2xl premium-shadow floating-animation"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gold to-silver text-black font-bold rounded-full premium-shadow hover:shadow-glow-lg transition-all duration-300"
          >
            Explore My Universe
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect border border-gold/30 text-white font-bold rounded-full hover:bg-gold/10 transition-all duration-300"
          >
            Begin Collaboration
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient Lighting Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-silver/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;