'use client'

import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { ErrorIcon } from '@/components/Icons'

export const Error = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <div className="flex items-center gap-1 mt-2 text-destructive-500 text-[12px] font-normal leading-[1rem]">
      <ErrorIcon />
      {(errors[name]?.message as string) || 'This field is required'}
    </div>
  )
}
