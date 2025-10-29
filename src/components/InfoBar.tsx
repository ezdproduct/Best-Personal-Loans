import React from 'react';
import { CalendarCheck, Info, Users } from 'lucide-react';

const InfoBar: React.FC = () => {
  return (
    <div className="mt-8 bg-white md:bg-transparent rounded-lg p-4 md:p-0 text-sm text-gray-600">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <CalendarCheck className="text-green-600 w-4 h-4" />
          <span>Valid as of <strong>October 28, 2025</strong></span>
        </div>
        <a href="#" className="flex items-center space-x-1 text-blue-600 hover:underline">
          <span>How our total score works</span>
          <Info className="w-4 h-4" />
        </a>
        <div className="flex items-center space-x-2">
          <Users className="text-gray-500 w-4 h-4" />
          <span>Over <strong>229K visitors</strong> compared lenders here in the last month</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;