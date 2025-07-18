import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Languages, Heart } from 'lucide-react';

const About = () => {
  const personalDetails = [
    { icon: Calendar, label: 'Born', value: 'November 5, 2004' },
    { icon: MapPin, label: 'Location', value: 'West Bengal, India' },
    { icon: Languages, label: 'Languages', value: 'English, Hindi, Bengali' },
    { icon: Heart, label: 'Philosophy', value: 'Innovation meets Elegance' },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Where innovation meets elegance, where code becomes art
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative perspective-1000">
              {/* 3D Portrait Frame */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                className="glass-effect p-8 rounded-3xl premium-shadow transform-3d"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-gold/20 to-silver/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Profile Picture */}
                  <img 
                    src="https://github.com/rupamp26/Rupam-s-Personal-Portfolio-Website/blob/main/IMG20250420183347.jpg" 
                    alt="Rupam Karmakar"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Floating decorative elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-4 right-4 w-8 h-8 border-2 border-gold/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-4 left-4 w-6 h-6 border-2 border-silver/30 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Orbiting Achievement Badges */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 glass-effect px-3 py-1 rounded-full text-sm font-semibold text-gold">
                  CTO
                </div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 glass-effect px-3 py-1 rounded-full text-sm font-semibold text-silver">
                  Founder
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass-effect px-3 py-1 rounded-full text-sm font-semibold text-platinum">
                  Innovator
                </div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 glass-effect px-3 py-1 rounded-full text-sm font-semibold text-gold">
                  Visionary
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Premium Bio */}
            <div className="glass-effect p-8 rounded-2xl premium-shadow">
              <h3 className="text-2xl font-bold text-gradient mb-4">Digital Architect</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                At 20, I've transcended traditional boundaries to become a technology architect, 
                building revolutionary solutions in healthcare AI and digital transformation. 
                As Founder & CTO of <span className="text-gold font-semibold">ArogyaX.ai</span> and 
                Co-Founder & CTO of <span className="text-silver font-semibold">NexForge Studios</span>, 
                I craft the future through code, innovation, and visionary leadership.
              </p>
              <p className="text-white/70">
                My journey is defined by the intersection of cutting-edge technology and human-centered design, 
                creating solutions that don't just solve problems—they redefine possibilities.
              </p>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-6 rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <detail.icon className="w-6 h-6 text-gold" />
                    <div>
                      <div className="text-sm text-white/60">{detail.label}</div>
                      <div className="font-semibold text-white">{detail.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy Quote */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl border-l-4 border-gold"
            >
              <blockquote className="text-lg italic text-white/80">
                "Where innovation meets elegance, where code becomes art, 
                and where every solution is crafted with the precision of a master artisan."
              </blockquote>
              <cite className="text-gold font-semibold mt-2 block">— Rupam Karmakar</cite>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-silver/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default About;
