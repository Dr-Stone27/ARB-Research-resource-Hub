"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, FileText, Home, Search, Settings, Upload, User, Bell, Library } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps {
  setOpen?: (open: boolean) => void
}

export function SidebarNav({ setOpen }: SidebarNavProps) {
  const pathname = usePathname()

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

  const handleClick = () => {
    if (setOpen) {
      setOpen(false)
    }
  }

  return (
    <nav className="grid items-start gap-2 py-4">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href} onClick={handleClick}>
          <Button
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start text-gray-300 hover:text-white",
              pathname === item.href && "bg-indigo-900/30 text-indigo-300 hover:bg-indigo-800/50 hover:text-indigo-300",
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Button>
        </Link>
      ))}
    </nav>
  )
}
