import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Social = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/familypie12",
      icon: Instagram,
      color: "bg-pink-500"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@familypieksa",
      icon: MessageCircle,
      color: "bg-black"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61563899143978",
      icon: Facebook,
      color: "bg-blue-600"
    },
    {
      name: "Telegram",
      url: "https://t.me/Familypie12bot",
      icon: MessageCircle,
      color: "bg-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Stay Connected with Family Pie!
          </h2>
          <p className="text-lg text-gray-600">
            Follow us on social media for the latest updates and special offers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className={`${social.color} p-4 rounded-full text-white mb-4`}>
                  <social.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-200">
                  {social.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;