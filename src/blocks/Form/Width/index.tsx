import * as React from 'react'

export const Width: React.FC<{
  children: React.ReactNode
  className?: string
  width?: number | string
}> = ({ children, className, width }) => {
  const w = width ? parseInt(width.toString(), 10) : 100
  const basis = `calc(${w}% - ${8 * (1 - w / 100)}px)`

  return (
    <div
      className={`flex-[1_0_100%] sm:flex-[1_0_var(--basis)] ${className ?? ''}`}
      style={{ '--basis': basis } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
