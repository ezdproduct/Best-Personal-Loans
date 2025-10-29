import React from 'react';
import { ChevronRight, Info, Star } from 'lucide-react';
import { LoanProvider } from '@/data/loanProviders';
import { LoanLogo } from './LoanLogo';

interface LoanCardProps {
  provider: LoanProvider;
}

const LoanCard: React.FC<LoanCardProps> = ({ provider }) => {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <LoanLogo logoType={provider.platformName} size="small" />
          <div className="text-right">
            <div className="flex items-center justify-end space-x-1">
                <Star className="w-5 h-5 text-teal-500 fill-current" />
                <span className="text-2xl font-extrabold">{provider.score.toFixed(1)}</span>
            </div>
            <div className="text-sm text-gray-500 flex items-center justify-end">
                Our score <Info className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-base mb-6">
          {provider.highlights[0]}
        </p>
      </div>
      <a href={provider.refLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
        View Rates <ChevronRight className="w-4 h-4 inline ml-1" />
      </a>
    </div>
  );
};

export default LoanCard;