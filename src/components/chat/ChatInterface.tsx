import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { useChat } from '../../hooks/useChat';

const ChatInterface = () => {
  const { messages, currentQuestion, handleAnswer } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {currentQuestion && (
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="space-y-4">
            {currentQuestion.options ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="px-4 py-2 rounded-lg border border-[#4b6efd] text-[#4b6efd] hover:bg-[#4b6efd] hover:text-white transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type={currentQuestion.type || 'text'}
                placeholder={currentQuestion.placeholder}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4b6efd] focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAnswer((e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = '';
                  }
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;