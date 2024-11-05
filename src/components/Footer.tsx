import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold">Vitalstats</span>
            </div>
            <p className="text-gray-400">
              Revolutionizing healthcare with seamless patient data management solutions.
            </p>
          </div>
          
          {[
            {
              title: "Company",
              links: ["About", "Features", "Team", "Careers"]
            },
            {
              title: "Support",
              links: ["Help Center", "Privacy Policy", "Terms of Service"]
            },
            {
              title: "Contact",
              links: ["hello@vitalstats.com", "+1 (555) 123-4567", "123 Health Street, NY"]
            }
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Vital Health Solutions Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;