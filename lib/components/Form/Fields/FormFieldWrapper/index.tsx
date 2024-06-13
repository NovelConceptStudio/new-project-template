'use client'
import { textSmall } from "@/foundation/styles"
import { ErrorMessage } from "../../ErrorMessage"
import { RegisterOptions } from "react-hook-form"

type Props = {
  name: string
  label: React.ReactNode
  input: React.ReactNode
  registerOpts?: RegisterOptions
  divClassname?: string
  className?: string
  labelClassname?: string
  displayErrorMessage?: boolean
  errorMessage?: string
}

/**
 * Do not use directly. Instead, use one of the completed "<Type>Input" classes.
 * @param param0 
 * @returns 
 */
export function FormFieldWrapper({
  name,
  label,
  input,
  registerOpts = {},
  divClassname = '',
  labelClassname = '',
  className = '',
  displayErrorMessage = true,
  errorMessage = '',
  ...rest }: Props) {
  return (
    <div className="flex flex-col">
      <div className={`${divClassname}`} {...rest}>
        <label
          htmlFor={name}
          className={`
          ${textSmall}
          ${labelClassname}
          `} 
          aria-hidden         
        >
          {label}
        </label>
        {input}
      </div>
      {displayErrorMessage && <ErrorMessage message={errorMessage} ariaId={`${name}-error`}/>}
    </div>
  );
}
