'use client';

import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export function GlassCard({ children, className, hover = false, style }: GlassCardProps) {
  return (
    <div 
      className={cn(
        'glass-panel p-6 md:p-8',
        hover && 'cursor-pointer',
        className
      )} 
      style={style}
    >
      {children}
    </div>
  );
}