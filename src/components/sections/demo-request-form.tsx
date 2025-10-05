'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function DemoRequestForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#E6F7FF] via-white to-[#D4F1F4] relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#00CED1]/20 text-[#00A6D6] text-sm font-medium mb-6">
              Schedule a Demo
            </div>
            <h2 className="text-[48px] font-bold text-[#0F172A] mb-6">
              See Our Platform in <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-[18px] text-[#475569] leading-[1.6] mb-8">
              Discover how Bowhead Health can accelerate your drug discovery program. Schedule a personalized demo with our team.
            </p>

            <div className="space-y-4">
              {[
                'Live walkthrough of our AI Navigator platform',
                'Organoid system capabilities demonstration',
                'Custom solution consultation',
                'Q&A with our scientific team',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[16px] text-[#475569]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl border border-[#00CED1]/20 shadow-xl">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      focusedField === 'firstName'
                        ? 'border-[#00A6D6] shadow-lg shadow-cyan-500/20'
                        : 'border-gray-200'
                    } focus:outline-none`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      focusedField === 'lastName'
                        ? 'border-[#00A6D6] shadow-lg shadow-cyan-500/20'
                        : 'border-gray-200'
                    } focus:outline-none`}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-[#0F172A] mb-2">Email *</label>
                <input
                  type="email"
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
                  } focus:outline-none`}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      focusedField === 'company'
                        ? 'border-[#00A6D6] shadow-lg shadow-cyan-500/20'
                        : 'border-gray-200'
                    } focus:outline-none`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Role *</label>
                  <input
                    type="text"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('role')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      focusedField === 'role'
                        ? 'border-[#00A6D6] shadow-lg shadow-cyan-500/20'
                        : 'border-gray-200'
                    } focus:outline-none`}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#0F172A] mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                    focusedField === 'message'
                      ? 'border-[#00A6D6] shadow-lg shadow-cyan-500/20'
                      : 'border-gray-200'
                  } focus:outline-none resize-none`}
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white font-medium px-8 py-4 rounded-full hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Request Demo</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}