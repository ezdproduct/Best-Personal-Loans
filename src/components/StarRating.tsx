import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  score: number; // Score out of 10
  className?: string;
}

// Helper function to determine star count based on the visual representation in the static HTML
const getStarVisuals = (score: number) => {
  const stars = [];
  const maxStars = 5;
  
  // Rating out of 5
  const rating = score / 2; 
  
  // Rounding to the nearest integer star count for visual simplicity, as half-star icons are complex in Lucide.
  const fullStars = Math.round(rating);

  for (let i = 1; i <= maxStars; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} className="fill-green-500 text-green-500 w-5 h-5" />);
    } else {
      stars.push(<Star key={i} className="text-green-500 fill-transparent w-5 h-5" />);
    }
  }
  return stars;
};

const StarRating: React.FC<StarRatingProps> = ({ score, className }) => {
  return (
    <div className={cn("flex text-2xl", className)}>
      {getStarVisuals(score)}
    </div>
  );
};

export default StarRating;