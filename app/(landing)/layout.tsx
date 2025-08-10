import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Lora, Schibsted_Grotesk } from "next/font/google"
import "../globals.css"
// import { Navbar } from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })
const schibstedGrotesk = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted-grotesk" })

export const metadata: Metadata = {
  title: "Research Resource Hub",
  description: "A platform for engineering research resources",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${lora.variable} ${schibstedGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
