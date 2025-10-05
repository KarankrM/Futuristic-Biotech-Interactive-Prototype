'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Microscope, FlaskConical, Check } from 'lucide-react';

const offerings = [
  {
    id: 'navigator',
    icon: Brain,
    title: 'AI Navigator',
    description: 'Intelligent platform analyzing millions of molecular interactions to identify promising drug candidates',
    features: [
      'Deep learning molecular modeling',
      'Predictive toxicity screening',
      'Multi-omics data integration',
      'Real-time biomarker discovery',
    ],
    gradient: 'from-[#00A6D6] to-[#00CED1]',
  },
  {
    id: 'organoids',
    icon: Microscope,
    title: 'Organoid Systems',
    description: 'Advanced 3D cultures replicating human tissue for accurate drug testing',
    features: [
      'Patient-derived cultures',
      'Multi-organ system modeling',
      'High-throughput screening',
      'Personalized medicine testing',
    ],
    gradient: 'from-[#00CED1] to-[#00A6D6]',
  },
  {
    id: 'discovery',
    icon: FlaskConical,
    title: 'Drug Discovery',
    description: 'End-to-end platform combining AI predictions with organoid validation',
    features: [
      'AI-guided optimization',
      'Automated workflows',
      'Predictive modeling',
      'Safety assessment',
    ],
    gradient: 'from-[#0077B6] to-[#00A6D6]',
  },
];

export default function ProductOfferings() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white relative py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[48px] font-bold text-[#0F172A] mb-6">
            Our <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Platform</span>
          </h2>
          <p className="text-[18px] text-[#475569] max-w-[700px] mx-auto">
            Three integrated solutions accelerating the path from discovery to clinical application
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offerings.map((offering, idx) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#E6F7FF] to-white p-8 rounded-2xl border border-[#00CED1]/20 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <offering.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-[28px] font-bold text-[#0F172A] mb-4">{offering.title}</h3>
                <p className="text-[16px] text-[#475569] mb-6 leading-[1.6]">{offering.description}</p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {offering.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${offering.gradient} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[14px] text-[#475569]">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full bg-gradient-to-r ${offering.gradient} text-white font-medium py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all`}>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}