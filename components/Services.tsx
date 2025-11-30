import React from 'react';
import { Service } from '../types';

const servicesList: Service[] = [
  { 
    icon: 'fa-brain', 
    title: 'AI for Business', 
    description: 'Ứng dụng trí tuệ nhân tạo để tự động hóa và tối ưu quy trình kinh doanh.', 
    link: '#' 
  },
  { 
    icon: 'fa-phone-volume', 
    title: 'VoIP', 
    description: 'Giải pháp tổng đài ảo chất lượng cao, tiết kiệm chi phí liên lạc.', 
    link: '#' 
  },
  { 
    icon: 'fa-laptop-code', 
    title: 'Triển khai Website', 
    description: 'Thiết kế website chuyên nghiệp, chuẩn SEO và tương thích mọi thiết bị.', 
    link: '#' 
  },
  { 
    icon: 'fa-cloud-arrow-up', 
    title: 'Chuyển Đổi Số', 
    description: 'Tư vấn và triển khai lộ trình chuyển đổi số toàn diện cho doanh nghiệp.', 
    link: '#' 
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Dịch vụ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Popular Services</h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-dark-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-primary/20"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 text-3xl text-primary shadow-inner border border-white/5">
                    <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-gray-400 mb-6 text-sm">{service.description}</p>
                <a href={service.link} className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                    Xem chi tiết <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;