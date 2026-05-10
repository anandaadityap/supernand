'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('inline-flex items-center justify-center gap-3 font-bebas uppercase tracking-[0.2em] transition-all duration-200 rounded-xl border-3', {
  variants: {
    variant: {
      primary: 'bg-[var(--color-primary)] text-black shadow-brutal hover:shadow-none hover:translate-x-2 hover:translate-y-2 active:translate-x-1 active:translate-y-1',
      secondary: 'bg-transparent text-[var(--color-primary)] border-4 border-[var(--color-primary)] shadow-brutal-accent hover:bg-[var(--color-primary)] hover:text-black hover:shadow-none hover:translate-x-2 hover:translate-y-2',
      ghost: 'text-[var(--color-text)] hover:bg-[var(--color-primary)]/20 border-2 border-[var(--color-primary)]/50',
    },
    size: {
      sm: 'px-6 py-3 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-12 py-6 text-xl',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}