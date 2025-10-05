'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E6F7FF] via-white to-[#D4F1F4]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_videos/abstract-microscopic-cell-structures-flo-b7d5325c-20251005091032.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#E6F7FF]/80 via-white/60 to-[#D4F1F4]/80" />
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00CED1] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Abstract Organic Shapes */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <svg className="absolute top-10 right-20 w-64 h-64 text-[#00A6D6]" viewBox="0 0 200 200">
          <motion.path
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            fill="currentColor"
            animate={{
              d: [
                "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",
                "M 100, 100 m -80, 0 a 80,70 0 1,0 160,0 a 80,70 0 1,0 -160,0",
                "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00CED1]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#00A6D6]" />
              <span className="text-sm font-medium text-[#00A6D6]">AI-Powered Drug Discovery</span>
            </div>

            <h1 className="text-[56px] lg:text-[64px] leading-[1.1] font-bold text-[#0F172A] mb-6">
              Accelerating <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Discovery</span> Through AI & Organoids
            </h1>

            <p className="text-[18px] leading-[1.6] text-[#475569] mb-8 max-w-[580px]">
              Bowhead Health combines cutting-edge AI technology with advanced organoid systems to revolutionize drug discovery and personalized medicine.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/solutions" className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white font-medium px-8 py-4 rounded-full hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300">
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pipeline" className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-[#00A6D6] font-medium px-8 py-4 rounded-full border-2 border-[#00A6D6] hover:bg-[#00A6D6] hover:text-white transition-all duration-300">
                <span>View Pipeline</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glassmorphic Card */}
            <div className="absolute inset-0 rounded-3xl glass-effect p-8 border border-white/20 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Cell/Organoid Visual Elements */}
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="rounded-2xl bg-gradient-to-br from-[#00A6D6]/20 to-[#00CED1]/20 p-6 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] opacity-50 animate-pulse-glow" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}