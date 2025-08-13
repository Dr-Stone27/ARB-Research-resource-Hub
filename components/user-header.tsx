"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { ArrowLeft, Search, User } from "lucide-react"
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  path: string
}

export default function UserHeader() {
  const router = useRouter()
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])

  // Generate breadcrumbs based on current path
  useEffect(() => {
    const generateBreadcrumbs = (path: string): BreadcrumbItem[] => {
      const segments = path.split('/').filter(Boolean)
      const breadcrumbItems: BreadcrumbItem[] = []

      // Always start with Home
      breadcrumbItems.push({ label: "Home", path: "/dashboard" })

      if (segments.length === 0) {
        return breadcrumbItems
      }

      // Map path segments to readable labels
      const pathLabels: { [key: string]: string } = {
        dashboard: "Dashboard",
        browse: "Browse",
        submissions: "Submissions",
        notifications: "Notifications",
        analytics: "Analytics",
        library: "Library",
        settings: "Settings",
        profile: "Profile",
        paper: "Paper",
        categories: "Categories",
        onboarding: "Onboarding"
      }

      let currentPath = ""
      segments.forEach((segment, index) => {
        currentPath += `/${segment}`
        
        // Skip dynamic segments like [id] or [category]
        if (!segment.startsWith('[') && !segment.endsWith(']')) {
          const label = pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
          
          // Only add if it's not the same as the current path and not duplicate
          if (currentPath !== "/dashboard") {
            breadcrumbItems.push({
              label,
              path: currentPath
            })
          }
        }
      })

      return breadcrumbItems
    }

    setBreadcrumbs(generateBreadcrumbs(pathname))
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/browse?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleBack = () => {
    // Go back to previous page or dashboard if no previous page
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push("/dashboard")
    }
  }

  const canGoBack = pathname !== "/dashboard"

  return (
    <header className="border-b border-[#F2F2F2] bg-white py-4 px-6 sticky top-0 z-50 max-lg:hidden">
      <div className="flex items-center justify-between gap-4">
        {/* Left Section: Back Button and Breadcrumbs */}
        <div className="flex items-center gap-4">
          {canGoBack && (
            <button
              onClick={handleBack}
              className="flex items-center justify-center w-5 h-5 text-gray-400 hover:bg-gray-50 border border-gray-400 rounded-md transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
          )}
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={breadcrumb.path} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-gray-400 text-sm">/</span>
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-sm font-medium text-gray-900">
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.path}
                    className="text-sm text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    {breadcrumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-1 max-w-md mx-8 max-md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center gap-3 ps-4 border rounded-full bg-[#FCFCFC] border-[#F4F2FD]">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Find Research by Topics / Area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-2 text-sm text-gray-900 placeholder-gray-500 outline-none bg-transparent"
              />
            </div>
          </form>
        </div>

        {/* Right Section: User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">Godswill</p>
            <p className="text-xs text-gray-500">Researcher</p>
          </div>
          <Link
            href="/profile"
            className="h-10 w-10 bg-secondary-100 rounded-full flex items-center justify-center text-sm font-semibold text-secondary-700 hover:bg-secondary-200 transition-colors"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  )
}
