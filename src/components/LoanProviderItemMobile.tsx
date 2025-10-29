import React from 'react';
import { ChevronRight, Check, Info, Star } from 'lucide-react';
import { LoanProvider } from '@/data/loanProviders';
import { LoanLogo } from './LoanLogo';
import StarRating from './StarRating';
import ScoreTooltip from './ScoreTooltip';

interface LoanProviderItemProps {
  provider: LoanProvider;
}

const LoanProviderItemMobile: React.FC<LoanProviderItemProps> = ({ provider }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative pt-8">
      {/* Header Tab */}
      <div className="absolute top-0 left-0 bg-teal-600 text-white px-4 py-1 rounded-br-lg flex items-center space-x-3">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-teal-600 font-bold text-sm">{provider.rank}</span>
        {provider.featureTag && <span className="font-semibold text-sm">{provider.featureTag}</span>}
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <LoanLogo logoType={provider.platformName} size="large" />
            {provider.nmls && <span className="text-xs text-gray-500 mt-1 block">NMLS# {provider.nmls}</span>}
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-3xl font-extrabold text-gray-900">{provider.score.toFixed(1)}</span>
            <StarRating score={provider.score} />
            <ScoreTooltip 
              scores={provider.detailedScores} 
              reviews={provider.reviews} 
              platformName={provider.platformName}
            />
          </div>
        </div>

        <div className="border border-blue-200 bg-blue-50 text-blue-800 font-semibold rounded-md p-3 text-center text-sm">
          {provider.highlights[0]}
        </div>

        <ul className="space-y-2 text-gray-700 text-sm">
          {provider.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-teal-500 w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: feature.replace(/:/g, '<strong>:</strong>') }} />
            </li>
          ))}
        </ul>

        <a href={provider.refLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-800 transition duration-300 text-lg">
          {provider.ctaText} <ChevronRight className="w-5 h-5 inline ml-2" />
        </a>

        {provider.reviews > 0 && (
          <div className="text-center flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span className="font-bold">{provider.reviews.toLocaleString()} Reviews</span>
            <span className="flex items-center">
              <Star className="fill-green-500 text-green-500 w-4 h-4 mr-1" />
              <strong>Trustpilot</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanProviderItemMobile;