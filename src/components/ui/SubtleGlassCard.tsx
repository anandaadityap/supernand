'use client';

import { cn } from '@/lib/utils';

interface SubtleGlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function SubtleGlassCard({ children, className, style }: SubtleGlassCardProps) {
  return (
    <div 
      className={cn('glass-subtle rounded-2xl p-6 md:p-8', className)} 
      style={style}
    >
      {children}
    </div>
  );
}