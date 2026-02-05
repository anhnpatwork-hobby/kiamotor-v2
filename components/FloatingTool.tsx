import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { CAR_MODELS } from '../constants';

import { PageView } from '../App';

interface FloatingToolProps {
  onNavigate?: (view: PageView, id?: string) => void;
}

const FloatingTool: React.FC<FloatingToolProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 relative z-30 -mt-24 mb-16">
      <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 md:p-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row items-end gap-4 lg:gap-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full">
            {/* Select Model */}
            <div className="relative group w-full">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Dòng Xe</label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-800 py-4 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-400 font-bold transition-colors cursor-pointer text-sm">
                  <option>Chọn xe...</option>
                  {CAR_MODELS.map(car => (
                    <option key={car.id} value={car.id}>{car.name}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Select Version */}
            <div className="relative group w-full">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Phiên Bản</label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-800 py-4 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-400 font-bold transition-colors cursor-pointer text-sm">
                  <option>Chọn phiên bản...</option>
                  <option>Premium</option>
                  <option>Signature</option>
                  <option>Luxury</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="relative group w-full">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Khu Vực</label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-800 py-4 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-400 font-bold transition-colors cursor-pointer text-sm">
                  <option value="HN">Hà Nội (12%)</option>
                  <option value="province">Tỉnh Khác</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Button - Matches Screenshot Dark Gray */}
          <div className="w-full lg:w-auto min-w-[200px]">
            <a
              href="#pricing"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('pricing');
                }
              }}
              className="w-full h-full bg-gray-600 text-white font-montserrat font-bold py-4 px-8 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2 uppercase text-sm tracking-wide"
            >
              TÍNH GIÁ NGAY
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingTool;