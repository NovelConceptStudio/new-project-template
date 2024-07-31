'use client'
import { FieldError, Label, TextField, Text, TextArea as TA } from "react-aria-components"
import { InputSlot } from "../../InputSlot"
import { Controller, useFormContext } from "react-hook-form"

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
  container?: string
  label?: string
  input?: string
  errorMessage?: string
  errorMessageContainer?: string
  description?: string
}

export function TextArea({
  name,
  placeholder,
  label,
  isRequired = false,
  description = '',
  classNames = {},
  displayErrorMessages = true,
}: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: isRequired ? `This field is required` : '' }}
      render={({
        field: { name, value, onChange, onBlur, ref },
        fieldState: { invalid, error }
      }) => {
        return (
          <TextField
            name={name}
            className={`flex flex-col text-white ${classNames.container ?? ''}`}
            isRequired={isRequired}
            value={value}
            validationBehavior="aria"
            onChange={onChange}
            onBlur={onBlur}
            isInvalid={invalid}

          >
            <InputSlot
              input={<TA
                ref={ref}
                className={`p-2 text-black ${classNames.input ?? ''}`}
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
  )
}