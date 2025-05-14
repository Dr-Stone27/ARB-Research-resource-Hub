"use client"
import { cn } from "@/lib/utils"

export type ResearchCategory = "all" | "analytical" | "simulation" | "experimental"

interface FeaturedCategoriesProps {
  onCategoryChange: (category: ResearchCategory) => void
  activeCategory: ResearchCategory
}

export function FeaturedCategories({ onCategoryChange, activeCategory }: FeaturedCategoriesProps) {
  const categories: { id: ResearchCategory; label: string }[] = [
    { id: "all", label: "All" },
    { id: "analytical", label: "Analytical" },
    { id: "simulation", label: "Simulation" },
    { id: "experimental", label: "Experimental" },
  ]

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-[#1c1c2b]/60 backdrop-blur-sm p-1.5 rounded-full border border-gray-800 shadow-lg">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-6 py-2 rounded-full text-sm transition-all duration-300",
              activeCategory === category.id
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md"
                : "text-gray-300 hover:text-white hover:bg-[#252538]",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}
