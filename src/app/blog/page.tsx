'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { Sparkles, Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of AI in Drug Discovery',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the pharmaceutical industry and accelerating the path from discovery to clinical trials.',
    author: 'Dr. Sarah Chen',
    date: 'January 15, 2025',
    category: 'AI & Technology',
    readTime: '8 min read',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/ai-assisted-drug-discovery-visualization-2179010b-20251005091746.jpg',
  },
  {
    id: '2',
    title: 'Organoid Technology: A Paradigm Shift in Disease Modeling',
    excerpt: 'Understanding how patient-derived organoids are transforming our approach to personalized medicine and drug testing.',
    author: 'Dr. Michael Rodriguez',
    date: 'January 10, 2025',
    category: 'Organoids',
    readTime: '6 min read',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/microscopic-view-of-organoid-cell-struct-8899a804-20251005091739.jpg',
  },
  {
    id: '3',
    title: 'Machine Learning Models for Predicting Drug Efficacy',
    excerpt: 'Deep dive into the neural network architectures powering our AI Navigator platform and their real-world applications.',
    author: 'Dr. Emily Watson',
    date: 'January 5, 2025',
    category: 'AI & Technology',
    readTime: '10 min read',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/dna-double-helix-sequencing-visualizatio-ec732f06-20251005091802.jpg',
  },
  {
    id: '4',
    title: 'Breakthrough in Cancer Organoid Research',
    excerpt: 'Our latest findings on using multi-organ organoid systems to predict chemotherapy response in pancreatic cancer patients.',
    author: 'Dr. James Liu',
    date: 'December 28, 2024',
    category: 'Research',
    readTime: '7 min read',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/close-up-microscopic-cellular-structures-6dbdb52a-20251005091809.jpg',
  },
  {
    id: '5',
    title: 'Ethical Considerations in AI-Driven Healthcare',
    excerpt: 'Examining the ethical frameworks guiding our AI development and ensuring responsible innovation in medical research.',
    author: 'Dr. Sarah Chen',
    date: 'December 20, 2024',
    category: 'Ethics',
    readTime: '5 min read',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/modern-biotech-research-laboratory-scene-87cafbab-20251005091731.jpg',
  },
  {
    id: '6',
    title: 'From Lab to Clinic: Our Pipeline Success Stories',
    excerpt: 'Behind-the-scenes look at how our integrated platform has accelerated multiple compounds through development stages.',
    author: 'Dr. Michael Rodriguez',
    date: 'December 15, 2024',
    category: 'Research',
    readTime: '9 min read',
    thumbnail: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/female-scientist-working-with-advanced-m-50bcb36a-20251005091754.jpg',
  },
];

const categories = ['All', 'AI & Technology', 'Organoids', 'Research', 'Ethics'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />

      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#E6F7FF] via-white to-[#D4F1F4]">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00CED1]/20 mb-6">
                <Sparkles className="w-4 h-4 text-[#00A6D6]" />
                <span className="text-sm font-medium text-[#00A6D6]">Insights & Updates</span>
              </div>
              <h1 className="text-[56px] font-bold text-[#0F172A] mb-6">
                Bowhead Health <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-[18px] text-[#475569] max-w-[700px] mx-auto">
                Latest insights, research updates, and thought leadership in AI-driven drug discovery and organoid technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-[88px] z-40 backdrop-blur-lg bg-white/95">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, idx) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-gray-100 text-[#475569] hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="group h-full bg-white rounded-2xl border border-[#00CED1]/20 overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                      {/* Thumbnail */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="relative w-full h-full"
                        >
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#00A6D6]/60 to-transparent" />
                        </motion.div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-[#00A6D6] backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                        
                        {/* Floating particles on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1.5 h-1.5 bg-white rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2 + Math.random() * 1,
                                repeat: Infinity,
                                delay: Math.random() * 1,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 bg-gradient-to-br from-[#E6F7FF] to-white">
                        <div className="flex items-center space-x-4 text-xs text-[#475569] mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-[20px] font-bold text-[#0F172A] mb-3 group-hover:text-[#00A6D6] transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-[14px] text-[#475569] leading-[1.6] mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-[#00CED1]/20">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center group-hover:scale-110 transition-transform">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs text-[#475569] line-clamp-1">{post.author}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-[#00A6D6] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
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