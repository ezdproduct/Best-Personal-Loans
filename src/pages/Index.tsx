import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import HeroSection from '@/components/HeroSection';
import InfoBar from '@/components/InfoBar';
import LoanProviderItem from '@/components/LoanProviderItem';
import FAQSection from '@/components/FAQSection';
import Disclosure from '@/components/Disclosure';
import Footer from '@/components/layout/Footer';
import LoanTypeInteractiveBlock from '@/components/LoanTypeInteractiveBlock';
import FeaturedLoanCard from '@/components/FeaturedLoanCard';
import { loanProviders, faqData } from '@/data/loanProviders';

const Index = () => {
  // The top provider will be used for the featured card
  const featuredProvider = loanProviders[0];
  // The rest of the providers start from rank 2
  const mainProviders = loanProviders.slice(1);

  // Determine which FAQs should be collapsible
  const nonCollapsibleTitle = "When to Get a Personal Loan";
  const firstFAQTitle = "What is a Personal Loan?";
  
  // Separate the first FAQ item
  const firstFAQ = faqData.find(item => item.title === firstFAQTitle);
  
  // Filter out the first FAQ item and the non-collapsible item
  const remainingFAQs = faqData.filter(item => item.title !== firstFAQTitle);
  const nonCollapsibleFAQ = remainingFAQs.find(item => item.title === nonCollapsibleTitle);
  const collapsibleFAQs = remainingFAQs.filter(item => item.title !== nonCollapsibleTitle);


  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* HeroSection no longer displays cards */}
      <HeroSection topProviders={[]} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* FEATURED CARD */}
        <div className="relative z-10 -mt-16 mb-8">
            <FeaturedLoanCard provider={featuredProvider} />
        </div>

        <InfoBar />

        {/* Main List (starting from rank 2) */}
        <div className="mt-8 space-y-6">
          {mainProviders.map(provider => (
            <LoanProviderItem key={provider.id} provider={provider} />
          ))}
        </div>

        {/* INTERACTIVE BLOCK */}
        <LoanTypeInteractiveBlock />

        {/* DETAILED INFO BLOCK (First FAQ item) */}
        {firstFAQ && (
            <div className="mt-12">
                <FAQSection item={firstFAQ} isCollapsible={false} />
            </div>
        )}

        {/* REMAINING FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-10 mt-12 space-y-8 text-gray-700 leading-relaxed">
            {collapsibleFAQs.map((item, index) => (
                <FAQSection key={index} item={item} isCollapsible={true} />
            ))}
            {/* Non-collapsible section */}
            {nonCollapsibleFAQ && <FAQSection item={nonCollapsibleFAQ} isCollapsible={false} />}
            <Disclosure />
        </div>
      </div>
      
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;