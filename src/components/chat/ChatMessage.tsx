import React from 'react';
import { Bot } from 'lucide-react';

interface ChatMessageProps {
  type: 'bot' | 'user';
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, content }) => {
  return (
    <div className={`flex items-start gap-3 ${type === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        type === 'bot' ? 'bg-[#4b6efd]' : 'bg-gray-200'
      }`}>
        {type === 'bot' ? (
          <Bot className="w-5 h-5 text-white" />
        ) : (
          <div className="w-5 h-5 text-gray-600">U</div>
        )}
      </div>
      <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${
        type === 'bot' 
          ? 'bg-white text-gray-800' 
          : 'bg-[#4b6efd] text-white'
      }`}>
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;