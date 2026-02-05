import React, { useState, useEffect } from 'react';
import { CAR_MODELS, CONTACT_INFO } from '../constants';
import { ArrowLeft, Check, Phone, MessageCircle, Wallet, Shield, Award } from 'lucide-react';
import { PageView } from '../App';

interface ProductDetailViewProps {
  carId: string;
  onNavigate: (view: PageView) => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ carId, onNavigate }) => {
  const car = CAR_MODELS.find(c => c.id === carId);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (car && car.images.length > 0) {
      setActiveImage(car.images[0]);
    }
  }, [car]);

  if (!car) {
    return <div className="pt-32 text-center">Không tìm thấy sản phẩm.</div>;
  }

  return (
    <div className="pt-20 min-h-screen bg-white animate-fade-in font-sans">

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 lg:px-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
          <button onClick={() => onNavigate('home')} className="hover:text-black">Trang Chủ</button>
          <span>/</span>
          <button onClick={() => onNavigate('products')} className="hover:text-black">Dòng Xe</button>
          <span>/</span>
          <span className="text-kia-red">{car.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Images */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 mb-6 border border-gray-200 shadow-sm">
              <img src={activeImage} alt={car.name} className="w-full h-auto object-cover" />
              <div className="absolute top-6 left-6 bg-kia-red text-white px-4 py-2 rounded font-bold uppercase tracking-wide text-sm">
                {car.status}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {car.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-video bg-gray-100 rounded-lg cursor-pointer border transition-all ${activeImage === img ? 'border-kia-red ring-2 ring-kia-red/20' : 'border-transparent hover:border-black'}`}
                >
                  <img src={img} alt={`${car.name} ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5">
            <h1 className="text-4xl md:text-5xl font-black font-montserrat text-black uppercase mb-2">{car.name}</h1>
            <p className="text-xl text-gray-500 italic mb-6">{car.tagline}</p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-sm font-bold text-gray-500 uppercase">Giá Niêm Yết</span>
                <span className="text-3xl font-black text-kia-red">{car.price}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm bg-blue-50 p-2 rounded w-fit">
                <Wallet className="w-4 h-4" />
                Trả góp chỉ từ: {car.installmentPrice}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <p className="text-gray-700"><strong>Sẵn xe giao ngay:</strong> Cam kết đủ màu, giao xe tận nhà.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <p className="text-gray-700"><strong>Ưu đãi tháng:</strong> Tặng bảo hiểm thân vỏ & gói phụ kiện chính hãng.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <p className="text-gray-700"><strong>Hỗ trợ:</strong> Đăng ký lái thử tại nhà miễn phí.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <a href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`} className="bg-kia-red text-white py-4 rounded-lg font-bold uppercase flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                <Phone className="w-5 h-5" />
                Gọi Ngay
              </a>
              <a href="https://zalo.me" className="bg-[#0068FF] text-white py-4 rounded-lg font-bold uppercase flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                <MessageCircle className="w-5 h-5" />
                Chat Zalo
              </a>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-center text-xs text-gray-400 uppercase font-bold mb-4">Cam kết từ {CONTACT_INFO.name}</p>
              <div className="flex justify-around text-center">
                <div>
                  <Shield className="w-6 h-6 text-gray-800 mx-auto mb-2" />
                  <span className="text-[10px] font-bold uppercase block text-gray-600">Bảo hành<br />5 Năm</span>
                </div>
                <div>
                  <Award className="w-6 h-6 text-gray-800 mx-auto mb-2" />
                  <span className="text-[10px] font-bold uppercase block text-gray-600">Showroom<br />3S Quốc Tế</span>
                </div>
                <div>
                  <Wallet className="w-6 h-6 text-gray-800 mx-auto mb-2" />
                  <span className="text-[10px] font-bold uppercase block text-gray-600">Giá Tốt<br />Nhất MB</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;