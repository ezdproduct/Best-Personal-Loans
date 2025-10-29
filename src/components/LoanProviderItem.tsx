import React from 'react';
import { ChevronRight, Check, Info, Star, Users } from 'lucide-react';
import { LoanProvider } from '@/data/loanProviders';
import { LoanLogo } from './LoanLogo';
import StarRating from './StarRating';

interface LoanProviderItemProps {
  provider: LoanProvider;
}

const LoanProviderItem: React.FC<LoanProviderItemProps> = ({ provider }) => {
  // Using detailed fields from the new data structure
  const features = [
    `<strong>APR:</strong> ${provider.apr}`,
    `<strong>Loan Term:</strong> ${provider.loanTerm}`,
    `<strong>Min. Credit Score:</strong> ${provider.minCreditScore}`,
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative pt-8">
      {/* Header Tab */}
      <div className="absolute top-0 left-0 bg-teal-600 text-white px-4 py-1 rounded-br-lg flex items-center space-x-3">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-teal-600 font-bold text-sm">{provider.rank}</span>
        {provider.featureTag && <span className="font-semibold text-sm">{provider.featureTag}</span>}
      </div>
      
      {/* Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Col 1: Logo & Reviews */}
        <div className="col-span-12 md:col-span-3">
          <LoanLogo logoType={provider.platformName} size="large" />
          {/* Removed NMLS and Reviews since they are not consistently available in the new data */}
        </div>
        
        {/* Col 2: Score */}
        <div className="col-span-12 md:col-span-2 text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold text-gray-900">{provider.score.toFixed(1)}</span>
            <StarRating score={provider.score} />
            <div className="text-sm text-gray-500 mt-1 font-bold hover:underline cursor-pointer flex items-center">
              Our score <Info className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>

        {/* Col 3: Features */}
        <div className="col-span-12 md:col-span-4">
          <h4 className="font-bold text-gray-900 text-lg mb-3">{provider.highlights[0]}</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-teal-500 w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: CTA */}
        <div className="col-span-12 md:col-span-3 text-center">
          <a href={provider.refLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 text-lg">
            {provider.ctaText} <ChevronRight className="w-5 h-5 inline ml-2" />
          </a>
        </div>
      </div>

      {/* Promo Bar (Removed since not in new data) */}
    </div>
  );
};

export default LoanProviderItem;