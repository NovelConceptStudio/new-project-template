'use client'
import { textSmall } from '@/foundation/styles';
import { Link } from 'react-aria-components';
import { FormProvider, useForm } from 'react-hook-form';
import { SubmitInput } from './Fields/SubmitInput';
import { RiLoader2Fill } from 'react-icons/ri';

type Props = {
  children: React.ReactNode
  submitButton?: React.ReactElement
  className?: string
  submitCallback?: (data: any) => void
  submitEnabled?: boolean
  isLoading?: boolean
}

/**
 * A simple single-page form
 * @returns 
 */
export function Form({
  children,
  // submitButton,
  className = '',
  submitCallback = () => null,
  submitEnabled = true,
  isLoading = false
}: Props) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        className={`${className}`}
      >
        {children}
        {submitEnabled ? (
          <SubmitInput
            onClick={methods.handleSubmit(submitCallback)}
            className="
              group
              flex
              flex-row
              transition-color
              bg-gradient-to-br
              from-teal-300
              to-mikado-yellow-200
              duration-300
              w-full
              hover:cursor-pointer
            "
            disabled={isLoading}
            disclaimer={<p className={`${textSmall} block pt-2`}>
              By filling out this form, I acknowledge I am at least 18 years of age and agree to Novel Concept&apos;s<Link href="/termsAndConditions" className={`inline text-melon-400 underline px-1`}>Terms and Conditions</Link>and<Link href={"/privacyPolicy"} className={`inline text-melon-400 underline px-1`}>Privacy Policy</Link>.
            </p>}
            label={<span
              className={`
                      relative
                      flex
                      flex-row
                      items-center
                      justify-center
                      w-full
                      rounded-lg
                      h-12
                    `}>

              <span className={`
                      text-black
                      z-[1]       
                      `}>
                {isLoading ? <RiLoader2Fill className='animate-spin' /> : `I'm Ready!`}
              </span>
              <div className="
                      absolute
                      top-1
                      right-1
                      bottom-1
                      left-1
                      transition-opacity
                      opacity-0
                      bg-gradient-to-br
                      from-mikado-yellow-200
                      to-teal-200                                        
                      group-hover:opacity-100  
                      "/>
            </span>
            }
          />
        ) : (
          <span
            className={`
                      relative
                      flex
                      flex-row
                      items-center
                      justify-center
                      w-full
                      rounded-lg
                      h-12
                    `}>
            <span className={`
                      text-black
                      z-[1]       
                      `}>
              {`Thank you! Form submitted successfully.`}
            </span>
          </span>
        )}

      </form>
    </FormProvider>
  )
}
