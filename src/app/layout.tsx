import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'

import type { Metadata } from 'next'
import { Dosis, Inter } from 'next/font/google'
import Image from 'next/image'

const dosis = Dosis({
	variable: '--font-dosis',
	subsets: ['latin']
})

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Meta Diária - Gerenciador de hábitos',
	description: 'Gerencie sues hábitos de forma simples e fácil. Tudo na palma da sua mão!'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${dosis.variable} ${inter.variable}`} suppressHydrationWarning>
			<body className="bg-zinc-950 flex flex-col items-center min-h-dvh">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Image
						src="/logo.svg"
						alt="logo - meta.diária"
						width={200}
						height={200}
						className="mt-10"
					/>

					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
