'use client'
import { CSSProperties, ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import image from '../../public/mandie_georgia_lake.webp'

type Props = {
  children: ReactNode
  src: StaticImageData
  alt: string
  className?: string
  imgClassname?: string
  imgStyle?: CSSProperties
  height?: 'full' | 'half'
}

export function HeroContainer({
  children,
  src,
  alt,
  className = '',
  imgClassname = '',
  imgStyle = {},
  height = 'full',
  ...rest }: Props) {
  return (
    <div className={`
      bg-black
      relative 
      w-full
      ${className}
      `}>
      <Image
        className={`
          w-full
          aspect-square 
          object-cover
          ${height === 'full' ? 'lg:aspect-video' : 'lg:aspect-half-video'}
          ${imgClassname}
        `}
        style={{
          ...imgStyle
        }}
        src={src}
        alt={alt}
        priority
      />
      <div
        className={`
          absolute 
          top-0 
          left-0 
          bottom-0
          right-0
          `}
      >
        {children}
      </div>
    </div>
  )
}

