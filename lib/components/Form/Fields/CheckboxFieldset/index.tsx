'use client'
import { RegisterOptions } from "react-hook-form"
import { CheckboxGroup, Label, Checkbox } from "react-aria-components"

type Props = {
  name: string
  label: React.ReactNode
  checkboxes: CheckboxData[]
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

}

export function CheckboxFieldset({
  name,
  label,
  checkboxes,
  defaultValue = [],
  classNames = '',
  displayErrorMessage = true,
}: Props) {
  return (
    <CheckboxGroup
      name={name}
      className={` flex flex-col`}
      defaultValue={defaultValue}
    >
      <Label>{label}</Label>
      {checkboxes.map((checkboxInfo, i) => (<Checkbox
        key={`cb-${name}-${i}`}
        value={checkboxInfo.value}
        className={'group flex flex-row'}>
        <div className="bg-white transition-colors duration-300 group-hover:bg-orange-100 group-data-[selected=true]:bg-orange-900 aspect-square rounded-lg w-4" />
        {checkboxInfo.label}
      </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
