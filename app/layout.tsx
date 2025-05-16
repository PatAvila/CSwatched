import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from './components/ClientLayout'
import Header from './components/Header'
import NavBar from './components/NavBar'
import AnnouncementBar from './components/AnnouncementBar'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientLayout>
          <AnnouncementBar />
          <Header />
          <NavBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
