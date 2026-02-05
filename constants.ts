import { CarModel, Testimonial, USPItem, VideoItem } from './types';
import { Wallet, CheckCircle2, Truck, HeartHandshake } from 'lucide-react';

export const CAR_MODELS: CarModel[] = [
  // --- NHÓM 1: SEDAN & HATCHBACK ---
  {
    id: 'morning',
    name: 'KIA MORNING',
    tagline: 'Vua xe đô thị - Nhỏ gọn & Tiết kiệm',
    version: 'GT-Line',
    power: '83 Mã Lực',
    price: '349.000.000 VNĐ',
    installmentPrice: '4.5 Tr/tháng',
    status: 'Sẵn xe giao ngay',
    images: [
      '/images/cars/Morning/1.JPG',
      '/images/cars/Morning/2.JPG',
      '/images/cars/Morning/3.JPG',
      '/images/cars/Morning/4.JPG',
      '/images/cars/Morning/5.JPG',
      '/images/cars/Morning/6.JPG',
      '/images/cars/Morning/7.JPG'
    ],
    group: 'sedan',
    category: 'urban'
  },
  {
    id: 'soluto',
    name: 'KIA SOLUTO',
    tagline: 'Sedan hạng B giá rẻ nhất phân khúc',
    version: 'AT Luxury',
    power: '94 Mã Lực',
    price: '386.000.000 VNĐ',
    installmentPrice: '5.2 Tr/tháng',
    status: 'Đủ màu',
    images: [
      '/images/cars/Soluto/1.JPG',
      '/images/cars/Soluto/2.JPG',
      '/images/cars/Soluto/3.JPG',
      '/images/cars/Soluto/4.JPG',
      '/images/cars/Soluto/5.JPG',
      '/images/cars/Soluto/6.JPG',
      '/images/cars/Soluto/7.JPG'
    ],
    group: 'sedan',
    category: 'sedan'
  },
  {
    id: 'k3',
    name: 'KIA K3 (NEW)',
    tagline: 'Sedan hạng C bán chạy số 1 VN',
    version: '1.6 Turbo',
    power: '204 Mã Lực',
    price: '549.000.000 VNĐ',
    installmentPrice: '7.5 Tr/tháng',
    status: 'Ưu đãi 50% trước bạ',
    images: [
      '/images/cars/K3/1.JPG',
      '/images/cars/K3/2.JPG',
      '/images/cars/K3/3.JPG',
      '/images/cars/K3/4.JPG',
      '/images/cars/K3/5.JPG',
      '/images/cars/K3/6.JPG',
      '/images/cars/K3/7.JPG'
    ],
    group: 'sedan',
    category: 'sedan'
  },
  {
    id: 'k5',
    name: 'KIA K5',
    tagline: 'Fastback Sedan thời thượng',
    version: '2.5 GT-Line',
    power: '191 Mã Lực',
    price: '859.000.000 VNĐ',
    installmentPrice: '11 Tr/tháng',
    status: 'Sẵn xe lái thử',
    images: [
      '/images/cars/K5/1.JPG',
      '/images/cars/K5/2.JPG',
      '/images/cars/K5/3.JPG',
      '/images/cars/K5/4.JPG',
      '/images/cars/K5/5.JPG',
      '/images/cars/K5/6.JPG'
    ],
    group: 'sedan',
    category: 'sedan'
  },

  // --- NHÓM 2: SUV & GẦM CAO ---
  {
    id: 'sonet',
    name: 'KIA SONET',
    tagline: 'SUV đô thị cỡ nhỏ - Gầm cao, Linh hoạt',
    version: '1.5 Premium',
    power: '113 Mã Lực',
    price: '519.000.000 VNĐ',
    installmentPrice: '6.5 Tr/tháng',
    status: 'Bán chạy (Gọi check kho)',
    images: [
      '/images/cars/Sonet/1.JPG',
      '/images/cars/Sonet/2.JPG',
      '/images/cars/Sonet/3.JPG',
      '/images/cars/Sonet/4.JPG',
      '/images/cars/Sonet/5.JPG',
      '/images/cars/Sonet/6.JPG'
    ],
    group: 'suv',
    category: 'suv'
  },
  {
    id: 'seltos',
    name: 'KIA SELTOS',
    tagline: 'Biểu tượng B-SUV - Đẹp, Khỏe, Nhiều Option',
    version: '1.4 GT-Line',
    power: '138 Mã Lực',
    price: '599.000.000 VNĐ',
    installmentPrice: '8.0 Tr/tháng',
    status: 'Đủ phiên bản (1.5 & Turbo)',
    images: [
      '/images/cars/Seltos/1.JPG',
      '/images/cars/Seltos/2.JPG',
      '/images/cars/Seltos/3.JPG',
      '/images/cars/Seltos/4.JPG',
      '/images/cars/Seltos/5.JPG',
      '/images/cars/Seltos/6.JPG',
      '/images/cars/Seltos/7.JPG',
      '/images/cars/Seltos/IMG_0895.JPG'
    ],
    group: 'suv',
    category: 'suv'
  },
  {
    id: 'sportage',
    name: 'KIA SPORTAGE',
    tagline: 'Tuyệt phẩm C-SUV - Cảm hứng tương lai',
    version: '2.0D Signature',
    power: '184 Mã Lực',
    price: '799.000.000 VNĐ',
    installmentPrice: '10.5 Tr/tháng',
    status: 'Tặng bảo hiểm thân vỏ',
    images: [
      '/images/cars/Sportage/1.JPG',
      '/images/cars/Sportage/2.JPG',
      '/images/cars/Sportage/3.JPG',
      '/images/cars/Sportage/4.JPG',
      '/images/cars/Sportage/5.JPG',
      '/images/cars/Sportage/6.JPG',
      '/images/cars/Sportage/7.JPG'
    ],
    group: 'suv',
    category: 'suv'
  },
  {
    id: 'sorento',
    name: 'KIA SORENTO',
    tagline: 'SUV 7 chỗ Đẳng cấp - Động cơ Smartstream',
    version: 'PHEV Signature',
    power: '261 Mã Lực',
    price: '999.000.000 VNĐ',
    installmentPrice: '13 Tr/tháng',
    status: 'Có xe giao ngay',
    images: [
      '/images/cars/Sorento/1.JPG',
      '/images/cars/Sorento/2.JPG',
      '/images/cars/Sorento/3.JPG',
      '/images/cars/Sorento/4.JPG',
      '/images/cars/Sorento/5.JPG',
      '/images/cars/Sorento/6.JPG'
    ],
    group: 'suv',
    category: 'suv'
  },

  // --- NHÓM 3: MPV & XE GIA ĐÌNH ---
  {
    id: 'carens',
    name: 'KIA CARENS',
    tagline: 'MPV thế hệ mới - Rộng nhất phân khúc',
    version: '1.5D Signature',
    power: '113 Mã Lực',
    price: '589.000.000 VNĐ',
    installmentPrice: '7.8 Tr/tháng',
    status: 'Sẵn màu Trắng/Đỏ/Xanh',
    images: [
      '/images/cars/Carens/1.JPG',
      '/images/cars/Carens/2.JPG',
      '/images/cars/Carens/3.JPG',
      '/images/cars/Carens/4.JPG'
    ],
    group: 'mpv',
    category: 'family'
  },
  {
    id: 'carnival',
    name: 'KIA CARNIVAL',
    tagline: 'Chuyên cơ mặt đất - Tiện nghi hạng thương gia',
    version: '3.5G Signature',
    power: '268 Mã Lực',
    price: '1.189.000.000 VNĐ',
    installmentPrice: '15 Tr/tháng',
    status: 'Cam kết giao sớm nhất MB',
    images: [
      '/images/cars/Carnival/1.JPG',
      '/images/cars/Carnival/2.JPG',
      '/images/cars/Carnival/3.JPG',
      '/images/cars/Carnival/4.JPG',
      '/images/cars/Carnival/5.JPG',
      '/images/cars/Carnival/6.JPG'
    ],
    group: 'mpv',
    category: 'family'
  }
];

export const USP_ITEMS: USPItem[] = [
  {
    id: 1,
    icon: Wallet,
    title: 'GIÁ ĐÁY THỊ TRƯỜNG',
    description: 'Cập nhật khuyến mãi 2 giờ/lần. Luôn có "deal" độc quyền.'
  },
  {
    id: 2,
    icon: CheckCircle2,
    title: 'KHO XE LỚN NHẤT',
    description: 'Sẵn xe, đủ màu, giao ngay. Không phải chờ đợi.'
  },
  {
    id: 3,
    icon: Truck,
    title: 'DỊCH VỤ 3S CHUẨN',
    description: 'Bảo hành, bảo dưỡng chính hãng tiêu chuẩn toàn cầu.'
  },
  {
    id: 4,
    icon: HeartHandshake,
    title: 'HỖ TRỢ TẬN TÂM',
    description: 'Đội ngũ tư vấn chuyên nghiệp, hỗ trợ thủ tục A-Z.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    image: '/images/customer1.jpg',
    customerName: 'Anh Hùng (Gia Lâm)',
    quote: 'Cảm ơn đội ngũ KIA Long Biên đã hỗ trợ anh lấy xe kịp giờ đẹp. Dịch vụ rất chuyên nghiệp!'
  },
  {
    id: 2,
    image: '/images/customer2.jpg',
    customerName: 'Chị Lan (Long Biên)',
    quote: 'Showroom rộng đẹp, nhân viên nhiệt tình. Thủ tục nhanh gọn.'
  },
  {
    id: 3,
    image: '/images/customer3.jpg',
    customerName: 'Gia đình anh Minh (Hà Đông)',
    quote: 'Giá tốt nhất Hà Nội, xe giao đúng hẹn. Rất hài lòng với KIA Long Biên.'
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: 'Mazda3 Premium Sedan hạng C',
    thumbnail: '/images/Anhdep1.jpg',
    views: '125K',
    link: 'https://www.tiktok.com/@minh.nguyn.car/video/7593175863605103893'
  },
  {
    id: 2,
    title: 'Bàn giao KIA Seltos cùng khách yêu',
    thumbnail: '/images/Anhdep2.jpg',
    views: '89K',
    link: 'https://www.tiktok.com/@minh.nguyn.car/video/7601378010687622421'
  },
  {
    id: 3,
    title: 'M3 và CX5 đâu là lựa chọn của bạn?',
    thumbnail: '/images/kia-long-bien.webp',
    views: '210K',
    link: 'https://www.tiktok.com/@minh.nguyn.car/video/7594739592562052373'
  }
];

export const CONTACT_INFO = {
  name: 'KIA LONG BIÊN',
  consultantName: 'Nguyễn Ngọc Minh',
  consultantImage: '/images/Sale avatar.jpg',
  role: 'Showroom Chính Hãng 3S',
  phone: '0869.932.031',
  email: 'nguyenngocminh3@thaco.com.vn',
  address: '105A Đ. Lý Sơn, Ngọc Thụy, Long Biên, Hà Nội, Vietnam',
  copyright: '© 2026 KIA Long Biên - Showroom Chính Hãng'
};