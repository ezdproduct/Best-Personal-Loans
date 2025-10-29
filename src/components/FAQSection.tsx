import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '@/data/loanProviders';
import { cn } from '@/lib/utils';

interface FAQSectionProps {
  item: FAQItem;
  isCollapsible?: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({ item, isCollapsible = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(isCollapsible ? '200px' : 'none');
  const [showFade, setShowFade] = useState(isCollapsible);

  useEffect(() => {
    if (!isCollapsible) {
        setMaxHeight('none');
        setShowFade(false);
        return;
    }

    if (isExpanded) {
      // Set max height to scroll height when expanding
      if (contentRef.current) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      }
      // Hide fade overlay immediately upon expansion
      setShowFade(false);
    } else {
      // Collapse to initial height
      setMaxHeight('200px');
      // Show fade overlay when collapsed
      setShowFade(true);
    }
  }, [isExpanded, isCollapsible]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle transition end to set height back to 'auto' after expansion is complete
  const handleTransitionEnd = () => {
    if (isExpanded && contentRef.current) {
      setMaxHeight('none');
    }
  };

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
      
      <div 
        ref={contentRef}
        className={cn(
          "space-y-4 relative transition-all duration-500 ease-in-out",
          isCollapsible ? 'overflow-hidden' : ''
        )}
        style={{ maxHeight: maxHeight }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div dangerouslySetInnerHTML={{ __html: item.content }} />
        
        {/* Lớp phủ mờ dần cho văn bản bị cắt */}
        {isCollapsible && showFade && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>
      
      {isCollapsible && (
        <button 
          onClick={toggleExpansion}
          className="text-teal-600 font-semibold hover:underline mt-4 toggle-button flex items-center"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </button>
      )}
    </section>
  );
};

export default FAQSection;