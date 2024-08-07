import { generalFont } from "@/config/fonts"
import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
	title: "Project Wave",
	description: "A new wave of projects.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={generalFont.className}>{children}</body>
		</html>
	)
}
