import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export type CheckboxProps = CheckboxRadix.CheckboxProps

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxRadix.Root
      className="w-6 h-6 p-[2px] rounded bg-gray-800}"
      {...props}
    >
      <CheckboxRadix.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  )
}
