import { ReactNode } from "react"

type Props = {
    children?: ReactNode
    className?: string
}

export const buttonStyles = `           
    w-fit
    bg-sky-400
    px-4
    py-2
    rounded-xl
    transition-colors
    text-black
    border-2
    border-transparent
    hover:border-amber
    hover:bg-white
`

export const Button = ({
    children,
    className,
    ...rest
}: Props) => {
    return (
        <button
            className={`
            ${buttonStyles}
            ${className}
        `}
            {...rest}
        >
            {children}
        </button>)
}