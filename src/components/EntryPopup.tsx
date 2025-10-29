import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LoanLogo } from './LoanLogo';
import { X, Clock, ChevronRight } from 'lucide-react';

interface EntryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EntryPopup: React.FC<EntryPopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-11/12 p-0 overflow-hidden rounded-lg shadow-2xl gap-0 hide-default-close">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Image */}
          <div className="relative h-64 md:h-auto hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=870&auto=format&fit=crop"
              alt="Couple reviewing finances"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
             {/* Decorative arcs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 border-[40px] border-teal-400 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -left-24 w-48 h-48 border-[30px] border-teal-400 rounded-full opacity-30"></div>
          </div>

          {/* Right side - Content */}
          <div className="relative flex flex-col items-center justify-center p-8 text-center">
            {/* Custom Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="inline-flex items-center px-4 py-1 mb-6 text-sm font-semibold text-teal-800 bg-teal-100 rounded-full">
              <Clock className="w-4 h-4 mr-2" />
              Exceptional Loan Offers
            </div>

            <div className="mb-4">
              <LoanLogo logoType="AmeriSave" />
              <p className="text-sm text-gray-500 mt-1">NMLS# 1168</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
              Act Fast: Unlock Low Rates Now!
            </h2>

            <a href="#" className="text-teal-600 font-semibold hover:underline mb-6">
              Get the right personal loan for you
            </a>

            <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6">
              Get My Rate <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EntryPopup;