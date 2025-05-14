import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-indigo-900/30 text-indigo-300 border-indigo-800 hover:bg-indigo-800/50",
        secondary: "bg-purple-900/30 text-purple-300 border-purple-800 hover:bg-purple-800/50",
        destructive: "border-transparent bg-red-900/30 text-red-300 border-red-800 hover:bg-red-800/50",
        outline: "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
