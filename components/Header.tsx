import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { PageView } from '../App';

interface HeaderProps {
  onNavigate: (view: PageView, id?: string) => void;
  currentView: PageView;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const handleNavClick = (e: React.MouseEvent, view: PageView, hash?: string) => {
    e.preventDefault();
    onNavigate(view);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navItems = [
    { label: 'Trang Chủ', view: 'home', hash: undefined },
    { label: 'Dòng Xe', view: 'products', hash: undefined },
    { label: 'Bảng Giá', view: 'pricing', hash: undefined },
    { label: 'Thủ Tục Trả Góp', view: 'finance', hash: undefined },
    { label: 'Liên Hệ', view: 'contact', hash: undefined },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#050505] border-b border-white/10 py-5 transition-all duration-300 font-sans shadow-lg"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo Area */}
          <div
            className="flex items-center gap-3 z-10 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/images/KIA_logo.png"
              alt="KIA Long Biên"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8 font-medium text-sm text-gray-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.hash ? `#${item.hash}` : '#'}
                onClick={(e) => handleNavClick(e, item.view as PageView, item.hash)}
                className={`hover:text-white transition-colors uppercase tracking-wide text-xs font-bold ${(currentView === item.view && !item.hash) ? 'text-kia-red' : ''
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Area */}
          <div className="flex items-center gap-4 z-10">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`}
              className="hidden sm:flex items-center gap-3 bg-kia-red text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/40 group"
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden text-white" onClick={() => onNavigate('products')}>
              <span className="text-xs font-bold border border-white px-3 py-1.5 rounded uppercase">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;