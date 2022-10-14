import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
export type CheckboxProps = {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxRadix.Root className="w-6 h-6 p-[2px] rounded bg-gray-800 ">
      <CheckboxRadix.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  )
}
