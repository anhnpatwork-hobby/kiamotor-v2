import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import AllProductsView from './components/AllProductsView';
import ProductDetailView from './components/ProductDetailView';
import PricingView from './components/PricingView';
import InstallmentView from './components/InstallmentView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

export type PageView = 'home' | 'products' | 'product-detail' | 'pricing' | 'finance' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);

  const navigateTo = (view: PageView, id?: string) => {
    window.scrollTo(0, 0);
    if (id) {
      setSelectedCarId(id);
    }
    setCurrentView(view);
  };

  // Handle hash changes for simple browser back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#products-page') {
        setCurrentView('products');
      } else if (hash === '#pricing') {
        setCurrentView('pricing');
      } else if (hash === '#finance') {
        setCurrentView('finance');
      } else if (hash === '#contact') {
        setCurrentView('contact');
      } else if (!hash || hash === '#') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={navigateTo} currentView={currentView} />
      
      <main>
        {currentView === 'home' && (
          <HomeView onNavigate={navigateTo} />
        )}
        {currentView === 'products' && (
          <AllProductsView onNavigate={navigateTo} />
        )}
        {currentView === 'pricing' && (
          <PricingView onNavigate={navigateTo} />
        )}
        {currentView === 'finance' && (
          <InstallmentView />
        )}
        {currentView === 'contact' && (
          <ContactView />
        )}
        {currentView === 'product-detail' && selectedCarId && (
          <ProductDetailView carId={selectedCarId} onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <MobileStickyBar />
    </div>
  );
};

export default App;