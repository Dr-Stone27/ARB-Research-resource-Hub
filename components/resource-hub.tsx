"use client"

import { useState } from "react"
import { ResourceCard, type Resource, type ResourceType } from "@/components/resource-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ResourceHubProps {
  title: string
  description?: string
  resources: Resource[]
  viewAllUrl?: string
}

export function ResourceHub({ title, description, resources, viewAllUrl = "#" }: ResourceHubProps) {
  const [selectedType, setSelectedType] = useState<ResourceType | "all">("all")

  // Filter resources based on selected type
  const filteredResources =
    selectedType === "all" ? resources : resources.filter((resource) => resource.type === selectedType)

  return (
    <section className="w-full py-16 md:py-24 bg-[#121220] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">{title}</h2>
            {description && <p className="text-lg text-gray-400">{description}</p>}
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-semibold text-white">Browse Resources</h3>
          <div className="w-48">
            <Select value={selectedType} onValueChange={(value) => setSelectedType(value as ResourceType | "all")}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="link">Link</SelectItem>
                <SelectItem value="guide">Guide</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No resources found for the selected type.</p>
          </div>
        )}

        {viewAllUrl && filteredResources.length > 0 && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="mx-auto border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
              asChild
            >
              <a href={viewAllUrl}>View All Resources</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
