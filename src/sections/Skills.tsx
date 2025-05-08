import React from 'react';
import Section from '../components/Section';
import { SKILLS } from '../constants/data';
import { BarChart4, Calculator, CreditCard, DollarSign, FileSpreadsheet, ShieldCheck } from 'lucide-react';

const Skills: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator size={36} />;
      case 'DollarSign':
        return <DollarSign size={36} />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet size={36} />;
      case 'ShieldCheck':
        return <ShieldCheck size={36} />;
      case 'CreditCard':
        return <CreditCard size={36} />;
      case 'BarChart4':
        return <BarChart4 size={36} />;
      default:
        return null;
    }
  };

  return (
    <Section
      id="skills"
      title="My Skills & Expertise"
      subtitle="Specialized skills developed through education and professional experience"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skill, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-950 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
              {getIconComponent(skill.icon)}
            </div>
            
            <h3 className="text-xl font-semibold text-blue-950 mb-3">{skill.name}</h3>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
  <h3 className="text-2xl font-playfair font-semibold text-blue-950 text-center mb-10">
    Technical Proficiencies
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
    {[
      { name: 'Tally ERP9 & Prime', percentage: 95 },
      { name: 'GST Compliance', percentage: 90 },
      { name: 'TDS Management', percentage: 90 },
      { name: 'Financial Analysis', percentage: 85 },
      { name: 'Fraud Detection', percentage: 85 },
      { name: 'Credit Card Analysis', percentage: 80 },
      { name: 'MS Excel & Google Sheets', percentage: 95 },
      { name: 'Reconciliation (Bank, Ledger)', percentage: 90 },
      { name: 'MIS Reporting', percentage: 85 },
      { name: 'Internal Auditing', percentage: 80 },
      { name: 'Payroll Processing', percentage: 80 },
      { name: 'Chargeback Management', percentage: 75 },
    ].map((skill, index) => (
      <div key={index}>
        <div className="flex justify-between mb-2">
          <p className="font-medium text-gray-700">{skill.name}</p>
          <p className="text-amber-500 font-semibold">{skill.percentage}%</p>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full">
          <div
            className="h-2.5 bg-gradient-to-r from-blue-950 to-amber-500 rounded-full"
            style={{ width: `${skill.percentage}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

    </Section>
  );
};

export default Skills;