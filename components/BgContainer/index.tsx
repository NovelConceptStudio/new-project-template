'use client'
import { CSSProperties, ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  bgClassname?: string
  bgStyles?: CSSProperties
}

export default function BgContainer({ children, className, bgClassname, bgStyles, ...rest }: Props) {
  return (
    <div className={`
      relative  
      ${className}`}
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
            ${bgClassname}
            `}
        style={bgStyles}
      />
    </div>
  )
}

