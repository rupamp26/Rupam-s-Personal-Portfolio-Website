import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Brain, Shield, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ArogyaX.ai',
      category: 'Healthcare AI Platform',
      description: 'Revolutionary healthcare AI platform transforming patient care through intelligent automation and diagnostic assistance.',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AI/ML', 'Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      features: [
        'AI-powered diagnostic assistance',
        'HIPAA-compliant data processing',
        'Real-time patient monitoring',
        'Predictive health analytics'
      ],
      icon: Brain,
      color: 'gold',
      status: 'Live Production',
      liveUrl: 'https://arogyaxai.vercel.app/',
      sourceUrl: 'https://github.com/byteforgetitans/ArogyaX.ai'
    },
    {
      title: 'NexForge Studios',
      category: 'Digital Transformation Agency',
      description: 'Premium digital craftsmanship agency delivering cutting-edge solutions for enterprise clients worldwide.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
      features: [
        'Custom web applications',
        'Enterprise solutions',
        'Digital transformation consulting',
        'Premium UI/UX design'
      ],
      icon: Zap,
      color: 'silver',
      status: 'Active Development',
      liveUrl: 'https://nexforgestudio.vercel.app/',
      sourceUrl: 'https://github.com/nexforgestudio/NexForge-Studio'
    },
    {
      title: 'AI Malware Detection',
      category: 'Cybersecurity Solution',
      description: 'Advanced machine learning system for real-time malware detection and threat analysis.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Docker', 'FastAPI', 'Redis'],
      features: [
        'Real-time threat detection',
        'Behavioral analysis engine',
        'Zero-day exploit protection',
        'Automated response system'
      ],
      icon: Shield,
      color: 'platinum',
      status: 'Research Phase',
      liveUrl: '#',
      sourceUrl: '#'
    },
    {
      title: 'Web3 DeFi Platform',
      category: 'Blockchain Application',
      description: 'Decentralized finance platform built on Ethereum with advanced trading algorithms.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
      features: [
        'Automated market making',
        'Yield farming protocols',
        'Cross-chain compatibility',
        'Advanced trading tools'
      ],
      icon: Globe,
      color: 'gold',
      status: 'Beta Testing',
      liveUrl: '#',
      sourceUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
            Project Showcase
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Premium portfolio of innovative solutions that define the future of technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="group perspective-1000"
              >
                <div className="glass-effect rounded-3xl overflow-hidden premium-shadow hover:shadow-glow-lg transition-all duration-500 transform-3d">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold glass-effect border border-${project.color}/30`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 rounded-full bg-${project.color}/20 flex items-center justify-center backdrop-blur-sm`}>
                        <IconComponent className={`w-6 h-6 text-${project.color}`} />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-4">
                      <div className={`text-sm font-semibold text-${project.color} mb-2`}>
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/80 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/80 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                            className="flex items-center space-x-3 text-white/70"
                          >
                            <div className={`w-2 h-2 rounded-full bg-${project.color}`}></div>
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        target={project.liveUrl !== '#' ? '_blank' : undefined}
                        rel={project.liveUrl !== '#' ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-4 py-2 bg-${project.color}/20 border border-${project.color}/30 rounded-lg hover:bg-${project.color}/30 transition-all duration-300 ${project.liveUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">View Live</span>
                      </motion.a>
                      <motion.a
                        href={project.sourceUrl}
                        target={project.sourceUrl !== '#' ? '_blank' : undefined}
                        rel={project.sourceUrl !== '#' ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-4 py-2 glass-effect border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300 ${project.sourceUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Source Code</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-${project.color} rounded-full opacity-40`}
                        style={{
                          left: `${10 + i * 20}%`,
                          top: `${20 + i * 15}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-white/70 text-lg mb-6">
              Let's collaborate on your next revolutionary project and bring your vision to life with cutting-edge technology.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gold to-silver text-black font-bold rounded-full premium-shadow hover:shadow-glow-lg transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-silver/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Projects;