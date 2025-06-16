import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'NexForge Studios',
      position: 'Co-Founder & CTO',
      period: 'Feb 2025 – Present',
      location: 'Remote',
      description: 'Leading technical innovation and digital transformation solutions for premium clients.',
      achievements: [
        'Architected scalable microservices infrastructure',
        'Led team of 8+ developers across multiple projects',
        'Implemented AI-driven automation solutions'
      ],
      color: 'gold'
    },
    {
      company: 'ArogyaX.ai',
      position: 'Founder & CTO',
      period: 'May 2024 – Present',
      location: 'Remote',
      description: 'Revolutionary healthcare AI platform transforming patient care through intelligent automation.',
      achievements: [
        'Built AI-powered diagnostic assistance system',
        'Developed HIPAA-compliant data processing pipeline',
        'Scaled platform to serve 10,000+ healthcare professionals'
      ],
      color: 'silver'
    },
    {
      company: 'Josh Talks',
      position: 'Linguistic Expert',
      period: 'Jan 2025 – April 2025',
      location: 'Remote',
      description: 'Enhanced multilingual content delivery and localization strategies.',
      achievements: [
        'Optimized content for 5+ regional languages',
        'Improved engagement metrics by 40%',
        'Developed automated translation workflows'
      ],
      color: 'platinum'
    },
    {
      company: 'Bluestock Fintech',
      position: 'Software Development Engineer',
      period: 'July 2024 – Oct 2024',
      location: 'Remote',
      description: 'Developed high-performance trading algorithms and financial data processing systems.',
      achievements: [
        'Built real-time trading dashboard with WebSocket integration',
        'Optimized database queries reducing latency by 60%',
        'Implemented secure payment processing workflows'
      ],
      color: 'gold'
    },
    {
      company: 'CodSoft',
      position: 'Software Development Intern',
      period: 'June 2024 – July 2024',
      location: 'Remote',
      description: 'Developed web applications and contributed to open-source projects.',
      achievements: [
        'Built responsive web applications using React and Node.js',
        'Implemented RESTful APIs with comprehensive documentation',
        'Collaborated with cross-functional teams on agile projects'
      ],
      color: 'silver'
    },
    {
      company: 'Star Fing Pvt Ltd.',
      position: 'Backend Developer Intern',
      period: 'May 2024 – June 2024',
      location: 'Remote',
      description: 'Focused on backend development and database optimization.',
      achievements: [
        'Designed and implemented scalable database schemas',
        'Developed secure authentication and authorization systems',
        'Optimized API performance reducing response times by 45%'
      ],
      color: 'platinum'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A timeline of innovation, leadership, and technological excellence
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-silver to-platinum opacity-30"></div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-6 h-6 rounded-full bg-${exp.color} shadow-glow`}
                  />
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'
                  }`}
                >
                  <div className="glass-effect p-8 rounded-2xl premium-shadow hover:shadow-glow-lg transition-all duration-500">
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Building className={`w-8 h-8 text-${exp.color}`} />
                        <div>
                          <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                          <p className="text-lg text-gradient font-semibold">{exp.position}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-white/40 hover:text-gold transition-colors cursor-pointer" />
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white/90">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.2) + (achIndex * 0.1) }}
                            className="flex items-start space-x-3 text-white/70"
                          >
                            <div className={`w-2 h-2 rounded-full bg-${exp.color} mt-2 flex-shrink-0`}></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-silver/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Experience;