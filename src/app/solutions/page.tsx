'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { Brain, Microscope, FlaskConical, Sparkles, ArrowRight, Check } from 'lucide-react';

const solutions = [
  {
    id: 'navigator',
    icon: Brain,
    title: 'AI Navigator',
    subtitle: 'Intelligent Drug Discovery Platform',
    description: 'Our proprietary AI platform analyzes millions of molecular interactions to identify promising drug candidates in record time.',
    features: [
      'Deep learning molecular modeling',
      'Predictive toxicity screening',
      'Target identification & validation',
      'Multi-omics data integration',
      'Real-time biomarker discovery',
    ],
    gradient: 'from-[#00A6D6] to-[#00CED1]',
    bgGradient: 'from-[#E6F7FF] to-[#D4F1F4]',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/ai-assisted-drug-discovery-visualization-2179010b-20251005091746.jpg',
  },
  {
    id: 'organoids',
    icon: Microscope,
    title: 'Organoid Systems',
    subtitle: 'Human-Relevant Disease Models',
    description: 'Advanced 3D organoid cultures that replicate human tissue architecture and function for more accurate drug testing.',
    features: [
      'Patient-derived organoid cultures',
      'Multi-organ system modeling',
      'High-throughput screening',
      'Personalized medicine testing',
      'Disease progression modeling',
    ],
    gradient: 'from-[#00CED1] to-[#00A6D6]',
    bgGradient: 'from-[#D4F1F4] to-[#E6F7FF]',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/microscopic-view-of-organoid-cell-struct-8899a804-20251005091739.jpg',
  },
  {
    id: 'discovery',
    icon: FlaskConical,
    title: 'Drug Discovery Pipeline',
    subtitle: 'Accelerated Development Process',
    description: 'End-to-end drug discovery platform combining AI predictions with organoid validation for faster, more reliable results.',
    features: [
      'AI-guided compound optimization',
      'Automated screening workflows',
      'Predictive efficacy modeling',
      'Safety & toxicity assessment',
      'Clinical trial design support',
    ],
    gradient: 'from-[#0077B6] to-[#00A6D6]',
    bgGradient: 'from-[#E6F7FF] via-white to-[#D4F1F4]',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/dna-double-helix-sequencing-visualizatio-ec732f06-20251005091802.jpg',
  },
];

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />

      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#E6F7FF] via-white to-[#D4F1F4]">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-25"
            >
              <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_videos/flowing-dna-double-helix-strands-rotatin-f1f67622-20251005091119.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-[#E6F7FF]/85 via-white/70 to-[#D4F1F4]/85" />
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
                <span className="text-sm font-medium text-[#00A6D6]">Our Solutions</span>
              </div>
              <h1 className="text-[56px] font-bold text-[#0F172A] mb-6">
                Transforming Drug Discovery with <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">AI & Biology</span>
              </h1>
              <p className="text-[18px] text-[#475569] max-w-[700px] mx-auto">
                Three integrated platforms working together to accelerate the path from discovery to clinical application.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid gap-8">
              {solutions.map((solution, idx) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${solution.bgGradient} border border-[#00CED1]/20 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500`}>
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Content Side */}
                      <div className="p-12 order-2 lg:order-1">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <solution.icon className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-[40px] font-bold text-[#0F172A] mb-2">{solution.title}</h2>
                        <p className="text-[20px] font-medium text-[#00A6D6] mb-6">{solution.subtitle}</p>
                        <p className="text-[18px] text-[#475569] leading-[1.6] mb-8">{solution.description}</p>
                        
                        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/50 mb-8">
                          <h3 className="text-[20px] font-bold text-[#0F172A] mb-4">Key Features</h3>
                          <div className="space-y-3">
                            {solution.features.map((feature, featureIdx) => (
                              <motion.div
                                key={featureIdx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: featureIdx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-3"
                              >
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center mt-0.5`}>
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-[16px] text-[#475569]">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <button className={`inline-flex items-center space-x-2 bg-gradient-to-r ${solution.gradient} text-white font-medium px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300`}>
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Image Side */}
                      <div className="relative h-[600px] order-1 lg:order-2 overflow-hidden">
                        <motion.div 
                          className="absolute inset-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            className="object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-l ${solution.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div>

                        {/* Floating particles on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-white rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                y: [0, -30, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00CED1]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00A6D6]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#00A6D6] to-[#00CED1]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[40px] font-bold text-white mb-6">Ready to Transform Your Research?</h2>
              <p className="text-[18px] text-white/90 mb-8 max-w-[600px] mx-auto">
                Discover how our integrated platform can accelerate your drug discovery program.
              </p>
              <button className="bg-white text-[#00A6D6] font-medium px-8 py-4 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                Schedule a Consultation
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}