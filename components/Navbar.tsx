"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  // Determine if we're in the dashboard area
  const isDashboard =
    pathname?.startsWith("/dashboard") ||
    pathname?.startsWith("/profile") ||
    pathname?.startsWith("/submissions") ||
    pathname?.startsWith("/browse") ||
    pathname?.startsWith("/submit") ||
    pathname?.startsWith("/analytics") ||
    pathname?.startsWith("/library") ||
    pathname?.startsWith("/settings") ||
    pathname?.startsWith("/notifications")

  // Don't render this navbar in dashboard pages
  if (isDashboard) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0f0f1a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0f0f1a]/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition ease-in-out duration-300 hover:opacity-80"
          aria-label="ResearchHub Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#gradient-nav)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <defs>
              <linearGradient id="gradient-nav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
          <span className="text-xl font-bold text-white">ResearchHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/browse" className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors">
            Browse
          </Link>
          <Link href="/submit" className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors">
            Submit
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors">
            About
          </Link>
          <Link href="/news" className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-colors">
            News
          </Link>
        </nav>

        {/* Desktop Search and Auth */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search research..."
              className="w-64 pl-8 rounded-full bg-[#1c1c2b] border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="font-medium border-2 border-indigo-500 text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl px-4 py-2 h-auto"
          >
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-2 border-indigo-500 font-medium rounded-xl px-4 py-2 h-auto"
            asChild
          >
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Search Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {isSearchOpen ? (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#0f0f1a] px-4 py-2">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search research..."
                  className="w-full pl-8 pr-10 bg-[#1c1c2b] border-gray-700 text-gray-300"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 text-gray-400 hover:text-white"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close search</span>
                </Button>
              </div>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-400 hover:text-white"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-[#0f0f1a] border-gray-800">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/browse"
                className="text-lg font-medium text-gray-300 hover:text-indigo-400 transition-colors flex items-center py-2"
              >
                Browse
              </Link>
              <Link
                href="/submit"
                className="text-lg font-medium text-gray-300 hover:text-indigo-400 transition-colors flex items-center py-2"
              >
                Submit
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-gray-300 hover:text-indigo-400 transition-colors flex items-center py-2"
              >
                About
              </Link>
              <Link
                href="/news"
                className="text-lg font-medium text-gray-300 hover:text-indigo-400 transition-colors flex items-center py-2"
              >
                News
              </Link>
              <div className="h-px bg-gray-800 my-4" />
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-center border-2 border-indigo-500 text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl px-4 py-2 h-auto"
                >
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button
                  asChild
                  className="w-full justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-2 border-indigo-500 rounded-xl px-4 py-2 h-auto"
                >
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
