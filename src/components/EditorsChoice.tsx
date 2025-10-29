import React from 'react';
import { LoanProvider } from '@/data/loanProviders';
import { LoanLogo } from './LoanLogo';
import StarRating from './StarRating';
import { Check, ChevronRight, Info, Users } from 'lucide-react';

interface EditorsChoiceProps {
  provider: LoanProvider;
}

const EditorsChoice: React.FC<EditorsChoiceProps> = ({ provider }) => {
  if (!provider) return null;

  const features = [
    `<strong>APR:</strong> ${provider.apr}`,
    `<strong>Loan Term:</strong> ${provider.loanTerm}`,
    `<strong>Min. Credit Score:</strong> ${provider.minCreditScore}`,
  ];

  return (
    <div className="bg-gray-700 text-white rounded-lg p-6 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Col 1: Logo & Score */}
        <div className="col-span-12 md:col-span-3 flex flex-col items-center text-center">
          <LoanLogo logoType={provider.platformName} size="large" />
          {provider.nmls && <span className="text-xs text-gray-400 mt-1">NMLS# {provider.nmls}</span>}
          {provider.reviews > 0 && (
            <div className="mt-4 flex items-center space-x-2">
              <span className="font-bold">{provider.reviews.toLocaleString()} Reviews</span>
              <span className="text-sm">Trustpilot</span>
            </div>
          )}
          <div className="mt-4">
            <span className="text-5xl font-extrabold">{provider.score.toFixed(1)}</span>
            <StarRating score={provider.score} />
            <div className="text-sm text-gray-400 mt-1 flex items-center justify-center">
              Our score <Info className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>

        {/* Col 2: Features */}
        <div className="col-span-12 md:col-span-6">
          <h4 className="font-bold text-xl mb-3">{provider.highlights[0]}</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-teal-300 w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: feature.replace(/:/g, '<strong>:</strong>') }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: CTA */}
        <div className="col-span-12 md:col-span-3 text-center">
          <a href={provider.refLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-teal-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 text-lg">
            {provider.ctaText} <ChevronRight className="w-5 h-5 inline ml-2" />
          </a>
          {provider.visitLinkText && <a href={provider.refLink} target="_blank" rel="noopener noreferrer" className="block hover:underline mt-3 font-semibold">{provider.visitLinkText}</a>}
        </div>
      </div>
      {provider.promoBarText && (
        <div className="border-t border-gray-600 mt-4 pt-4 text-center">
          <div className="flex items-center justify-center text-teal-300 font-semibold">
            <Users className="w-4 h-4 mr-2" />
            <span>{provider.promoBarText}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorsChoice;