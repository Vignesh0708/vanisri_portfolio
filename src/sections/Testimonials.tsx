import React, { useState } from 'react';
import Section from '../components/Section';
import { TESTIMONIALS } from '../constants/data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section
      id="testimonials"
      title="Client Testimonials"
      subtitle="What my clients say about my financial services"
      className="bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute top-8 left-0 text-blue-100">
            <Quote size={160} />
          </div>
          
          {/* Testimonial slider */}
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12 z-10">
            <div className="testimonial-slider">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-amber-500">
                  <img 
                    src={TESTIMONIALS[currentIndex].image} 
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <p className="text-gray-600 text-lg italic mb-8 relative z-10">
                  "{TESTIMONIALS[currentIndex].testimonial}"
                </p>
                
                <h4 className="text-xl font-semibold text-blue-950">{TESTIMONIALS[currentIndex].name}</h4>
                <p className="text-amber-500 font-medium">
                  {TESTIMONIALS[currentIndex].role}, {TESTIMONIALS[currentIndex].company}
                </p>
              </div>
            </div>
            
            <div className="absolute top-1/2 -left-5 transform -translate-y-1/2">
              <button 
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-950 hover:bg-blue-950 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-5 transform -translate-y-1/2">
              <button 
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-950 hover:bg-blue-950 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Testimonial indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;