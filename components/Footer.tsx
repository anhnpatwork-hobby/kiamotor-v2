import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate?: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, view: PageView) => {
    e.preventDefault();
    if (onNavigate) onNavigate(view);
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Info */}
          <div>
            <div className="mb-6">
              <img
                src="/images/KIA_logo.png"
                alt="KIA Long Biên"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Showroom ủy quyền chính hãng của KIA Việt Nam. Cam kết mang đến trải nghiệm mua xe đẳng cấp và dịch vụ hậu mãi tiêu chuẩn quốc tế.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-kia-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-kia-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-kia-red transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-montserrat mb-6 uppercase">Liên Kết Nhanh</h3>
            <ul className="space-y-3 text-gray-400 font-opensans">
              <li><a href="#" onClick={(e) => handleNav(e, 'home')} className="hover:text-kia-red transition-colors">Trang Chủ</a></li>
              <li><a href="#products-page" onClick={(e) => handleNav(e, 'products')} className="hover:text-kia-red transition-colors">Tất Cả Dòng Xe</a></li>
              <li><a href="#finance" onClick={(e) => handleNav(e, 'home')} className="hover:text-kia-red transition-colors">Thủ Tục Trả Góp</a></li>
              <li><a href="#consult" onClick={(e) => handleNav(e, 'home')} className="hover:text-kia-red transition-colors">Đăng Ký Lái Thử</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold font-montserrat mb-6 uppercase">Thông Tin Liên Hệ</h3>
            <ul className="space-y-4 text-gray-400 font-opensans">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-kia-red flex-shrink-0 mt-1" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-kia-red flex-shrink-0" />
                <span className="text-white font-bold text-lg">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-kia-red flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-gray-600 text-sm">
          <p>{CONTACT_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;