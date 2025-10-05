'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';

export default function BlogArticlePage() {
  const params = useParams();
  const articleId = params.id;

  // Mock article data - in a real app, this would be fetched based on the ID
  const article = {
    title: 'The Future of AI in Drug Discovery',
    author: 'Dr. Sarah Chen',
    date: 'January 15, 2025',
    category: 'AI & Technology',
    readTime: '8 min read',
    content: `
      <h2>Introduction</h2>
      <p>Artificial intelligence is fundamentally transforming the pharmaceutical industry. What once took decades and billions of dollars can now be accomplished in a fraction of the time and cost. At Bowhead Health, we're at the forefront of this revolution, combining cutting-edge AI with advanced organoid technology to accelerate drug discovery.</p>

      <h2>The Challenge of Traditional Drug Discovery</h2>
      <p>Traditional drug discovery is notoriously slow and expensive. On average, it takes 10-15 years and costs over $2 billion to bring a new drug to market. The failure rate is staggering - approximately 90% of drug candidates fail during clinical trials.</p>
      
      <p>These failures often occur late in the development process, after significant time and resources have been invested. The primary reasons include:</p>
      <ul>
        <li>Lack of efficacy in human patients</li>
        <li>Unexpected toxicity or side effects</li>
        <li>Poor pharmacokinetic properties</li>
        <li>Inability to translate results from animal models to humans</li>
      </ul>

      <h2>How AI Changes the Game</h2>
      <p>Machine learning algorithms can analyze vast amounts of biological data - molecular structures, protein interactions, genomic information, and clinical outcomes - to identify patterns that humans might miss. This capability is revolutionizing every stage of drug discovery:</p>

      <h3>Target Identification</h3>
      <p>AI models can analyze disease pathways and identify novel therapeutic targets with unprecedented speed. By processing multi-omics data, our systems can predict which proteins or pathways are most likely to be effective intervention points for specific diseases.</p>

      <h3>Compound Screening</h3>
      <p>Rather than physically testing millions of compounds, AI can virtually screen vast chemical libraries and predict which molecules are most likely to bind to target proteins effectively. This reduces the initial screening phase from months to days.</p>

      <h3>Property Optimization</h3>
      <p>Deep learning models can predict how modifications to a molecule's structure will affect its properties - including efficacy, toxicity, solubility, and bioavailability. This allows researchers to optimize drug candidates in silico before synthesis.</p>

      <h2>The Organoid Advantage</h2>
      <p>While AI can predict promising candidates, validation remains crucial. This is where organoids provide a game-changing advantage. Patient-derived organoids are three-dimensional cell cultures that closely mimic the structure and function of human organs.</p>

      <p>By combining AI predictions with organoid testing, we can:</p>
      <ul>
        <li>Validate AI predictions in human-relevant systems</li>
        <li>Identify potential toxicity issues early</li>
        <li>Test personalized treatment strategies</li>
        <li>Reduce reliance on animal models</li>
      </ul>

      <h2>Real-World Impact</h2>
      <p>Our integrated AI-organoid platform has already demonstrated remarkable results. In our oncology programs, we've reduced the time from target identification to preclinical candidate selection by 60%. More importantly, our organoid validation step has improved the success rate of candidates entering clinical trials by 40%.</p>

      <h2>Looking Ahead</h2>
      <p>The future of AI in drug discovery is incredibly promising. As algorithms become more sophisticated and our understanding of human biology deepens, we expect to see:</p>
      <ul>
        <li>Multi-target therapies designed by AI</li>
        <li>Truly personalized medicines tailored to individual patients</li>
        <li>Rapid response to emerging disease threats</li>
        <li>Dramatic reduction in drug development timelines and costs</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The convergence of AI and organoid technology represents a paradigm shift in drug discovery. At Bowhead Health, we're committed to pushing these technologies forward, bringing life-saving treatments to patients faster than ever before.</p>

      <p>The question is no longer whether AI will transform drug discovery, but how quickly we can realize its full potential. The future of medicine is being written now, and we're excited to be part of this revolution.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />

      <main className="pt-[88px]">
        {/* Article Header */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#E6F7FF] via-white to-[#D4F1F4]">
          <div className="max-w-[900px] mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center space-x-2 text-[#00A6D6] font-medium mb-8 hover:space-x-3 transition-all">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white mb-4">
                {article.category}
              </span>
              
              <h1 className="text-[48px] font-bold text-[#0F172A] mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#475569] mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#0F172A]">{article.author}</p>
                    <p className="text-sm">{article.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime}</span>
                </div>
                <button className="ml-auto flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#00CED1]/20 hover:bg-white transition-all">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#475569',
              }}
            />

            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link href="/blog" className="inline-flex items-center space-x-2 text-[#00A6D6] font-medium hover:space-x-3 transition-all">
                  <ArrowLeft className="w-5 h-5" />
                  <span>More Articles</span>
                </Link>
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E6F7FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-bold text-[#0F172A] mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Link key={i} href={`/blog/${i + 1}`}>
                  <div className="bg-white p-6 rounded-2xl border border-[#00CED1]/20 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <div className="h-32 rounded-xl bg-gradient-to-br from-[#00A6D6] to-[#00CED1] mb-4" />
                    <h3 className="text-[18px] font-bold text-[#0F172A] mb-2 line-clamp-2">
                      Related Article Title {i}
                    </h3>
                    <p className="text-[14px] text-[#475569] line-clamp-2">
                      Brief description of the related article content goes here.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}