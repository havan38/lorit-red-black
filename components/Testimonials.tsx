import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    content: "Hệ thống camera AI của LorIT thực sự ấn tượng. Nó giúp tôi giám sát kho hàng tự động và cảnh báo ngay lập tức khi có xâm nhập lạ.",
    author: "Nguyễn Văn A",
    role: "CEO, Logistic Corp",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    content: "Smart Home đã thay đổi hoàn toàn cách gia đình tôi sinh hoạt. Mọi thứ đều tự động, tiết kiệm điện năng và rất an toàn cho trẻ nhỏ.",
    author: "Trần Thị B",
    role: "Chủ nhà BT05",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    content: "Giải pháp mạng cho văn phòng hoạt động rất ổn định. Đội ngũ hỗ trợ kỹ thuật của LorIT luôn có mặt kịp thời.",
    author: "Lê Văn C",
    role: "IT Manager, TechSoft",
    image: "https://picsum.photos/100/100?random=12"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Carousel Side */}
            <div className="w-full lg:w-1/2">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Khách hàng nói gì về <br/> <span className="text-primary">LorIT Solutions</span>
                    </h2>
                    <p className="text-gray-400">
                        Sự hài lòng của khách hàng là thước đo chất lượng dịch vụ của chúng tôi.
                    </p>
                </div>

                <div className="relative bg-dark-card border border-white/5 rounded-2xl p-8 min-h-[300px] flex flex-col justify-between">
                    {/* Content */}
                    <div className="relative z-10">
                        <i className="fa-solid fa-quote-left text-4xl text-primary/30 mb-4"></i>
                        <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                            "{testimonials[currentIndex].content}"
                        </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                        <img 
                            src={testimonials[currentIndex].image} 
                            alt={testimonials[currentIndex].author} 
                            className="w-14 h-14 rounded-full border-2 border-primary object-cover"
                        />
                        <div>
                            <h5 className="text-white font-bold">{testimonials[currentIndex].author}</h5>
                            <span className="text-primary text-sm">{testimonials[currentIndex].role}</span>
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="absolute top-8 right-8 flex gap-2">
                        {testimonials.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-6' : 'bg-gray-700'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image/Chart Side */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                     <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                     <div className="absolute top-0 -right-4 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                     <img 
                        src="https://picsum.photos/600/500?random=15" 
                        alt="Analytics" 
                        className="relative rounded-2xl shadow-2xl border border-white/10 z-10"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;