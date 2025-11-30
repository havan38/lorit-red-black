import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Smart Home', href: '#features' },
  { label: 'Năng lượng mặt trời', href: '#solar' },
  { label: 'AI Business', href: '#services' },
  { label: 'Network', href: '#portfolio' },
  { label: 'Hỗ trợ kỹ thuật', href: '#support' },
  { label: 'Blog', href: '#blog' },
  { label: 'Liên hệ', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
             <i className="fa-solid fa-network-wired text-white text-xl"></i>
          </div>
          <span className="text-white">Lor<span className="text-primary">IT</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-primary transition-colors font-medium text-xs xl:text-sm uppercase tracking-wider whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full font-medium transition-colors duration-300 shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] text-sm whitespace-nowrap"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dark-card absolute top-full left-0 w-full border-t border-white/10 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-primary block py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;