import React from 'react';
import { CheckCircle, FileText, Layers, Trophy } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Ảnh nền */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')` 
        }}
      >
      </div>
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 w-full h-full bg-black/60"></div>
      
      {/* Nội dung Hero */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Best <span className="text-blue-400">Personal Loans</span> in 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          Get fast cash from top-rated lenders
        </p>
        <p className="max-w-3xl mx-auto text-gray-300 mb-8">
          Compare top lenders to get the best personal loans with the lowest rates and most flexible terms. These companies offer customized loans for almost any need, from consolidating debt to home improvement.
        </p>
        
        {/* Các tính năng */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-200">
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-blue-400 w-5 h-5" />
            <span>Quick Approvals</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="text-blue-400 w-5 h-5" />
            <span>Transparent Fees</span>
          </div>
          <div className="flex items-center space-x-2">
            <Layers className="text-blue-400 w-5 h-5" />
            <span>Flexible Amounts</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="text-blue-400 w-5 h-5" />
            <span>Competitive Rates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;