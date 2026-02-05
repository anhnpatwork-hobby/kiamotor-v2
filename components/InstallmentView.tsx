import React, { useState, useMemo } from 'react';
import { submitToSheet } from '../src/utils/sheetService';
import { CONTACT_INFO, CAR_MODELS } from '../constants';
import {
  FileSignature,
  Landmark,
  Car,
  Key,
  User,
  Building2,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Calculator,
  Phone,
  ArrowRight
} from 'lucide-react';

const InstallmentView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form logic
  const [formData, setFormData] = useState({ name: '', phone: '', income: '', loanAmount: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitToSheet({
        Name: formData.name,
        Phone: formData.phone,
        Income: formData.income,
        LoanAmount: formData.loanAmount,
        Type: 'Thẩm định hồ sơ trả góp',
        Message: `Thu nhập: ${formData.income}, Muốn vay: ${formData.loanAmount}`
      });
      alert(`Đã lưu hồ sơ của ${formData.name}! Chúng tôi sẽ bảo mật và gọi lại tư vấn chi tiết.`);
      setFormData({ name: '', phone: '', income: '', loanAmount: '' });
    } catch (error) {
      alert('Lỗi gửi hồ sơ. Vui lòng gọi trực tiếp Hotline!');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };


  // Calculator logic
  const [selectedCarId, setSelectedCarId] = useState<string>(CAR_MODELS[0].id);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [loanTerm, setLoanTerm] = useState<number>(5); // 5 Years

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const calculationResult = useMemo(() => {
    const car = CAR_MODELS.find(c => c.id === selectedCarId) || CAR_MODELS[0];
    const priceStr = car.price.replace(/\D/g, '');
    const carPrice = parseInt(priceStr, 10);

    // Tạm tính chi phí lăn bánh (Biển HN)
    // Simplified: 12% Registration Fee + 20,000,000 Plate + 2,000,000 Others
    const registrationFee = carPrice * 0.12;
    const plateFee = 20000000;
    const otherFees = 3000000;

    // Khoản vay
    const downPaymentAmount = (carPrice * downPaymentPercent) / 100;
    const loanAmount = carPrice - downPaymentAmount;

    // Tổng tiền mặt cần có = Tiền đối ứng (xe) + Chi phí đăng ký
    const totalPrepaid = downPaymentAmount + registrationFee + plateFee + otherFees;

    // Tính trả hàng tháng (Ước tính lãi 10%/năm, dư nợ giảm dần -> lấy tháng đầu cao nhất)
    const interestRateYear = 0.10;
    const months = loanTerm * 12;
    const monthlyPrincipal = loanAmount / months;
    const firstMonthInterest = (loanAmount * interestRateYear) / 12;
    const monthlyPayment = monthlyPrincipal + firstMonthInterest;

    return {
      car,
      carPrice,
      loanAmount,
      totalPrepaid,
      monthlyPayment
    };
  }, [selectedCarId, downPaymentPercent, loanTerm]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calc-table');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 animate-fade-in font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center bg-[#050505] overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Banner_web%204.jpg"
            alt="Happy family receiving new KIA car"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Hỗ trợ tài chính 24/7</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white uppercase leading-tight mb-6">
              Sở Hữu Xe KIA Mơ Ước <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kia-red to-red-500">Chỉ Với 150 Triệu Đồng</span>
            </h1>

            <div className="space-y-4 mb-10 text-gray-300 text-lg font-medium border-l-4 border-kia-red pl-6">
              <p>✓ Hỗ trợ vay <span className="text-white font-bold">85%</span> giá trị xe.</p>
              <p>✓ Lãi suất ưu đãi chỉ từ <span className="text-white font-bold">0.6%/tháng.</span></p>
              <p>✓ Duyệt hồ sơ trong <span className="text-white font-bold">5 phút</span> "Một chạm".</p>
            </div>

            <button
              onClick={scrollToCalculator}
              className="bg-kia-red text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(187,22,43,0.4)] flex items-center gap-2 uppercase tracking-wide"
            >
              <Calculator className="w-5 h-5" />
              Tính Số Tiền Trả Hàng Tháng
            </button>
          </div>
        </div>
      </section>

      {/* 2. PROCESS SECTION (TIMELINE) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black font-montserrat text-kia-black uppercase mb-4">
              4 Bước <span className="text-kia-red">Sở Hữu Xe</span>
            </h2>
            <p className="text-gray-500">Quy trình đơn giản hóa, minh bạch và nhanh chóng.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-0 transform -translate-y-1/2"></div>

            {[
              {
                icon: FileSignature,
                step: "01",
                title: "Ký Hợp Đồng & Cọc",
                desc: "Chọn xe ưng ý, ký hợp đồng và đặt cọc thiện chí (10-20tr) để giữ xe và khuyến mãi."
              },
              {
                icon: Landmark,
                step: "02",
                title: "Thẩm Định & Thông Báo",
                desc: "Ngân hàng thẩm định (Online/Offline). Cam kết bao đậu hồ sơ. Ra thông báo cho vay sau 4-24h."
              },
              {
                icon: Car,
                step: "03",
                title: "Đóng Đối Ứng & Đăng Ký",
                desc: "Đóng số tiền đối ứng (Tiền xe - Tiền vay). Showroom nộp thuế, đăng ký biển số trọn gói."
              },
              {
                icon: Key,
                step: "04",
                title: "Giải Ngân & Nhận Xe",
                desc: "Ký giải ngân tại ngân hàng. Tiền về tài khoản công ty, Quý khách nhận xe mang về nhà."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:border-kia-red group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-gray-400 group-hover:text-kia-red transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs border-2 border-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-black font-montserrat text-gray-900 mb-3 uppercase">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHECKLIST SECTION */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Personal */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black font-montserrat text-gray-900 uppercase">Khách Hàng Cá Nhân</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Pháp lý:</strong> CCCD gắn chip (Vợ & Chồng nếu đã kết hôn) + Giấy đăng ký kết hôn (hoặc giấy xác nhận độc thân).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Nguồn thu:</strong> Hợp đồng lao động + Sao kê lương 3-6 tháng gần nhất.</span>
                </li>
              </ul>

              <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-100">
                <p className="text-red-800 text-sm font-medium flex items-start gap-2">
                  <span className="text-xl">🔥</span>
                  <span>
                    Hồ sơ khó? Kinh doanh tự do? Không chứng minh được thu nhập? Nợ chú ý? <br />
                    <strong className="text-red-600 uppercase">Đừng lo, {CONTACT_INFO.name} xử lý được hết. Gọi ngay!</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Right: Business */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black font-montserrat text-gray-900 uppercase">Khách Hàng Doanh Nghiệp</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Pháp lý:</strong> Giấy phép kinh doanh + CCCD chủ doanh nghiệp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Tài chính:</strong> Báo cáo tài chính 6 tháng gần nhất + Tờ khai thuế.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm"><strong>Hoạt động:</strong> Doanh nghiệp thành lập trên 6 tháng, không nợ xấu nhóm 3-4-5.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALCULATION TABLE */}
      <section id="calc-table" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-montserrat text-kia-black uppercase mb-2">Tính Toán Khoản Vay</h2>
            <p className="text-gray-500 italic">Dự toán chi phí lăn bánh và số tiền trả góp hàng tháng</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Left: Controls */}
              <div className="p-8 bg-gray-50 border-r border-gray-100">
                <div className="space-y-6">
                  {/* Select Car */}
                  <div>
                    <label className="block text-sm font-bold uppercase text-gray-700 mb-2">Chọn Dòng Xe</label>
                    <div className="relative">
                      <select
                        value={selectedCarId}
                        onChange={(e) => setSelectedCarId(e.target.value)}
                        className="w-full appearance-none p-4 bg-white border border-gray-300 rounded-lg font-bold text-gray-900 focus:outline-none focus:border-kia-red focus:ring-1 focus:ring-kia-red"
                      >
                        {CAR_MODELS.map(car => (
                          <option key={car.id} value={car.id}>{car.name} ({car.version})</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Down Payment Slider */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-bold uppercase text-gray-700">Trả Trước (%)</label>
                      <span className="font-bold text-kia-red">{downPaymentPercent}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="80"
                      step="5"
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-kia-red"
                    />
                    <p className="text-xs text-gray-400 mt-1">Tối thiểu 20%, Tối đa 80%</p>
                  </div>

                  {/* Loan Term Slider */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-bold uppercase text-gray-700">Thời Gian Vay (Năm)</label>
                      <span className="font-bold text-kia-red">{loanTerm} Năm</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="8"
                      step="1"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-kia-red"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Results */}
              <div className="p-8 bg-white flex flex-col justify-center">
                <div className="space-y-6">

                  {/* Result Item */}
                  <div className="flex justify-between items-end border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Giá xe niêm yết</span>
                    <span className="text-lg font-bold text-gray-900">{formatCurrency(calculationResult.carPrice)}</span>
                  </div>

                  <div className="flex justify-between items-end border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Tổng tiền cần chuẩn bị <br />(Gồm Đăng ký + Đối ứng)</span>
                    <span className="text-2xl font-black text-kia-red">{formatCurrency(calculationResult.totalPrepaid)}</span>
                  </div>

                  <div className="flex justify-between items-end border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 font-medium">Số tiền vay ngân hàng</span>
                    <span className="text-lg font-bold text-gray-900">{formatCurrency(calculationResult.loanAmount)}</span>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <span className="block text-xs font-bold uppercase text-blue-600 mb-1">Trả hàng tháng (Ước tính cả gốc + lãi)</span>
                    <span className="block text-3xl font-black text-blue-800">{formatCurrency(calculationResult.monthlyPayment)}</span>
                    <span className="block text-[10px] text-blue-500 mt-1 italic">*Số liệu tham khảo, dư nợ giảm dần</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTNERS & FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Partners Grid */}
          <div className="mb-20">
            <h2 className="text-2xl font-black font-montserrat text-center uppercase mb-10">
              Đối Tác Tài Chính Chiến Lược
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Shinhan Bank", logo: "/images/bank-partners/shinhan.png" },
                { name: "VIB", logo: "/images/bank-partners/vib.png" },
                { name: "TPBank", logo: "/images/bank-partners/tp-bank.png" },
                { name: "VPBank", logo: "/images/bank-partners/vp-bank.png" },
                { name: "Techcombank", logo: "/images/bank-partners/techcombank.png" },
                { name: "Woori Bank", logo: "/images/bank-partners/woori-bank.png" }
              ].map((bank, idx) => (
                <div key={idx} className="bg-white h-24 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-4 hover:shadow-md transition-shadow grayscale hover:grayscale-0">
                  <img src={bank.logo} alt={bank.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600 font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Lãi suất cạnh tranh</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Không ép mua bảo hiểm</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Vay 3 - 8 năm</span>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black font-montserrat text-center uppercase mb-10">Câu Hỏi Thường Gặp</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Tôi làm nghề tự do (bán hàng Online, tài xế), không có bảng lương có vay được không?",
                  a: "Hoàn toàn ĐƯỢC. Chúng tôi có các ngân hàng chuyên hỗ trợ nguồn thu thực tế (chụp ảnh cơ sở kinh doanh, xác nhận qua app...) mà không cần sao kê lương."
                },
                {
                  q: "Nợ xấu có mua xe được không?",
                  a: `Tùy thuộc vào mức độ nợ xấu (Nhóm 1, 2 hay cao hơn) và thời điểm bị nợ. Hãy gọi riêng cho ${CONTACT_INFO.name} qua số ${CONTACT_INFO.phone} để được check CIC và tư vấn phương án "lách" hồ sơ kín đáo nhất.`
                },
                {
                  q: "Tôi ở tỉnh mua xe tại Hà Nội có trả góp được không?",
                  a: "Được. Chúng tôi hỗ trợ trả góp trên toàn quốc. Ngân hàng tại địa phương của Quý khách sẽ qua thẩm định và giải ngân."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 pr-4">{item.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM FORM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-[30px] overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row">

              {/* Left Visual */}
              <div className="lg:w-1/2 p-12 bg-[#101010] flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                <ShieldCheck className="w-24 h-24 text-green-500 mb-6 relative z-10" />
                <h3 className="text-3xl font-black font-montserrat text-white uppercase mb-4 relative z-10">Thẩm Định Hồ Sơ <br />Online Miễn Phí</h3>
                <p className="text-gray-400 max-w-sm relative z-10">Điền thông tin sơ bộ, chúng tôi sẽ kiểm tra hạn mức vay tối đa của bạn sau 5 phút. Thông tin được bảo mật tuyệt đối 100%.</p>
              </div>

              {/* Right Form */}
              <div className="lg:w-1/2 p-8 md:p-12 bg-white">
                <form className="space-y-5" onSubmit={handleSubmitForm}>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Họ tên</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red font-bold text-gray-900"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Số điện thoại</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red font-bold text-gray-900"
                      placeholder="09xx..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Thu nhập (Ước lượng)</label>
                      <input
                        type="text"
                        value={formData.income}
                        onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red font-bold text-gray-900"
                        placeholder="VD: 20 Triệu"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Số tiền muốn vay</label>
                      <input
                        type="text"
                        value={formData.loanAmount}
                        onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-kia-red font-bold text-gray-900"
                        placeholder="VD: 400 Triệu"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mt-4">
                    {isSubmitting ? 'Đang gửi...' : 'Kiểm Tra Hồ Sơ Ngay'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Cam kết bảo mật thông tin
                  </p>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InstallmentView;