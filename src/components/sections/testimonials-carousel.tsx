'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Bowhead Health's AI platform identified a promising cancer therapeutic in just 6 months - a process that traditionally takes years.",
    author: "Dr. Jennifer Martinez",
    role: "Chief Research Officer",
    institution: "Memorial Cancer Institute",
  },
  {
    quote: "The organoid validation system provided unprecedented insights into drug efficacy, helping us avoid costly late-stage failures.",
    author: "Dr. Robert Kim",
    role: "VP of Drug Development",
    institution: "Global BioPharma",
  },
  {
    quote: "Their integrated platform transformed our approach to personalized medicine. We're seeing 40% better patient response rates.",
    author: "Dr. Lisa Thompson",
    role: "Director of Oncology",
    institution: "University Medical Center",
  },
  {
    quote: "The AI Navigator's predictive accuracy is remarkable. It's fundamentally changed how we prioritize drug candidates.",
    author: "Dr. Michael Chang",
    role: "Head of Discovery",
    institution: "Innovative Therapeutics",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#00A6D6] to-[#00CED1] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[48px] font-bold text-white mb-4">What Our Partners Say</h2>
          <p className="text-[18px] text-white/90">Trusted by leading research institutions and pharmaceutical companies</p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 md:p-16"
          >
            <Quote className="w-16 h-16 text-white/30 mb-8" />
            <p className="text-[24px] md:text-[28px] text-white font-medium leading-[1.5] mb-8">
              "{testimonials[activeIndex].quote}"
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {testimonials[activeIndex].author.charAt(4)}
                </span>
              </div>
              <div>
                <p className="text-[18px] font-bold text-white">{testimonials[activeIndex].author}</p>
                <p className="text-[14px] text-white/80">{testimonials[activeIndex].role}</p>
                <p className="text-[14px] text-white/70">{testimonials[activeIndex].institution}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-white w-8' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}