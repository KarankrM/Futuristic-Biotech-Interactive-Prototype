'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function NewsBanner() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog">
            <div className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-[#E6F7FF] to-[#D4F1F4] border border-[#00CED1]/20 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#00A6D6] uppercase tracking-wide">Latest News</span>
                  <p className="text-[16px] md:text-[18px] font-medium text-[#0F172A]">
                    Bowhead Health announces breakthrough in AI-guided organoid drug screening
                  </p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-[#00A6D6] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}