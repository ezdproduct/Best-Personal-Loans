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
        "w-full py-6 text-base font-semibold border-blue-200 shadow-sm hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 transition duration-200 bg-white text-gray-800 hover:bg-white",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledOutlineButton;