import { NavLink as NL } from "@/components/Navbar/types"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  navInfo: NL
  className?: string
}

/**
 * A clickable button to be used in a nav menu.
 * @returns 
 */
export function NavLink({ navInfo, className = '', ...rest }: Props) {
  return (
    <a href={navInfo.href} className={`
        ${className} 
        ${navInfo.className}
      `}
      key={`${navInfo.key}-link`}
      {...rest}>
      {navInfo.label}
    </a>
  )
}