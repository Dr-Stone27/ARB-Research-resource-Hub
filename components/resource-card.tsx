"use client"

import { ExternalLink, FileText, Play, LinkIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/ui/tag"

export type ResourceType = "pdf" | "video" | "link" | "guide"

export interface Resource {
  id: string
  title: string
  type: ResourceType
  summary: string
  tags: string[]
  url: string
  thumbnail?: string
  date: string
}

interface ResourceCardProps {
  resource: Resource
  onTagClick?: (tag: string) => void
}

export function ResourceCard({ resource, onTagClick }: ResourceCardProps) {
  // Get icon based on resource type
  const getResourceIcon = () => {
    switch (resource.type) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-400" />
      case "video":
        return <Play className="h-5 w-5 text-green-400" />
      case "link":
        return <LinkIcon className="h-5 w-5 text-blue-400" />
      case "guide":
        return <FileText className="h-5 w-5 text-amber-400" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  // Get type label with proper capitalization
  const getTypeLabel = () => {
    return resource.type.charAt(0).toUpperCase() + resource.type.slice(1)
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-[1.02] bg-[#1c1c2b]/80 backdrop-blur-sm border-gray-800 rounded-2xl">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {getResourceIcon()}
            <span className="text-sm text-gray-400">{getTypeLabel()}</span>
          </div>
          <span className="text-sm text-gray-500">{resource.date}</span>
        </div>
        <CardTitle className="text-xl line-clamp-2 text-white mt-2">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <p className="text-gray-400 line-clamp-3">{resource.summary}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {resource.tags.map((tag, index) => (
            <Tag key={index} clickable={!!onTagClick} onClick={onTagClick ? () => onTagClick(tag) : undefined}>
              {tag}
            </Tag>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t border-gray-800 pt-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/20 border border-transparent hover:border-indigo-800/50"
          onClick={() => window.open(resource.url, "_blank")}
        >
          View Resource <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
