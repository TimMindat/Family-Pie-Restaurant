import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMMPm-4KKbmtfLcG0w2GyCYpCzOSTHNc8FC6p1X=s680-w680-h510"
                alt="Family Restaurant"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 p-4 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              About Family Pie
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Family Pie, we bring families together with fresh, delicious pizzas, savory pies, sweet treats, and juicy burgers. Located in the heart of Madinah, we focus on quality, comfort, and unforgettable flavors!
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">We use only the finest ingredients for our dishes.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Family First</h3>
                <p className="text-gray-600">Creating memories one meal at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;