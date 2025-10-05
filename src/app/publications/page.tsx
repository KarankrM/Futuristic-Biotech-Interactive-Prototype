'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { Sparkles, ExternalLink, FileText, Calendar, Users } from 'lucide-react';

const publications = [
  {
    title: 'AI-Driven Organoid Modeling for Precision Oncology',
    authors: 'Chen S., Rodriguez M., Watson E.',
    journal: 'Nature Medicine',
    year: '2024',
    impact: 'High Impact',
    category: 'AI & Organoids',
    abstract: 'A comprehensive study on integrating machine learning algorithms with patient-derived organoid systems for personalized cancer treatment strategies.',
    link: '#',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/microscopic-view-of-organoid-cell-struct-8899a804-20251005091739.jpg',
  },
  {
    title: 'Deep Learning Approaches to Drug-Target Interaction Prediction',
    authors: 'Watson E., Liu J., Chen S.',
    journal: 'Cell Systems',
    year: '2024',
    impact: 'High Impact',
    category: 'AI & Drug Discovery',
    abstract: 'Novel neural network architectures for predicting drug-target binding affinities with unprecedented accuracy.',
    link: '#',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/ai-assisted-drug-discovery-visualization-2179010b-20251005091746.jpg',
  },
  {
    title: 'Multi-Organ Organoid Systems for Systemic Drug Toxicity Testing',
    authors: 'Rodriguez M., Chen S.',
    journal: 'Science Translational Medicine',
    year: '2023',
    impact: 'High Impact',
    category: 'Organoids',
    abstract: 'Development of interconnected organoid systems that mimic inter-organ drug metabolism and toxicity pathways.',
    link: '#',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/modern-biotech-research-laboratory-scene-87cafbab-20251005091731.jpg',
  },
  {
    title: 'Transformer Models for Molecular Property Prediction',
    authors: 'Watson E., Liu J.',
    journal: 'Nature Machine Intelligence',
    year: '2023',
    impact: 'High Impact',
    category: 'AI & Drug Discovery',
    abstract: 'Application of transformer architectures to predict ADMET properties with state-of-the-art performance.',
    link: '#',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/dna-double-helix-sequencing-visualizatio-ec732f06-20251005091802.jpg',
  },
  {
    title: 'Patient-Derived Organoids as Predictive Models for Clinical Response',
    authors: 'Rodriguez M., Liu J., Chen S.',
    journal: 'The Lancet Oncology',
    year: '2023',
    impact: 'High Impact',
    category: 'Organoids',
    abstract: 'Clinical validation of organoid-based drug sensitivity testing for personalized treatment selection.',
    link: '#',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/female-scientist-working-with-advanced-m-50bcb36a-20251005091754.jpg',
  },
  {
    title: 'Federated Learning for Privacy-Preserving Drug Discovery',
    authors: 'Watson E., Chen S.',
    journal: 'Nature Biotechnology',
    year: '2023',
    impact: 'High Impact',
    category: 'AI & Drug Discovery',
    abstract: 'A federated learning framework enabling collaborative drug discovery while preserving data privacy.',
    link: '#',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/239d6a7a-674a-4ef0-bb39-9784d4397a5e/generated_images/close-up-microscopic-cellular-structures-6dbdb52a-20251005091809.jpg',
  },
];

const categories = ['All', 'AI & Organoids', 'AI & Drug Discovery', 'Organoids'];

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filteredPublications = selectedCategory === 'All'
    ? publications
    : publications.filter(pub => pub.category === selectedCategory);

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
                <span className="text-sm font-medium text-[#00A6D6]">Publications</span>
              </div>
              <h1 className="text-[56px] font-bold text-[#0F172A] mb-6">
                Research & <span className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] bg-clip-text text-transparent">Publications</span>
              </h1>
              <p className="text-[18px] text-[#475569] max-w-[700px] mx-auto">
                Explore our peer-reviewed research contributions advancing AI-driven drug discovery and organoid technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-white border-b border-gray-100">
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

        {/* Publications Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPublications.map((pub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-[#00CED1]/20 overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={pub.image}
                          alt={pub.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00A6D6]/60 to-transparent" />
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-[#00A6D6] backdrop-blur-sm">
                          {pub.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText className="w-5 h-5 text-[#00A6D6]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col bg-gradient-to-br from-[#E6F7FF] to-white">
                      <h3 className="text-[20px] font-bold text-[#0F172A] mb-3 group-hover:text-[#00A6D6] transition-colors">
                        {pub.title}
                      </h3>

                      <div className="flex items-center space-x-4 text-sm text-[#475569] mb-4">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span className="line-clamp-1">{pub.authors}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-[#475569] mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{pub.year}</span>
                        </div>
                        <span className="text-[#00A6D6] font-medium line-clamp-1">{pub.journal}</span>
                      </div>

                      <p className={`text-[14px] text-[#475569] leading-[1.6] mb-6 ${expandedCard === idx ? '' : 'line-clamp-3'}`}>
                        {pub.abstract}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#00CED1]/20">
                        <button
                          onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
                          className="text-[#00A6D6] font-medium text-sm hover:underline transition-all"
                        >
                          {expandedCard === idx ? 'Show Less' : 'Read More'}
                        </button>
                        <a
                          href={pub.link}
                          className="inline-flex items-center space-x-1 text-[#00A6D6] font-medium text-sm hover:space-x-2 transition-all duration-300 group/link"
                        >
                          <span>View Paper</span>
                          <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                        </a>
                      </div>
                    </div>
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