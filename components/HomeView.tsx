import React from 'react';
import Hero from './Hero';
import FloatingTool from './FloatingTool';
import BestSellers from './BestSellers';
import FinanceSection from './FinanceSection';
import VideoGallery from './VideoGallery';
import USPSection from './USPSection';
import AboutSection from './AboutSection';
import SocialProof from './SocialProof';
import ConsultationForm from './ConsultationForm';
import { PageView } from '../App';

interface HomeViewProps {
  onNavigate: (view: PageView, id?: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <FloatingTool onNavigate={onNavigate} />
      <BestSellers onNavigate={onNavigate} />
      <div id="finance"><FinanceSection /></div>
      <VideoGallery />
      <USPSection />
      <AboutSection />
      <div id="social"><SocialProof /></div>
      <div id="consult"><ConsultationForm /></div>
    </>
  );
};

export default HomeView;