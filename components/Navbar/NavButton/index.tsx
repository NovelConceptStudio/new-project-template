import { NavButton as NB } from "@/components/Navbar/types"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  navInfo: NB
  className?: string
}

/**
 * A clickable button to be used in a nav menu.
 * @returns 
 */
export function NavButton({ navInfo, className = '', ...rest }: Props) {
  return (
    <button
      className={`
        ${className}
        ${navInfo.className}
      `}
      onClick={navInfo.onClick}
      key={`${navInfo.key}-button`}
      {...rest}
    >
      {navInfo.label}
    </button>
  )
}