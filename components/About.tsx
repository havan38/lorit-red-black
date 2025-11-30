import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* First Block */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Tiết kiệm thời gian & <br /> <span className="text-primary">Vận hành thông minh</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    Hệ thống tự động hóa giúp bạn quản lý ngôi nhà và doanh nghiệp một cách dễ dàng, mọi lúc mọi nơi thông qua nền tảng đám mây an toàn.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-card border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold text-xl">1</div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Khảo sát & Tư vấn</h4>
                            <p className="text-gray-400 text-sm">Đội ngũ kỹ thuật sẽ đến tận nơi để đánh giá và đưa ra giải pháp tối ưu nhất.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-card border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold text-xl">2</div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Lắp đặt & Bàn giao</h4>
                            <p className="text-gray-400 text-sm">Triển khai nhanh chóng, thẩm mỹ và hướng dẫn sử dụng chi tiết.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src="https://picsum.photos/800/600?random=2" alt="Process" className="w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>
                 {/* Decorative element */}
                 <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
        </div>

        {/* Second Block */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <img src="https://picsum.photos/800/600?random=3" alt="Community" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Tham gia cộng đồng <span className="text-primary">LorIT</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    Kết nối với hệ sinh thái công nghệ tiên tiến. Chúng tôi không chỉ cung cấp thiết bị, chúng tôi cung cấp giải pháp.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-6 bg-dark-card rounded-xl border border-white/5 text-center hover:bg-primary/5 transition-colors group">
                        <i className="fa-solid fa-credit-card text-4xl text-gray-600 group-hover:text-primary mb-4 transition-colors"></i>
                        <h4 className="text-white font-bold">Thanh toán linh hoạt</h4>
                    </div>
                    <div className="p-6 bg-dark-card rounded-xl border border-white/5 text-center hover:bg-primary/5 transition-colors group">
                        <i className="fa-solid fa-shield-virus text-4xl text-gray-600 group-hover:text-primary mb-4 transition-colors"></i>
                        <h4 className="text-white font-bold">Bảo hành 24/7</h4>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;