import { ReactNode, useEffect, useState } from 'react';

type Props = {
  fadeIn?: boolean
  delay?: DelayTimings
  duration?: DelayTimings
  lift?: LiftAndSlideAmounts
  slide?: LiftAndSlideAmounts
  children?: ReactNode
}

type DelayTimings = .25 | .5 | 1 | 2 | 3 | 4 | 5
type LiftAndSlideAmounts = -32 | -24 | -10 | -5 | 0 | 5 | 10 | 24 | 32


export default function EffectsContainer({
  fadeIn = true,
  delay = 1,
  duration = 1,
  lift = 0,
  slide = 0,
  children
}: Props) {
  const [trigger, setTrigger] = useState(false)

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
      default:
        delayClasses = 'delay-[1000ms]'
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
      default:
        durationClasses = 'duration-[1000ms]'
        break
    }

    return [delayClasses, durationClasses].join(' ')
  }

  const generateTriggerClasses = () => {
    return ['opacity-100', 'translate-y-0', 'translate-x-0'].join(' ')
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
    return [fadeIn ? 'opacity-0' : 'opacity-100', liftClasses, slideClasses].join(' ')
  }


  useEffect(() => {
    setTrigger(true)
  }, [])

  return (
    <div className={`flex transition ease-in-out ${trigger ? generateTriggerClasses() : generateInitialClasses()} ${generateStaticClasses()}`}>
      {children}
    </div>
  );
}
