import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Instagram, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ScrollReveal from './ScrollReveal';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [scrollY, setScrollY] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Using environment variables for EmailJS configuration
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
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

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-gradient-to-b from-primary-900/20 to-app-bg-primary relative overflow-hidden">
      {/* Subtle background elements */}
      <div
        className="absolute top-24 left-12 w-32 h-32 rounded-full bg-gradient-to-br from-primary-600/8 to-accent-600/8 blur-2xl"
        style={{
          transform: `translateY(${scrollY * 0.01}px)`,
        }}
      />
      <div
        className="absolute bottom-16 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-accent-600/5 to-highlight-600/5 blur-xl"
        style={{
          transform: `translateY(${scrollY * -0.008}px)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="up" delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary-accent">
            Get In Touch
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={400}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-app-text-secondary mb-6">Let's Connect</h3>
                <p className="text-app-text-tertiary leading-relaxed">
                  I'm always excited to discuss new opportunities, creative projects, or just chat about technology.
                  Whether you have a project in mind or want to explore possibilities, feel free to reach out.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              <ScrollReveal direction="left" delay={600}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-800/30 rounded-full">
                    <Mail className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-app-text-muted text-sm">Email</p>
                    <p className="text-app-text-secondary">sapra013@umn.edu</p>
                  </div>
                </div>
              </ScrollReveal>



              <ScrollReveal direction="left" delay={800}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-highlight-800/30 rounded-full">
                    <MapPin className="text-highlight-400" size={20} />
                  </div>
                  <div>
                    <p className="text-app-text-muted text-sm">Location</p>
                    <p className="text-app-text-secondary">Minneapolis, MN</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="left" delay={900}>
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-app-text-secondary mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Shivank19" target="_blank" rel="noopener noreferrer" className="p-3 bg-app-bg-secondary rounded-full hover:bg-primary-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/shivank-sapra" target="_blank" rel="noopener noreferrer" className="p-3 bg-app-bg-secondary rounded-full hover:bg-accent-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/shivank.ss/" target="_blank" rel="noopener noreferrer" className="p-3 bg-app-bg-secondary rounded-full hover:bg-accent-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent">
                    <Instagram size={20} />
                  </a>
                  <a href="https://x.com/ShSap19" target="_blank" rel="noopener noreferrer" className="p-3 bg-app-bg-secondary rounded-full hover:bg-highlight-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-highlight">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={600}>
            <div className="bg-app-bg-secondary/60 backdrop-blur-sm p-8 rounded-2xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-app-text-tertiary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-app-bg-input border border-app-border-secondary rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-app-text-secondary placeholder-app-text-muted transition-all duration-300"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-app-text-tertiary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-app-bg-input border border-app-border-secondary rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-app-text-secondary placeholder-app-text-muted transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-app-text-tertiary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-app-bg-input border border-app-border-secondary rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-app-text-secondary placeholder-app-text-muted transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-primary-accent hover:from-primary-900 hover:to-accent-900 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus && (
                  <div className={`text-center p-3 rounded-lg ${
                    submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;