'use client'
import { FieldError, Input, Label, TextField, Text, TextArea as TA } from "react-aria-components"

type Props = {
  name: string
  placeholder: string
  label: React.ReactNode
  isRequired?: boolean
  description?: React.ReactNode
  classNames?: StyleOverrides
  displayErrorMessages?: boolean
  validate?: (value: string) => string | null
}

type StyleOverrides = {
  textField?: string
  label?: string
  input?: string
  errorMessage?: string
  description?: string
}

export function TextArea({
  name,
  placeholder,
  label,
  isRequired = false,
  description = '',
  classNames = { textField: '', label: '', input: '', errorMessage: '', description: '' },
  displayErrorMessages = true,
  validate = (value) => null
}: Props) {

  return (
    <TextField name={name} className={`flex flex-col text-white ${classNames.textField}`} isRequired={isRequired} validate={validate}>
      <Label className={`${classNames.label}`}>
        {label}
      </Label>
      <TA
        className={`p-2 rounded-lg text-black ${classNames.input}`}
        placeholder={placeholder}
        aria-describedby={`${name}-err`}
        />
      <Text slot='description' className={`${classNames.description}`}>
        {description}
      </Text>
      {displayErrorMessages && (
        <FieldError className={`${classNames.errorMessage}`}/>)}
    </TextField>
  );
}
