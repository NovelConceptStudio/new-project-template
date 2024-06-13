import { useEffect, useState } from 'react';

type Props = {
  children?: React.ReactNode
  className?: string
}

export function SectionContainer({ children, className = '', ...rest }: Props) {
  return (
    <div className={`flex py-32 px-[6.25%] sm:px-[9.375%] md:px-[12.5%] ${className}`} {...rest}>
      {children}
    </div>
  );
}
