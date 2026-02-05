import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const HERO_IMAGES = [
  '/images/banner_web%20.jpg',
  '/images/banner_web%202.jpg',
  '/images/banner_web%203.jpg'
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#050505] min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-6 py-2 border border-gray-700 rounded-full mb-8 backdrop-blur-sm bg-white/5">
              <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">
                SHOWROOM KIA CHÍNH HÃNG
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tighter uppercase mb-6">
              <span className="text-white block mb-2">TRẢI NGHIỆM</span>
              <span className="text-kia-red block">XỨNG TẦM</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-lg font-normal leading-relaxed max-w-lg mb-10">
              Sở hữu ngay các dòng xe KIA thời thượng với ưu đãi độc quyền và dịch vụ chăm sóc khách hàng 5 sao.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-kia-red text-white font-bold text-base px-10 py-4 rounded-full shadow-[0_0_30px_-5px_rgba(187,22,43,0.5)] hover:bg-red-700 hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                NHẬN BÁO GIÁ
              </button>
              <a
                href="#products"
                className="bg-transparent border border-gray-600 text-white font-bold text-base px-10 py-4 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-wide"
              >
                XEM DÒNG XE
              </a>
            </div>
          </div>

          {/* Right Image (Carousel) */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative blurred glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-kia-red/10 blur-[100px] rounded-full -z-10"></div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 aspect-[4/3] group">
              {HERO_IMAGES.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`KIA Luxury Experience ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              ))}

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {HERO_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-kia-red w-8' : 'bg-white/50 w-2 hover:bg-white'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;