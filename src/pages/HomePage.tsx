import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Deals from '../components/Deals';
import OrderOnline from '../components/OrderOnline';
import Social from '../components/Social';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Deals />
      <OrderOnline />
      <Social />
    </main>
  );
};

export default HomePage;