'use client'
import { textSmall } from "@/foundation/styles"
import { ReactNode } from "react"
import { FieldError, Label, Text, TextArea as TA } from "react-aria-components"
import { RiAlertFill } from "react-icons/ri"
import { ErrorMessage } from "../_deprecated/ErrorMessage"

type Props = {
  label: React.ReactNode
  input: ReactNode
  isRequired: boolean
  description: React.ReactNode
  classNames: StyleOverrides
  displayErrorMessages: boolean
  error?: string
}

type StyleOverrides = {
  label?: string
  input?: string
  errorMessage?: string
  errorMessageContainer?: string
  description?: string
}

/**
 * To be used exclusively within form field inputs.
 * Handles peripheral input components, like the label and error message.
 */
export function InputSlot({
  label,
  input,
  isRequired = false,
  description = '',
  error,
  classNames = {},
  displayErrorMessages = true,
}: Props) {
  return (
    <>
      <Label className={`${classNames.label ?? ''}`}>
        {label}
      </Label>
      {input}
      <Text slot='description' className={`${classNames.description ?? ''}`}>
        {description}
      </Text>
      {isRequired && (
        <div className={`${classNames.errorMessageContainer ?? ''}`}>
          <p className={`${error ? `!text-red-600 font-bold` : `text-black italic`} ${textSmall} ${classNames.errorMessage ?? ''}`}>{"Required"}</p>
        </div>
      )}
    </>
  );
}
