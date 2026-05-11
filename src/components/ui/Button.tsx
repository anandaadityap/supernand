'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-space font-bold uppercase transition-all duration-200 border-2 border-brand-text shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 hover:-translate-x-1 active:shadow-none active:translate-y-1 active:translate-x-1',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary text-brand-text',
        ghost: 'bg-transparent text-brand-text hover:bg-brand-surface',
        outline: 'bg-transparent text-brand-text border-2 border-brand-text hover:bg-brand-text hover:text-brand-bg',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

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