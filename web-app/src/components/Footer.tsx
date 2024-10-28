import React from 'react';
import { FaYoutube, FaTiktok, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

export const Footer = () => {
  const socialLinks = [
    { icon: FaYoutube, href: 'https://youtube.com/@askmaya', label: 'YouTube', hoverText: 'Watch Maya in action!' },
    { icon: FaTiktok, href: 'https://tiktok.com/@askmaya', label: 'TikTok', hoverText: 'Catch our latest tips!' },
    { icon: FaXTwitter, href: 'https://x.com/askmaya', label: 'X', hoverText: 'Join the conversation!' },
    { icon: FaEnvelope, href: 'mailto:hello@askmaya.com', label: 'Email', hoverText: 'Drop us a line!' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-12 sm:mt-16">
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4 sm:mb-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-apple-blue transition-colors group relative"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
                    {link.hoverText}
                  </span>
                </a>
              );
            })}
          </div>
          <p className="text-xs sm:text-sm text-gray-500 text-center px-4">
            © 2023 Ask Maya. Making English learning actually fun! ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;