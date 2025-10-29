import React from 'react';
import { ChevronRight } from 'lucide-react';
import { LoanProvider } from '@/data/loanProviders';
import { LoanLogo } from './LoanLogo';

interface LoanCardProps {
  provider: LoanProvider;
}

const LoanCard: React.FC<LoanCardProps> = ({ provider }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <LoanLogo logoType={provider.platformName} size="small" />
          <div className="text-right">
            <span className="text-3xl font-extrabold text-gray-900">{provider.score.toFixed(1)}</span>
            <div className="text-sm text-gray-500">Our score</div>
          </div>
        </div>
        <p className="text-gray-700 text-lg mb-6">
          {provider.highlights[0]}
        </p>
      </div>
      <a href={provider.refLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        {provider.ctaText} <ChevronRight className="w-4 h-4 inline ml-1" />
      </a>
    </div>
  );
};

export default LoanCard;