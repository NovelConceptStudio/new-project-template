'use client'
import { Input, TextField } from "react-aria-components"
import { InputSlot } from "../../InputSlot"
import { Controller, useFormContext } from "react-hook-form"

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
  defaultValue?: string
}

type ClassNameOverrides = {
  container?: string
  label?: string
  input?: string
  errorMessage?: string
  errorMessageContainer?: string
  description?: string
}

export function TextInput({
  name,
  placeholder,
  label,
  isRequired = false,
  description = '',
  type = 'text',
  classNames = {},
  displayErrorMessages = true,
  defaultValue
}: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue ?? undefined}
      rules={{ required: isRequired ? `This field is required` : '' }}
      render={({
        field: { name, value, onChange, onBlur, ref },
        fieldState: { invalid, error }
      }) => {
        return (
          <TextField
            name={name}
            className={`
              flex
              flex-col
              text-white
              ${classNames.container ?? ''}
            `}
            isRequired={isRequired}
            value={value}
            validationBehavior="aria"
            onChange={onChange}
            onBlur={onBlur}
            isInvalid={invalid}
          >
            <InputSlot
              input={<Input
                ref={ref}
                className={`
                  p-2
                  text-black
                  ${ isRequired ? `border-b-2 border-black` : ``}
                  data-[invalid=true]:border-red-600
                  ${classNames.input ?? ''}
                `}
                type={type}
                placeholder={placeholder}
                aria-describedby={`${name}-err`}
              />}
              classNames={classNames}
              label={label}
              description={description}
              error={error?.message}
              displayErrorMessages={displayErrorMessages}
              isRequired={isRequired}
            />
          </TextField>
        )
      }}
    />

  );
}
