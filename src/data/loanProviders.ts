import React from 'react';

export type LoanPlatform = 'AmeriSave' | 'Credible' | 'Unlock' | 'LendingClub' | 'LightStream' | 'Best Egg' | 'Seekerloans' | 'Checkdraw' | 'Hanfincal Lending' | 'Halloween Hanfincal';

export interface LoanProvider {
  id: number;
  rank: number;
  platformName: LoanPlatform;
  featureTag: string;
  score: number;
  nmls?: string;
  reviews: number;
  highlights: string[];
  features: string[];
  refLink: string;
  visitLinkText?: string;
  promoBarText?: string;
  ctaText: string;
}

export const loanProviders: LoanProvider[] = [
  {
    id: 1,
    rank: 1,
    platformName: 'AmeriSave',
    featureTag: 'For homeowners only',
    score: 9.6,
    nmls: '1168',
    reviews: 16590,
    highlights: ['Homeowners, why pay higher rates for Personal Loans?'],
    features: [
      'Home Equity Loans, HELOCs, 2nd mortgages, Cash Out',
      '92% of Customers Find Savings in Minutes',
      'Low Rates: Quick Quote & Approval',
      'Over $200 Billion Funded, 23 Years in Business',
    ],
    refLink: '#',
    visitLinkText: 'Visit AmeriSave',
    promoBarText: '5037 people visited this site this week',
    ctaText: 'Get My Rate',
  },
  {
    id: 2,
    rank: 2,
    platformName: 'Credible',
    featureTag: 'Best Rate Guarantee',
    score: 9.8,
    reviews: 8430,
    highlights: ['Free to use, no hidden fees'],
    features: [
        'APR: 6.49%-35.99%',
        'Loan Term: 12-120 Months',
        'Credit Score: Fair/Good/Excellent',
    ],
    refLink: '#',
    visitLinkText: 'Visit Credible',
    ctaText: 'Get My Rate',
  },
  {
    id: 3,
    rank: 3,
    platformName: 'Unlock',
    featureTag: 'For homeowners only',
    score: 9.1,
    nmls: '2657061',
    reviews: 1237,
    highlights: ["Unlock Your Home's Value: Access Up to $500,000 Without a Loan"],
    features: [
        'Get $15,000 to $500,000 through a Home Equity Agreement (HEA)',
        'Qualify with just a 500 credit score',
        'No monthly payments, no interest charges',
    ],
    refLink: '#',
    visitLinkText: 'Visit Unlock',
    ctaText: 'Get My Rate',
  },
  {
    id: 4,
    rank: 4,
    platformName: 'LendingClub',
    featureTag: '',
    score: 9.4,
    reviews: 6806,
    highlights: ['Get funded just after approval'],
    features: [
        'APR: 7.04%-35.99%',
        'Loan Term: 24 - 60 Months',
        'Credit Score: Fair, Good, Excellent',
    ],
    refLink: '#',
    visitLinkText: 'Visit LendingClub',
    ctaText: 'Get My Rate',
  },
  {
    id: 5,
    rank: 5,
    platformName: 'LightStream',
    featureTag: '',
    score: 9.2,
    reviews: 82,
    highlights: ['Get lower rates with good credit'],
    features: [
        'APR: 6.94%-25.29%',
        'Loan Term: 24 - 84 Months',
        'Credit Score: Good, Excellent',
    ],
    refLink: '#',
    visitLinkText: 'Visit LightStream',
    ctaText: 'Get My Rate',
  },
  {
    id: 6,
    rank: 6,
    platformName: 'Best Egg',
    featureTag: '',
    score: 9.5,
    reviews: 9760,
    highlights: ['Best for low minimum rates'],
    features: [
        'APR: 5.99% - 35.99%',
        'Loan Terms: 36-60 mo',
        'Credit Score: Fair/Good/Excellent',
    ],
    refLink: '#',
    visitLinkText: 'Visit Best Egg',
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