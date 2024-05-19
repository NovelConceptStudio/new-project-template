import { MouseEventHandler, ReactNode } from "react"

export type NavLink = {
  label: JSX.Element
  href: string
  key: string
  className?: string
}

export type NavButton = {
  label: JSX.Element
  onClick: MouseEventHandler<HTMLButtonElement>
  key: string
  className?: string
}

export type NavDropdownMenu = {
  openLabel: JSX.Element
  closeLabel: JSX.Element
  menu: JSX.Element
  key: string
  className?: string
  containerClassname?: string
}

export type AccordionItem = {
  label: string,
  content: ReactNode
}