import React from 'react';
import { FundComLogo } from '@/components/LoanLogo';

const Header: React.FC = () => {
  return (
    <nav className="bg-slate-800 text-center py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <a href="/" title="Fund.com" className="footer-logo">
          <FundComLogo className="h-8" />
        </a>
        {/* Tiết lộ quảng cáo */}
        <p className="text-gray-400 text-xs mt-2 md:mt-0">
          The offers below and their placement are from companies from which we receive compensation. 
          <a href="#" className="underline text-white hover:text-gray-300">Advertising Disclosure</a>
        </p>
      </div>
    </nav>
  );
};

export default Header;