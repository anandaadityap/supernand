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
        'glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden',
        hover && 'glass-card-hover cursor-pointer group',
        className
      )} 
      style={style}
    >
      {/* Inner glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </div>
  );
}