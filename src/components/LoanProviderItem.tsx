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
      {/* Tiêu đề mục */}
      <div className="bg-blue-600 text-white p-4 flex items-center space-x-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold text-lg">{provider.rank}</span>
        {provider.title && <span className="font-semibold text-lg">{provider.title}</span>}
      </div>
      
      {/* Nội dung mục */}
      <div className="p-6 grid grid-cols-12 gap-6 items-center">
        {/* Cột 1: Logo và Đánh giá Trustpilot */}
        <div className="col-span-12 md:col-span-3">
          <LoanLogo logoType={provider.logo} size="large" />
          {provider.nmls && (
            <span className="text-xs text-gray-500 mt-1 block">NMLS# {provider.nmls}</span>
          )}
          
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
        
        {/* Cột 2: Đánh giá */}
        <div className="col-span-12 md:col-span-2">
          <div className="flex flex-col items-start md:items-center">
            <span className="text-5xl font-extrabold text-gray-900">{provider.score.toFixed(1)}</span>
            <StarRating score={provider.score} className="w-5 h-5" />
            <div className="text-sm text-gray-500 mt-1 font-bold hover:underline cursor-pointer flex items-center">
              Our score <Info className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>

        {/* Cột 3: Chi tiết */}
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

        {/* Cột 4: Nút */}
        <div className="col-span-12 md:col-span-3 text-center">
          <a href="#" className="inline-block w-full text-center bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg">
            {provider.ctaText} <ChevronRight className="w-5 h-5 inline ml-2" />
          </a>
          {provider.visitLink && (
            <a href="#" className="block text-blue-600 hover:underline mt-3 font-semibold">
              {provider.visitLink}
            </a>
          )}
        </div>
      </div>
      
      {/* Thanh thông báo dưới cùng */}
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