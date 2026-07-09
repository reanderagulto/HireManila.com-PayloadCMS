'use client'

import type { FieldValues, UseFormRegister } from 'react-hook-form'
import React from 'react'

import { Input } from '@/components/ui/input'

import { Width } from '../Width'

import '../form.css'

export interface HiddenField {
  blockName?: string
  blockType: 'hidden'
  defaultValue?: string
  label?: string
  name: string
  required?: boolean
  width?: number
}

export const Hidden: React.FC<HiddenField & { register: UseFormRegister<FieldValues> }> = ({
  name,
  defaultValue,
  register,
  required,
  width,
}) => {
  return (
    <Width width={width} className="form__field--wrapper">
      <div className="form__field--input">
        <Input
          id={name}
          type="hidden"
          defaultValue={defaultValue}
          {...register(name, { required })}
        />
      </div>
    </Width>
  )
}
