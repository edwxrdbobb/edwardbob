import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Bruno_Ace } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import Script from "next/script"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const brunoAce = Bruno_Ace({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bruno-ace",
})

export const metadata: Metadata = {
  title: "Edward Bob Kamara - Portfolio",
  description: "Software Developer & Product Designer specializing in modern web applications",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} ${brunoAce.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
        <Analytics />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
