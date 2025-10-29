import React from 'react';

export type LoanLogo = 'AmeriSave' | 'Credible' | 'Unlock' | 'LendingClub' | 'LightStream' | 'BestEgg';

export interface LoanProvider {
  id: number;
  rank: number;
  title: string;
  logo: LoanLogo;
  score: number;
  reviews: number;
  nmls?: string;
  features: string[]; // HTML content allowed here for strong tags
  ctaText: string;
  visitLink?: string;
  tagline: string;
  promoBar?: string;
}

export const loanProviders: LoanProvider[] = [
  {
    id: 1,
    rank: 1,
    title: "For homeowners only",
    logo: 'AmeriSave',
    score: 9.6,
    reviews: 16590,
    nmls: '1168',
    tagline: "Homeowners, why pay higher rates for Personal Loans?",
    features: [
      "<strong>Home Equity Loans, HELOCs</strong>, 2nd mortgages, Cash Out",
      "92% of Customers Find Savings in Minutes",
      "<strong>Low Rates:</strong> Quick Quote & Approval",
      "Over <strong>$200 Billion</strong> Funded, 23 Years in Business",
    ],
    ctaText: "Get My Rate",
    visitLink: "Visit AmeriSave",
    promoBar: "4437 people visited this site this week",
  },
  {
    id: 2,
    rank: 2,
    title: "Best Rate Guarantee",
    logo: 'Credible',
    score: 9.8,
    reviews: 8430,
    tagline: "Free to use, no hidden fees",
    features: [
      "APR: <strong>6.49%-35.99%</strong>",
      "Loan Term: <strong>12-120 Months</strong>",
      "Credit Score: <strong>Fair/Good/Excellent</strong>",
    ],
    ctaText: "Get My Rate",
    visitLink: "Visit Credible",
  },
  {
    id: 3,
    rank: 3,
    title: "For homeowners only",
    logo: 'Unlock',
    score: 9.1,
    reviews: 1237,
    nmls: '2657061',
    tagline: "Unlock Your Home's Value: Access Up to $500,000 Without a Loan",
    features: [
      "Get $15,000 to $500,000 through a Home Equity Agreement (HEA)",
      "Qualify with just a 500 credit score",
      "No monthly payments, no interest charges",
    ],
    ctaText: "Get My Rate",
    visitLink: "Visit Unlock",
  },
  {
    id: 4,
    rank: 4,
    title: "",
    logo: 'LendingClub',
    score: 9.4,
    reviews: 4668,
    tagline: "Get funded just after approval",
    features: [
      "No application, no origination fee",
      "Check rates without affecting credit",
      "Credit Score: Fair/Good/Excellent",
    ],
    ctaText: "Get My Rate",
  },
  {
    id: 5,
    rank: 5,
    title: "",
    logo: 'LightStream',
    score: 9.2,
    reviews: 0,
    tagline: "Excellent credit required",
    features: [
      "Get $5,000 to $100,000",
      "No fees or prepayment penalties",
    ],
    ctaText: "Get My Rate",
  },
  {
    id: 6,
    rank: 6,
    title: "",
    logo: 'BestEgg',
    score: 9.5,
    reviews: 0,
    tagline: "Best for minimum rates",
    features: [],
    ctaText: "Get My Rate",
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