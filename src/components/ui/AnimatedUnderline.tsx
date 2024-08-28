import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedUnderlineProps {
  children: ReactNode;
  className?: string;
}

const AnimatedUnderline = ({ children, className = '' }: AnimatedUnderlineProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-1 bg-primary font-bold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ transformOrigin: 'left center' }}
      />
    </span>
  );
};

export default AnimatedUnderline;
