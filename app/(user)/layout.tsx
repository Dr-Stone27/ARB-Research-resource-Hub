import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Lora, Schibsted_Grotesk } from "next/font/google"
import "../globals.css"
// import { Navbar } from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarNav } from "@/components/sidebar-nav"

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
          <SidebarNav />

          <section className="lg:ml-64 relative">
            {/* <Header /> */}
            <header className="border-b border-gray-200 bg-white py-5 hidden lg:block sticky top-0 z-50">
              Header
            </header>

              <section className="py-16 lg:py-10 px-6 lg:px-4 lg:bg-gray-50">
                {children}
              </section>
            </section>

        </ThemeProvider>
      </body>
    </html>
  )
}
