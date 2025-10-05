'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI-Accelerated Discovery',
    description: 'Reduce drug discovery timelines by 60% through advanced machine learning algorithms',
  },
  {
    icon: Sparkles,
    title: 'Human-Relevant Models',
    description: 'Patient-derived organoids providing unprecedented accuracy in drug response prediction',
  },
  {
    icon: Shield,
    title: 'Validated Safety',
    description: 'Comprehensive toxicity screening eliminating late-stage failures and reducing development costs',
  },
  {
    icon: TrendingUp,
    title: 'Clinical Success',
    description: '40% improvement in clinical trial success rates through AI-guided candidate selection',
  },
];

export default function UniqueFeatures() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#E6F7FF] via-white to-[#D4F1F4] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[#00A6D6] blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#00CED1] blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[48px] font-bold text-[#0F172A] mb-6">
            What Makes Us <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Unique</span>
          </h2>
          <p className="text-[18px] text-[#475569] max-w-[700px] mx-auto">
            The convergence of cutting-edge AI and human biology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[#00CED1]/20 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                <p className="text-[15px] text-[#475569] leading-[1.6]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}