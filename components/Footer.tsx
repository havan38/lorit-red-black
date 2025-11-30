import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1 */}
            <div>
                <a href="#" className="text-3xl font-bold flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-network-wired text-white text-xl"></i>
                    </div>
                    <span className="text-white">Lor<span className="text-primary">IT</span></span>
                </a>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    Đăng kí ngay để được giảm 10% khi lắp đặt camera và hệ thống Smart Home trọn gói.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-dark-card border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-dark-card border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-dark-card border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>

            {/* Column 2 */}
            <div>
                <h5 className="text-white font-bold text-lg mb-6 relative inline-block">
                    Thông tin
                    <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary rounded-full"></span>
                </h5>
                <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Trang chủ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Giới thiệu</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Tuyển dụng</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Bảng giá</a></li>
                </ul>
            </div>

            {/* Column 3 */}
            <div>
                <h5 className="text-white font-bold text-lg mb-6 relative inline-block">
                    Hỗ trợ kỹ thuật
                    <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary rounded-full"></span>
                </h5>
                <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Camera CCTV</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Smart Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Network Solutions</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Bảo Mật</a></li>
                </ul>
            </div>

            {/* Column 4 */}
            <div>
                <h5 className="text-white font-bold text-lg mb-6 relative inline-block">
                    Liên hệ
                    <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary rounded-full"></span>
                </h5>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-400 text-sm group">
                        <i className="fa-solid fa-phone mt-1 text-primary group-hover:animate-pulse"></i>
                        <span className="group-hover:text-white transition-colors">+84 39 393 7793</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400 text-sm group">
                        <i className="fa-solid fa-envelope mt-1 text-primary group-hover:animate-pulse"></i>
                        <span className="group-hover:text-white transition-colors">hotrokythuat@lorit.vn</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400 text-sm group">
                        <i className="fa-solid fa-location-dot mt-1 text-primary group-hover:animate-pulse"></i>
                        <span className="group-hover:text-white transition-colors">Bình Phước, Đồng Nai</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
                Copyright © {new Date().getFullYear()} <span className="text-white font-bold">LorIT</span>. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;