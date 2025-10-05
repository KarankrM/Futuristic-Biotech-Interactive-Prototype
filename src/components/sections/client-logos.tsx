'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'MIT', width: 120 },
  { name: 'Harvard Medical', width: 140 },
  { name: 'Stanford', width: 130 },
  { name: 'Johns Hopkins', width: 150 },
  { name: 'Mayo Clinic', width: 140 },
  { name: 'NIH', width: 100 },
  { name: 'Pfizer', width: 110 },
  { name: 'Novartis', width: 130 },
];

export default function ClientLogos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] font-bold text-[#0F172A] mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-[18px] text-[#475569]">
            Partnering with world-class research organizations and pharmaceutical companies
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex space-x-16"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((partner, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center h-20 px-8"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="flex items-center justify-center h-full rounded-xl bg-gradient-to-br from-[#E6F7FF] to-white border border-[#00CED1]/20 px-6 grayscale hover:grayscale-0 transition-all"
                  style={{ minWidth: `${partner.width}px` }}
                >
                  <span className="text-[18px] font-bold text-[#0F172A] opacity-60 hover:opacity-100 transition-opacity">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}