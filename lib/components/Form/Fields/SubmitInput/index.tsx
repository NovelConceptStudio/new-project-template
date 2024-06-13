'use client'

import { buttonStyles } from "@/lib/interactive/Button"

type Props = {
  label: React.ReactNode
  className?: string
  divClassName?: string
  disclaimer?: React.ReactNode
  disclaimerAriaHidden?: boolean
  disabled?: boolean
}

export function SubmitInput({
  label,
  disclaimer,
  divClassName = '',
  disclaimerAriaHidden = false,
  className = '',
  disabled = false,
  ...rest }: Props) {
  return (
    <div className={`${divClassName}`}>
      <input
        type="submit"
        value={`${label}`}
        className={`
        ${buttonStyles} ${disabled ? '!bg-gray-500 !text-white hover:!cursor-not-allowed !border-transparent' : ''}
        ${className}`}
        aria-describedby={disclaimer ? 'submit-disclaimer' : undefined}
        disabled={disabled}
        {...rest}
      />
      {/***
       * Disclaimer is linked to the submit button via the "aria-describedby" value,
       * so we remove it from the typical screenreader flow.
       */}
      {disclaimer && <div id='submit-disclaimer' aria-hidden={disclaimerAriaHidden}>{disclaimer}</div>}
    </div>
  );
}
