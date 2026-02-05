import React from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FinanceSection: React.FC = () => {
  return (
    <section id="finance" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 text-kia-red font-bold uppercase tracking-wider text-xs mb-4">
              <Calculator className="w-4 h-4" />
              Giải Pháp Tài Chính
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-montserrat text-kia-black mb-6 uppercase tracking-tighter leading-tight">
              Mua Xe Trả Góp <br />
              <span className="text-gray-400 block mt-2">Dễ Hơn Bạn Nghĩ</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Sở hữu xe KIA ngay hôm nay với sự hỗ trợ từ các ngân hàng đối tác chiến lược của {CONTACT_INFO.name}. Duyệt vay nhanh, lãi suất ưu đãi độc quyền.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Lãi Suất Ưu Đãi</h4>
                  <p className="text-sm text-gray-500">Chỉ từ 0.6%/tháng. Cố định năm đầu.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Hạn Mức Vay Cao</h4>
                  <p className="text-sm text-gray-500">Lên tới 85% giá trị xe. Thời gian tối đa 8 năm.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Hỗ Trợ Nợ Xấu</h4>
                  <p className="text-sm text-gray-500">Xử lý hồ sơ khó, bao đậu hồ sơ đẹp.</p>
                </div>
              </div>
            </div>

            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-kia-red transition-colors uppercase tracking-wide">
              Tư Vấn Hồ Sơ Vay
            </button>
          </div>

          {/* Calculation Examples Card */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100 relative">
            <div className="absolute top-0 right-0 bg-kia-red text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl">
              VÍ DỤ THỰC TẾ
            </div>
            
            <h3 className="text-xl font-black font-montserrat mb-8 uppercase text-center">Bảng Tính Trả Góp Tạm Tính</h3>
            
            <div className="space-y-6">
              {/* Example 1 */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg text-black">KIA MORNING</h4>
                  <span className="text-kia-red font-bold text-sm">Đô Thị</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-400 text-xs uppercase mb-1">Trả Trước Chỉ</span>
                    <span className="block font-bold text-gray-900 text-xl">80 Triệu</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-400 text-xs uppercase mb-1">Gốc + Lãi / Tháng</span>
                    <span className="block font-bold text-gray-900 text-xl">~4 Triệu</span>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg text-black">KIA K3 2026</h4>
                  <span className="text-kia-red font-bold text-sm">Sedan</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-400 text-xs uppercase mb-1">Trả Trước Chỉ</span>
                    <span className="block font-bold text-gray-900 text-xl">150 Triệu</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-400 text-xs uppercase mb-1">Gốc + Lãi / Tháng</span>
                    <span className="block font-bold text-gray-900 text-xl">~7 Triệu</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-6 italic">
              *Con số mang tính chất tham khảo. Liên hệ để có bảng tính chi tiết theo hồ sơ của bạn.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinanceSection;