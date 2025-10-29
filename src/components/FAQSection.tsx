import React from 'react';
import { FAQItem } from '@/data/loanProviders';

interface FAQSectionProps {
  item: FAQItem;
}

const FAQSection: React.FC<FAQSectionProps> = ({ item }) => {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
      <div className="space-y-4" dangerouslySetInnerHTML={{ __html: item.content }} />
    </section>
  );
};

export default FAQSection;