import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./glitch.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "A modern 404 error page"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
