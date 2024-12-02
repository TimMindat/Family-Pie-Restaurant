import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Deals from './components/Deals';
import OrderOnline from './components/OrderOnline';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen pb-16 md:pb-0">
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          <Deals />
          <OrderOnline />
          <Social />
        </main>
        <Footer />
        <MobileNav />
      </div>
    </LanguageProvider>
  );
}

export default App;