'use client'
import { RegisterOptions, useFormContext } from "react-hook-form"
import { FormFieldWrapper } from "@/lib/components/Form/_deprecated/FormFieldWrapper"

type Props = {
  name: string
  label: React.ReactNode
  options: React.ReactNode[]
  registerOpts?: RegisterOptions
  divClassname?: string
  className?: string
  labelClassname?: string
  displayErrorMessages?: boolean
  defaultValue?: string
}

export function SelectInput({
  name,
  label,
  options,
  registerOpts = {},
  divClassname = '',
  labelClassname = '',
  className = '',
  displayErrorMessages = true,
  defaultValue,
  ...rest }: Props) {
  const { register, formState: { errors } } = useFormContext()

  return (
    <FormFieldWrapper
      name={name}
      label={label}
      input={<select
        id={name}
        className={`p-2 transition-colors border rounded-md  
           ${className}
           ${errors[name]?.message ? 'border-red-400' : 'border-gray-300'} 
           `
        }
        aria-describedby={displayErrorMessages ? `${name}-error` : undefined}
        defaultValue={defaultValue}
        {...rest}
        {...register(name, registerOpts)}
      >
        {options}
      </select>}
      divClassname={`flex flex-col ${divClassname}`}
      errorMessage={errors[name]?.message as string}
      labelClassname={labelClassname}
    />
  );
}
