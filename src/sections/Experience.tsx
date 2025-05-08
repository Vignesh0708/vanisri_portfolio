import React from 'react';
import Section from '../components/Section';
import { EXPERIENCES } from '../constants/data';

const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="Professional journey through various roles in the finance sector"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
        
        {EXPERIENCES.map((exp, index) => (
          <div 
            key={index}
            className={`relative z-10 flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            {/* Circle in middle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-white"></div>
            
            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
              <div 
                className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow ${
                  index % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'
                }`}
              >
                <h3 className="text-lg font-semibold text-blue-950 mb-1">{exp.role}</h3>
                <p className="text-amber-500 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
            
            {/* Empty space for the other side */}
            <div className="w-5/12"></div>
          </div>
        ))}
        
        {/* Timeline end point */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-8 h-8 rounded-full bg-blue-950 border-4 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;