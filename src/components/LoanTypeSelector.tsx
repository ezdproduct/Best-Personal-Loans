import React from 'react';
import { Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

const LoanTypeButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Custom styling approximation for loan-type-button
    const classes = cn(
        "text-gray-800 font-semibold py-4 px-6 rounded-lg text-lg text-center",
        "bg-white border border-blue-200 shadow-sm transition duration-200",
        "hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 w-full"
    );

    return (
        <button className={classes}>
            {children}
        </button>
    );
};

const LoanTypeSelector: React.FC = () => {
  return (
    <div className="mt-8 mb-8 bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Cột bên trái: Tiêu đề và biểu tượng */}
        <div className="col-span-12 md:col-span-5 text-center md:text-left">
          {/* Biểu tượng */}
          <div className="flex justify-center md:justify-start mb-4">
            <span className="text-7xl text-blue-600 bg-blue-50 p-4 rounded-full">
              <Landmark className="w-16 h-16" />
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What kind of loan do you need today?
          </h2>
          
          {/* Thanh tiến trình */}
          <div className="text-left mt-4">
            <p className="text-sm text-gray-500 mb-1">Step 1/3</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "33.33%" }}></div>
            </div>
          </div>
        </div>
        
        {/* Đường kẻ phân cách (ẩn trên di động) */}
        <div className="hidden md:block col-span-1 h-full">
          <div className="border-l border-gray-200 h-full mx-auto"></div>
        </div>

        {/* Cột bên phải: Các nút */}
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col space-y-4">
            <LoanTypeButton>Debt Consolidation Loan</LoanTypeButton>
            <LoanTypeButton>Home Improvement</LoanTypeButton>
            <LoanTypeButton>Large Purchases</LoanTypeButton>
            <LoanTypeButton>Other</LoanTypeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTypeSelector;