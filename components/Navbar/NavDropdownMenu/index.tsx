import { useEffect, useState } from "react"
import { NavDropdownMenu as NDM } from "@/components/Navbar/types"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  navInfo: NDM
  setContent: (dropdown: NDM | null) => void
  className?: string
}

export function NavDropdownMenu({ navInfo, setContent, className = '', ...rest }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleEsc = (event: any) => {
       if (event.key === 'Escape') {
        setContent(null)
        setIsExpanded(false)
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div
      className={`relative ${navInfo.containerClassname ? navInfo.containerClassname : ''}`}
      key={`${navInfo.key}-dropdown`}
    >
      <button
        className={`
          hover:cursor-pointer
          ${className}
          ${navInfo.className}
        `}
        {...rest}
        onClick={() => {
          if (isExpanded) {
            setContent(null)
            setIsExpanded(false)
          } else {
            setContent(navInfo)
            setIsExpanded(true)
          }
        }}
      >
        {isExpanded ? navInfo.closeLabel : navInfo.openLabel}
      </button>
    </div>
  )
}