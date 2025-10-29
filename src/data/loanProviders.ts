import React from 'react';

export type LoanPlatform = 'Trusted Online Loans' | 'Best Creditloanexpert' | 'Seekerloans' | 'Checkdraw' | 'Hanfincal Lending' | 'Halloween Hanfincal';

export interface LoanProvider {
  id: number;
  rank: number;
  platformName: LoanPlatform;
  featureTag: string;
  score: number;
  apr: string;
  loanTerm: string;
  minCreditScore: string;
  highlights: string[];
  refLink: string;
  ctaText: string;
}

export const loanProviders: LoanProvider[] = [
  {
    id: 1,
    rank: 1,
    platformName: 'Trusted Online Loans',
    featureTag: 'Best Rate Guarantee',
    score: 9.5,
    apr: '4.95% – 35.99%',
    loanTerm: '12 – 84 months',
    minCreditScore: '670+',
    highlights: ['Low interest rates, flexible for all needs'],
    refLink: 'https://clearpmf.com/ql?pm_cid=fc8abb3d92304bff9c47',
    ctaText: 'Get My Rate',
  },
  {
    id: 2,
    rank: 2,
    platformName: 'Best Creditloanexpert',
    featureTag: 'Accepts Bad Credit',
    score: 9.2,
    apr: '6.6% – 35.99%',
    loanTerm: '36 – 60 months',
    minCreditScore: '300+',
    highlights: ['Approves low scores, diverse audience, transparent'],
    refLink: 'https://clearpmf.com/ql?pm_cid=6cccbd3f23db4452b8e9',
    ctaText: 'Get My Rate',
  },
  {
    id: 3,
    rank: 3,
    platformName: 'Seekerloans',
    featureTag: 'No Hidden Fees',
    score: 8.7,
    apr: '6% – 36%',
    loanTerm: '24 – 72 months',
    minCreditScore: '600+',
    highlights: ['Transparent process, standard security'],
    refLink: 'https://clearpmf.com/ql?pm_cid=54ed64efd1134a259120',
    ctaText: 'Get My Rate',
  },
  {
    id: 4,
    rank: 4,
    platformName: 'Checkdraw',
    featureTag: 'Flexible Choices',
    score: 8.6,
    apr: '6% – 36%',
    loanTerm: '24 – 72 months',
    minCreditScore: '600+',
    highlights: ['Flexible loan amounts, stable service'],
    refLink: 'https://clearpmf.com/ql?pm_cid=19f93143ab9a4d1391ae',
    ctaText: 'Get My Rate',
  },
  {
    id: 5,
    rank: 5,
    platformName: 'Hanfincal Lending',
    featureTag: 'Emergency Loans',
    score: 8.4,
    apr: '4.95%+',
    loanTerm: 'Up to 60 months',
    minCreditScore: '~700',
    highlights: ['Specializes in small emergency loans/fast approval'],
    refLink: 'https://clearpmf.com/ql?pm_cid=9a591f75c5fe4b6fb177',
    ctaText: 'Get My Rate',
  },
  {
    id: 6,
    rank: 6,
    platformName: 'Halloween Hanfincal',
    featureTag: 'Seasonal Promo',
    score: 8.2,
    apr: '4.95%+',
    loanTerm: 'Not specified',
    minCreditScore: 'Not specified',
    highlights: ['Special holiday offers, short-term products'],
    refLink: 'https://clearpmf.com/ql?pm_cid=1e5317bf36394bdc96fb',
    ctaText: 'Get My Rate',
  },
];


export interface FAQItem {
    title: string;
    content: string; // HTML content
}

export const faqData: FAQItem[] = [
    {
        title: "What is a Personal Loan?",
        content: `
            <p>Personal loans provide you with a lump sum of cash that you can use for almost any purpose. These loans are typically unsecured, meaning you don’t need collateral to get one. Instead, lenders will review your income, debts, and credit profile to determine whether they can offer you a loan.</p>
            <p>Terms on personal loans can vary widely. Depending on the lender and your financial circumstances, you can get a loan for as little as $1,000 or as much as $100,000. Interest rates range from 6% to 35.99%. Loan terms vary but are usually between 12 and 60 months.</p>
        `,
    },
    {
        title: "Types of Personal Loans",
        content: `
            <p>There are several types of personal loans to choose from:</p>
            <ul class="list-disc pl-6 space-y-2">
                <li><strong>Unsecured:</strong> An unsecured loan doesn’t have any collateral to back it, which usually means it has a higher interest rate compared to a secured loan. It can also be more difficult to get an unsecured loan as lenders require better financial circumstances to qualify.</li>
                <li><strong>Secured:</strong> This type of loan has collateral, like a car or other valuable item, to back it. If you fail to repay the loan, your lender will use the collateral to recoup their lost funds.</li>
            </ul>
        `,
    },
    {
        title: "When to Get a Personal Loan",
        content: `
            <p>Since personal loans are typically unsecured, they can sometimes be more expensive than other types of loans. That said, there are times when getting a personal loan can make the most sense.</p><p>It’s best to get this type of loan when it is the least expensive form of financing. For example, let’s say you want to open a small business and get a few quotes for a business loan. If those loans have higher interest rates than a personal loan, then it makes more sense to choose the personal loan.</p>
        `,
    },
];