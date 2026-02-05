import React from 'react';
import { TESTIMONIALS, CONTACT_INFO } from '../constants';
import { Quote, Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section id="social" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black font-montserrat text-kia-black uppercase tracking-tighter mb-4">
              Khách Hàng <span className="text-kia-red">Nói Gì?</span>
            </h2>
            <p className="text-gray-500 text-lg">Hơn 1000+ khách hàng đã tin tưởng lựa chọn {CONTACT_INFO.name}.</p>
          </div>
          
          <button className="px-6 py-3 border border-black rounded-lg font-bold hover:bg-black hover:text-white transition-all duration-300">
            Xem tất cả đánh giá
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((item, index) => (
            <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100">
                  {/* Using standard avatar placeholder since mock images might be broken */}
                  <img 
                    src={`https://ui-avatars.com/api/?name=${item.customerName}&background=random&color=fff`}
                    alt={item.customerName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-montserrat">{item.customerName}</h4>
                  <p className="text-xs text-gray-400">Khách hàng mua xe</p>
                </div>
                <Quote className="w-8 h-8 text-pink-100 ml-auto fill-pink-50" />
              </div>
              
              <div className="flex gap-1 mb-4">
                 {[1, 2, 3, 4, 5].map((star) => (
                   <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                 ))}
              </div>

              <div className="flex-grow">
                <p className="text-gray-600 italic font-opensans leading-relaxed text-sm">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;