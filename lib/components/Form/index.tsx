'use client'
import { Form as ReactAriaForm } from "react-aria-components"

type Props = {
  children: React.ReactNode
  submitButton: React.ReactElement
  className?: string
  onSubmit?: (data: any) => void
}

export function Form({ children, submitButton, className = '', onSubmit = () => null }: Props) {
  return (
    <ReactAriaForm
      className={`${className}`}
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const formDataEntries = Array.from(formData.entries())
        const data: {
          [key: string]: FormDataEntryValue | FormDataEntryValue[]
        } = {}

        formDataEntries.forEach((entry) => {
          const entryData = formData.getAll(entry[0])
          if (entryData.length < 2) data[entry[0]] = entry[1] 
          else data[entry[0]] = entryData 
        })

        onSubmit(data)
      }}
    >
      {children}
      {submitButton}
    </ReactAriaForm>

  );
}
