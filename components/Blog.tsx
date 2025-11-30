import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    title: 'Xu hướng Smart Home 2024',
    date: 'Nov 28, 2023',
    excerpt: 'Những công nghệ mới nhất định hình ngôi nhà tương lai của bạn.',
    image: 'https://picsum.photos/600/400?random=30'
  },
  {
    title: 'Bảo mật Camera AI',
    date: 'Dec 15, 2023',
    excerpt: 'Tại sao AI lại quan trọng trong việc giám sát an ninh hiện đại.',
    image: 'https://picsum.photos/600/400?random=31'
  },
  {
    title: 'Giải pháp mạng cho doanh nghiệp',
    date: 'Jan 05, 2024',
    excerpt: 'Tối ưu hóa hạ tầng mạng để tăng năng suất làm việc.',
    image: 'https://picsum.photos/600/400?random=32'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
                <h2 className="text-primary font-bold tracking-wider uppercase mb-2">Tin tức</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Latest Posts</h3>
            </div>
            <a href="#" className="hidden sm:inline-block text-gray-400 hover:text-primary transition-colors">
                Xem tất cả <i className="fa-solid fa-arrow-right ml-1"></i>
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
                <div key={idx} className="group bg-black rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300">
                    <div className="relative overflow-hidden h-48">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                            NEW
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                            <i className="fa-regular fa-calendar mr-2"></i>
                            {post.date}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            <a href="#">{post.title}</a>
                        </h4>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>
                        <a href="#" className="text-primary text-sm font-semibold hover:underline">
                            Đọc thêm
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;