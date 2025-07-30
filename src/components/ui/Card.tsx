import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  hover = false,
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  
  const classes = `bg-white rounded-lg border border-midnight-100 ${paddingClasses[padding]} ${shadowClasses[shadow]} ${hoverClass} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card; 