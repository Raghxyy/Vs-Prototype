import React, { useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  extendedInfo: {
    benefits: string[];
    stats: {
      [key: string]: string;
    };
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index, extendedInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`transition-all duration-500 ease-in-out cursor-pointer ${
        isExpanded ? 'bg-white rounded-3xl shadow-xl' : 
        `flex items-center gap-8 p-8 rounded-2xl bg-gradient-to-r ${
          isEven ? 'from-white/90 to-white/70' : 'from-white/70 to-white/90'
        } hover:shadow-lg`
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`transition-all duration-500 ${isExpanded ? 'p-8' : ''}`}>
        <div className={`flex items-center gap-8 ${isExpanded ? 'mb-6' : ''}`}>
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#6d8cff] to-[#4b6efd] text-white flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-800">Key Benefits</h4>
            <ul className="space-y-2">
              {extendedInfo.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[#4b6efd]"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-4">Performance Metrics</h4>
            <div className="grid gap-4">
              {Object.entries(extendedInfo.stats).map(([key, value], i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  <div className="text-lg font-semibold text-[#4b6efd]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;