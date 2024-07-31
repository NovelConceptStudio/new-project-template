'use client'

type Props = {
  label: React.ReactNode
  className?: string
  divClassName?: string
  disclaimer?: React.ReactNode
  disclaimerAriaHidden?: boolean
  disabled?: boolean
  onClick?: () => void
}

export function SubmitInput({
  label,
  disclaimer,
  divClassName = '',
  disclaimerAriaHidden = false,
  className = '',
  disabled = false,
  onClick = () => {},
  ...rest }: Props) {
  return (
    <div className={`${divClassName}`}>
      <button
        type="button"
        className={`
        ${disabled ? '!bg-gray-500 !text-white hover:!cursor-not-allowed !border-transparent' : ''}
        ${className}`}
        aria-describedby={disclaimer ? 'submit-disclaimer' : undefined}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {label}
      </button>
      {/***
       * Disclaimer is linked to the submit button via the "aria-describedby" value,
       * so we remove it from the typical screenreader flow.
       */}
      {disclaimer && <div id='submit-disclaimer' aria-hidden={disclaimerAriaHidden}>{disclaimer}</div>}
    </div>
  );
}
