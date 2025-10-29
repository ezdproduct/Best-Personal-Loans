import React from 'react';
import { CheckCircle, FileText, Layers, Trophy, CalendarDays, Clock, Home, Banknote } from 'lucide-react';
import { FundComLogo } from './LoanLogo';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')` 
        }}
      >
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/70"></div>
      
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center text-white z-10">
        
        {/* Mobile Header Content */}
        <div className="md:hidden">
            <p className="text-gray-300 text-xs mb-4">
              The offers below and their placement are from companies from which we receive compensation. 
              <a href="#" className="underline text-white hover:text-gray-300">Advertising Disclosure</a>
            </p>
            <div className="flex justify-center mb-4">
                <FundComLogo className="h-10" />
            </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
          Best <span className="text-blue-400">Personal Loans</span> in 2025
        </h1>

        <div className="flex items-center justify-center space-x-2 text-gray-200 mb-6">
            <CalendarDays className="w-4 h-4" />
            <span>Valid as of <strong>October 29, 2025</strong></span>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 max-w-md mx-auto text-gray-200">
          <div className="flex items-center justify-center space-x-2">
            <Clock className="text-blue-400 w-5 h-5" />
            <span>Quick Approvals</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Banknote className="text-blue-400 w-5 h-5" />
            <span>Transparent Fees</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Layers className="text-blue-400 w-5 h-5" />
            <span>Flexible Amounts</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Home className="text-blue-400 w-5 h-5" />
            <span>Competitive Rates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;