import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StyledOutlineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StyledOutlineButton: React.FC<StyledOutlineButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "w-full py-4 text-lg font-semibold border-gray-300 hover:border-gray-400 transition-colors bg-white text-gray-800 hover:bg-gray-50",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledOutlineButton;