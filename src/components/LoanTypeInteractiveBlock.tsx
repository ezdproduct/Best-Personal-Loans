import React from 'react';
import { Landmark } from 'lucide-react';
import StyledOutlineButton from './StyledOutlineButton';
import { loanProviders } from '@/data/loanProviders';

const LoanTypeInteractiveBlock: React.FC = () => {
  // Map buttons to the first four provider links
  const linkButtons = [
    { label: 'Debt Consolidation Loan', href: loanProviders[0]?.refLink || '#' },
    { label: 'Home Improvement', href: loanProviders[1]?.refLink || '#' },
    { label: 'Large Purchases', href: loanProviders[2]?.refLink || '#' },
    { label: 'Other', href: loanProviders[3]?.refLink || '#' },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Need help finding the right lender for you?
      </h2>
      
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Column: Title, Icon, Progress */}
          <div className="col-span-12 md:col-span-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <span className="text-7xl text-teal-600 bg-teal-50 p-4 rounded-full">
                <Landmark className="w-16 h-16" />
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              What kind of loan do you need today?
            </h3>
            
            {/* Progress Bar */}
            <div className="text-left mt-4">
              <p className="text-sm text-gray-500 mb-1">Step 1/3</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: "33.33%" }}></div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Buttons */}
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col space-y-4">
              {linkButtons.map((button) => (
                <a
                  key={button.label}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <StyledOutlineButton>{button.label}</StyledOutlineButton>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTypeInteractiveBlock;