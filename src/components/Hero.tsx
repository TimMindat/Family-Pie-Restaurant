import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-r from-orange-50 to-orange-100"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          alt="Pizza Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Family Pie – Where Delicious Moments Are Shared!
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Experience the perfect blend of flavors with our handcrafted pizzas, savory pies, and juicy burgers.
            Made fresh daily for your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
            >
              View Menu
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://take.app/familypie"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center"
            >
              Order Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="mt-8 bg-orange-500 px-6 py-3 rounded-lg inline-block">
            <p className="text-lg font-semibold">
              🔥 Special Offer: Up to 40% OFF on Pizzas Today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;