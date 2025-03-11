import { DayState } from '@/components/day-state'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	const habits = {
		'beber água': {
			'2025-01-09': true,
			'2025-01-10': true,
			'2025-01-11': true,
			'2025-01-12': true
		},
		'estudar inglês': {
			'2025-02-09': true,
			'2025-02-10': true,
			'2025-03-11': true,
			'2025-03-12': true
		}
	}

	const today = new Date()
	const todayWeekday = today.getDay()
	const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

	const sortedWeekdays = [
		...weekdays.slice(todayWeekday + 1),
		...weekdays.slice(0, todayWeekday + 1)
	]

	return (
		<main className="container relative flex flex-col gap-8 px-4 pt-16 text-center">
			{(habits === null || Object.keys(habits).length === 0) && (
				<h1 className="mt-20 text-4xl font-normal font-display text-primary-foreground">
					Você não tem hábitos cadastrados
				</h1>
			)}

			{habits !== null &&
				Object.entries(habits).map(([habit, habitStreak]) => (
					<div key={habit} className="space-y-2">
						<div className="flex items-center justify-between">
							<span className="text-xl font-light font-sans text-white">{habit}</span>
							<Trash2 className="text-destructive cursor-pointer" />
						</div>
						<section className="grid grid-cols-7 rounded-md bg-muted p-2">
							{sortedWeekdays.map((day) => (
								<div
									key={day}
									className="flex flex-col items-center gap-1 last:font-bold last:[&>span]:border-b-2 last:[&>span]:border-emerald-500"
								>
									<span className="text-xs font-sans text-foreground">{day}</span>
									<DayState day={undefined} />
								</div>
							))}
						</section>
					</div>
				))}

			<Button
				asChild
				variant="default"
				className="fixed bottom-10 w-2/3 text-center left-1/2 -translate-x-1/2 font-display text-xl bg-button text-primary-foreground hover:bg-emerald-600 transition-colors"
			>
				<Link href="/new-habit">novo hábito</Link>
			</Button>
		</main>
	)
}
