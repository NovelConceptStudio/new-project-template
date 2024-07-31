'use client'
import { Button } from '@/lib/interactive/Button'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import React from 'react'
import { textLarge } from '@/foundation/styles'

type Props = {}

const largeNavbarLinkClassnames = `
  flex
  py-2
  px-4
  transition-color
  duration-300
  hover:border-b-white
  border-b-4
  border-t-4
  border-t-transparent
  border-transparent
  !text-white
  !border-transparent
  text-black
  backdrop-blur-sm
  h-fit
  self-center
`

const smallNavbarLinkClassnames = `
  ${textLarge}
  text-white-smoke
  px-4
  py-4
  border-transparent
  bg-onyx
  bg-opacity-[25%]
  backdrop-blur-sm
  rounded-md
  `

/**
 * A standard horizontal navbar.
 * @returns 
 */
export function Navbar({ }: Props) {
  return (
    <NavigationMenu.Root className='fixed top-0 left-0 right-0 z-10 bg-onyx bg-opacity-[33%] font-secondary backdrop-blur' orientation='horizontal'>
      <NavigationMenu.List className='flex flex-row ml-4 md:ml-8 gap-2 justify-between md:justify-start items-center'>
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
            bg-onyx
            -z-20
            transition
            opacity-0
            text-white-smoke
            focus-within:opacity-100
            focus-within:z-20
          `
          }>
          <NavigationMenu.Link href='#main_content'>
            Skip to content
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* Top left logo */}
        <NavigationMenu.Item className='flex'>
          <NavigationMenu.Link href="/#main_content">
            <div>
              <div className='flex sm:hidden p-2 lg:p-4 w-16 lg:w-20 aspect-square'>
                {/* <Image src={icon} alt={'Novel Concept Studio'} priority/> */}
              </div>
              <div className='hidden sm:flex p-2 flex-1 w-[10rem]'>
                {/* <Image src={logo} alt={'Novel Concept Studio'} priority/> */}
              </div>
            </div>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* Larger screens */}
        <div className={`flex flex-row flex-1 justify-end gap-4 items-center mr-4`}>
          <NavigationMenu.Item>
            <Button
              className='text-center attention:!text-white backdrop-blur'
              href='/#interest'
              isLink
            >
              Get started
            </Button>
          </NavigationMenu.Item>
          {/* <a className='items-center'>About Us</a> */}
        </div>

        {/* Smaller screens */}
        {/* <div className='flex flex-row w-full items-center justify-end md:hidden'>
          <NavigationMenu.Item className='flex'>
            <NavigationMenu.Trigger
              className='
                group
                flex
                flex-row
                p-2
                mr-4
                w-12
                aspect-square
                text-xl
                justify-center
                items-center
                text-white-smoke
                rounded-md
                bg-onyx
                bg-opacity-[25%]
                backdrop-blur-sm
              '
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
              className='bg-onyx bg-opacity-[33%] font-secondary backdrop-blur'
            >
              <div>
                <div className={`flex flex-col p-4 gap-2`}>
                  <div className='p-4 border-t border-black mt-4'>
                    <Button
                      className='text-center attention:bg-opacity-[33%] font-secondary backdrop-blur'
                      href='#interest'
                      isLink
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </div> */}
        <NavigationMenu.Indicator className='font-bold' />
      </NavigationMenu.List>
      <div className='relative'>
        <NavigationMenu.Viewport className='absolute top-0 left-0 right-0 group' />
      </div>
    </NavigationMenu.Root>
  )
}