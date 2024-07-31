import { ReactNode } from "react"

type Props = {
    children?: ReactNode
    className?: string
    forBg?: 'light' | 'dark'
    variant?: 'solid' | 'hollow' | 'ghost'
    isLink?: boolean,
    href?: string
    onClick?: () => void,
    type?: 'button' | 'reset' | 'submit'
}

const sharedButtonClasses = `flex flex-row items-center transition-colors duration-300 px-4 py-2 rounded-md justify-center`

export const Button = ({
    children,
    className = '',
    forBg = 'dark',
    variant = 'solid',
    isLink = false,
    onClick = () => { },
    href = '/',
    type = 'button'
}: Props) => {
    const generateClassnames = () => {
        let buttonClasses = ''
        if (forBg === 'dark') {
            switch (variant) {
                case ('solid'):
                    buttonClasses = 'bg-mikado-yellow-500 text-black border-2 border-mikado-yellow-500 attention:bg-transparent attention:text-white';
                    break;
                case ('hollow'):
                    buttonClasses = 'bg-transparent text-white border-2 border-white attention:border-mikado-yellow-500';
                    break;
                case ('ghost'):
                    buttonClasses = 'bg-transparent text-white border-2 border-transparent';
                    break;
            }
        } else {
            switch (variant) {
                case ('solid'):
                    buttonClasses = 'bg-melon-500 text-melon-500 text-white border-2 border-melon-500 attention:bg-transparent attention:text-black';
                    break;
                case ('hollow'):
                    buttonClasses = 'bg-transparent text-melon-500 text-black border-2 border-melon-500 attention:border-white';
                    break;
                case ('ghost'):
                    buttonClasses = 'bg-transparent text-melon-500 text-black border-2 border-transparent';
                    break;
            }
        }

        return `${sharedButtonClasses} ${buttonClasses}`
    }
    return (
        <>
            {
                isLink ?
                    (<a
                        className={`
                            ${generateClassnames()}
                            ${className}
                        `}
                        href={href}
                    >
                        {children}
                    </a>) :
                    (<button
                        className={`
                            ${generateClassnames()}
                            ${className}
                        `}
                        onClick={onClick}
                        type={type}
                    >
                        {children}
                    </button>)
            }
        </>

    )
}