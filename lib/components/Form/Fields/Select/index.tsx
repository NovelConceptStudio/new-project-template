'use client'
import { Button, Input, ListBox, ListBoxItem, Popover, Select as RAS, SelectValue } from "react-aria-components"
import { InputSlot } from "../../InputSlot"
import { Controller, useFormContext } from "react-hook-form"
import { RiArrowDownSLine } from "react-icons/ri"
import { ReactNode } from "react"

type Props = {
  name: string
  selectOptions: SelectOption[] // Should be of type "ListBoxItem" from 'react-aria-components'
  placeholder: string
  label: React.ReactNode
  isRequired?: boolean
  description?: React.ReactNode
  type?: 'text' | 'email' | 'password' | 'tel' | 'url'
  classNames?: ClassNameOverrides
  displayErrorMessages?: boolean
  validate?: (value: string) => string | null
}

type SelectOption = {
  label: string
  value: string
}

type ClassNameOverrides = {
  container?: string
  label?: string
  input?: string
  errorMessage?: string
  errorMessageContainer?: string
  description?: string
}

export function Select({
  name,
  selectOptions,
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
          <RAS
            name={name}
            className={`
              flex
              flex-col
              ${classNames.container ?? ''}
            `}
            isRequired={isRequired}
            selectedKey={value}
            validationBehavior="aria"
            placeholder={placeholder}
            onSelectionChange={e => {
              onChange(e)
            }}
            onBlur={onBlur}
            isInvalid={invalid}
            ref={ref}
            aria-describedby={`${name}-err`}
          >
            <InputSlot
              input={
                <>
                  <Button className={`
                    flex
                    flex-row
                    gap-4
                    justify-between
                    items-center
                    bg-white
                    p-2
                    ${isRequired ? `border-b-2 border-black` : ``}
                    data-[invalid=true]:border-red-600
                    ${classNames.input ?? ''}
                  `}>
                    <SelectValue />
                    <span aria-hidden><RiArrowDownSLine /></span>
                  </Button>
                  <Popover className={`w-full sm:w-3/4 lg:w-1/2 bg-white text-center rounded-md`}>
                    <ListBox className={`flex flex-col`}>
                      {selectOptions.map((option, i) => {
                        return (<ListBoxItem
                          key={`${option.value}-${i}`}
                          className={`
                            p-2 
                            hover:cursor-pointer 
                            ${i % 2 === 1 ? 'bg-gray-200' : 'bg-transparent'} 
                            ${i === 0 ? 'rounded-t-md' : ''} 
                            ${i === (selectOptions.length - 1) ? 'rounded-b-md' : ''}
                          `}
                          id={option.value}
                        >
                          {option.label}
                        </ListBoxItem>
                        )
                      })}
                    </ListBox>
                  </Popover>
                </>


              }
              classNames={classNames}
              label={label}
              description={description}
              error={error?.message}
              displayErrorMessages={displayErrorMessages}
              isRequired={isRequired}
            />
          </RAS>
        )
      }}
    />

  );
}
