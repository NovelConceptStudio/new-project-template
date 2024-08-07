'use client'
import { Controller, RegisterOptions, useFormContext } from "react-hook-form"
import { CheckboxGroup, Checkbox } from "react-aria-components"
import { InputSlot } from "../../InputSlot"
import { RiCheckLine } from "react-icons/ri"

type Props = {
  name: string
  label: React.ReactNode
  checkboxes: CheckboxData[]
  isRequired?: boolean
  defaultValue?: string[]
  registerOpts?: RegisterOptions
  divClassname?: string
  classNames?: StyleOverrides
  labelClassname?: string
  displayErrorMessage?: boolean
}

type CheckboxData = {
  value: string,
  label: string
}

type StyleOverrides = {
  container?: string
  checkboxesContainer?: string,
  label?: string
  input?: string
  errorMessage?: string
  errorMessageContainer?: string
  description?: string
  checkbox?: string
}

export function CheckboxFieldset({
  name,
  label,
  checkboxes,
  defaultValue = [],
  classNames = {},
  isRequired = false,
  displayErrorMessage = true,
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
        return <CheckboxGroup
          name={name}
          className={`flex flex-col ${classNames.container ?? ''}`}
          defaultValue={defaultValue}
          value={value}
          validationBehavior="aria"
          onChange={onChange}
          onBlur={onBlur}
          isInvalid={invalid}
        >
          <InputSlot
            label={label}
            input={
              <div
                className={`flex flex-col ${classNames.checkboxesContainer}`}
              >
                {
                  checkboxes.map((checkboxInfo, i) => (<Checkbox
                    key={`cb-${name}-${i}`}
                    value={checkboxInfo.value}
                    className={`group flex flex-row items-center gap-2 ${classNames.checkbox ?? ''}`}>
                    <div
                      className={`
                    transition-colors
                    duration-150
                    bg-white
                    h-fit
                    aspect-square
                    rounded-sm
                    w-4
                    group-hover:bg-orange-100
                    group-data-[selected=true]:bg-orange-700
                  `}
                    >
                      <div
                        className={`
                      transition-opacity
                      group-data-[selected=true]:opacity-100
                      duration-150
                      opacity-0
                    `}>
                        <RiCheckLine className="text-white" />
                      </div>
                    </div>

                    {checkboxInfo.label}
                  </Checkbox>
                  ))
                }
              </div>

            }
            isRequired={isRequired}
            description={''}
            classNames={classNames}
            error={error?.message}
            displayErrorMessages={displayErrorMessage}
          />
        </CheckboxGroup >
      }}
    />
  );
}
