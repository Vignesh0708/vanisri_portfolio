import {
  BarChart4,
  Database,
  File,
  FileSpreadsheet,
  User,
  Stamp,
  Calculator,
  Landmark,
  Coins,
  CreditCard,
  DollarSign,
  PieChart,
  ShieldCheck,
  Banknote,
  FileText,
  TrendingUp,
  Users,
  BarChart2,
  Linkedin,
  Mail,
  Twitter
} from 'lucide-react';

import { NavItem, Skill, Service, Experience,  SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
 
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  {
    name: 'Accounting',
    icon: 'Calculator',
    description: 'Expert in financial accounting principles and practices with comprehensive knowledge of accounting standards.'
  },
  {
    name: 'Banking Operations',
    icon: 'Landmark',
    description: 'Expertise in transaction processing, documentation, and compliance within high-volume environments.'
  },
  {
    name: 'Financial Reconciliation',
    icon: 'Coins',
    description: 'Skilled in reconciling check deposits, ledgers, and financial adjustments with high accuracy.'
  },
  {
    name: 'Regulatory Compliance',
    icon: 'Stamp',
    description: 'Well-versed in banking guidelines, internal policies, and audit documentation standards.'
  },
  {
    name: 'Customer Support',
    icon: 'User',
    description: 'Efficient in handling internal queries and resolving operational issues with professionalism.'
  },
  {
    name: 'Data Accuracy & Validation',
    icon: 'Database',
    description: 'Strong attention to detail in verifying financial data and ensuring processing integrity.'
  },
  {
    name: 'Documentation & Reporting',
    icon: 'File',
    description: 'Proficient in preparing financial records, summaries, and audit-ready documentation.'
  },
  {
    name: 'Process Improvement',
    icon: 'Banknote',
    description: 'Experience in identifying workflow inefficiencies and contributing to operational enhancements.'
  },
  {
    name: 'Ms Excel & Google Sheets',
    icon: 'FileSpreadsheet',
    description: 'Advanced skills in Excel and Google Sheets for data analysis, reporting, and financial modeling.'
  },
  {
    name: 'Banking Software Tools',
    icon: 'Banknote',
    description: 'Familiar with enterprise-level financial tools and document management systems.'
  },
  {
    name: 'Team Collaboration',
    icon: 'User',
    description: 'Strong interpersonal skills for working cross-functionally in deadline-driven environments.'
  },
  {
    name: 'TDS & GST',
    icon: 'DollarSign',
    description: 'Specialized in TDS deductions, returns, and GST compliance, filings, and reconciliations.'
  },
  {
    name: 'Tally ERP9 & Prime',
    icon: 'FileSpreadsheet',
    description: 'Advanced proficiency in Tally ERP9 and Prime for financial management and accounting solutions.'
  },
  {
    name: 'Fraud Analysis',
    icon: 'ShieldCheck',
    description: 'Skilled in identifying fraudulent transactions and implementing preventive measures.'
  },
  {
    name: 'Chargeback Management',
    icon: 'CreditCard',
    description: 'Expertise in handling chargeback disputes and mitigation strategies.'
  },
  {
    name: 'Financial Analysis',
    icon: 'BarChart4',
    description: 'Proficient in financial data analysis, reporting, and forecasting.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Financial Accounting',
    description: 'Comprehensive accounting services including bookkeeping, financial statement preparation, and account reconciliations.',
    icon: 'Calculator',
  },
  {
    title: 'Tax Compliance',
    description: 'Expert assistance with TDS and GST compliance, filing returns, and ensuring adherence to tax regulations.',
    icon: 'DollarSign',
  },
  {
    title: 'Financial Analysis',
    description: 'In-depth analysis of financial data to provide actionable insights for business improvement and growth.',
    icon: 'PieChart',
  },
  {
    title: 'Fraud Detection & Prevention',
    description: 'Specialized services to identify fraudulent patterns and implement preventive measures to safeguard financial assets.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Internal Audits',
    description: 'Thorough internal auditing to ensure financial integrity and regulatory compliance within your organization.',
    icon: 'FileText',
  },
  {
    title: 'Budgeting & Forecasting',
    description: 'Helping businesses plan better with precise budgeting and future-focused financial forecasting services.',
    icon: 'TrendingUp',
  },
  {
    title: 'Payroll Management',
    description: 'End-to-end payroll services including salary calculations, deductions, and compliance with labor laws.',
    icon: 'Users',
  },
  {
    title: 'MIS Reporting',
    description: 'Customized Management Information System reports to track key business metrics and financial KPIs.',
    icon: 'BarChart2',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Antares Publishing Service Private Limited',
    role: 'FINANCE EXECUTIVE',
    period: '2021 - 2025',
    description: 'Leading financial analysis and reporting for corporate clients. Managing TDS and GST compliance, conducting fraud analysis, and providing actionable insights through comprehensive financial reports.'
  },
  {
    company: 'Wells Fargo & Co',
    role: 'OPERATIONS PROCESSOR',
    period: '2025 - Present',
    description: 'Responsible for processing financial transactions, ensuring compliance with banking regulations, and maintaining accurate records. Collaborated with cross-functional teams to enhance operational efficiency. Managed chargeback processes, fraud detection, and credit card analyses. Implemented preventive measures that reduced fraud incidents by 30% and optimized chargeback resolution processes. Handled accounting operations using Tally ERP9, prepared financial statements, and assisted in tax filings. Gained comprehensive experience in bookkeeping and financial reconciliations.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO',
    company: 'Horizon Enterprises',
    testimonial: 'Vanishree transformed our financial operations with her expertise in Tally and GST compliance. Her analytical skills have been invaluable for our business growth.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Priya Sharma',
    role: 'Finance Director',
    company: 'Vertex Solutions',
    testimonial: 'Working with Vanishree has been exceptional. Her attention to detail in fraud analysis and chargeback management saved us from significant financial losses.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Amit Patel',
    role: 'Business Owner',
    company: 'Patel Retailers',
    testimonial: "Vanishree's expertise in TDS and GST has been a game-changer for our compliance issues. Her thorough understanding of tax regulations has kept us compliant and saved us money.",
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vanishree-d/',
    icon: 'Linkedin'
  },
  {
    platform: 'Email',
    url: 'mailto:vanisridheena0701@gmail.com',
    icon: 'Mail'
  }
];
