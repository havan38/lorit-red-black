import React from 'react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { name: 'Nguyen Van A', role: 'Business Advisor', image: 'https://picsum.photos/400/500?random=20' },
  { name: 'Tran Thi B', role: 'Tech Lead', image: 'https://picsum.photos/400/500?random=21' },
  { name: 'Le Van C', role: 'Solution Architect', image: 'https://picsum.photos/400/500?random=22' },
  { name: 'Pham Thi D', role: 'Customer Success', image: 'https://picsum.photos/400/500?random=23' },
];

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Đội ngũ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Our Experts</h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
             Những chuyên gia hàng đầu sẵn sàng hỗ trợ bạn xây dựng giải pháp công nghệ hoàn hảo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="text-white text-xl font-bold">{member.name}</h4>
                            <p className="text-white/80 text-sm mb-4">{member.role}</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-black transition-colors"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-white hover:text-black transition-colors"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white hover:text-black transition-colors"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;