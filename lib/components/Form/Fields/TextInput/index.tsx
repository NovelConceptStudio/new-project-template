'use client'
import { FieldError, Input, Label, TextField, Text } from "react-aria-components"

type Props = {
  name: string
  placeholder: string
  label: React.ReactNode
  isRequired?: boolean
  description?: React.ReactNode
  type?: 'text' | 'email' | 'password' | 'tel' | 'url'
  classNames?: ClassNameOverrides
  displayErrorMessages?: boolean
  validate?: (value: string) => string | null
}

type ClassNameOverrides = {
  textField?: string
  label?: string
  input?: string
  errorMessage?: string
  description?: string
}

export function TextInput({
  name,
  placeholder,
  label,
  isRequired = false,
  description = '',
  type = 'text',
  classNames = { textField: '', label: '', input: '', errorMessage: '', description: '' },
  displayErrorMessages = true,
  validate = (val: string) => null
}: Props) {

  return (
    <TextField 
      name={name} 
      className={`flex flex-col text-white ${classNames.textField}`} 
      isRequired={isRequired} 
      validate={validate}
    >
      <Label className={`${classNames.label}`}>
        {label}
      </Label>
      <Input
        className={`p-2 rounded-lg text-black ${classNames.input}`}
        type={type}
        placeholder={placeholder}
        aria-describedby={`${name}-err`}
      />
      <Text slot='description' className={`${classNames.description}`}>
        {description}
      </Text>
      {displayErrorMessages && (
        <FieldError className={classNames.errorMessage} />)}
    </TextField>
  );
}
