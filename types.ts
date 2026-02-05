import { LucideIcon } from 'lucide-react';

export interface CarModel {
  id: string;
  name: string;
  tagline: string; // Khẩu hiệu/Đặc điểm
  version: string; // Phiên bản tiêu biểu
  power: string;
  price: string;
  installmentPrice: string; // Giá trả góp
  status: string; // Trạng thái: Sẵn xe, Đủ màu...
  images: string[];
  group: 'sedan' | 'suv' | 'mpv'; // Nhóm xe để phân loại
  category: 'urban' | 'sedan' | 'suv' | 'family'; // Giữ lại để tương thích ngược
}

export interface USPItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  image: string;
  customerName: string;
  quote: string;
}

export interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  link: string;
}

export enum LocationType {
  HANOI = "Hà Nội",
  PROVINCE = "Tỉnh Khác"
}