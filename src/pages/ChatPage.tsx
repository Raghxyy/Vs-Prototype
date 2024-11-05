import React from 'react';
import ChatInterface from '../components/chat/ChatInterface';
import VitaAvatar from '../components/chat/VitaAvatar';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8ea7fa] to-[#e8eefa]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-[#6d8cff] to-[#4b6efd]">
            <VitaAvatar />
          </div>
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;