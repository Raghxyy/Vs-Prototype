import { useState, useEffect } from 'react';

interface Question {
  text: string;
  type?: string;
  options?: string[];
  placeholder?: string;
}

interface Message {
  type: 'bot' | 'user';
  content: string;
}

const questions: Question[] = [
  {
    text: "Hi! I'm Vita. What's your name?",
    placeholder: "Enter your name"
  },
  {
    text: "What's your age?",
    type: "number",
    placeholder: "Enter your age"
  },
  {
    text: "How would you describe your current health?",
    options: ["Excellent", "Good", "Fair", "Poor"]
  },
  {
    text: "Do you have any chronic conditions?",
    options: ["Yes", "No"]
  },
  {
    text: "How often do you exercise?",
    options: ["Daily", "2-3 times/week", "Occasionally", "Rarely"]
  },
  {
    text: "How would you rate your stress level?",
    options: ["Low", "Moderate", "High", "Very High"]
  }
];

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: "Welcome to your health assessment! Let's get started." }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: questions[currentQuestionIndex].text 
        }]);
      }, 500);
    } else {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: "Thank you for completing the health assessment! I'll analyze your responses and provide personalized recommendations shortly." 
        }]);
      }, 500);
    }
  }, [currentQuestionIndex]);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
    setMessages(prev => [...prev, { type: 'user', content: answer }]);
    setCurrentQuestionIndex(prev => prev + 1);
  };

  return {
    messages,
    currentQuestion: currentQuestionIndex < questions.length ? questions[currentQuestionIndex] : null,
    handleAnswer,
    answers
  };
};