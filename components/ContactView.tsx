import React, { useState } from 'react';
import { submitToSheet } from '../src/utils/sheetService';
import { CONTACT_INFO, CAR_MODELS } from '../constants';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  User,
  ArrowRight,
  Download,
  ShieldCheck,
  HeartHandshake,
  Headphones
} from 'lucide-react';

const ContactView: React.FC = () => {
  const [formData, setFormData] = React.useState({ name: '', phone: '', car: '', content: 'Báo giá lăn bánh', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
        Type: formData.content,
        Message: formData.message
      });
      alert(`Cảm ơn ${formData.name}! Yêu cầu của bạn đã được lưu. Tư vấn viên sẽ xem và phản hồi ngay.`);
      setFormData({ name: '', phone: '', car: '', content: 'Báo giá lăn bánh', message: '' });
    } catch (error) {
      alert('Lỗi gửi hồ sơ. Vui lòng gọi trực tiếp Hotline!');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveContact = () => {
    // Generate VCF content
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${CONTACT_INFO.name}
TEL;TYPE=CELL:${CONTACT_INFO.phone}
EMAIL:${CONTACT_INFO.email}
ORG:KIA Long Biên
ADR:;;${CONTACT_INFO.address}
URL:https://kialongbien.vn
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'KIA_Long_Bien.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 animate-fade-in font-sans">

      {/* 1. HERO HEADER */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="/images/banner_web%20.jpg"
          alt="KIA Long Bien Showroom"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>

        <div className="relative z-10 text-center container mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-kia-red/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <User className="w-3 h-3" />
            <span>Tư vấn chuyên nghiệp 24/7</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white uppercase tracking-tight mb-4 leading-tight">
            Liên Hệ Với <span className="text-kia-red">KIA Long Biên</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Hỗ trợ tư vấn xe, báo giá lăn bánh, đăng ký lái thử & thủ tục ngân hàng. <br className="hidden md:block" />
            Phục vụ tận tâm - Chuyên nghiệp - Trung thực.
          </p>
        </div>
      </section>

      {/* 2. MAIN LAYOUT (2 COLS) */}
      <section className="py-16 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* LEFT COL: INFO BOX (5 cols) */}
            <div className="lg:col-span-5 space-y-8">

              {/* Info Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-kia-red p-0.5">
                    {/* Agent Thumbnail Placeholder */}
                    <img
                      src={CONTACT_INFO.consultantImage}
                      alt={CONTACT_INFO.consultantName}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black font-montserrat text-gray-900 uppercase">{CONTACT_INFO.consultantName}</h3>
                    <p className="text-sm text-gray-500 font-bold">Phụ trách kinh doanh</p>
                  </div>
                  <button
                    onClick={handleSaveContact}
                    className="ml-auto flex flex-col items-center gap-1 text-[10px] font-bold text-kia-red hover:bg-red-50 p-2 rounded transition-colors lg:hidden"
                  >
                    <Download className="w-5 h-5" />
                    Lưu số
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-kia-red group-hover:bg-kia-red group-hover:text-white transition-colors flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Showroom Chính Hãng</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                      <p className="text-xs text-blue-600 italic mt-1 bg-blue-50 inline-block px-2 py-1 rounded">
                        *Có bãi đỗ xe ô tô rộng rãi miễn phí
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-kia-red group-hover:bg-kia-red group-hover:text-white transition-colors flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Giờ Làm Việc</h4>
                      <p className="text-gray-600 text-sm">Thứ 2 - Thứ 7: 08:00 - 18:00</p>
                      <p className="text-gray-600 text-sm">Chủ Nhật: 08:00 - 17:00</p>
                      <p className="text-gray-600 text-xs font-bold mt-1 text-green-600">Hỗ trợ Online 24/7 (Zalo/Hotline)</p>
                    </div>
                  </div>

                  {/* Contact Methods */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-kia-red group-hover:bg-kia-red group-hover:text-white transition-colors flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Hotline Tư Vấn</h4>
                      <p className="text-lg font-black text-kia-red">{CONTACT_INFO.phone}</p>
                      <p className="text-gray-500 text-sm">Zalo: {CONTACT_INFO.phone}</p>
                      <p className="text-gray-500 text-sm">Email: {CONTACT_INFO.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-gray-800 italic">
                      <span className="font-bold not-italic text-yellow-700">Lời nhắn từ {CONTACT_INFO.consultantName}:</span> <br />
                      "Khuyến khích Quý khách hàng <strong className="uppercase text-red-600">GỌI ĐIỆN TRƯỚC</strong> khi đến Showroom để mình có thể tiếp đón chu đáo nhất, chuẩn bị sẵn xe lái thử và gửi vé gửi xe miễn phí."
                    </p>
                  </div>
                </div>

                {/* Desktop Save Button */}
                <button
                  onClick={handleSaveContact}
                  className="w-full mt-6 bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-kia-red transition-colors hidden lg:flex items-center justify-center gap-2 uppercase text-sm"
                >
                  <Download className="w-4 h-4" />
                  Lưu Số Vào Danh Bạ
                </button>
              </div>

              {/* QR Code Section */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  {/* QR Placeholder */}
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://zalo.me/${CONTACT_INFO.phone.replace(/\./g, '')}`}
                    alt="Zalo QR"
                    className="w-full h-full p-2"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Quét Mã QR - Chat Zalo</h4>
                  <p className="text-xs text-gray-500 mb-2 leading-relaxed">
                    Nhận bảng giá lăn bánh chi tiết (Excel/PDF) và ảnh xe thực tế mà không cần nhập số điện thoại.
                  </p>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Zalo: {CONTACT_INFO.phone}</span>
                </div>
              </div>

            </div>

            {/* RIGHT COL: LEAD FORM (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 sticky top-24">
                <div className="bg-black text-white p-6 border-b-4 border-kia-red">
                  <h2 className="text-2xl font-black font-montserrat uppercase">Gửi Yêu Cầu Tư Vấn</h2>
                  <p className="text-gray-400 text-sm mt-1">Bạn chưa tiện gọi điện? Hãy để lại thông tin, mình sẽ liên hệ lại ngay sau 5 phút.</p>
                </div>

                <div className="p-8">
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Họ và Tên</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red focus:bg-white font-bold text-gray-900 transition-all"
                          placeholder="Nhập tên của bạn"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Số điện thoại <span className="text-red-500">*</span></label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red focus:bg-white font-bold text-gray-900 transition-all"
                          placeholder="09xx..."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Dòng xe quan tâm</label>
                        <div className="relative">
                          <select
                            value={formData.car}
                            onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                            className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red focus:bg-white font-medium text-gray-900 appearance-none cursor-pointer"
                          >
                            <option value="">Chọn dòng xe...</option>
                            {CAR_MODELS.map(car => (
                              <option key={car.id} value={car.name}>{car.name}</option>
                            ))}
                          </select>
                          <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nội dung hỗ trợ</label>
                        <div className="relative">
                          <select
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red focus:bg-white font-medium text-gray-900 appearance-none cursor-pointer"
                          >
                            <option>Báo giá lăn bánh</option>
                            <option>Đăng ký lái thử</option>
                            <option>Thủ tục trả góp</option>
                            <option>Tư vấn kỹ thuật</option>
                            <option>Khác</option>
                          </select>
                          <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Lời nhắn</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red focus:bg-white text-gray-900 transition-all"
                        placeholder="VD: Tôi muốn lái thử dòng K3 vào cuối tuần này..."
                      ></textarea>
                    </div>

                    <button className="w-full bg-kia-red text-white font-bold py-4 rounded-lg uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2 text-sm md:text-base">
                      <Mail className="w-5 h-5" />
                      {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Miễn Phí'}
                    </button>

                    <p className="text-center text-xs text-gray-400 italic flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Thông tin của bạn được bảo mật tuyệt đối 100%.
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS SECTION */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-kia-red font-bold uppercase tracking-wider text-xs mb-2">
                <MapPin className="w-4 h-4" />
                Bản đồ chỉ đường
              </div>
              <h2 className="text-3xl font-black font-montserrat uppercase">Vị Trí Showroom</h2>
            </div>
            <a
              href="https://maps.app.goo.gl/7pKqro2HPHy7aU5h9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-50 hover:border-black transition-colors"
            >
              Mở Google Maps Dẫn Đường
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.473663009952!2d105.89551537604677!3d21.05373598692138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9c927b7071f%3A0x6b72a6b460d3c0b5!2sKia%20Long%20Bi%C3%AAn!5e0!3m2!1svi!2s!4v1709220000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KIA Long Bien Map"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-bold uppercase">
              KIA Long Biên
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST SIGNALS (FOOTER) */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 uppercase mb-2">Tư Vấn 24/7</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Sẵn sàng nghe máy bất kể ngày nghỉ, lễ tết. Xe gặp sự cố hãy gọi cho tôi.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 uppercase mb-2">Minh Bạch Tài Chính</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Mọi khoản thu chi đều có hóa đơn chứng từ của Showroom. Không thu phí ngoài luồng.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 uppercase mb-2">Hài Lòng Tuyệt Đối</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Luôn đặt quyền lợi khách hàng lên trên doanh số. Tư vấn đúng nhu cầu, không "vẽ" thêm.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactView;