import { ReactNode } from "react"

type ClassNames = {
    container?: string
    column1?: string
    column2?: string
    column3?: string
}

type Props = {
    column1: ReactNode,
    column2: ReactNode,
    column3: ReactNode
    classNames?: ClassNames
}

/**
 * @param param0 
 * @returns 
 */
export const ThreeColumn = ({
    column1,
    column2,
    column3,
    classNames = {}
}: Props) => {
    return (
        <div className={`flex flex-col w-full lg:flex-row items-center gap-x-16 gap-y-8 ${classNames.container ?? ''}`}>
            <div className={`flex flex-row flex-1 justify-center ${classNames.column1 ?? ''}`}>{column1}</div>
            <div className={`flex flex-row flex-1 justify-center  ${classNames.column2 ?? ''}`}>{column2}</div>
            <div className={`flex flex-row flex-1 justify-center  ${classNames.column2 ?? ''}`}>{column3}</div>
        </div>
        )
}