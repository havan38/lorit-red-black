import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>
        <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-1 border border-primary/50 rounded-full bg-primary/10 backdrop-blur-sm">
            <span className="text-primary font-semibold tracking-wide text-sm uppercase">Smart Solutions for Modern Life</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Smart</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Living</span>
            <br />
            <span className="text-white">Smarter</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Business</span>
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Lor IT cung cấp giải pháp Smart Home, Camera an ninh, AI cho Doanh nghiệp và Hệ thống Mạng toàn diện.
            Cuộc sống thông minh - Doanh nghiệp thông minh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#features" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] transform hover:-translate-y-1">
              Khám Phá Ngay
            </a>
            <a href="#contact" className="border border-white/20 hover:border-primary hover:text-primary text-white px-8 py-4 rounded-lg font-bold text-lg transition-all backdrop-blur-sm bg-white/5 hover:bg-white/10">
              Liên Hệ
            </a>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="relative hidden lg:block">
           <div className="relative w-full aspect-square max-w-lg mx-auto">
             {/* Decorative rings */}
             <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
             
             {/* Main Image */}
             <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl shadow-primary/20">
                <img 
                    src="https://picsum.photos/800/800?random=1" 
                    alt="Smart Home Visual" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             </div>

             {/* Floating cards */}
             <div className="absolute top-20 -left-10 bg-dark-card p-4 rounded-xl border border-white/10 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <i className="fa-solid fa-wifi"></i>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Connection</p>
                        <p className="text-sm font-bold text-white">Excellent</p>
                    </div>
                </div>
             </div>

             <div className="absolute bottom-20 -right-10 bg-dark-card p-4 rounded-xl border border-white/10 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                        <i className="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400">Security</p>
                        <p className="text-sm font-bold text-white">Active 24/7</p>
                    </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;