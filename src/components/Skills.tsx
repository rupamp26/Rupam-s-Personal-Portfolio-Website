import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Globe, 
  Database, 
  Brain, 
  Shield, 
  Zap,
  Code,
  Layers,
  GitBranch,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const skillCategories = {
    backend: {
      title: 'Backend Architecture',
      icon: Server,
      color: 'gold',
      skills: [
        { name: 'Node.js', level: 95, icon: '🟢' },
        { name: 'TypeScript', level: 92, icon: '🔷' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'Go', level: 85, icon: '🔵' },
        { name: 'MongoDB', level: 90, icon: '🍃' },
        { name: 'PostgreSQL', level: 87, icon: '🐘' },
        { name: 'Redis', level: 83, icon: '🔴' },
        { name: 'Firebase', level: 89, icon: '🔥' }
      ]
    },
    frontend: {
      title: 'Frontend Craftsmanship',
      icon: Globe,
      color: 'silver',
      skills: [
        { name: 'React', level: 93, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Express', level: 88, icon: '🚀' },
        { name: 'Django', level: 85, icon: '🎯' },
        { name: 'WebSockets', level: 87, icon: '🔌' }
      ]
    },
    ai: {
      title: 'AI/ML Intelligence',
      icon: Brain,
      color: 'platinum',
      skills: [
        { name: 'TensorFlow', level: 88, icon: '🧠' },
        { name: 'scikit-learn', level: 85, icon: '📊' },
        { name: 'OpenAI API', level: 90, icon: '🤖' },
        { name: 'Computer Vision', level: 82, icon: '👁️' },
        { name: 'NLP', level: 86, icon: '💬' },
        { name: 'MLOps', level: 80, icon: '⚙️' }
      ]
    },
    web3: {
      title: 'Web3 Innovation',
      icon: Shield,
      color: 'gold',
      skills: [
        { name: 'Solidity', level: 85, icon: '💎' },
        { name: 'Ethereum', level: 83, icon: '⟠' },
        { name: 'Aptos', level: 88, icon: '🔺' },
        { name: 'Smart Contracts', level: 86, icon: '📜' },
        { name: 'DeFi', level: 82, icon: '💰' },
        { name: 'Web3.js', level: 84, icon: '🌐' }
      ]
    },
    devops: {
      title: 'DevOps Excellence',
      icon: Zap,
      color: 'silver',
      skills: [
        { name: 'Docker', level: 90, icon: '🐳' },
        { name: 'GitHub Actions', level: 88, icon: '⚡' },
        { name: 'CI/CD', level: 87, icon: '🔄' },
        { name: 'AWS', level: 85, icon: '☁️' },
        { name: 'Kubernetes', level: 80, icon: '⚓' },
        { name: 'Monitoring', level: 83, icon: '📈' }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
            Skills Constellation
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A universe of technologies mastered through innovation and dedication
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-${category.color}/20 border-2 border-${category.color} shadow-glow`
                    : 'glass-effect border border-white/10 hover:border-white/30'
                }`}
              >
                <IconComponent className={`w-5 h-5 ${
                  activeCategory === key ? `text-${category.color}` : 'text-white/60'
                }`} />
                <span className={`font-medium ${
                  activeCategory === key ? 'text-white' : 'text-white/60'
                }`}>
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* 3D Skills Universe */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  z: 50
                }}
                className="perspective-1000"
              >
                <div className="glass-effect p-6 rounded-2xl premium-shadow hover:shadow-glow-lg transition-all duration-500 transform-3d">
                  {/* Skill Icon */}
                  <div className="text-4xl mb-4 text-center">
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-white text-center mb-4">
                    {skill.name}
                  </h3>

                  {/* Skill Level */}
                  <div className="relative">
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        className={`h-full bg-gradient-to-r from-${skillCategories[activeCategory].color} to-white rounded-full`}
                      />
                    </div>
                    <div className="text-center mt-2">
                      <span className={`text-sm font-semibold text-${skillCategories[activeCategory].color}`}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-${skillCategories[activeCategory].color} rounded-full opacity-60`}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                {skillCategories[activeCategory].title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                {activeCategory === 'backend' && "Architecting robust, scalable server-side solutions that power modern applications with enterprise-grade performance and security."}
                {activeCategory === 'frontend' && "Crafting intuitive, responsive user interfaces that deliver exceptional user experiences across all devices and platforms."}
                {activeCategory === 'ai' && "Leveraging artificial intelligence and machine learning to create intelligent systems that solve complex real-world problems."}
                {activeCategory === 'web3' && "Building decentralized applications and smart contracts that define the future of digital ownership and finance."}
                {activeCategory === 'devops' && "Implementing continuous integration, deployment, and monitoring solutions that ensure reliable, scalable infrastructure."}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-silver/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-platinum/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Skills;