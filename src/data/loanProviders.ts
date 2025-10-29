import React from 'react';

export type LoanPlatform = 'Trusted Online Loans' | 'Best Creditloanexpert' | 'Seekerloans' | 'Checkdraw' | 'Hanfincal Lending' | 'Halloween Hanfincal' | 'AmeriSave';

export interface DetailedScore {
  trustpilot: number; // Score out of 10
  brandReputation: number; // Score out of 10
  popularity: number; // Score out of 10
}

export interface LoanProvider {
  id: number;
  rank: number;
  platformName: LoanPlatform;
  featureTag: string;
  score: number; // Total score
  detailedScores: DetailedScore;
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
    platformName: 'Trusted Online Loans',
    featureTag: 'Best Rate Guarantee',
    score: 9.5,
    detailedScores: { trustpilot: 9.2, brandReputation: 9.7, popularity: 10 }, // Mocked scores for UI functionality
    nmls: '1168',
    reviews: 16590,
    highlights: ['Low interest rates, flexible for all needs'],
    features: [
      'APR: 4.95% – 35.99%',
      'Loan Term: 12 – 84 months',
      'Min. Credit Score: 670+',
    ],
    refLink: 'https://clearpmf.com/ql?pm_cid=fc8abb3d92304bff9c47',
    visitLinkText: 'Visit Trusted Online Loans',
    promoBarText: '4437 people visited this site this week',
    ctaText: 'Get My Rate',
  },
  {
    id: 2,
    rank: 2,
    platformName: 'Best Creditloanexpert',
    featureTag: 'Accepts Bad Credit',
    score: 9.2,
    detailedScores: { trustpilot: 10, brandReputation: 9.5, popularity: 9.9 }, // Mocked scores for UI functionality
    reviews: 8430,
    highlights: ['Approves low scores, diverse audience, transparent'],
    features: [
        'APR: 6.6% – 35.99%',
        'Loan Term: 36 – 60 months',
        'Min. Credit Score: 300+',
    ],
    refLink: 'https://clearpmf.com/ql?pm_cid=6cccbd3f23db4452b8e9',
    visitLinkText: 'Visit Best Creditloanexpert',
    ctaText: 'Get My Rate',
  },
  {
    id: 3,
    rank: 3,
    platformName: 'Seekerloans',
    featureTag: 'No Hidden Fees',
    score: 8.7,
    detailedScores: { trustpilot: 8.8, brandReputation: 9.0, popularity: 9.5 }, // Mocked scores for UI functionality
    reviews: 1237,
    highlights: ['Transparent process, standard security'],
    features: [
        'APR: 6% – 36%',
        'Loan Term: 24 – 72 months',
        'Min. Credit Score: 600+',
    ],
    refLink: 'https://clearpmf.com/ql?pm_cid=54ed64efd1134a259120',
    visitLinkText: 'Visit Seekerloans',
    ctaText: 'Get My Rate',
  },
  {
    id: 4,
    rank: 4,
    platformName: 'Checkdraw',
    featureTag: 'Flexible Choices',
    score: 8.6,
    detailedScores: { trustpilot: 8.5, brandReputation: 8.5, popularity: 8.5 },
    reviews: 0,
    highlights: ['Flexible loan amounts, stable service'],
    features: [
        'APR: 6% – 36%',
        'Loan Term: 24 – 72 months',
        'Min. Credit Score: 600+',
    ],
    refLink: 'https://clearpmf.com/ql?pm_cid=19f93143ab9a4d1391ae',
    ctaText: 'Get My Rate',
  },
  {
    id: 5,
    rank: 5,
    platformName: 'Hanfincal Lending',
    featureTag: 'Emergency Loans',
    score: 8.4,
    detailedScores: { trustpilot: 8.0, brandReputation: 8.0, popularity: 8.0 },
    reviews: 0,
    highlights: ['Specializes in small emergency loans/fast approval'],
    features: [
        'APR: 4.95%+',
        'Loan Term: Up to 60 months',
        'Min. Credit Score: ~700',
    ],
    refLink: 'https://clearpmf.com/ql?pm_cid=9a591f75c5fe4b6fb177',
    ctaText: 'Get My Rate',
  },
  {
    id: 6,
    rank: 6,
    platformName: 'Halloween Hanfincal',
    featureTag: 'Seasonal Promo',
    score: 8.2,
    detailedScores: { trustpilot: 7.5, brandReputation: 7.5, popularity: 7.5 },
    reviews: 0,
    highlights: ['Special holiday offers, short-term products'],
    features: [
        'APR: 4.95%+',
        'Loan Term: Not specified',
        'Min. Credit Score: Not specified',
    ],
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
            <p>A personal loan is a type of installment loan that you can use for just about any purpose. These loans are typically unsecured, meaning you don’t need collateral to get one. Lenders look at your creditworthiness to determine if you’re a good candidate.</p>
            <p>When you get a personal loan, you receive a lump sum of money. You then repay the loan in fixed monthly payments over a set period. These loans have set repayment terms, so you'll always know when your loan will be paid off. These features are some of the reasons why people love personal loans! Other lenders offer revolving credit, like credit cards, meaning you can borrow up to a certain limit and repay it over time. Personal loans can be a great option for those who:</p>
            <ul class="list-disc pl-6 space-y-2">
                <li>Need to consolidate debt</li>
                <li>Want to make a large purchase</li>
                <li>Have emergency expenses</li>
            </ul>
        `,
    },
    {
        title: "Types of Personal Loans",
        content: `
            <p>You can get funds from personal loans from three main types of lenders: banks, credit unions, and online lenders. Each has its own set of approval requirements, rates, and terms. Personal loans are also available in a few different forms. Depending on your needs, one type may be better suited for you than another. The most common types of personal loans include:</p>
            <ul class="list-disc pl-6 space-y-2">
                <li><strong>Unsecured personal loans:</strong> This is the most common type of personal loan. It isn't backed by collateral, meaning the lender is taking on more risk. As a result, unsecured loans typically have higher interest rates than secured loans.</li>
                <li><strong>Secured personal loans:</strong> This type of loan is backed by collateral, meaning you'll need to put up an asset like a car or savings account to qualify. If you default on the loan, the lender can seize the collateral. Secured loans typically have lower interest rates than unsecured loans.</li>
                <li><strong>Debt consolidation loans:</strong> This type of loan is designed to help you consolidate multiple debts into a single monthly payment. Debt consolidation loans can be secured or unsecured.</li>
                <li><strong>Co-signer personal loans:</strong> If you have bad credit, you may be able to qualify for a personal loan by adding a co-signer to your application. A co-signer is someone with good credit who agrees to take responsibility for the loan if you default. This is a big responsibility, so make sure you and your co-signer understand the terms before signing on the dotted line.</li>
            </ul>
        `,
    },
    {
        title: "When to Get a Personal Loan",
        content: `
            <p>It's best to get a personal loan when you have a specific purpose in mind and a solid plan for repaying the loan. For example, if you have high-interest credit card debt, a debt consolidation loan could help you save money on interest and get out of debt faster. Other good times to get a personal loan include when you need to finance a large purchase, like a home improvement project or a wedding. You can also use personal loans for emergencies, like an unexpected medical bill or car repair.</p>
        `,
    },
    {
        title: "How to Get the Best Personal Loan",
        content: `
            <p>The best personal loan is the one that offers the lowest interest rate and fees, and the most flexible repayment terms. Here's how to get the best personal loan for your needs:</p>
            <ol class="list-decimal pl-6 space-y-2">
                <li><strong>Check your credit score:</strong> Your credit score is one of the most important factors lenders consider when you apply for a loan. The higher your score, the more likely you are to get approved for a loan with a low interest rate. You can get a free copy of your credit report from all three major credit bureaus once a year.</li>
                <li><strong>Compare offers from multiple lenders:</strong> Don't just apply for the first loan you see. Compare offers from at least three different lenders to make sure you're getting the best deal. Pay attention to the interest rate, fees, and repayment terms.</li>
                <li><strong>Read the fine print:</strong> Before you sign on the dotted line, make sure you read and understand the terms and conditions of the loan. Pay close attention to the interest rate, fees, and repayment schedule.</li>
            </ol>
            <p>At Fund.com, we make it easy to compare offers from multiple lenders. We'll show you the interest rate, fees, and repayment terms for each loan so you can make an informed decision. The best personal loans are typically offered to borrowers with good to excellent credit. If you have bad credit, you may still be able to qualify for a loan, but you'll likely pay a higher interest rate. There are lenders who specialize in bad credit loans, so don't despair if your credit isn't perfect. You can also take steps to improve your credit score before you apply for a loan. This includes paying your bills on time, keeping your credit utilization low, and disputing any errors on your credit report. The minimum credit score for personal loans varies by lender, but it's typically around 600. If your score is below 600, you may have difficulty qualifying for a loan.</p>
        `,
    },
    {
        title: "How to Apply for a Personal Loan",
        content: `
            <p>The application process for a personal loan is typically simple and can be done online in just a few minutes. Here's what you'll need to do:</p>
            <ol class="list-decimal pl-6 space-y-2">
                <li><strong>Gather your documents:</strong> You'll need to provide some personal and financial information when you apply for a loan. This includes your Social Security number, proof of income, and bank account information.</li>
                <li><strong>Submit an application:</strong> Once you have all your documents, you can submit an application online or in person.</li>
                <li><strong>Wait for a decision:</strong> The lender will review your application and make a decision. This can take anywhere from a few minutes to a few days.</li>
                <li><strong>Receive your funds:</strong> If you're approved, the lender will deposit the funds into your bank account. This typically happens within a few days.</li>
            </ol>
            <p>Fund.com makes it easy to apply for a personal loan. We'll ask you a few questions about yourself and your finances, and then we'll show you offers from multiple lenders. You can compare offers and choose the one that's best for you. The entire process can be done online in just a few minutes.</p>
        `,
    },
    {
        title: "Choosing the Best Lender",
        content: `
            <p>There are a lot of personal loan lenders out there, so it's important to do your research before you choose one. Here are a few things to look for:</p>
            <ul class="list-disc pl-6 space-y-2">
                <li><strong>Interest rate:</strong> This is the most important factor to consider when choosing a lender. Make sure you compare interest rates from multiple lenders before you make a decision.</li>
                <li><strong>Fees:</strong> Some lenders charge origination fees, prepayment penalties, and other fees. Make sure you understand all the fees before you sign on the dotted line.</li>
                <li><strong>Repayment terms:</strong> Personal loans typically have repayment terms of one to five years. Choose a loan with a repayment term that you're comfortable with.</li>
                <li><strong>Customer service:</strong> Read reviews from other borrowers to get an idea of the lender's customer service. You want to choose a lender that's responsive and helpful.</li>
            </ul>
            <p>At Fund.com, we only work with reputable lenders who offer competitive rates and terms. We also have a team of customer service representatives who are available to answer your questions. We're here to help you find the best personal loan for your needs.</p>
        `,
    },
];