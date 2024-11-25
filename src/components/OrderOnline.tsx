import React from 'react';
import { ExternalLink } from 'lucide-react';

const OrderOnline = () => {
  const platforms = [
    {
      name: "Take.App",
      url: "https://take.app/familypie",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
      name: "Marsool",
      url: "https://mrsool.co/stores/ChIJfR2l72sGuRURnhZxjfHWHvw/%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D9%84%D9%81%D8%B7%D9%8A%D8%B1%D9%87-alfateera",
      image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212"
    },
    {
      name: "HungerStation",
      url: "https://hungerstation.com/sa-ar/restaurant/%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9/%D8%A7%D9%84%D8%AF%D9%88%D9%8A%D9%85%D8%A9/130812",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    }
  ];

  return (
    <section id="order" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Order Online with Ease!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            You can now enjoy Family Pie from the comfort of your home! Order through our trusted platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative">
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                    <span className="inline-flex items-center">
                      Order Now
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/966558088546"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-200"
          >
            Order via WhatsApp
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderOnline;