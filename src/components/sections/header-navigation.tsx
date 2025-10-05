'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

export default function HeaderNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[22px] font-bold text-[#0F172A] group-hover:text-[#00A6D6] transition-colors">
                Bowhead Health
              </span>
              <span className="text-[11px] text-[#475569] -mt-1">AI-Driven Discovery</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-[15px] font-medium text-[#475569] hover:text-[#00A6D6] transition-colors">
              About
            </Link>
            <Link href="/solutions" className="text-[15px] font-medium text-[#475569] hover:text-[#00A6D6] transition-colors">
              Solutions
            </Link>
            <Link href="/pipeline" className="text-[15px] font-medium text-[#475569] hover:text-[#00A6D6] transition-colors">
              Pipeline
            </Link>
            <Link href="/publications" className="text-[15px] font-medium text-[#475569] hover:text-[#00A6D6] transition-colors">
              Publications
            </Link>
            <Link href="/blog" className="text-[15px] font-medium text-[#475569] hover:text-[#00A6D6] transition-colors">
              Blog
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/contact-us" className="bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white font-medium text-base py-3 px-7 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02]">
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#0F172A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            <Link href="/about" className="block text-[15px] font-medium text-[#475569] hover:text-[#00A6D6]">
              About
            </Link>
            <Link href="/solutions" className="block text-[15px] font-medium text-[#475569] hover:text-[#00A6D6]">
              Solutions
            </Link>
            <Link href="/pipeline" className="block text-[15px] font-medium text-[#475569] hover:text-[#00A6D6]">
              Pipeline
            </Link>
            <Link href="/publications" className="block text-[15px] font-medium text-[#475569] hover:text-[#00A6D6]">
              Publications
            </Link>
            <Link href="/blog" className="block text-[15px] font-medium text-[#475569] hover:text-[#00A6D6]">
              Blog
            </Link>
            <Link href="/contact-us" className="block bg-gradient-to-r from-[#00A6D6] to-[#00CED1] text-white font-medium text-center py-3 px-7 rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}