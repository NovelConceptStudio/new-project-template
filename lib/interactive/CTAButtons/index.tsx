'use client'
import { ReactNode } from 'react';
import { RiArrowRightLine, RiArrowRightWideFill } from 'react-icons/ri';

type Props = {
  variant?: 'light' | 'dark'
  ctaButton?: boolean
  ctaButtonClassname?: string
  learnMoreButton?: boolean
  ctaLabel?: ReactNode
  learnMoreLabel?: ReactNode
  ctaHref?: string
  learnMoreHref?: string
  learnMoreButtonClassname?: string
  className?: string
  buttonClassName?: string
  ctaAriaLabel?: string
  learnMoreAriaLabel?: string
}

const sharedButtonClasses = `px-4 py-2 transition-colors`

export function CTAButtons({
  variant = 'dark',
  ctaButton = true,
  learnMoreButton = true,
  ctaLabel = <span className='flex flex-row items-center gap-2'>Sign up<RiArrowRightLine /></span>,
  learnMoreLabel = (<span className="flex flex-row gap-2 items-center">
    Learn More<RiArrowRightWideFill />
  </span>),
  ctaHref = '/',
  learnMoreHref = '/training-app',
  className = '',
  buttonClassName = '',
  ctaButtonClassname = '',
  learnMoreButtonClassname = '',
  ctaAriaLabel = '',
  learnMoreAriaLabel = ''
}: Props) {
  const lightCtaButtonClasses = "text-orange-600 bg-white border-white border-2 attention:bg-transparent attention:text-white"
  const lightLearnMoreButtonClasses = "border-2 border-transparent attention:bg-transparent attention:text-white attention:border-white attention:border-2"
  const darkCtaButtonClasses = "bg-orange-600 text-white border-2 border-orange-600 attention:bg-transparent attention:text-orange-600 data-[focus-visible=true]:bg-white "
  const darkLearnMoreButtonClasses = "bg-transparent border-2 border-transparent attention:border-orange-600 attention:text-orange-600"

  return (
    <div className={`flex flex-row gap-4 font-primary tracking-wider ${className}`}>
      {ctaButton && (<a
        aria-label={ctaAriaLabel}
        className={`${sharedButtonClasses} ${variant === 'light' ? lightCtaButtonClasses : darkCtaButtonClasses} ${buttonClassName} ${ctaButtonClassname}`}
        href={ctaHref}
      >
        {ctaLabel}
      </a>)}
      {learnMoreButton && (<a
        className={`${sharedButtonClasses} ${variant === 'light' ? lightLearnMoreButtonClasses : darkLearnMoreButtonClasses} ${buttonClassName} ${learnMoreButtonClassname}`}
        href={learnMoreHref}
        aria-label={learnMoreAriaLabel}
      >
        {learnMoreLabel}
      </a>)}
    </div>
  )
}

