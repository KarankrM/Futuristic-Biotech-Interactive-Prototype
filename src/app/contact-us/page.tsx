'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { Sparkles, Mail, Phone, MapPin, Send, Linkedin, Twitter } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />

      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#E6F7FF] via-white to-[#D4F1F4]">
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#00CED1] rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00CED1]/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#00A6D6]" />
                <span className="text-sm font-medium text-[#00A6D6]">Get in Touch</span>
              </div>
              <h1 className="text-[56px] font-bold text-[#0F172A] mb-6">
                Let's <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Connect</span>
              </h1>
              <p className="text-[18px] text-[#475569] max-w-[700px] mx-auto">
                Have questions about our platform? Interested in collaboration? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[32px] font-bold text-[#0F172A] mb-8">Contact Information</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-[#0F172A] mb-1">Email</h3>
                      <p className="text-[16px] text-[#475569]">info@bowheadhealth.com</p>
                      <p className="text-[16px] text-[#475569]">partnerships@bowheadhealth.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00CED1] to-[#00A6D6] flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-[#0F172A] mb-1">Phone</h3>
                      <p className="text-[16px] text-[#475569]">+1 (555) 123-4567</p>
                      <p className="text-[14px] text-[#475569]">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00A6D6] flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-[#0F172A] mb-1">Office</h3>
                      <p className="text-[16px] text-[#475569]">123 Innovation Drive</p>
                      <p className="text-[16px] text-[#475569]">Cambridge, MA 02138</p>
                      <p className="text-[16px] text-[#475569]">United States</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-[18px] font-bold text-[#0F172A] mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 h-64 rounded-2xl bg-gradient-to-br from-[#E6F7FF] to-[#D4F1F4] border border-[#00CED1]/20 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-[#00A6D6] opacity-30" />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-[#E6F7FF] to-white p-8 rounded-3xl border border-[#00CED1]/20">
                  <h2 className="text-[32px] font-bold text-[#0F172A] mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'name'
                            ? 'border-[#00A6D6] shadow-lg shadow-cyan-500/20'
                            : 'border-gray-200'
                        } focus:outline-none bg-white`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'email'
                            ? 'border-[#00A6D6] shadow-lg shadow-cyan-500/20'
                            : 'border-gray-200'
                        } focus:outline-none bg-white`}
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#0F172A] mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'company'
                            ? 'border-[#00A6D6] shadow-lg shadow-cyan-500/20'
                            : 'border-gray-200'
                        } focus:outline-none bg-white`}
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#0F172A] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === 'message'
                            ? 'border-[#00A6D6] shadow-lg shadow-cyan-500/20'
                            : 'border-gray-200'
                        } focus:outline-none bg-white resize-none`}
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white font-medium px-8 py-4 rounded-full hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}