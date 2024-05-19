'use client'
import { NavLink as NL, NavButton as NB, NavDropdownMenu as NDM } from '@/components/Navbar/types'
import { NavButton } from "@/components/Navbar/NavButton"
import { NavDropdownMenu } from "@/components/Navbar/NavDropdownMenu"
import { NavLink } from "@/components/Navbar/NavLink"
import { useState } from 'react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  navItems: (NL | NB | NDM | (NL | NB | NDM)[])[]
  skipLink: { href: string, className: string, label: JSX.Element }
  className?: string
  navItemClassName?: string
}

/**
 * A standard horizontal navbar.
 * @returns 
 */
export function Navbar({ navItems, skipLink, className = '', navItemClassName = '', ...rest }: Props) {
  const [dropdownMenu, setDropdownMenu] = useState<NDM | null>()
  return (
    <nav className={'sticky top-0 right-0 bottom-0 left-0 z-10'} >
      <div className={`
          absolute transition-opacity duration-150 opacity-0 focus-within:opacity-100 
          -z-10 focus-within:z-10 underline top-0 right-0 left-0 bottom-0 w-full h-full text-center content-center 
          ${skipLink.className ? skipLink.className : ''}
          `
      }
        key={'skip-to-content'}
      >
        <a href={skipLink.href}>{skipLink.label}</a>
      </div>
      <ul className={`relative flex flex-row w-full ${className}`} {...rest}>
        {navItems.map((item, i) => {
          // Group items that are sent as an array of arrays
          if (Array.isArray(item)) {
            return (<div className='flex flex-row' key={`nav-group-${i}`}>
              {item.map((groupedItem, j) => {
                if (groupedItem.hasOwnProperty('href')) {
                  return <NavLink
                    navInfo={groupedItem as NL}
                    className={navItemClassName}
                    key={`${groupedItem.key}-${j}`}
                    tabIndex={dropdownMenu ? -1 : 0}
                  />
                } else if (groupedItem.hasOwnProperty('onClick')) {
                  return <NavButton
                    navInfo={groupedItem as NB}
                    className={navItemClassName}
                    key={`${groupedItem.key}-${j}`}
                    tabIndex={dropdownMenu ? -1 : 0}
                  />
                } else if (groupedItem.hasOwnProperty('menu')) {
                  return <NavDropdownMenu
                    navInfo={groupedItem as NDM}
                    className={navItemClassName}
                    key={`${groupedItem.key}-${j}`}
                    setContent={setDropdownMenu}
                    tabIndex={(dropdownMenu && (dropdownMenu.key !== groupedItem.key)) ? -1 : 0}
                  />
                }
              })}
            </div>)
          } else if (item.hasOwnProperty('href')) {
            return <NavLink
              navInfo={item as NL}
              className={navItemClassName}
              key={`${item.key}-${i}`}
              tabIndex={dropdownMenu ? -1 : 0}
            />
          } else if (item.hasOwnProperty('onClick')) {
            return <NavButton
              navInfo={item as NB}
              className={navItemClassName}
              key={`${item.key}-${i}`}
              tabIndex={dropdownMenu ? -1 : 0}
            />
          } else if (item.hasOwnProperty('menu')) {
            return <NavDropdownMenu
              navInfo={item as NDM}
              className={navItemClassName}
              key={`${item.key}-${i}`}
              setContent={setDropdownMenu}
              tabIndex={(dropdownMenu && (dropdownMenu.key !== item.key)) ? -1 : 0}
            />
          }
        })}
      </ul>
      <div className='absolute left-0 right-0'>
        {dropdownMenu && dropdownMenu.menu}
        </div>
    </nav>
  )
}