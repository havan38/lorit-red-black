import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  { icon: 'fa-video', title: 'Giám Sát 24/7' },
  { icon: 'fa-fingerprint', title: 'Tương Tác Mọi Nơi' },
  { icon: 'fa-bell', title: 'Chủ Động Cảnh Báo' },
  { icon: 'fa-shield-cat', title: 'Tự Động Bảo Vệ' },
  { icon: 'fa-lightbulb', title: 'Sao Chép Hành Vi' },
  { icon: 'fa-sack-dollar', title: 'Tối Ưu Chi Phí' },
  { icon: 'fa-users', title: 'Chia Sẻ Người Dùng' },
  { icon: 'fa-gamepad', title: 'Giải Trí & Trang Trí' },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Tính năng nổi bật</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Smart Home Platform</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Một căn nhà dù là cổ điển hay hiện đại thì đều cần rất nhiều yếu tố từ không gian sống đến sự tiện nghi và an toàn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary text-primary transition-colors shadow-lg">
                  <i className={`fa-solid ${feature.icon} text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">{feature.title}</h4>
                <div className="w-8 h-1 bg-white/10 rounded-full group-hover:bg-primary transition-colors duration-300 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;