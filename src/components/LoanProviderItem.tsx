import React from 'react';
import { ChevronRight, Check, Users, Info, Star } from 'lucide-react';
import { LoanProvider } from '@/data/loanProviders';
import { LoanLogo } from './LoanLogo';
import StarRating from './StarRating';

interface LoanProviderItemProps {
  provider: LoanProvider;
}

const LoanProviderItem: React.FC<LoanProviderItemProps> = ({ provider }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-teal-600 text-white p-3 flex items-center space-x-3">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-teal-600 font-bold text-md">{provider.rank}</span>
        {provider.title && <span className="font-semibold">{provider.title}</span>}
      </div>
      
      {/* Mobile Layout */}
      <div className="p-4 flex flex-col gap-4 md:hidden">
        <div className="flex justify-between items-start">
          <div>
            <LoanLogo logoType={provider.logo} size="large" />
            {provider.nmls && <span className="text-xs text-gray-500 mt-1 block">NMLS# {provider.nmls}</span>}
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-3xl font-extrabold text-gray-900">{provider.score.toFixed(1)}</span>
            <StarRating score={provider.score} />
            <div className="text-xs text-gray-500 mt-1 font-bold hover:underline cursor-pointer flex items-center">
              Our score <Info className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>

        <div className="border border-blue-200 bg-blue-50 text-blue-800 font-semibold rounded-md p-3 text-center text-sm">
          {provider.tagline}
        </div>

        <ul className="space-y-2 text-gray-700 text-sm">
          {provider.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </li>
          ))}
        </ul>

        <a href="#" className="inline-block w-full text-center bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-800 transition duration-300 text-lg">
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

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-12 gap-6 items-center p-6">
        <div className="col-span-12 md:col-span-3">
          <LoanLogo logoType={provider.logo} size="large" />
          {provider.nmls && <span className="text-xs text-gray-500 mt-1 block">NMLS# {provider.nmls}</span>}
          {provider.reviews > 0 && (
            <div className="mt-3 flex items-center space-x-2">
              <span className="font-bold text-gray-800">{provider.reviews.toLocaleString()} Reviews</span>
              <span className="flex items-center text-sm text-gray-700">
                <Star className="fill-green-500 text-green-500 w-4 h-4 mr-1" />
                <strong>Trustpilot</strong>
              </span>
            </div>
          )}
        </div>
        <div className="col-span-12 md:col-span-2">
          <div className="flex flex-col items-start md:items-center">
            <span className="text-5xl font-extrabold text-gray-900">{provider.score.toFixed(1)}</span>
            <StarRating score={provider.score} />
            <div className="text-sm text-gray-500 mt-1 font-bold hover:underline cursor-pointer flex items-center">
              Our score <Info className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h4 className="font-bold text-gray-900 text-xl mb-3">{provider.tagline}</h4>
          <ul className="space-y-2 text-gray-700">
            {provider.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-green-500 w-5 h-5 text-sm mt-1 mr-1 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-3 text-center">
          <a href="#" className="inline-block w-full text-center bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg">
            {provider.ctaText} <ChevronRight className="w-5 h-5 inline ml-2" />
          </a>
          {provider.visitLink && <a href="#" className="block text-blue-600 hover:underline mt-3 font-semibold">{provider.visitLink}</a>}
        </div>
      </div>
      
      {/* Promo Bar */}
      {provider.promoBar && (
        <div className="bg-blue-50 border-t border-blue-200 px-6 py-3">
          <div className="flex items-center justify-center text-blue-800 font-semibold">
            <Users className="w-4 h-4 mr-2" />
            <span>{provider.promoBar}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanProviderItem;