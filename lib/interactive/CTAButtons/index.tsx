'use client'
import { ReactNode } from 'react';
import { RiArrowRightLine, RiArrowRightWideFill } from 'react-icons/ri';
import { Button } from '../Button';

type ClassNames = {
  container?: string
  buttons?: string
  ctaButton?: string
  learnMoreButton?: string
}

type Props = {
  forBg?: 'light' | 'dark'
  ctaButton?: boolean
  learnMoreButton?: boolean
  ctaLabel?: ReactNode
  learnMoreLabel?: ReactNode
  ctaHref?: string
  learnMoreHref?: string
  className?: ClassNames
}

export function CTAButtons({
  forBg = 'dark',
  ctaButton = true,
  learnMoreButton = true,
  ctaLabel = <span className='flex flex-row w-full items-center gap-2 justify-center'>Sign up<RiArrowRightLine /></span>,
  learnMoreLabel = (<span className="flex flex-row w-full gap-2 items-center justify-center">
    Tell Me More<RiArrowRightWideFill />
  </span>),
  ctaHref = '/inquiry',
  learnMoreHref = '/learnMore',
  className = {},
}: Props) {
  return (
    <div className={`flex flex-row flex-wrap justify-center gap-4 font-secondary tracking-wider ${className.container ?? ''}`}>
      {ctaButton && (<Button
        className={className.ctaButton}
        href={ctaHref}
        forBg={forBg}
        variant='solid'
        isLink
      >
        {ctaLabel}
      </Button>)}
      {learnMoreButton && (<Button
        className={className.learnMoreButton}
        href={learnMoreHref}
        forBg={forBg}
        variant='hollow'
        isLink
      >
        {learnMoreLabel}
      </Button>)}
    </div>
  )
}

