'use client'
import { ReactNode, useContext, useEffect, useRef, useState } from "react"
import { getScrollPercent } from '@/utilities/getScrollPercent'
import { ScrollPercentageContext } from "@/contexts/ScrollPercentageContext"

type Props = {
  children: ReactNode
  scrollTriggerPercentage: number
  className?: string
  beforeTriggerClassName?: string
  afterTriggerClassName?: string

}

export function ScrollTriggerContainer({
  children,
  scrollTriggerPercentage,
  className,
  beforeTriggerClassName,
  afterTriggerClassName,
}: Props) {
  const scrollPercentage = useContext(ScrollPercentageContext)

  return (
    <div
      className={`
        ${className} 
        ${scrollPercentage >= scrollTriggerPercentage ? afterTriggerClassName : beforeTriggerClassName}
      `}
    >
      {children}
    </div>
  )
}

