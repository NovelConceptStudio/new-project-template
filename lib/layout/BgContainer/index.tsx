'use client'
import { CSSProperties, ReactNode } from "react"

type StyleOverrides = {
  container?: CSSProperties
  background?: CSSProperties
}

type ClassNameOverrides = {
  container?: string
  background?: string
}

type Props = {
  children: ReactNode
  styles?: StyleOverrides
  className?: ClassNameOverrides
}

export function BgContainer({ children, className = {}, styles = {} }: Props) {
  return (
    <div className={`
      relative  
      ${className.container ?? ''}
      `}
      style={styles.container}
    >
      {children}
      <div
        className={`
            absolute 
            -z-10 
            top-0 
            left-0 
            bottom-0
            right-0
            ${className.background ?? ''}
            `}
        style={styles.background}
      />
    </div>
  )
}

