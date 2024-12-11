import React from 'react';
import { Instagram, Facebook, MessageCircle, Twitter } from 'lucide-react';

export const SocialIcons: React.FC = () => {
  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/familypie12' },
    { Icon: Facebook, href: 'https://facebook.com/profile.php?id=61563899143978' },
    { Icon: MessageCircle, href: 'https://tiktok.com/@familypieksa' },
    { Icon: Twitter, href: 'https://twitter.com/familypie' },
  ];

  return (
    <div className="flex gap-3 absolute bottom-4 right-4">
      {socialLinks.map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-orange-600 transition-colors duration-300"
          aria-label={`Social media link ${index + 1}`}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};