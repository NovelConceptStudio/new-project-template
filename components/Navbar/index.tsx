'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import React from 'react'
import { RiCloseLargeLine, RiMenuLine } from 'react-icons/ri'
import { baseText, smText } from '@/styles'

type Props = {}

/**
 * A standard horizontal navbar.
 * @returns 
 */
export function Navbar({ }: Props) {
  return (
    <NavigationMenu.Root className='sticky top-0 z-10 bg-off-white font-secondary border-black border-b' orientation='horizontal'>
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

        <NavigationMenu.Item className='flex'>
          <NavigationMenu.Link href="/">
            <div className='flex w-24'>
              {/* Logo here */}
            </div>

          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* Larger screens */}
        <div className={`hidden md:flex flex-row ${smText}`}>
          <NavigationMenu.Item className='flex'>
            <NavigationMenu.Link
              href='/'
              className='flex p-4 transition-color duration-300 hover:border-b-orange-600 border-b-4 border-t-4 border-t-transparent border-transparent'
              asChild
            >
              <a className='items-center'>Link A</a>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className='flex'>
            <NavigationMenu.Link
              href='/'
              className='flex p-4 transition-color duration-300 hover:border-b-orange-600 border-b-4 border-t-4 border-t-transparent border-transparent'
              asChild
            >
              <a className='items-center'>Link B</a>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </div>

        {/* Smaller screens */}
        <div className='flex flex-row md:hidden'> 
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
              <ul className={`p-4 gap-2 ${baseText}`}>
              <NavigationMenu.Link href="/" asChild>
                  <a>
                    <li className='p-2'>
                      Link A
                    </li>
                  </a>
                </NavigationMenu.Link>
                <NavigationMenu.Link href="/" asChild>
                  <a>
                    <li className='p-2'>
                      Link B
                    </li>
                  </a>
                </NavigationMenu.Link>
                {/* <li>
                  <span className='p-2 font-bold'>Services</span>
                </li>
                <NavigationMenu.Link asChild>
                  <a href="/">
                    <li className='p-2 px-4'>
                      Online Personal Training
                    </li>
                  </a>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <a href='/'>
                    <li className='p-2 px-4'>
                      Bodybuilding Competition Prep
                    </li>
                  </a>
                </NavigationMenu.Link> */}
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