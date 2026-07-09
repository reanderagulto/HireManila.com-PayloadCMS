import { cn } from '@/utilities/ui'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const textareaVariants = cva(
  [
    'flex w-full min-w-0 rounded-[4px] border bg-background px-3 py-2 text-sm shadow-xs transition-all duration-200 ease-in-out',
    'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-ring/50',
    'ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'aria-invalid:border-destructive/60 aria-invalid:outline-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/50',
    'focus-visible:border-primary aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none font-normal',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'border-input text-foreground',
        outline: 'border-input bg-transparent text-foreground',
        ghost: 'border-transparent text-foreground',
      },
      size: {
        default: 'h-[5rem] text-[0.875rem] leading-[1.25rem]',
        lg: 'h-[8rem] text-[1rem] leading-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface TextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        className={cn(textareaVariants({ variant, size }), className)}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'

export { Textarea, textareaVariants }
