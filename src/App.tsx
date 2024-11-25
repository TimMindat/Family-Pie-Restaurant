import React from 'react';
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
  );
}

export default App;