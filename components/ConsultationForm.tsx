import React from 'react';
import { submitToSheet } from '../src/utils/sheetService';

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = React.useState({ name: '', phone: '', car: 'Chọn dòng xe' });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Vui lòng nhập Họ tên và Số điện thoại!');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitToSheet({
        Name: formData.name,
        Phone: formData.phone,
        Car: formData.car,
        Type: 'Đăng ký tư vấn nhanh',
        Message: 'Khách hàng đăng ký tư vấn từ trang chủ'
      });
      alert(`Cảm ơn ${formData.name}! Thông tin đã được lưu vào hệ thống. Chúng tôi sẽ liên hệ lại qua số ${formData.phone} sớm nhất.`);
      setFormData({ name: '', phone: '', car: 'Chọn dòng xe' });
    } catch (error) {
      alert('Có lỗi xảy ra khi gửi. Vui lòng thử lại hoặc gọi Hotline!');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="bg-kia-red rounded-[30px] overflow-hidden shadow-2xl mx-4 lg:mx-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">

            {/* Left: Image (Lifestyle/Premium) */}
            <div className="relative h-64 lg:h-auto order-2 lg:order-1">
              <img
                src="/images/kia-long-bien.webp"
                alt="Consultant working"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-kia-red via-transparent to-transparent opacity-90 lg:opacity-50"></div>
            </div>

            {/* Right: Form (Red Background) */}
            <div className="p-8 lg:p-16 flex flex-col justify-center order-1 lg:order-2 text-white relative">
              <div className="max-w-md mx-auto w-full">
                <h2 className="text-3xl lg:text-4xl font-black font-montserrat mb-3 uppercase tracking-tight">
                  Đăng Ký Tư Vấn
                </h2>
                <p className="text-red-100 mb-8 font-opensans">
                  Nhận báo giá chi tiết và ưu đãi độc quyền tháng này.
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-bold mb-2 text-red-100 uppercase tracking-wide">Họ tên</label>
                    <input
                      type="text"
                      className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200/50 focus:outline-none focus:bg-white/20 focus:border-white transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 text-red-100 uppercase tracking-wide">Số điện thoại</label>
                    <input
                      type="tel"
                      className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200/50 focus:outline-none focus:bg-white/20 focus:border-white transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0912..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 text-red-100 uppercase tracking-wide">Dòng xe quan tâm</label>
                    <div className="relative">
                      <select
                        value={formData.car}
                        onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                        className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/20 focus:border-white transition-colors appearance-none"
                      >
                        <option className="text-gray-900">Chọn dòng xe</option>
                        <option className="text-gray-900">KIA K3</option>
                        <option className="text-gray-900">KIA Seltos</option>
                        <option className="text-gray-900">KIA Carnival</option>
                        <option className="text-gray-900">KIA Sportage</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-kia-red font-montserrat font-black text-lg py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 mt-2 uppercase tracking-wide flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu'}
                    <span className="text-xl">↗</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;