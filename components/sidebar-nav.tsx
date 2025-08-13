"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart2,
  Bell,
  FileText,
  Home,
  Library,
  LogOut,
  Menu,
  Search,
  Settings,
  Upload,
  User,
  X
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function SidebarNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const navRef = useRef<HTMLDivElement>(null)

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "My Profile",
      href: "/profile",
      icon: User,
    },
    {
      title: "My Submissions",
      href: "/submissions",
      icon: FileText,
    },
    {
      title: "Browse Research",
      href: "/browse",
      icon: Search,
    },
    {
      title: "Notifications",
      href: "/notifications",
      icon: Bell,
    },
    {
      title: "Submit Research",
      href: "/submit",
      icon: Upload,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: BarChart2,
    },
    {
      title: "Library",
      href: "/library",
      icon: Library,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  const handleLogout = () => {
    router.push("/")
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Don't close if clicking on the close button
      if (
        closeButtonRef.current &&
        closeButtonRef.current.contains(event.target as Node)
      ) {
        return
      }

      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 lg:right-auto lg:bottom-0 px-6 lg:px-0 py-4 lg:pt-8 lg:pb-12 lg:w-64 z-50 text-xs max-lg:border-b-[1px] lg:border-r-[1px] border-gray-200 bg-white">
      <div className="flex flex-col justify-between gap-6 h-full relative">
        <div className="flex gap-6 lg:block">
          {/* Mobile Menu Button */}
          <button
            ref={closeButtonRef}
            className="lg:hidden cursor-pointer hover:opacity-90 transition-all duration-300 absolute top-0 left-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="w-6 h-6" />
              :<Menu className="w-6 h-6" />
            }
          </button>

          <Link href="/dashboard" className="flex-1 text-center lg:flex lg:px-6 lg:text-left text-base font-bold">
            ARB Resource<span className="text-[#21005D]">HUB</span>
          </Link>

          <div className="hidden lg:block lg:mt-8 pt-4 px-6">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-col gap-4">
              {navItems.map((navItem, index) => (
                <div key={index}>
                  <Link
                    key={index}
                    href={navItem.href}
                    className={`flex gap-2.5 items-center py-3 px-4 cursor-pointer transition-all duration-300 rounded-lg ${pathname === navItem.href ? "bg-[#F8F5FF] dark:text-black" : "hover:bg-primary-50/50"}`}
                  >
                    <div className={`${pathname === navItem.href && "text-primary-500"}`}>
                      <navItem.icon className="w-4 h-4" />
                    </div>
                    {navItem.title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* User & Logout Button */}
        <div className="hidden lg:flex gap-3 px-5">
          <button onClick={handleLogout} className="w-full cursor-pointer flex gap-2.5 py-3 px-4 bg-[#FBF5FF] hover:bg-[#F8F5FF] transition-all duration-300 rounded-lg">
            <LogOut className="w-4 h-4 text-error-500 transition-colors" />
            <span className="text-red-600 dark:text-red-400">Logout</span>
          </button>
        </div>
      </div>


      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden pt-8 pb-4 z-30" ref={navRef}>
          <div className="flex flex-col space-y-4">
            {navItems.map((navItem, index) => (
              <div key={index}>
                <Link
                  key={index}
                  href={navItem.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex gap-3 items-center py-2 px-4 cursor-pointer transition-all duration-300 rounded-sm ${pathname === navItem.href ? "bg-[#F8F5FF] dark:text-black" : "hover:bg-primary-50/50"}`}
                >
                  <div className={`${pathname === navItem.href && "text-primary-500"}`}>
                    <navItem.icon className="w-4 h-4" />
                  </div>
                  {navItem.title}
                </Link>
              </div>
            ))}
          </div>

          <hr className="border-gray-100 dark:border-gray-400 h-px w-full my-2" />
          
          {/* Mobile Logout Button */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                handleLogout()
                setIsMenuOpen(false)
              }}
              className="flex gap-3 items-center py-2 px-4 cursor-pointer transition-all duration-300 rounded-sm hover:bg-red-50 dark:hover:bg-red-900/20 w-full text-left"
            >
              <LogOut className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="text-red-600 dark:text-red-400">Logout</span>
            </button>
          </div>
        </nav>
      )}
    </nav>
  )
}
