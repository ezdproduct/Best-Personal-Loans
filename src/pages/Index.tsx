import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from '@/components/layout/Header';
import HeroSection from '@/components/HeroSection';
import LoanCard from '@/components/LoanCard';
import LoanTypeSelector from '@/components/LoanTypeSelector';
import InfoBar from '@/components/InfoBar';
import LoanProviderItem from '@/components/LoanProviderItem';
import FAQSection from '@/components/FAQSection';
import { loanProviders, faqData } from '@/data/loanProviders';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Top 3 featured loans
  const topCards = loanProviders.slice(0, 3);
  
  // The FAQ item that was not collapsible in the original HTML
  const nonCollapsibleFAQ = faqData.find(item => item.title === "When to Get a Personal Loan");
  const collapsibleFAQs = faqData.filter(item => item.title !== "When to Get a Personal Loan");

  const DisclosureText = () => (
    <section className="text-xs text-gray-500 space-y-3 pt-8 border-t border-gray-200">
      <p>DISCLOSURE: We are a professional review site that receives compensation from the companies whose products we review and recommend. We are independently owned and the opinions expressed here are our own. *All rates, fees, and terms are presented without guarantee and are subject to change by the provider. There is no guarantee that you will be approved for the rates, fees, or terms presented. The only way to determine your eligibility and any applicable rates, fees, or terms is to apply with the provider. Please review the provider’s terms and conditions for additional details.</p>
      <p>For example, if you were to receive a $10,000 loan with a 5-year term, your monthly payment might be $210.01 for a loan with a 9.5% APR. This example includes an estimated 5.00% origination fee. Your APR may be higher or lower depending on your creditworthiness, loan amount, loan term, and other factors. Some lenders may offer loans with APRs as low as 3.99% to 35.99%, and loan amounts ranging from $500 to $100,000. Loan terms generally range from 12 to 60 months. Not all consumers will be approved for a loan or for the lowest APR. Loan pre-qualification is not a loan approval and you must submit a full application to determine your eligibility. Pre-qualification may not be available to all lenders. Expedited funding may be available for some loans, but the actual time to receive your funds will depend on the lender and your bank.</p>
      <p>Our Top Picks: Our "Top Picks" are not representative of all lenders in the marketplace. We have evaluated the lenders in our review database and identified our "Top Picks" based on a variety of factors, including but not limited to, the lender's rates, fees, loan terms, and our own internal review. We are compensated by our "Top Picks," and our compensation may impact the order in which they appear. Our "Top Picks" are not intended to be an endorsement or recommendation of any of the lenders or their products or services. We encourage you to shop around and compare offers from multiple lenders to find the loan that's right for you.</p>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <HeroSection />

      {/* Phần nội dung chính (với các thẻ) */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 -mt-16">
        
        {/* 3 Thẻ hàng đầu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCards.map(provider => (
            <LoanCard key={provider.id} provider={provider} />
          ))}
        </div>

        {/* Phần "What kind of loan..." */}
        <LoanTypeSelector />

        {/* Thanh thông tin phụ "Valid as of..." */}
        <InfoBar />

        {/* Danh sách chính */}
        <div className="mt-8 space-y-6">
          {loanProviders.map(provider => (
            <LoanProviderItem key={provider.id} provider={provider} />
          ))}
        </div>

        {/* Phần "Need help finding..." */}
        <div className="mt-8 mb-8 bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Cột bên trái: Tiêu đề */}
                <div className="col-span-12 md:col-span-6 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Need help finding the right lender for you?
                    </h2>
                </div>
                
                {/* Cột bên phải: Các nút */}
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Using custom styling to match LoanTypeButton look */}
                        <Button variant="outline" className="w-full py-6 text-base font-semibold border-blue-200 shadow-sm hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 transition duration-200 bg-white">
                            Debt Consolidation Loan
                        </Button>
                        <Button variant="outline" className="w-full py-6 text-base font-semibold border-blue-200 shadow-sm hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 transition duration-200 bg-white">
                            Home Improvement
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        {/* Phần Nội dung FAQ/Văn bản */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mt-8 space-y-8 text-gray-700 leading-relaxed">
            {collapsibleFAQs.map((item, index) => (
                <FAQSection key={index} item={item} isCollapsible={true} />
            ))}
            
            {/* Non-collapsible section */}
            {nonCollapsibleFAQ && <FAQSection item={nonCollapsibleFAQ} isCollapsible={false} />}

            {/* Disclaimer/Disclosure */}
            <DisclosureText />
        </div>

        {/* Phần "Find the right lender for you" (LẶP LẠI) */}
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Find the right lender for you</h2>
            <div className="space-y-6">
                {loanProviders.slice(0, 3).map(provider => (
                    <LoanProviderItem key={`repeat-${provider.id}`} provider={provider} />
                ))}
            </div>
        </div>
      </div>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;