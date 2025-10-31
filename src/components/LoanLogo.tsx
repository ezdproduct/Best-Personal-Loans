import React from 'react';
import { LoanPlatform } from '@/data/loanProviders';

interface LoanLogoProps {
  logoType: LoanPlatform;
  size?: 'small' | 'large';
}

const LoanLogo: React.FC<LoanLogoProps> = ({ logoType, size = 'large' }) => {
  // Significantly increased logo sizes as requested
  const imageClass = size === 'large' ? 'h-28' : 'h-24';

  switch (logoType) {
    case 'Trusted Online Loans':
      return (
        <img 
          src="/trustedonlineloans-logo.svg" 
          alt="Trusted Online Loans Logo" 
          className={`${imageClass} w-auto`} 
        />
      );
    case 'Best Creditloanexpert':
      return (
        <img 
          src="/creditloanexpert-logo.svg" 
          alt="Best Creditloanexpert Logo" 
          className={`${imageClass} w-auto`} 
        />
      );
    case 'Seekerloans':
      return (
        <img 
          src="/seekerloans-logo.svg" 
          alt="Seekerloans Logo" 
          className="h-24 md:h-28 w-auto"
        />
      );
    case 'Checkdraw':
      return (
        <img 
          src="/checkdraw-logo.png" 
          alt="Checkdraw Logo" 
          className="h-24 md:h-28 w-auto"
        />
      );
    case 'Hanfincal Lending':
      return (
        <img 
          src="/hanfincal-logo.svg" 
          alt="Hanfincal Logo" 
          className={`${imageClass} w-auto`} 
        />
      );
    case 'Halloween Hanfincal':
      return (
        <img 
          src="/halloween-hanfincal-logo.png" 
          alt="Halloween Hanfincal Logo" 
          className={`${imageClass} w-auto`} 
        />
      );
    case 'AmeriSave':
      return (
        <div className="text-teal-700">
          <span className="text-3xl font-bold">AMERISAVE</span>
          <span className="block text-xs font-medium tracking-wider">MORTGAGE</span>
        </div>
      );
    default:
      const textSize = size === 'large' ? 'text-2xl' : 'text-xl';
      return (
        <div className="h-10 flex items-center">
          <span className={`${textSize} font-bold text-gray-900`}>{logoType}</span>
        </div>
      );
  }
};

export { LoanLogo };