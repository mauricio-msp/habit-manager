import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function NewHabit() {
	return (
		<main className="container relative flex flex-col gap-9 px-12 pt-16">
			<h1 className="text-4xl text-foreground font-light text-center font-display">novo hábito</h1>

			<form action="" className="flex flex-col gap-4 mt-4">
				<Input
					id="habit"
					type="text"
					name="habit"
					placeholder="Informe o novo hábito..."
					className="font-sans text-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background placeholder:text-base py-2 h-10"
				/>

				<Button
					type="submit"
					variant="default"
					className="bg-button text-primary-foreground font-display text-xl"
				>
					Cadastrar
				</Button>
				<Button asChild variant="destructive" className="text-xl font-display">
					<Link href="/">Cancelar</Link>
				</Button>
			</form>
		</main>
	)
}
