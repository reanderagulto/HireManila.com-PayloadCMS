import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] border border-transparent',
    'font-semibold tracking-[-0.01em] transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring',
    'disabled:pointer-events-none disabled:opacity-60',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-primary-500 text-white shadow-sm hover:bg-primary-600 active:bg-primary-700',
        primary: 'bg-primary-500 text-white shadow-sm hover:bg-primary-600 active:bg-primary-700',
        secondary:
          'bg-secondary-blue-500 text-white shadow-sm hover:bg-secondary-blue-600 active:bg-secondary-blue-700',
        positive:
          'bg-secondary-green-500 text-white shadow-sm hover:bg-secondary-green-600 active:bg-secondary-green-700',
        destructive:
          'bg-destructive-500 text-white shadow-sm hover:bg-destructive-600 active:bg-destructive-700',
        neutral: 'bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 active:bg-neutral-700',
        white:
          'border-neutral-200 bg-white text-neutral-700 shadow-sm hover:bg-neutral-50 active:bg-neutral-100',
        outline:
          'border-neutral-300 bg-transparent text-neutral-700 shadow-sm hover:bg-neutral-100 hover:text-neutral-900 active:bg-neutral-200',
        ghost:
          'border-transparent bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 active:bg-neutral-200',
        link: 'h-auto rounded-none border-0 bg-transparent p-0 text-primary-500 underline-offset-4 hover:underline',
      },
      size: {
        clear: '',
        default: 'h-10 px-4 py-2 text-sm',
        sm: 'h-8 px-3 text-sm',
        md: 'h-9 px-4 text-sm',
        lg: 'h-12 px-5 text-base',
        xl: 'h-14 px-6 text-base',
        icon: 'size-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({ asChild = false, className, size, variant, ...props }) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
