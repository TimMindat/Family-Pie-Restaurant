import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import VisualMenuPage from './pages/VisualMenuPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="min-h-screen pb-16 md:pb-0">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/visual-menu" element={<VisualMenuPage />} />
          </Routes>
          <Footer />
          <MobileNav />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;