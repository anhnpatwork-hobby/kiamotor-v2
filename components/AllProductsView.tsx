import React, { useState } from 'react';
import { CAR_MODELS, CONTACT_INFO } from '../constants';
import { Wallet, MessageCircle, Info, Filter, ArrowRight } from 'lucide-react';
import { PageView } from '../App';

interface AllProductsViewProps {
  onNavigate: (view: PageView, id?: string) => void;
}

const AllProductsView: React.FC<AllProductsViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'sedan' | 'suv' | 'mpv'>('all');

  const filteredCars = filter === 'all'
    ? CAR_MODELS
    : CAR_MODELS.filter(car => car.group === filter);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 animate-fade-in font-sans">

      {/* A. HERO BANNER */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-[#050505]">
        <img
          src="https://images.unsplash.com/photo-1562511448-7528cb6db685?q=80&w=2070&auto=format&fit=crop"
          alt="Showroom KIA Long Biên Panorama"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-center md:text-left">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-5xl font-black font-montserrat text-white uppercase tracking-wide leading-snug mb-6">
              Showroom {CONTACT_INFO.name} <br />
              <span className="text-kia-red inline-block mt-3 md:mt-4">Kho Xe Lớn Nhất Miền Bắc</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Cập nhật bảng giá & Ưu đãi mới nhất tháng 1/2026. Đủ màu - Giao ngay - Hỗ trợ lái thử tại nhà.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[80px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
            <button
              onClick={() => setFilter('all')}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold uppercase transition-colors ${filter === 'all' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              Tất Cả
            </button>
            <button
              onClick={() => setFilter('sedan')}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold uppercase transition-colors ${filter === 'sedan' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              Sedan & Hatchback
            </button>
            <button
              onClick={() => setFilter('suv')}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold uppercase transition-colors ${filter === 'suv' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              SUV & Gầm Cao
            </button>
            <button
              onClick={() => setFilter('mpv')}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold uppercase transition-colors ${filter === 'mpv' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              MPV & Gia Đình
            </button>
          </div>
        </div>
      </section>

      {/* B. PRODUCT LIST */}
      <section className="py-12 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group">
              {/* Image */}
              <div
                className="relative h-56 overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => onNavigate('product-detail', car.id)}
              >
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                  {car.version}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-xl font-black font-montserrat text-gray-900 uppercase mb-2 cursor-pointer hover:text-kia-red transition-colors"
                  onClick={() => onNavigate('product-detail', car.id)}
                >
                  {car.name}
                </h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-4 line-clamp-1">
                  {car.tagline}
                </p>

                <div className="mt-auto space-y-3">
                  <div className="flex justify-between items-end border-b border-gray-100 pb-3">
                    <span className="text-xs text-gray-400 font-bold uppercase">Giá Ưu Đãi</span>
                    <span className="text-lg font-black text-kia-red">{car.price}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Wallet className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Góp chỉ: {car.installmentPrice}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Info className="w-4 h-4 text-green-600" />
                    <span className="font-medium italic text-green-700 text-xs">{car.status}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button
                    onClick={() => onNavigate('product-detail', car.id)}
                    className="py-3 rounded-lg border border-black text-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors"
                  >
                    Xem Chi Tiết
                  </button>
                  <a
                    href="https://zalo.me"
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 rounded-lg bg-[#0068FF] text-white text-xs font-bold uppercase flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors"
                  >
                    Báo Giá Zalo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* C. SEO TEXT & WHY CHOOSE US */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-black font-montserrat text-gray-900 mb-6 uppercase">
            Tại Sao Nên Mua Xe Tại {CONTACT_INFO.name}?
          </h2>
          <div className="prose prose-gray max-w-none text-gray-600">
            <p className="mb-4">
              <strong>KIA Long Biên</strong> tự hào là Showroom 3S chính hãng quy mô lớn nhất hệ thống THACO KIA tại miền Bắc. Khi mua xe tại đây, Quý khách hàng sẽ được hưởng những đặc quyền:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none pl-0">
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-kia-red mt-2.5"></div>
                <div>
                  <strong className="text-gray-900 block mb-1">Kho xe khổng lồ</strong>
                  Chúng tôi luôn có sẵn xe, đủ màu sắc và phiên bản để Quý khách xem thực tế và nhận xe ngay mà không phải chờ đợi.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-kia-red mt-2.5"></div>
                <div>
                  <strong className="text-gray-900 block mb-1">Giá tốt nhất thị trường</strong>
                  Chính sách giá linh hoạt, cam kết không chênh giá, hỗ trợ tối đa các khoản phí lăn bánh.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-kia-red mt-2.5"></div>
                <div>
                  <strong className="text-gray-900 block mb-1">Hỗ trợ tài chính mạnh</strong>
                  Liên kết với 15 ngân hàng lớn, hỗ trợ trả góp lên đến 85% giá trị xe, xử lý hồ sơ nợ xấu, duyệt vay trong 5 phút.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-kia-red mt-2.5"></div>
                <div>
                  <strong className="text-gray-900 block mb-1">Lái thử tại nhà</strong>
                  Chỉ cần 1 cuộc điện thoại, chúng tôi sẽ mang xe đến tận cửa nhà để Quý khách trải nghiệm.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BOTTOM FORM */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-kia-red p-8 md:w-1/3 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-black font-montserrat uppercase mb-4 leading-tight">Bạn vẫn phân vân chưa chọn được xe?</h3>
              <p className="text-sm opacity-90">Đừng lo, hãy để lại thông tin. Chuyên gia tư vấn sẽ gọi lại hỗ trợ bạn tìm ra chiếc xe phù hợp nhất với ngân sách trong 5 phút.</p>
            </div>
            <div className="p-8 md:w-2/3">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Họ tên</label>
                  <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-black" placeholder="Nhập họ tên" />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Số điện thoại</label>
                  <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-black" placeholder="Nhập SĐT" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tầm tiền dự kiến</label>
                  <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-black">
                    <option>Dưới 500 Triệu</option>
                    <option>500 - 800 Triệu</option>
                    <option>Trên 800 Triệu</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-2 mt-2">
                  <button type="button" className="w-full bg-black text-white font-bold uppercase py-4 rounded hover:bg-kia-red transition-colors flex items-center justify-center gap-2">
                    Gửi Yêu Cầu Tư Vấn
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AllProductsView;