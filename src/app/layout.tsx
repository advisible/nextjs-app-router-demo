import { Metadata } from 'next'
import Script from 'next/script'

import Menu from './menu'

import './globals.css'

export const metadata: Metadata = {
    title: "Next.js App Router demo | Advisible",
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <Script strategy="afterInteractive" src="/main.js" />
            <body>
                <header>
                    <h1>Advisible - Next.js App Router demo</h1>
                    <Menu />
                </header>
                {children}
            </body>
        </html>
    )
}
