import React from 'react';
import { LoanProvider } from '@/data/loanProviders';
import LoanProviderItem from '@/components/LoanProviderItem';

interface RepeatedLoanSectionProps {
  providers: LoanProvider[];
}

const RepeatedLoanSection: React.FC<RepeatedLoanSectionProps> = ({ providers }) => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Find the right lender for you</h2>
      <div className="space-y-6">
        {providers.map(provider => (
          <LoanProviderItem key={`repeat-${provider.id}`} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default RepeatedLoanSection;