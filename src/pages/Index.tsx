import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import HeroSection from '@/components/HeroSection';
import InfoBar from '@/components/InfoBar';
import LoanProviderItem from '@/components/LoanProviderItem';
import FAQSection from '@/components/FAQSection';
import Disclosure from '@/components/Disclosure';
import Footer from '@/components/layout/Footer';
import LoanTypeInteractiveBlock from '@/components/LoanTypeInteractiveBlock';
import { loanProviders, faqData } from '@/data/loanProviders';

const Index = () => {
  const topCards = loanProviders.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <HeroSection topProviders={topCards} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        <InfoBar />

        {/* Main List */}
        <div className="mt-8 space-y-6">
          {loanProviders.map(provider => (
            <LoanProviderItem key={provider.id} provider={provider} />
          ))}
        </div>

        {/* NEW INTERACTIVE BLOCK */}
        <LoanTypeInteractiveBlock />

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-10 mt-12 space-y-8 text-gray-700 leading-relaxed">
            {faqData.map((item, index) => (
                <FAQSection key={index} item={item} />
            ))}
            <Disclosure />
        </div>
      </div>
      
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;