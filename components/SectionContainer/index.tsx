import { useEffect, useState } from 'react';

type Props = {
  children?: React.ReactNode
  className?: string
}

export default function SectionContainer({ children, className = '', ...rest }: Props) {
  return (
    <div className={`flex py-16 md:py-24 px-[6.25%] sm:px-[9.375%] md:px-[12.5%] ${className}`} {...rest}>
      {children}
    </div>
  );
}
