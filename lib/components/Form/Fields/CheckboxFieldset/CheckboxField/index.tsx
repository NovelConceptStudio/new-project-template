'use client'
import { RegisterOptions, useFormContext } from "react-hook-form"
import FormFieldWrapper from "../../FormFieldWrapper"
import CheckboxInput from "../../CheckboxInput"

export type CheckboxFieldProps = {
  name: string
  label: React.ReactNode
  value: string
  onChange?: Function
  divClassname?: string
  className?: string
  labelClassname?: string
}

/**
 * Only intended to be used within a checkbox fieldset component
 * @param param0 
 * @returns 
 */
export function CheckboxField({
  name,
  label,
  value,
  onChange = () => {},
  divClassname = '',
  labelClassname = '',
  className = '',
  ...rest }: CheckboxFieldProps) {
  // const { register, formState: { errors } } = useFormContext()
  return (
    <div className={`${divClassname}`}>
      <input type="checkbox" className={`${className}`} value={value} name={name} id={name} onChange={(e) => onChange(e)} {...rest}/>
      <label htmlFor={name} className={`${labelClassname}`}>{label}</label>
    </div>
  );
}
