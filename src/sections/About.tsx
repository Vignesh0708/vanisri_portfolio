import React from 'react';
import Section from '../components/Section';
import { GraduationCap, Briefcase } from 'lucide-react';
import MyImage from '../Assets/WhatsApp Image 2025-05-07 at 21.19.24_6ac6817f.jpg'

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A dedicated finance professional with a passion for financial excellence and accuracy"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="border-8 border-white shadow-xl rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src={MyImage}
              alt="Finance Professional" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-full flex items-center justify-center p-4 shadow-lg">
            <p className="text-white text-center font-bold">
              <span className="block text-2xl">4+</span>
              <span className="text-sm">Years Exp.</span>
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-playfair font-semibold text-blue-950 mb-4">
            Finance Professional <span className="text-amber-500">with Diverse Expertise</span>
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            I am Vanishree, a dedicated finance professional with over 4 years of hands-on experience across multiple facets of finance and accounting. My journey in the financial sector has equipped me with comprehensive knowledge and practical skills that enable me to deliver exceptional results.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-blue-950 p-3 rounded-full text-white mr-4">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• MBA in Finance</li>
                  <li>• Bachelor of Commerce (B.Com)</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-950 p-3 rounded-full text-white mr-4">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Professional Background</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• 4+ years of progressive experience in finance</li>
                  <li>• Worked with 2+ reputable organizations</li>
                  <li>• Expertise in accounting, TDS, GST, and financial analysis</li>
                  <li>• Specialized knowledge in fraud analysis and chargeback management</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-50 px-5 py-3 rounded-full text-blue-950 font-medium">Accounting</div>
            <div className="bg-blue-50 px-5 py-3 rounded-full text-blue-950 font-medium">TDS & GST</div>
            <div className="bg-blue-50 px-5 py-3 rounded-full text-blue-950 font-medium">Tally ERP9</div>
            <div className="bg-blue-50 px-5 py-3 rounded-full text-blue-950 font-medium">Financial Analysis</div>
            <div className="bg-blue-50 px-5 py-3 rounded-full text-blue-950 font-medium">Fraud Detection</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;