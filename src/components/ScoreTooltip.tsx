import React, { useState } from 'react';
import { Info, X, ChevronDown, ChevronUp, Star, Users, Briefcase, MousePointerClick } from 'lucide-react';
import { DetailedScore } from '@/data/loanProviders';
import { cn } from '@/lib/utils';

interface ScoreTooltipProps {
  scores: DetailedScore;
  reviews: number;
  platformName: string;
}

// Helper component for the circular progress bar
const ProgressCircle: React.FC<{ score: number, label: string, icon: React.ReactNode, color: 'blue' | 'yellow' }> = ({ score, label, icon, color }) => {
  const percentage = Math.round(score * 10); // Convert 0-10 score to 0-100 percentage
  const isOver50 = percentage > 50;
  const rotation = (percentage / 100) * 360;
  const clipStyle = isOver50 ? { clip: 'rect(auto, auto, auto, auto)' } : {};
  const valueBarRotation = isOver50 ? { transform: `rotate(${rotation}deg)` } : {};
  const first50BarRotation = isOver50 ? { transform: 'rotate(180deg)' } : {};

  const baseColor = color === 'blue' ? 'text-blue-600' : 'text-yellow-600';
  const barColor = color === 'blue' ? 'bg-blue-600' : 'bg-yellow-600';

  return (
    <div className="flex flex-col items-center p-2">
      <div className="relative w-16 h-16 rounded-full bg-gray-200 overflow-hidden" style={clipStyle}>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-900 z-10 bg-white rounded-full m-1">
          {score.toFixed(1)}
        </span>
        <div className="absolute inset-0 left-half-clipper">
          <div className={cn("absolute inset-0 first50-bar", barColor)} style={first50BarRotation}></div>
          <div className={cn("absolute inset-0 value-bar", barColor)} style={valueBarRotation}></div>
        </div>
      </div>
      <div className="mt-2 text-sm font-medium text-gray-700 flex items-center space-x-1">
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
};

const ScoreTooltip: React.FC<ScoreTooltipProps> = ({ scores, reviews, platformName }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleInfo = () => setIsInfoOpen(!isInfoOpen);
  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

  return (
    <div className="relative inline-block">
      {/* Trigger Link */}
      <a 
        href="#" 
        className="text-sm text-gray-500 mt-1 font-bold hover:underline cursor-pointer flex items-center"
        onClick={(e) => { e.preventDefault(); toggleInfo(); }}
      >
        Our score <Info className="w-3 h-3 ml-1" />
      </a>

      {/* Tooltip Content */}
      {isInfoOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-xl z-50 p-4">
          <div className="flex justify-end">
            <button onClick={toggleInfo} className="text-gray-500 hover:text-gray-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Score Values */}
          <div className="flex justify-between mb-4">
            <ProgressCircle 
              score={scores.trustpilot} 
              label="Trustpilot Score" 
              icon={<Star className="w-4 h-4 text-green-500 fill-green-500" />}
              color="blue"
            />
            <ProgressCircle 
              score={scores.brandReputation} 
              label="Brand Reputation" 
              icon={<Briefcase className="w-4 h-4 text-yellow-600" />}
              color="yellow"
            />
            <ProgressCircle 
              score={scores.popularity} 
              label="Popularity Score" 
              icon={<MousePointerClick className="w-4 h-4 text-blue-600" />}
              color="blue"
            />
          </div>
          <div className="text-center text-xs text-gray-500 mb-4">
            Based on {reviews.toLocaleString()} User Reviews
          </div>

          {/* Collapsible Info Section */}
          <div className="border-t pt-4">
            <a href="#" className="flex items-center justify-between text-teal-600 font-semibold" onClick={(e) => { e.preventDefault(); toggleAccordion(); }}>
              <span>How our total score works</span>
              {isAccordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </a>
            
            {isAccordionOpen && (
              <div className="mt-3 space-y-3 text-xs text-gray-600">
                <p>Our scoring system incorporates a weighted formula, which considers three parameters: Brand Reputation, Popularity Score and TrustPilot, providing a numerical score out of 10 and a star ranking out of 5 for each brand.</p>
                {/* Simplified accordion content for brevity */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreTooltip;