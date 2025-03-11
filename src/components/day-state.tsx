import type { JSX } from 'react'
import { Check, Dot, X } from 'lucide-react'

const dayStatus = new Map<boolean | undefined, JSX.Element>([
	[undefined, <Dot className="size-10 text-gray-400" />],
	[true, <Check className="size-5 text-emerald-500" />],
	[false, <X className="size-5 text-rose-500" />]
])

export function DayState({ day }: { day: undefined | boolean }) {
	return <div className="flex items-center justify-center size-10">{dayStatus.get(day)}</div>
}
