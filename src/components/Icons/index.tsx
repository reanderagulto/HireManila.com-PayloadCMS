'use client'

import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

// CaretDown Icon
export const CaretDown: React.FC<IconProps> = ({ size = 12, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <path
      d="M9.5 4.5L6 8L2.5 4.5"
      stroke="#3A4452"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
