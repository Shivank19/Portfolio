import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Instagram, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ScrollReveal from './ScrollReveal';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

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
    <section id="contact" className="min-h-screen py-20 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="up" delay={200}>
          <div className="mb-12 border-b border-app-border-primary pb-8">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary-600">Contact</p>
            <h2 className="text-5xl leading-none text-app-text-primary md:text-7xl">Get In Touch</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={400}>
              <div className="space-y-6">
                <h3 className="text-3xl text-app-text-secondary mb-6">Let's Connect</h3>
                <p className="text-app-text-tertiary leading-relaxed">
                  I'm always excited to discuss new opportunities, creative projects, or just chat about technology.
                  Whether you have a project in mind or want to explore possibilities, feel free to reach out.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              <ScrollReveal direction="left" delay={600}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-app-bg-secondary rounded-full border border-app-border-primary">
                    <Mail className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <p className="text-app-text-muted text-sm">Email</p>
                    <p className="text-app-text-secondary">sapra013@umn.edu</p>
                  </div>
                </div>
              </ScrollReveal>



              <ScrollReveal direction="left" delay={800}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-app-bg-secondary rounded-full border border-app-border-primary">
                    <MapPin className="text-primary-600" size={20} />
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
                <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-app-text-muted">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Shivank19" target="_blank" rel="noopener noreferrer" className="btn-readable-surface p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/shivank-sapra" target="_blank" rel="noopener noreferrer" className="btn-readable-surface p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/shivank.ss/" target="_blank" rel="noopener noreferrer" className="btn-readable-surface p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                    <Instagram size={20} />
                  </a>
                  <a href="https://x.com/ShSap19" target="_blank" rel="noopener noreferrer" className="btn-readable-surface p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={600}>
            <div className="rounded-lg border border-app-border-primary bg-app-bg-secondary p-8 shadow-[0_22px_52px_rgba(35,35,51,0.06)]">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-app-text-muted">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-app-border-secondary bg-app-bg-input px-4 py-3 text-app-text-secondary placeholder-app-text-muted transition-all duration-300 focus:border-app-border-accent focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-app-text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-app-border-secondary bg-app-bg-input px-4 py-3 text-app-text-secondary placeholder-app-text-muted transition-all duration-300 focus:border-app-border-accent focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-app-text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full resize-none rounded-lg border border-app-border-secondary bg-app-bg-input px-4 py-3 text-app-text-secondary placeholder-app-text-muted transition-all duration-300 focus:border-app-border-accent focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                    placeholder="Tell me about your project or just say hello..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-readable-primary flex w-full items-center justify-center space-x-2 rounded-full px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
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
