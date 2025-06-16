import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Globe,
  Calendar,
  Star,
  Youtube,
  MessageCircle,
  Instagram,
  Facebook,
  Music,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Using your specific Formspree endpoint
      const response = await fetch('https://formspree.io/f/manjjgyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _template: 'table'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', response.status, errorData);
        
        if (response.status === 404) {
          setErrorMessage('Form endpoint not found. Please contact me directly via email.');
        } else if (response.status === 429) {
          setErrorMessage('Too many requests. Please try again in a few minutes.');
        } else if (response.status === 422) {
          setErrorMessage('Form validation error. Please check your input and try again.');
        } else if (response.status === 403) {
          setErrorMessage('Form access denied. Please contact me directly via email.');
        } else {
          setErrorMessage(`Service temporarily unavailable (${response.status}). Please contact me directly via email.`);
        }
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setErrorMessage('Network error. Please check your connection and try again.');
      } else {
        setErrorMessage('Unable to send message. Please contact me directly via email: rupamkarmakar1105@gmail.com');
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rupamkarmakar1105@gmail.com',
      href: 'mailto:rupamkarmakar1105@gmail.com',
      color: 'gold'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9339326698',
      href: 'tel:+919339326698',
      color: 'silver'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'West Bengal, India',
      href: '#',
      color: 'platinum'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rupamp26/',
      color: 'gold'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rupamp26',
      color: 'silver'
    },
    {
      icon: Globe,
      label: 'X (Twitter)',
      href: 'https://x.com/rupamp26',
      color: 'platinum'
    },
    {
      icon: Globe,
      label: 'Medium',
      href: 'https://rupamp26.medium.com/',
      color: 'gold'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@rupamp26',
      color: 'silver'
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      href: '#',
      color: 'platinum',
      username: 'rupamp26'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.youtube.com/@rupamp26',
      color: 'gold'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/rupamp26/',
      color: 'silver'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your vision into reality? Let's discuss your next revolutionary project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Premium Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-6 glass-effect p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 rounded-full bg-${info.color}/20 flex items-center justify-center group-hover:bg-${info.color}/30 transition-all duration-300`}>
                      <IconComponent className={`w-8 h-8 text-${info.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">{info.label}</div>
                      <div className="text-lg font-semibold text-white">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">Connect on Social</h3>
              <div className="grid grid-cols-4 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href !== '#' ? '_blank' : undefined}
                      rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                      title={social.username ? `${social.label}: ${social.username}` : social.label}
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 rounded-full bg-${social.color}/20 flex items-center justify-center hover:bg-${social.color}/30 transition-all duration-300 group ${social.href === '#' ? 'cursor-default' : ''}`}
                    >
                      <IconComponent className={`w-6 h-6 text-${social.color} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-2xl border-l-4 border-gold"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                <span className="text-gold font-semibold">Available for Projects</span>
              </div>
              <p className="text-white/70 text-sm">
                Currently accepting new projects and collaborations. 
                Let's build something extraordinary together.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-3xl premium-shadow"
          >
            <h3 className="text-2xl font-bold text-gradient mb-6">Send a Message</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-start space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-red-400 text-sm">
                  <div className="font-medium mb-1">Message could not be sent</div>
                  <div>{errorMessage}</div>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 text-white placeholder-white/40 disabled:opacity-50"
                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 text-white placeholder-white/40 disabled:opacity-50"
                  placeholder="Enter your email address"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 text-white placeholder-white/40 disabled:opacity-50"
                  placeholder="Project discussion, collaboration, etc."
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 text-white placeholder-white/40 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project, goals, and how we can work together..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-gold to-silver text-black font-bold rounded-lg premium-shadow hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex items-center justify-center space-x-2 text-sm text-white/60"
            >
              <Calendar className="w-4 h-4" />
              <span>Typical response time: 24-48 hours</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Spotify Music Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-effect p-8 rounded-3xl premium-shadow max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Music className="w-8 h-8 text-gold" />
                <h3 className="text-2xl font-bold text-gradient">Musical Inspiration</h3>
              </div>
              <p className="text-white/70 text-lg">
                You will learn more about me by what I am listening to
              </p>
            </div>
            
            <div className="relative">
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/track/0ct6r3EGTcMLPtrXHDvVjc?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="shadow-glow"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gold/30 rounded-full blur-sm"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-silver/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-platinum/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gold/30 rounded-full blur-sm"></div>
            </div>
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-silver/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Contact;