import React from 'react';
import { Bot } from 'lucide-react';

const VitaAvatar = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
        <Bot className="w-8 h-8 text-[#4b6efd]" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white">Vita Health Assistant</h1>
        <p className="text-white/80">Your personal health companion</p>
      </div>
    </div>
  );
};

export default VitaAvatar;