import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { LoanProvider } from '@/data/loanProviders';
import LoanProviderItemDesktop from './LoanProviderItemDesktop';
import LoanProviderItemMobile from './LoanProviderItemMobile';

interface LoanProviderItemProps {
  provider: LoanProvider;
}

const LoanProviderItem: React.FC<LoanProviderItemProps> = ({ provider }) => {
  const isMobile = useIsMobile();

  return isMobile 
    ? <LoanProviderItemMobile provider={provider} /> 
    : <LoanProviderItemDesktop provider={provider} />;
};

export default LoanProviderItem;