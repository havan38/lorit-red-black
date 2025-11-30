import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Blog />
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary-hover text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 opacity-80 hover:opacity-100 hover:-translate-y-1"
        aria-label="Back to top"
      >
        <i className="fa-solid fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default App;