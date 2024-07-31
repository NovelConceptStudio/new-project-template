import { heading6, textRegular } from "@/foundation/styles"
import React, { ReactNode } from "react"

type TimelineProps = {
    items: {
        icon: ReactNode,
        content: ReactNode
    }[]
    className?: ClassOverrides
}

type ClassOverrides = {
    container?: string
    itemContainer?: string
    iconContainer?: string
    line?: string
}

export const Timeline = ({
    items,
    className = {}
}: TimelineProps) => {
    return (<div className={`flex flex-col gap-2 ${className.container ?? ''}`}>
        {items.map((item, i) => {
            return (
                <React.Fragment key={`adventure-${i}`} >
                    <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 ${className.itemContainer ?? ''}`}>
                        <div className={`${className.iconContainer ?? ''}`}>{item.icon}</div>
                        {item.content}
                    </div>
                    {
                        i < (items.length - 1)
                        && (<div className={`self-center sm:self-start ml-0 sm:ml-8 min-h-16 border-black border-l-2 ${className.line ?? ''}`}></div>)
                    }
                </React.Fragment>
            )
        })}
    </div>)
}