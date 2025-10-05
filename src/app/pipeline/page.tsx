'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { Sparkles, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

const pipelineStages = [
  {
    stage: 'Discovery',
    projects: [
      { name: 'BH-001', indication: 'Oncology - NSCLC', status: 'active', progress: 85 },
      { name: 'BH-002', indication: 'Neurodegenerative - Alzheimer\'s', status: 'active', progress: 70 },
    ],
    color: '#00CED1',
  },
  {
    stage: 'Preclinical',
    projects: [
      { name: 'BH-103', indication: 'Oncology - Breast Cancer', status: 'active', progress: 60 },
      { name: 'BH-104', indication: 'Cardiovascular - Heart Failure', status: 'active', progress: 45 },
    ],
    color: '#00A6D6',
  },
  {
    stage: 'Phase I',
    projects: [
      { name: 'BH-201', indication: 'Oncology - Pancreatic Cancer', status: 'active', progress: 30 },
    ],
    color: '#0077B6',
  },
  {
    stage: 'Phase II',
    projects: [
      { name: 'BH-301', indication: 'Oncology - Glioblastoma', status: 'recruiting', progress: 15 },
    ],
    color: '#005A8D',
  },
];

export default function PipelinePage() {
  const [selectedStage, setSelectedStage] = useState(0);

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
              <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_videos/abstract-biotech-research-visualization--d7ea1548-20251005091224.mp4" type="video/mp4" />
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
                <span className="text-sm font-medium text-[#00A6D6]">Research Pipeline</span>
              </div>
              <h1 className="text-[56px] font-bold text-[#0F172A] mb-6">
                Our <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Development Pipeline</span>
              </h1>
              <p className="text-[18px] text-[#475569] max-w-[700px] mx-auto">
                Tracking our progress from AI-driven discovery to clinical validation across multiple therapeutic areas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Timeline Navigation */}
            <div className="relative mb-16">
              <div className="flex justify-between items-center mb-4">
                {pipelineStages.map((stage, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex-1"
                  >
                    <button
                      onClick={() => setSelectedStage(idx)}
                      className={`w-full text-center transition-all duration-300 ${
                        selectedStage === idx ? 'scale-110' : 'scale-100'
                      }`}
                    >
                      <div
                        className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                          selectedStage === idx
                            ? 'bg-gradient-to-br from-[#00A6D6] to-[#00CED1] shadow-xl shadow-cyan-500/30'
                            : 'bg-gray-200'
                        }`}
                      >
                        {idx <= selectedStage ? (
                          <CheckCircle2 className="w-8 h-8 text-white" />
                        ) : (
                          <Clock className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                      <h3
                        className={`text-[18px] font-bold transition-colors ${
                          selectedStage === idx ? 'text-[#00A6D6]' : 'text-gray-400'
                        }`}
                      >
                        {stage.stage}
                      </h3>
                      <p className="text-[14px] text-gray-500">{stage.projects.length} projects</p>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Connecting Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 -z-10">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00A6D6] to-[#00CED1]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(selectedStage / (pipelineStages.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Project Cards */}
            <motion.div
              key={selectedStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {pipelineStages[selectedStage].projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-[#E6F7FF] to-white p-8 rounded-2xl border border-[#00CED1]/20 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-[28px] font-bold text-[#0F172A] mb-2">{project.name}</h3>
                      <p className="text-[16px] text-[#475569]">{project.indication}</p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        project.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[14px] text-[#475569]">Stage Progress</span>
                      <span className="text-[14px] font-bold text-[#00A6D6]">{project.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00A6D6] to-[#00CED1]"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>

                  <button className="inline-flex items-center space-x-2 text-[#00A6D6] font-medium group-hover:space-x-3 transition-all duration-300">
                    <span>View Details</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-gradient-to-br from-[#E6F7FF] to-[#D4F1F4]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '8+', label: 'Active Programs' },
                { number: '4', label: 'Clinical Stages' },
                { number: '12+', label: 'Disease Areas' },
                { number: '50+', label: 'AI Models' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-[48px] font-bold bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[16px] text-[#475569]">{stat.label}</div>
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