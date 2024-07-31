import { useEffect, useState } from 'react';

type Props = {
  children?: React.ReactNode
  className?: string
}

export function SectionContainer({ children, className = '', ...rest }: Props) {
  return (
    <div className={`flex flex-row w-full justify-center overflow-hidden ${className}`} {...rest}>
      <div className='max-w-[92.34%] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1100px]'>
        {children}

      </div>
    </div>
  );
}
