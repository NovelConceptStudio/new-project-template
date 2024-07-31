import { ReactNode, useState, useRef, useEffect } from "react"

type DrawerProps = {
    drawerFace: ReactNode // The visible part of the drawer
    drawerContent: ReactNode
    classNames?: ClassOverrides
}

type ClassOverrides = {
    container?: string
    drawerFaceContainer?: string
    drawerContentContainer?: string
}

/**
 * KNOWN ISSUE: Drawer width/height doesn't resize smaller correctly. Works fine on initial load.
 */
export const Drawer = ({
    drawerFace,
    drawerContent,
    classNames = {}
}: DrawerProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const [contentHeight, setContentHeight] = useState(0)
    const [contentWidth, setContentWidth] = useState(0)

    const [faceHeight, setFaceHeight] = useState(0)
    const [faceWidth, setFaceWidth] = useState(0)

    const drawerContentRef = useRef<HTMLDivElement>(null)
    const drawerFaceRef = useRef<HTMLButtonElement>(null)


    useEffect(() => {
        if (drawerContentRef.current) {
            setContentHeight(drawerContentRef.current.clientHeight)
            setContentWidth(drawerContentRef.current.clientWidth)
        }

        if (drawerFaceRef.current) {
            setFaceHeight(drawerFaceRef.current.clientHeight)
            setFaceWidth(drawerFaceRef.current.clientWidth)
        }

    }, [
        drawerContentRef.current,
        drawerFaceRef.current
    ])

    return (
        <div
            className={`${classNames.container ?? ''}`}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
            }}
        >
            {/* Drawer "face", the permanently visible part */}
            <button
                ref={drawerFaceRef}
                className={`${classNames.drawerFaceContainer ?? ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {drawerFace}
            </button>
            {/* Drawer "content", the hidden part (including the overflow mask) */}
            <div
                className={`${classNames.drawerContentContainer ?? ''}`}
                style={{
                    position: 'relative',
                    backgroundColor: 'transparent',
                    overflow: 'hidden',
                    transition: 'height .5s ease-in-out',
                    width: `${contentWidth > faceWidth ? contentWidth : faceWidth}px`,
                    height: `${isExpanded ? contentHeight : 0}px`
                }}
            >
                <div
                    ref={drawerContentRef}
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        transition: 'top .5s ease-in-out',
                        top: isExpanded ? '0px' : `-${contentHeight}px`,
                        zIndex: '1'
                    }}
                >
                    {drawerContent}
                </div>
            </div>
        </div>

    )
}
