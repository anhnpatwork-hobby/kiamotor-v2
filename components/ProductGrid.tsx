import React from 'react';
import { CAR_MODELS, CONTACT_INFO } from '../constants';
import { ArrowRight, Tag, Wallet } from 'lucide-react';

const ProductGrid: React.FC = () => {
  // Filter cars by group
  const sedanCars = CAR_MODELS.filter(car => car.group === 'sedan');
  const suvCars = CAR_MODELS.filter(car => car.group === 'suv');
  const mpvCars = CAR_MODELS.filter(car => car.group === 'mpv');

  const renderSection = (title: string, subtitle: string, cars: typeof CAR_MODELS) => (
    <div className="mb-20 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mb-8 border-b border-gray-100 pb-4">
        <h3 className="text-2xl md:text-3xl font-black font-montserrat text-kia-black uppercase tracking-tight">
          {title}
        </h3>
        <div className="hidden md:block w-px h-6 bg-gray-300 mb-1"></div>
        <p className="text-gray-500 font-medium italic text-sm md:text-base mb-1">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-300 flex flex-col h-full">
            {/* Image Area */}
            <div className="relative h-48 overflow-hidden bg-gray-50">
              <img
                src={car.images[0]}
                alt={car.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 bg-kia-black text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-md">
                {car.version}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col flex-grow">
              <h4 className="text-lg font-black font-montserrat text-gray-900 mb-2 group-hover:text-kia-red transition-colors uppercase">
                {car.name}
              </h4>

              <div className="flex items-start gap-2 mb-4">
                <Tag className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2">
                  {car.tagline}
                </p>
              </div>

              <div className="mt-auto space-y-3">
                {/* Price Block */}
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Giá Niêm Yết</span>
                  </div>
                  <div className="text-lg font-black text-kia-red tracking-tight">
                    {car.price}
                  </div>
                </div>

                {/* Installment Block */}
                <div className="flex items-center gap-2 px-1">
                  <Wallet className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-xs font-bold text-gray-700">
                    Trả góp từ: <span className="text-blue-700">{car.installmentPrice}</span>
                  </span>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-100">
                  <button className="py-2.5 rounded-lg border border-gray-200 text-gray-600 text-xs font-bold hover:bg-gray-50 hover:text-black transition-colors uppercase">
                    Chi Tiết
                  </button>
                  <button className="py-2.5 rounded-lg bg-kia-red text-white text-xs font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-1 uppercase shadow-md shadow-red-100">
                    Báo Giá
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="products" className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4 lg:px-8">

        {/* HEADER SECTION */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-montserrat text-kia-black mb-4 uppercase tracking-tighter leading-tight">
            Bảng Giá Xe KIA Chính Hãng 2026 <br className="hidden md:block" />
            <span className="text-kia-red inline-block mt-2 relative">
              Cập Nhật Ưu Đãi Mới Nhất
              <span className="absolute bottom-0 left-0 w-full h-1 bg-kia-red/20 -mb-1 rounded-full"></span>
            </span>
          </h2>

          <p className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-wide">
            Showroom 3S {CONTACT_INFO.name} - Cam kết giá tốt nhất miền Bắc - Giao xe ngay
          </p>

          {/* INTRO TEXT BOX */}
          <div className="bg-[#F8F9FA] p-6 md:p-8 rounded-2xl border border-gray-200 text-gray-600 leading-relaxed text-sm md:text-base shadow-inner max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-kia-red"></div>
            <p className="relative z-10">
              "Chào mừng Quý khách đến với kho xe KIA lớn nhất Hà Nội. Dưới đây là bảng giá niêm yết các dòng xe.
              <span className="font-bold text-kia-black block md:inline mt-2 md:mt-0"> Lưu ý: Giá thực tế lăn bánh sẽ <span className="text-kia-red underline decoration-2 underline-offset-2">THẤP HƠN</span> </span>
              nhờ các gói ưu đãi giảm tiền mặt và quà tặng phụ kiện riêng của <strong>{CONTACT_INFO.name}</strong>.
              Hãy chọn dòng xe Quý khách quan tâm để xem chi tiết."
            </p>
          </div>
        </div>

        {/* KHỐI 1: HATCHBACK & SEDAN */}
        {renderSection(
          "1. Xe Hatchback & Sedan",
          "Đô thị - Lịch lãm - Kinh tế",
          sedanCars
        )}

        {/* KHỐI 2: SUV & GẦM CAO */}
        {renderSection(
          "2. SUV & Gầm Cao",
          "Thể thao - Xu hướng Hot - Đa dụng",
          suvCars
        )}

        {/* KHỐI 3: MPV & XE GIA ĐÌNH */}
        {renderSection(
          "3. MPV & Xe Gia Đình",
          "Tiện nghi - Rộng rãi - Đẳng cấp Doanh Nhân",
          mpvCars
        )}

        {/* Call to Action Footer of Grid */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4 text-sm italic">Bạn vẫn chưa tìm được mẫu xe ưng ý?</p>
          <a href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`} className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-kia-red transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-red-500/30">
            Liên hệ tư vấn riêng
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;