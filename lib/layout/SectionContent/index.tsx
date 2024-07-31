import { textRegular, heading1, textMedium, textLarge } from "@/foundation/styles"
import { ReactNode } from "react"

type ClassNames = {
    container?: string,
    heading?: string,
    subheading?: string,
    description?: string
}

type Props = {
    heading: ReactNode
    subheading?: ReactNode
    description?: ReactNode
    isPrimary?: boolean
    classNames?: ClassNames
}

/**
 * @param param0 
 * @returns 
 */
export const SectionContent = ({
    heading,
    subheading,
    description,
    isPrimary = false,
    classNames = {}
}: Props) => {
    const headings = isPrimary ? (<>
        {subheading && <h2 className={`${textMedium} ${classNames.subheading ?? ''} font-semibold`}>{subheading}</h2>}
        <h1 className={`${heading1} text-hunter-green ${classNames.heading ?? ''}`}>{heading}</h1>
    </>) : (<>
        {subheading && <h3 className={`${textLarge} ${classNames.subheading ?? ''} font-semibold`}>{subheading}</h3>}
        <h2 className={`${heading1} ${classNames.heading ?? ''} text-hunter-green`}>{heading}</h2>
    </>)

    return (
        <div className={`flex flex-col gap-4 ${classNames.container ?? ''}`}>
            {headings}
            {description && <div
                className={`${textLarge} ${classNames.description ?? ''}`}>
                {description}
            </div>}
        </div>
    )
}