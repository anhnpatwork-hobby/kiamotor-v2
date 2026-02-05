import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 lg:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 h-16">
        <a 
          href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`} 
          className="flex items-center justify-center space-x-2 bg-kia-red text-white font-bold text-lg hover:bg-red-700 transition-colors"
        >
          <Phone className="w-5 h-5 fill-current animate-pulse" />
          <span>GỌI NGAY</span>
        </a>
        <a 
          href="https://zalo.me" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center space-x-2 bg-[#0068FF] text-white font-bold text-lg hover:bg-blue-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>CHAT ZALO</span>
        </a>
      </div>
      {/* Safe area for iPhone home indicator */}
      <div className="h-safe-bottom bg-white"></div>
    </div>
  );
};

export default MobileStickyBar;