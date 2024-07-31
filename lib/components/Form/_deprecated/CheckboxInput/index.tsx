'use client'
import { RegisterOptions, useFormContext } from "react-hook-form"
import { FormFieldWrapper } from "@/lib/components/Form/_deprecated/FormFieldWrapper"

type Props = {
  name: string
  label: React.ReactNode
  registerOpts?: RegisterOptions
  divClassname?: string
  className?: string
  labelClassname?: string
  displayErrorMessage?: boolean
}

export function CheckboxInput({
  name,
  label,
  registerOpts = {},
  divClassname = '',
  labelClassname = '',
  className = '',
  displayErrorMessage = true,
  ...rest }: Props) {
  const { register, formState: { errors } } = useFormContext()
  return (
    <FormFieldWrapper
      name={name}
      label={label}
      input={(<input
        type='checkbox'
        id={name}
        className={`transition-colors 
           ${className} 
           ${errors[name]?.message ? 'border-red-400' : 'border-gray-300'} 
           `
        }
        aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
        {...rest}
        {...register(name, registerOpts)}
      />)}
      divClassname={`flex flex-row-reverse justify-end items-center gap-4 ${divClassname}`}
      errorMessage={errors[name]?.message as string}
      displayErrorMessage={displayErrorMessage}
    />
  );
}
