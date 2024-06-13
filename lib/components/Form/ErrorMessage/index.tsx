import { textSmall } from "@/foundation/styles"
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form"

type Props = {
    ariaId: string
    message?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    className?: string
}

export function ErrorMessage({ ariaId, message, className = '', ...rest }: Props) {
    // Coercing the error message type to "string". 
    // Do I need to consider the other types too?
    return (<span
        id={ariaId}
        className={`${textSmall} text-red-400 min-h-5 md:min-h-6 ${className} ${!message ? 'invisible' : ''}`}
        {...rest}
        aria-hidden // Hide this from screenreaders because we are reading the error message via "aria-describedby"
    >
        {(message as string) && (message as string)}
    </span>)
}