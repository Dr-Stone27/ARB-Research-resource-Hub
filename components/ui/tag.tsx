"use client"

import type React from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-indigo-900/30 text-indigo-300 border border-indigo-800/50 hover:bg-indigo-800/50",
        analytical: "bg-blue-900/30 text-blue-300 border border-blue-800/50 hover:bg-blue-800/50",
        simulation: "bg-purple-900/30 text-purple-300 border border-purple-800/50 hover:bg-purple-800/50",
        experimental: "bg-green-900/30 text-green-300 border border-green-800/50 hover:bg-green-800/50",
        theory: "bg-amber-900/30 text-amber-300 border border-amber-800/50 hover:bg-amber-800/50",
        review: "bg-red-900/30 text-red-300 border border-red-800/50 hover:bg-red-800/50",
      },
      clickable: {
        true: "cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
      clickable: false,
    },
  },
)

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
  onClick?: () => void
}

export function Tag({ className, variant, clickable, onClick, ...props }: TagProps) {
  return (
    <span
      className={cn(tagVariants({ variant, clickable }), className)}
      onClick={clickable ? onClick : undefined}
      {...props}
    />
  )
}
