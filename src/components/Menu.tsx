import React from 'react';
import { ExternalLink } from 'lucide-react';

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our Menu
          </h2>
          <p className="text-lg text-gray-600">
            Discover our wide selection of delicious dishes
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="w-full aspect-video">
            <video
              className="w-full h-full rounded-lg"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://drive.google.com/uc?export=download&id=1VxmMG-HBWmiuUMcTBvgn8Cfyy2xq3Ari"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://take.app/familypie"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200"
            >
              Order Your Favorite Dishes Now!
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;