import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from '@/components/layout/Header';
import HeroSection from '@/components/HeroSection';
import LoanCard from '@/components/LoanCard';
import LoanTypeSelector from '@/components/LoanTypeSelector';
import InfoBar from '@/components/InfoBar';
import LoanProviderItem from '@/components/LoanProviderItem';
import FAQSection from '@/components/FAQSection';
import Disclosure from '@/components/Disclosure';
import RepeatedLoanSection from '@/components/RepeatedLoanSection';
import StyledOutlineButton from '@/components/StyledOutlineButton';
import { loanProviders, faqData } from '@/data/loanProviders';
import { HelpCircle } from 'lucide-react';

const Index = () => {
  // Top 3 featured loans
  const topCards = loanProviders.slice(0, 3);
  
  // The FAQ item that was not collapsible in the original HTML
  const nonCollapsibleFAQ = faqData.find(item => item.title === "When to Get a Personal Loan");
  const collapsibleFAQs = faqData.filter(item => item.title !== "When to Get a Personal Loan");

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 md:-mt-16">
        
        {/* Top 3 Cards (Desktop Only) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCards.map(provider => (
            <LoanCard key={provider.id} provider={provider} />
          ))}
        </div>

        {/* Loan Type Selector (Desktop Only) */}
        <div className="hidden md:block">
            <LoanTypeSelector />
        </div>

        {/* Info Bar */}
        <InfoBar />

        {/* Main List */}
        <div className="mt-8 space-y-6">
          {loanProviders.map(provider => (
            <LoanProviderItem key={provider.id} provider={provider} />
          ))}
        </div>

        {/* "Need help finding..." (Desktop Only) */}
        <div className="hidden md:block mt-8 mb-8 bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="col-span-12 md:col-span-6 text-center md:text-left flex items-center gap-4">
                    <span className="hidden sm:inline-block text-5xl text-blue-600 bg-blue-50 p-3 rounded-full">
                      <HelpCircle className="w-12 h-12" />
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Need help finding the right lender for you?
                    </h2>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <StyledOutlineButton>Debt Consolidation Loan</StyledOutlineButton>
                        <StyledOutlineButton>Home Improvement</StyledOutlineButton>
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-10 mt-8 space-y-8 text-gray-700 leading-relaxed">
            {collapsibleFAQs.map((item, index) => (
                <FAQSection key={index} item={item} isCollapsible={true} />
            ))}
            {nonCollapsibleFAQ && <FAQSection item={nonCollapsibleFAQ} isCollapsible={false} />}
            <Disclosure />
        </div>

        {/* Repeated Section (Desktop Only) */}
        <div className="hidden md:block">
            <RepeatedLoanSection providers={topCards} />
        </div>
      </div>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;