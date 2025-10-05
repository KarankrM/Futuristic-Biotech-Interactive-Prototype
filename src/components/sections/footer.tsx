'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#E6F7FF] pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-bold text-[#0F172A]">Bowhead Health</span>
                <span className="text-[10px] text-[#475569] -mt-1">AI-Driven Discovery</span>
              </div>
            </div>
            <p className="text-[14px] text-[#475569] leading-[1.6] mb-6">
              Accelerating drug discovery through the convergence of artificial intelligence and organoid technology.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A6D6] to-[#00CED1] flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[18px] font-bold text-[#0F172A] mb-6">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">Solutions</Link></li>
              <li><Link href="/pipeline" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">Pipeline</Link></li>
              <li><Link href="/publications" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">Publications</Link></li>
              <li><Link href="/blog" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[18px] font-bold text-[#0F172A] mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">About</Link></li>
              <li><Link href="/contact-us" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">Partnerships</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[18px] font-bold text-[#0F172A] mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00A6D6] flex-shrink-0 mt-0.5" />
                <div className="text-[14px] text-[#475569]">
                  <p>123 Innovation Drive</p>
                  <p>Cambridge, MA 02138</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#00A6D6] flex-shrink-0 mt-0.5" />
                <div className="text-[14px] text-[#475569]">
                  <p>info@bowheadhealth.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[14px] text-[#475569]">
              © 2025 Bowhead Health. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-[14px] text-[#475569] hover:text-[#00A6D6] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}