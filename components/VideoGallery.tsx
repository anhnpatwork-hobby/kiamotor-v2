import React from 'react';
import { Play, MessageCircle } from 'lucide-react';
import { VIDEOS } from '../constants';

const VideoGallery: React.FC = () => {
  return (
    <section id="videos" className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black font-montserrat mb-4 uppercase tracking-tighter">
              Thực Tế Trải Nghiệm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kia-red to-red-600">Tại KIA Long Biên</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              Đừng vội mua khi chưa xem video này. Đánh giá chân thực ưu/nhược điểm từng dòng xe từ đội ngũ chuyên gia.
            </p>
          </div>

          <a href="https://www.tiktok.com/@minh.nguyn.car" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
            <span>Xem kênh TikTok</span>
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden cursor-pointer border border-gray-800 hover:border-gray-600 transition-colors"
            >
              <img
                src={video.thumbnail || 'https://via.placeholder.com/400x711?text=KIA+Video'}
                alt={video.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x711?text=KIA+Video';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-kia-red group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-2 text-gray-300 text-xs font-bold mb-2">
                  <span className="bg-black/50 px-2 py-1 rounded backdrop-blur-md">TikTok Review</span>
                  <span>{video.views} Views</span>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-white leading-tight group-hover:text-red-400 transition-colors">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default VideoGallery;