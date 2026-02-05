import React from 'react';
import { USP_ITEMS, CONTACT_INFO } from '../constants';

const USPSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] text-white border-t border-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black font-montserrat uppercase tracking-wider mb-4">
            Tại Sao Nên Chọn <span className="text-kia-red">{CONTACT_INFO.name}?</span>
          </h2>
          <p className="text-gray-500">Những đặc quyền chỉ có khi mua xe tại Showroom 3S Chính Hãng.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USP_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group cursor-default">
              {/* Icon Container */}
              <div className="w-24 h-24 rounded-3xl bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-gray-300 mb-6 group-hover:border-kia-red group-hover:text-kia-red transition-all duration-300 transform group-hover:-translate-y-2">
                <item.icon strokeWidth={1.5} className="w-10 h-10" />
              </div>
              
              <h3 className="text-xl font-black font-montserrat mb-3 uppercase tracking-wide">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm font-opensans leading-relaxed px-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;