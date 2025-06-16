import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-10 h-10 relative">
              <img 
                src="/Rupam's Trnasparent Logo.png" 
                alt="Rupam Karmakar Logo" 
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div>
            <span className="text-xl font-bold text-gradient">Rupam Karmakar</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 mb-8 max-w-2xl mx-auto"
          >
            Architecting tomorrow's digital landscape through innovation, elegance, and visionary leadership.
          </motion.p>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-white/50 mb-6"
          >
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-gold" />
            <span>powered by</span>
            <Coffee className="w-4 h-4 text-amber-600" />
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-white/40"
          >
            <p>&copy; 2025 Rupam Karmakar. All rights reserved.</p>
            <p className="mt-1">Building the future, one line of code at a time.</p>
          </motion.div>
        </div>

        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-gold/5 to-transparent blur-2xl"></div>
      </div>
    </footer>
  );
};

export default Footer;