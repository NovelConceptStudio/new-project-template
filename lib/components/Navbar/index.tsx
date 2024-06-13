'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import React from 'react'
import { RiCloseLargeLine, RiMenuLine } from 'react-icons/ri'

type Props = {}

const largeNavbarLinkClassnames = `flex p-4 transition-color duration-300 hover:border-b-white border-b-4 border-t-4 border-t-transparent border-transparent`
const smallNavbarLinkClassnames = ``


/**
 * A standard horizontal navbar.
 * @returns 
 */
export function Navbar({ }: Props) {
  return (
    <NavigationMenu.Root className='sticky top-0 z-10 bg-sky-400 font-secondary border-black border-b' orientation='horizontal'>
      <NavigationMenu.List className='flex flex-row ml-4 md:ml-8 gap-2 justify-between md:justify-start'>
        <NavigationMenu.Item
          className={`
            absolute 
            flex
            items-center
            justify-center
            top-0
            right-0
            bottom-0
            left-0
            bg-white
            -z-20
            transition
            opacity-0
            focus-within:opacity-100
            focus-within:z-20`
          }>
          <NavigationMenu.Link href='#main_content'>
            Skip to content
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* Top left logo */}
        {/* <NavigationMenu.Item className='flex'>
          <NavigationMenu.Link href="/">
            <div className='flex w-24'>
              LOGO
            </div>

          </NavigationMenu.Link>
        </NavigationMenu.Item> */}

        {/* Larger screens */}
        <div className={`hidden md:flex flex-row`}>
          <NavigationMenu.Item className='flex'>
            <NavigationMenu.Link
              href='/'
              className={`${largeNavbarLinkClassnames}`}
              asChild
            >
              <a className='items-center'>Home</a>
            </NavigationMenu.Link>
            <NavigationMenu.Link
              href='/template/library'
              className={`${largeNavbarLinkClassnames}`}
              asChild
            >
              <a className='items-center'>Library</a>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </div>

        {/* Smaller screens */}
        <div className='flex flex-row w-full justify-end md:hidden'>
          <NavigationMenu.Item className='flex'>
            <NavigationMenu.Trigger
              className='group flex flex-row p-4 w-16 aspect-square text-xl justify-center items-center'
              // Prevents the menu opening on mouseover: https://github.com/radix-ui/primitives/issues/1630
              onPointerOver={(event) => event.preventDefault()}
              onPointerEnter={(event) => event.preventDefault()}
              onPointerLeave={(event) => event.preventDefault()}
              onPointerMove={(event) => event.preventDefault()}
            >
              <RiMenuLine
                className='group-data-[state=open]:hidden'
                aria-label='Open navigation menu'
              />
              <RiCloseLargeLine
                className='hidden group-data-[state=open]:flex'
                aria-label='Close navigation menu'
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              className='bg-white border-b-black border-b'
            >
              <ul className={`p-4 gap-2`}>
                <NavigationMenu.Link href="/" asChild>
                  <a>
                    <li className='p-2'>
                      Home
                    </li>
                  </a>
                </NavigationMenu.Link>
                <NavigationMenu.Link href="/template/library" asChild>
                  <a>
                    <li className='p-2'>
                      Library
                    </li>
                  </a>
                </NavigationMenu.Link>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </div>
        <NavigationMenu.Indicator className='font-bold' />
      </NavigationMenu.List>
      <div className='relative'>
        <NavigationMenu.Viewport className='absolute top-0 left-0 right-0 group' />
      </div>
    </NavigationMenu.Root>
  )
}