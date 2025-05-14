import type React from "react"

interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, text, children }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between px-2">
      <div className="grid gap-1">
        <h1 className="font-heading text-2xl md:text-3xl text-white">{heading}</h1>
        {text && <p className="text-sm md:text-base text-gray-400">{text}</p>}
      </div>
      {children && <div className="flex w-full sm:w-auto">{children}</div>}
    </div>
  )
}
