"use client"

import { useState } from "react"
import type React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col lg:bg-gray-100">

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 bg-red-50">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        </aside>
        <main className="flex w-full flex-col overflow-hidden py-6 text-white">
          <div className="grid gap-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
