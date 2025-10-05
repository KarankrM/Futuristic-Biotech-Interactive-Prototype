'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight, FileText } from 'lucide-react';

const resources = [
  {
    title: 'AI-Driven Organoid Modeling for Precision Oncology',
    date: 'January 15, 2025',
    category: 'Research',
    excerpt: 'Our latest breakthrough in combining machine learning with patient-derived organoids for personalized cancer treatment.',
  },
  {
    title: 'The Future of Drug Discovery: A Deep Dive into Our Platform',
    date: 'January 10, 2025',
    category: 'Technology',
    excerpt: 'Exploring the technical architecture behind our AI Navigator and its impact on pharmaceutical development.',
  },
  {
    title: 'From Lab to Clinic: Success Story in Glioblastoma Treatment',
    date: 'January 5, 2025',
    category: 'Case Study',
    excerpt: 'How our integrated platform accelerated a promising compound through preclinical validation.',
  },
];

export default function ResourceLibrary() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#E6F7FF]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#00A6D6]/10 to-[#00CED1]/10 text-[#00A6D6] text-sm font-medium mb-4">
            Latest Insights
          </div>
          <h2 className="text-[48px] font-bold text-[#0F172A] mb-4">
            Resource <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Library</span>
          </h2>
          <p className="text-[18px] text-[#475569] max-w-[700px] mx-auto">
            Explore our latest research, case studies, and insights in AI-driven drug discovery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/blog">
                <div className="group bg-white p-8 rounded-2xl border border-[#00CED1]/20 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 rounded-xl bg-gradient-to-br from-[#00A6D6] to-[#00CED1] mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-white/30" />
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white mb-4 self-start">
                    {resource.category}
                  </span>

                  <div className="flex items-center space-x-2 text-sm text-[#475569] mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{resource.date}</span>
                  </div>

                  <h3 className="text-[20px] font-bold text-[#0F172A] mb-3 group-hover:text-[#00A6D6] transition-colors line-clamp-2">
                    {resource.title}
                  </h3>

                  <p className="text-[14px] text-[#475569] leading-[1.6] mb-6 flex-grow line-clamp-3">
                    {resource.excerpt}
                  </p>

                  <div className="flex items-center space-x-2 text-[#00A6D6] font-medium text-sm group-hover:space-x-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white font-medium px-8 py-4 rounded-full hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300">
              <span>View All Resources</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}