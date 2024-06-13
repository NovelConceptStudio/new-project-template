'use client'
import { ReactNode, useEffect, useRef, useState } from "react"
import { getScrollPercent } from '@/utilities/getScrollPercent'
import { ScrollPercentageContext } from "@/contexts/ScrollPercentageContext"

type Props = {
  children: ReactNode
  className?: string
}

export function ScrollPercentageTracker({
  children,
  className = ''
}: Props) {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const ref = useRef(null)

  useEffect(() => {
    const calculate = () => {
      setScrollPercentage(getScrollPercent())
    }

    calculate()

    document.addEventListener("scroll", calculate)

    return () => {
      document.removeEventListener('scroll', calculate, true)
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      <ScrollPercentageContext.Provider value={scrollPercentage}>
        {children}
      </ScrollPercentageContext.Provider>
    </div>
  )
}

