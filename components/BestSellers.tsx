import React from 'react';
import { CAR_MODELS } from '../constants';
import { ArrowRight, Star } from 'lucide-react';
import { PageView } from '../App';

interface BestSellersProps {
  onNavigate: (view: PageView, id?: string) => void;
}

const BestSellers: React.FC<BestSellersProps> = ({ onNavigate }) => {
  // Select top 3 featured cars (e.g., Sonet, Seltos, Carnival)
  const featuredCars = CAR_MODELS.filter(car =>
    ['sonet', 'seltos', 'carnival'].includes(car.id)
  );

  return (
    <section id="bestsellers" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-kia-red font-bold uppercase tracking-wider text-xs mb-3">
              <Star className="w-4 h-4 fill-current" />
              Sản Phẩm Nổi Bật
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-montserrat text-kia-black uppercase tracking-tighter">
              Các Dòng Xe <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kia-red to-black">Được Săn Đón Nhất</span>
            </h2>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="group flex items-center gap-2 border-b-2 border-black pb-1 hover:text-kia-red hover:border-kia-red transition-all duration-300"
          >
            <span className="font-bold text-sm uppercase tracking-wide">Xem toàn bộ danh sách xe</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="group cursor-pointer"
              onClick={() => onNavigate('product-detail', car.id)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100 aspect-[4/3]">
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Best Seller
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black font-montserrat text-gray-900 mb-2 group-hover:text-kia-red transition-colors uppercase">
                  {car.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 font-medium italic">{car.tagline}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase">Giá Từ</span>
                    <span className="text-lg font-black text-kia-red">{car.price}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-kia-red group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
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

export default BestSellers;