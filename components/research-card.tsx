"use client"

import { useState } from "react"
import { Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tag } from "@/components/ui/tag"

export type ResearchCategory = "analytical" | "simulation" | "experimental"

export interface ResearchPaper {
  id: string
  title: string
  author: string
  abstract: string
  category: ResearchCategory
  tags: string[]
  date: string
  downloads: number
  department?: string
}

interface ResearchCardProps {
  paper: ResearchPaper
  onTagClick?: (tag: string) => void
}

export function ResearchCard({ paper, onTagClick }: ResearchCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Map category to tag variant
  const getCategoryVariant = (category: ResearchCategory) => {
    return category as "analytical" | "simulation" | "experimental"
  }

  return (
    <>
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-[1.02] bg-[#1c1c2b]/80 backdrop-blur-sm border-gray-800 rounded-2xl">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <Tag variant={getCategoryVariant(paper.category)} className="mb-2">
              {paper.category.charAt(0).toUpperCase() + paper.category.slice(1)}
            </Tag>
            <span className="text-sm text-gray-500">{paper.date}</span>
          </div>
          <CardTitle className="text-xl line-clamp-2 text-white">{paper.title}</CardTitle>
          <div className="text-sm text-gray-400">by {paper.author}</div>
        </CardHeader>
        <CardContent className="flex-grow pb-3">
          <p className="text-gray-400 line-clamp-3">{paper.abstract}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {paper.tags.map((tag, index) => (
              <Tag key={index} clickable={!!onTagClick} onClick={onTagClick ? () => onTagClick(tag) : undefined}>
                {tag}
              </Tag>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
          <div className="flex items-center text-sm text-gray-500">
            <Download className="h-4 w-4 mr-1" />
            {paper.downloads} downloads
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/20 border border-transparent hover:border-indigo-800/50"
            onClick={() => setIsModalOpen(true)}
          >
            Read More
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[700px] bg-[#1c1c2b]/95 backdrop-blur-md border-gray-800 text-white">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <Tag variant={getCategoryVariant(paper.category)}>
                {paper.category.charAt(0).toUpperCase() + paper.category.slice(1)}
              </Tag>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 rounded-full h-8 w-8 border border-transparent hover:border-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <DialogTitle className="text-2xl mt-2">{paper.title}</DialogTitle>
            <DialogDescription className="text-gray-400">
              by {paper.author} • {paper.date} • {paper.downloads} downloads
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <h4 className="text-lg font-medium mb-2">Abstract</h4>
              <p className="text-gray-300">{paper.abstract}</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {paper.tags.map((tag, index) => (
                  <Tag key={index} clickable={!!onTagClick} onClick={onTagClick ? () => onTagClick(tag) : undefined}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
            {paper.department && (
              <div>
                <h4 className="text-lg font-medium mb-2">Department</h4>
                <p className="text-gray-300">{paper.department}</p>
              </div>
            )}
            <div className="flex justify-between items-center pt-4 border-t border-gray-800 mt-6">
              <Button variant="outline" className="border-gray-700">
                Contact Author
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500">
                <Download className="mr-2 h-4 w-4" />
                Download Paper
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
