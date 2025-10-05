'use client';

import { motion } from 'framer-motion';

export default function ImageShowcase() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-3xl overflow-hidden group"
        >
          {/* Glassmorphic overlay with abstract visuals */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A6D6]/90 to-[#00CED1]/90 backdrop-blur-sm">
            {/* Abstract cell/organoid patterns */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${100 + Math.random() * 200}px`,
                    height: `${100 + Math.random() * 200}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: `radial-gradient(circle, rgba(255,255,255,${0.1 + Math.random() * 0.2}) 0%, transparent 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 h-full flex items-center justify-center p-12">
            <div className="text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[48px] font-bold mb-6"
              >
                Where Biology Meets Intelligence
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-[20px] max-w-[700px] mx-auto leading-[1.6]"
              >
                Visualizing the convergence of AI and organoid technology in real-time drug discovery
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}