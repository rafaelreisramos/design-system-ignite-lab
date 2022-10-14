import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type HeadingProps = {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Heading({ size = 'md', children, asChild }: HeadingProps) {
  const ModifiedHeadingComponent = asChild ? Slot : 'h2'

  return (
    <ModifiedHeadingComponent
      className={clsx('text-gray-100 font-bold font-sans', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      })}
    >
      {children}
    </ModifiedHeadingComponent>
  )
}
