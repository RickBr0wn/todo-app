import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '~/components/theme-provider'
import NavBar from '~/components/nav-bar'
import Providers from '~/components/providers'
import ScreenSizeIndicator from '~/components/screen-size-indicator'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'A Todo App built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <ScreenSizeIndicator />
            <NavBar />
            <div className="mx-auto w-[460px] mt-12">{children}</div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
