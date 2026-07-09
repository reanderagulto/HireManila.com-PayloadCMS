import { cn } from '@/utilities/ui'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const inputVariants = cva(
  [
    'flex w-full min-w-0 rounded-[4px] border bg-background px-3 py-2 text-sm shadow-xs transition-all duration-200 ease-in-out',
    'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-ring/50',
    'ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'aria-invalid:border-destructive/60 aria-invalid:outline-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/50',
    'focus-visible:border-primary aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'border-input text-foreground',
        outline: 'border-input bg-transparent text-foreground',
        ghost: 'border-transparent text-foreground',
      },
      size: {
        default: 'h-10',
        sm: 'h-8 text-sm',
        lg: 'h-[48px] text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface InputProps
  extends
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        data-slot="input"
        type={type}
        className={cn(inputVariants({ variant, size }), className)}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

export { Input, inputVariants }
