import React from 'react';
import Button from '../components/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="h-screen relative bg-gradient-to-r from-blue-950 to-blue-900 flex items-center text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-amber-500 font-medium mb-4 text-lg animate-fadeInUp">Finance Professional</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight mb-6 animate-fadeInUp animation-delay-200">
            Vanishree D
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 mb-8 animate-fadeInUp animation-delay-400">
           
            <span className="font-medium">Finance Professional | Accounting & Compliance Specialist | Fraud & Chargeback Analyst</span> <br />
            With 4+ years of experience, I specialize in streamlining financial operations, ensuring tax compliance, and safeguarding businesses through expert fraud detection. I bring precision, trust, and deep expertise in Tally ERP9 & Prime to every financial challenge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-600">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} className="text-amber-500" />
      </a>
    </section>
  );
};

export default Hero;