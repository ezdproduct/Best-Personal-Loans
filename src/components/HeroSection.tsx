import React from 'react';
import { FundComLogo } from './LoanLogo';
import { LoanProvider } from '@/data/loanProviders';
import LoanCard from './LoanCard';
import { Briefcase, Home, Layers, Zap } from 'lucide-react';

interface HeroSectionProps {
    topProviders: LoanProvider[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ topProviders }) => {
  return (
    <div className="relative bg-gray-800 text-white overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')` 
        }}
      ></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <header className="py-4 flex justify-between items-center">
            <FundComLogo className="h-10" />
            <div className="text-right text-xs text-gray-300 max-w-xs">
                The offers below and their placement are from companies from which we receive compensation. <a href="#" className="underline hover:text-white">Advertising Disclosure</a>
            </div>
        </header>

        <div className="text-center py-12 md:py-20">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
              Best <span className="text-teal-300">Personal Loans</span> in 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">
              Get fast cash from top-rated lenders
            </p>
            <p className="max-w-3xl mx-auto text-gray-300 mb-8">
              Compare top lenders to get the best personal loans with the lowest rates and most flexible terms. These companies offer customized loans for almost any need, from consolidating debt to home improvement.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-12 text-gray-200">
                <div className="flex items-center space-x-2"><Zap className="w-4 h-4 text-teal-300" /><span>Quick Approvals</span></div>
                <div className="flex items-center space-x-2"><Briefcase className="w-4 h-4 text-teal-300" /><span>Transparent Fees</span></div>
                <div className="flex items-center space-x-2"><Layers className="w-4 h-4 text-teal-300" /><span>Flexible Amounts</span></div>
                <div className="flex items-center space-x-2"><Home className="w-4 h-4 text-teal-300" /><span>Competitive Rates</span></div>
            </div>
        </div>

        <div className="pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProviders.map(provider => (
            <LoanCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;