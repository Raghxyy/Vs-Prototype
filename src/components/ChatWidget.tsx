import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Bot } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-24'
    }`}>
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden animate-slideUp">
          <div className="bg-gradient-to-r from-[#6d8cff] to-[#4b6efd] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">Chat with Vita</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4">
              Hi! I'm Vita, your personal health assistant. Ready to check your vitals?
            </p>
            <a
              href="/chat"
              className="block w-full bg-gradient-to-r from-[#6d8cff] to-[#4b6efd] text-white py-2 px-4 rounded-lg text-center font-semibold hover:shadow-lg transition-all"
            >
              Start Health Check
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#6d8cff] to-[#4b6efd] p-4 rounded-full shadow-lg hover:shadow-xl transition-all animate-bounce"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;