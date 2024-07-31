'use client'
import { Controller, RegisterOptions, useFormContext } from "react-hook-form"
import { RadioGroup as RG, Radio } from "react-aria-components"
import { InputSlot } from "../../InputSlot"
import { RiCheckboxBlankCircleLine, RiRadio2Fill } from "react-icons/ri"

type Props = {
  name: string
  label: React.ReactNode
  options: OptionData[]
  isRequired?: boolean
  defaultValue?: string
  registerOpts?: RegisterOptions
  divClassname?: string
  classNames?: StyleOverrides
  labelClassname?: string
  displayErrorMessage?: boolean
}

type OptionData = {
  value: string,
  label: string
}

type StyleOverrides = {
  container?: string
  radioButtonsContainer?: string,
  label?: string
  input?: string
  errorMessage?: string
  errorMessageContainer?: string
  description?: string
  checkbox?: string
}

export function RadioGroup({
  name,
  label,
  options,
  defaultValue,
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
        return <RG
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
                className={`flex flex-col ${classNames.radioButtonsContainer}`}
              >
                {
                  options.map((option, i) => (<Radio
                    className={`flex flex-row gap-2 items-center group`}
                    key={`${option.value}-${i}`}
                    value={option.value}>

                    <RiCheckboxBlankCircleLine className={`
                      transition-colors
                      duration-150
                      bg-white
                      h-fit
                      aspect-square
                      w-4
                      rounded-full
                      
                      group-hover:bg-orange-100
                      group-data-[selected=true]:bg-orange-700
                      group-data-[selected=true]:text-white-smoke

                    `} />
                    {option.label}
                  </Radio>)
                  )
                }
              </div>
            }
            isRequired={isRequired}
            description={''}
            classNames={classNames}
            error={error?.message}
            displayErrorMessages={displayErrorMessage}
          />
        </RG >
      }}
    />
  );
}
