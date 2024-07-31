'use client'
import useIsVisible from '@/lib/hooks/useIsVisible';
import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  children: ReactNode
  fadeIn?: boolean
  delay?: Timings
  duration?: Timings
  lift?: LiftAndSlideAmounts
  slide?: LiftAndSlideAmounts
  className?: ClassNameOverrides
  inline?: boolean
  triggerOnVisibility?: boolean
  visibilityOffset?: string // Must be in pixels or percentage
}

type ClassNameOverrides = {
  container?: string
  beforeTrigger?: string
  afterTrigger?: string
}

type Timings = 0 | .25 | .5 | 1 | 1.25 | 1.5 | 1.75 | 2 | 3 | 4 | 5 | 7.5 | 10 | 15
type LiftAndSlideAmounts = -32 | -24 | -10 | -5 | 0 | 5 | 10 | 24 | 32


export function EffectsContainer({
  children,
  fadeIn = false,
  delay = 0,
  duration = 1,
  lift = 0,
  slide = 0,
  inline = false,
  triggerOnVisibility = false,
  visibilityOffset = '0px',
  className = {}
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [trigger, setTrigger] = useState(false)
  const isVisible = useIsVisible(ref, { rootMargin: visibilityOffset })

  const generateStaticClasses = () => {
    let delayClasses, durationClasses = ''
    switch (delay) {
      case .25:
        delayClasses = 'delay-[250ms]'
        break
      case .5:
        delayClasses = 'delay-[500ms]'
        break
      case 1:
        delayClasses = 'delay-[1000ms]'
        break
      case 1.25:
        delayClasses = 'delay-[1250ms]'
        break
      case 1.5:
        delayClasses = 'delay-[1500ms]'
        break
      case 1.75:
        delayClasses = 'delay-[1750ms]'
        break
      case 2:
        delayClasses = 'delay-[2000ms]'
        break
      case 3:
        delayClasses = 'delay-[3000ms]'
        break
      case 4:
        delayClasses = 'delay-[4000ms]'
        break
      case 5:
        delayClasses = 'delay-[5000ms]'
        break;
      case 7.5:
        delayClasses = 'delay-[7500ms]'
        break
      case 10:
        delayClasses = 'delay-[10000ms]'
        break
      case 15:
        delayClasses = 'delay-[15000ms]'
        break;
      default:
        break;
    }

    switch (duration) {
      case .25:
        durationClasses = 'duration-[250ms]'
        break
      case .5:
        durationClasses = 'duration-[500ms]'
        break
      case 1:
        durationClasses = 'duration-[1000ms]'
        break
      case 1.25:
        durationClasses = 'duration-[1250ms]'
        break
      case 1.5:
        durationClasses = 'duration-[1500ms]'
        break
      case 1.75:
        durationClasses = 'duration-[1750ms]'
        break
      case 2:
        durationClasses = 'duration-[2000ms]'
        break
      case 3:
        durationClasses = 'duration-[3000ms]'
        break
      case 4:
        durationClasses = 'duration-[4000ms]'
        break
      case 5:
        durationClasses = 'duration-[5000ms]'
        break
      case 7.5:
        durationClasses = 'duration-[7500ms]'
        break
      case 10:
        durationClasses = 'duration-[10000ms]'
        break
      case 15:
        durationClasses = 'duration-[15000ms]'
        break;
      default:
        break
    }

    return [delayClasses, durationClasses].join(' ')
  }

  const generateTriggerClasses = () => {
    return [className.afterTrigger ?? '', 'opacity-100', 'translate-y-0', 'translate-x-0'].join(' ')
  }

  const generateInitialClasses = () => {
    let slideClasses, liftClasses = ''
    switch (lift) {
      case -5:
        liftClasses = '-translate-y-5'
        break
      case -10:
        liftClasses = '-translate-y-10'
        break
      case -24:
        liftClasses = '-translate-y-24'
        break
      case -32:
        liftClasses = '-translate-y-32'
        break
      case 5:
        liftClasses = 'translate-y-5'
        break
      case 10:
        liftClasses = 'translate-y-10'
        break
      case 24:
        liftClasses = 'translate-y-24'
        break
      case 32:
        liftClasses = 'translate-y-32'
        break
      default:
        break
    }

    switch (slide) {
      case -5:
        slideClasses = '-translate-x-5'
        break
      case -10:
        slideClasses = '-translate-x-10'
        break
      case -24:
        slideClasses = '-translate-x-24'
        break
      case -32:
        slideClasses = '-translate-x-32'
        break
      case 5:
        slideClasses = 'translate-x-5'
        break
      case 10:
        slideClasses = 'translate-x-10'
        break
      case 24:
        slideClasses = 'translate-x-24'
        break
      case 32:
        slideClasses = 'translate-x-32'
        break
      default:
        break
    }
    return [className.beforeTrigger ?? '', fadeIn ? 'opacity-0' : 'opacity-100', liftClasses, slideClasses].join(' ')
  }


  useEffect(() => {
    if (!triggerOnVisibility) setTrigger(true)
  }, [])


  useEffect(() => {
    if (triggerOnVisibility && isVisible) setTrigger(true)
  }, [isVisible])

  return (
    inline ? (
      <span
        ref={ref}
        className={`
        inline
        transition
        ease-in-out
        ${className.container ?? ''}
        ${trigger ? generateTriggerClasses() : generateInitialClasses()}
        ${generateStaticClasses()}
      `}>
        {children}
      </span>
    ) :
      (
        <div
          ref={ref}
          className={`
          flex
          transition
          ease-in-out
          ${className.container ?? ''}
          ${trigger ? generateTriggerClasses() : generateInitialClasses()}
          ${generateStaticClasses()}
        `}>
          {children}
        </div>
      )
  );
}
