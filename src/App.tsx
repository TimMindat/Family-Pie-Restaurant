import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
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
      <div className="min-h-screen">
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
      </div>
    </LanguageProvider>
  );
}

export default App;