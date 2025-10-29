import React from 'react';
import SiteIcon from '@/components/SiteIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-100 rounded-lg p-6 text-center text-sm text-gray-600 mb-8">
          The offers above and their placement are from companies from which we receive compensation.
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <SiteIcon className="h-12 w-12 text-teal-600" />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="https://www.fund.com/top/pet-insurance/desk/hp/" className="hover:underline">Best Pet Insurance</a></li>
                <li><a href="https://www.fund.com/top/mortgage-purchase/desk/hp/" className="hover:underline">Best Mortgage Loans</a></li>
                <li><a href="https://www.fund.com/top/life-insurance/desk/hp/" className="hover:underline">Best Life Insurance</a></li>
                <li><a href="https://www.fund.com/top/private-student-loans/desk/hp/" className="hover:underline">Best Student Loans</a></li>
                <li><a href="https://www.fund.com/top/debt-consolidation/loans/desk/hp/" className="hover:underline">Best Debt Consolidation</a></li>
                <li><a href="https://www.fund.com/top/business-loans/desk/hp/" className="hover:underline">Best Business Loans</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Info</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="https://www.fund.com/about-us/" className="hover:underline">About Us</a></li>
                <li><a href="https://www.fund.com/contact-us/" className="hover:underline">Contact Us</a></li>
                <li><a href="https://www.fund.com/legal/privacy-policy/" className="hover:underline">Privacy Policy</a></li>
                <li><a href="https://www.fund.com/legal/terms-of-use/" className="hover:underline">Terms Of Use</a></li>
                <li><a href="https://www.fund.com/legal/dmca-policy/" className="hover:underline">DMCA Policy</a></li>
                <li><a href="https://www.fund.com/sitemap/" className="hover:underline">Human Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-xs text-gray-500 space-y-4">
          <p>Fund.com is compensated by the affiliates on this site. The appearance and order of companies appearing on this site is based on a combination of factors, including affiliate compensation and user conversion rates, except where prohibited by law. Fund.com is not paid to specifically rank companies in any particular position or order. The information contained in Fund.com is not legal, financial, or investment advice and is not an endorsement or recommendation of any of the companies or the products or services appearing on Fund.com. As disclosed on the About Us page, all information on Fund.com is believed to be accurate as of the date of each article and is subject to change. Fund.com does not contain an exhaustive list of all lending or insurance companies in each category.</p>
          <p>Copyright © 2025 Fund.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;