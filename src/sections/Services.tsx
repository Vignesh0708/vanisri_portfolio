import React from 'react';
import Section from '../components/Section';
import { SERVICES } from '../constants/data';
import { Calculator, DollarSign, PieChart, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator size={36} />;
      case 'DollarSign':
        return <DollarSign size={36} />;
      case 'PieChart':
        return <PieChart size={36} />;
      case 'ShieldCheck':
        return <ShieldCheck size={36} />;
      default:
        return null;
    }
  };

  return (
    <Section
      id="services"
      title="Services Offered"
      subtitle="Comprehensive financial services tailored to meet your business needs"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 h-32 w-32 bg-blue-50/50 rounded-bl-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-50/50 transition-colors duration-300"></div>
            
            <div className="mb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-2xl flex items-center justify-center group-hover:from-amber-500 group-hover:to-amber-400 transition-all duration-300">
                {getIconComponent(service.icon)}
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-950 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {service.title === 'Financial Accounting' && (
                <>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Bookkeeping</span>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Balance Sheets</span>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Reconciliation</span>
                </>
              )}
              
              {service.title === 'Tax Compliance' && (
                <>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">TDS Returns</span>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">GST Filing</span>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Tax Planning</span>
                </>
              )}
              
              {service.title === 'Financial Analysis' && (
                <>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Reporting</span>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Forecasting</span>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Risk Assessment</span>
                </>
              )}
              
              {service.title === 'Fraud Detection & Prevention' && (
                <>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Transaction Analysis</span>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Chargeback Management</span>
                  <span className="bg-blue-50 text-blue-950 text-sm py-1.5 px-4 rounded-full font-medium">Security Protocols</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white rounded-2xl shadow-lg p-8 md:p-12">
  <h3 className="text-2xl font-playfair font-semibold mb-8 text-center">
    Why Choose My Services?
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Years Experience */}
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-400 rounded-2xl mx-auto flex items-center justify-center mb-4">
        <span className="text-white text-2xl font-bold">4+</span>
      </div>
      <h4 className="text-lg font-medium mb-2">Years Experience</h4>
      <p className="text-gray-300 text-sm">Proven track record of excellence</p>
    </div>

    {/* Accuracy */}
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-400 rounded-2xl mx-auto flex items-center justify-center mb-4">
        <span className="text-white text-2xl font-bold">100%</span>
      </div>
      <h4 className="text-lg font-medium mb-2">Accuracy</h4>
      <p className="text-gray-300 text-sm">Commitment to error-free work</p>
    </div>

    {/* Timely Delivery */}
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-400 rounded-2xl mx-auto flex items-center justify-center mb-4">
        <span className="text-white text-xl font-bold">⏱️</span>
      </div>
      <h4 className="text-lg font-medium mb-2">Timely Delivery</h4>
      <p className="text-gray-300 text-sm">100% on-time completion without quality compromise</p>
    </div>

    {/* Confidentiality */}
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-400 rounded-2xl mx-auto flex items-center justify-center mb-4">
        <span className="text-white text-xl font-bold">🔒</span>
      </div>
      <h4 className="text-lg font-medium mb-2">Confidentiality</h4>
      <p className="text-gray-300 text-sm">Strict adherence to data privacy and compliance</p>
    </div>

    {/* Professionalism */}
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-400 rounded-2xl mx-auto flex items-center justify-center mb-4">
        <span className="text-white text-xl font-bold">🤝</span>
      </div>
      <h4 className="text-lg font-medium mb-2">Professionalism</h4>
      <p className="text-gray-300 text-sm">Clear communication & client-first mindset</p>
    </div>
  </div>
</div>

    </Section>
  );
};

export default Services;