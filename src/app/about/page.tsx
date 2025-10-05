'use client';

import { motion } from 'framer-motion';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { Target, Eye, Users, Microscope, Brain, Sparkles } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Scientific Officer",
    bio: "PhD in Computational Biology from MIT. Pioneer in AI-driven drug discovery with 15+ years of experience.",
    image: "/team/placeholder.jpg",
    expanded: false,
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Head of Organoid Research",
    bio: "Leading expert in 3D cell culture systems and organoid technology. Published 50+ papers in Nature and Science.",
    image: "/team/placeholder.jpg",
    expanded: false,
  },
  {
    name: "Dr. Emily Watson",
    role: "Director of AI Development",
    bio: "Former Google Brain researcher specializing in machine learning for biological systems.",
    image: "/team/placeholder.jpg",
    expanded: false,
  },
  {
    name: "Dr. James Liu",
    role: "VP of Drug Discovery",
    bio: "20+ years in pharmaceutical R&D with expertise in oncology and personalized medicine.",
    image: "/team/placeholder.jpg",
    expanded: false,
  },
];

export default function AboutPage() {
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
              <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_videos/microscopic-organism-cells-multiplying-a-0ec04b96-20251005091157.mp4" type="video/mp4" />
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
                <span className="text-sm font-medium text-[#00A6D6]">About Bowhead Health</span>
              </div>
              <h1 className="text-[56px] font-bold text-[#0F172A] mb-6">
                Pioneering the Future of <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Medicine</span>
              </h1>
              <p className="text-[18px] text-[#475569] max-w-[700px] mx-auto">
                We're transforming drug discovery through the convergence of artificial intelligence, organoid technology, and precision medicine.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#E6F7FF] to-white p-12 rounded-3xl border border-[#00CED1]/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-[32px] font-bold text-[#0F172A] mb-4">Our Mission</h2>
                <p className="text-[16px] text-[#475569] leading-[1.6]">
                  To accelerate the discovery of life-saving treatments by combining cutting-edge AI algorithms with advanced organoid models, enabling personalized medicine at scale and transforming patient outcomes worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#D4F1F4] to-white p-12 rounded-3xl border border-[#00A6D6]/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00CED1] to-[#00A6D6] flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-[32px] font-bold text-[#0F172A] mb-4">Our Vision</h2>
                <p className="text-[16px] text-[#475569] leading-[1.6]">
                  A future where every patient receives precisely targeted treatments designed specifically for their unique biology, powered by AI-driven insights and validated through human-relevant organoid systems.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-gradient-to-b from-white to-[#E6F7FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-[40px] font-bold text-[#0F172A] mb-4">Our Core Values</h2>
              <p className="text-[18px] text-[#475569]">The principles that guide our research and innovation</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Brain, title: "Innovation First", desc: "Pushing boundaries in AI and biotechnology" },
                { icon: Microscope, title: "Scientific Rigor", desc: "Evidence-based research and validation" },
                { icon: Users, title: "Patient-Centric", desc: "Every discovery serves human health" },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl border border-[#00CED1]/20 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 text-[#00A6D6] mb-4" />
                  <h3 className="text-[24px] font-bold text-[#0F172A] mb-2">{value.title}</h3>
                  <p className="text-[16px] text-[#475569]">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-[40px] font-bold text-[#0F172A] mb-4">Leadership Team</h2>
              <p className="text-[18px] text-[#475569]">World-class experts driving innovation</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-[#E6F7FF] to-white p-6 rounded-2xl border border-[#00CED1]/20 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-[#00A6D6] to-[#00CED1] mb-4 flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">{member.name.charAt(4)}</span>
                    </div>
                    <h3 className="text-[20px] font-bold text-[#0F172A] mb-1">{member.name}</h3>
                    <p className="text-[14px] text-[#00A6D6] font-medium mb-3">{member.role}</p>
                    <p className="text-[14px] text-[#475569] leading-[1.5]">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}