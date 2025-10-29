import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import InfoBar from '@/components/InfoBar';
import LoanProviderItem from '@/components/LoanProviderItem';
import FAQSection from '@/components/FAQSection';
import Disclosure from '@/components/Disclosure';
import Footer from '@/components/layout/Footer';
import LoanTypeInteractiveBlock from '@/components/LoanTypeInteractiveBlock';
import EditorsChoice from '@/components/EditorsChoice';
import RepeatedLoanSection from '@/components/RepeatedLoanSection';
import EntryPopup from '@/components/EntryPopup';
import { loanProviders, faqData } from '@/data/loanProviders';

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000); // Open popup after 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const topCards = loanProviders.slice(0, 3);
  const editorsChoiceProvider = loanProviders[0];

  const nonCollapsibleTitle = "When to Get a Personal Loan";
  const nonCollapsibleFAQ = faqData.find(item => item.title === nonCollapsibleTitle);
  const collapsibleFAQs = faqData.filter(item => item.title !== nonCollapsibleTitle);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <EntryPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
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

        <LoanTypeInteractiveBlock />
        <EditorsChoice provider={editorsChoiceProvider} />

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-10 mt-12 space-y-8 text-gray-700 leading-relaxed">
            {collapsibleFAQs.map((item, index) => (
                <FAQSection key={index} item={item} isCollapsible={true} />
            ))}
            {nonCollapsibleFAQ && <FAQSection item={nonCollapsibleFAQ} isCollapsible={false} />}
            <Disclosure />
        </div>

        <RepeatedLoanSection providers={topCards} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;