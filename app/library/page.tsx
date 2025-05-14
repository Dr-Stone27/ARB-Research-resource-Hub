"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Tag } from "@/components/ui/tag"
import { Bookmark, Search, Download, ExternalLink, Star, Clock } from "lucide-react"

// Sample saved papers data
const savedPapers = [
  {
    id: "1",
    title: "Quantum Computing Applications in Cryptography",
    author: "Alex Johnson",
    abstract: "This research explores the potential applications of quantum computing in modern cryptographic systems.",
    tags: ["Quantum Computing", "Cryptography", "Security"],
    date: "May 2023",
    saved: "2 days ago",
    starred: true,
  },
  {
    id: "2",
    title: "Climate Change Impact on Coastal Ecosystems",
    author: "Maria Rodriguez",
    abstract: "A comprehensive analysis of how rising sea levels affect biodiversity in coastal regions.",
    tags: ["Climate Change", "Ecosystems", "Environmental Science"],
    date: "June 2023",
    saved: "1 week ago",
    starred: false,
  },
  {
    id: "3",
    title: "Neural Networks for Early Disease Detection",
    author: "Priya Patel",
    abstract:
      "Investigating the application of deep learning algorithms in identifying early markers of neurodegenerative diseases.",
    tags: ["Neural Networks", "Healthcare", "AI"],
    date: "July 2023",
    saved: "2 weeks ago",
    starred: true,
  },
  {
    id: "4",
    title: "Economic Impacts of Remote Work Policies",
    author: "David Chen",
    abstract:
      "An analysis of how the shift to remote work has affected urban economies and commercial real estate markets.",
    tags: ["Economics", "Remote Work", "Urban Planning"],
    date: "March 2023",
    saved: "1 month ago",
    starred: false,
  },
]

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter papers based on active tab and search query
  const filteredPapers = savedPapers
    .filter((paper) => activeTab === "all" || (activeTab === "starred" && paper.starred))
    .filter(
      (paper) =>
        searchQuery === "" ||
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    )

  // Toggle star status
  const toggleStar = (id: string) => {
    console.log(`Toggled star for paper ${id}`)
    // In a real app, this would update the state
  }

  return (
    <DashboardShell>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">My Library</h1>
          <p className="text-gray-400">Access your saved research papers and bookmarks.</p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setActiveTab}>
              <TabsList className="bg-[#1c1c2b]">
                <TabsTrigger value="all" className="data-[state=active]:bg-indigo-600">
                  All Papers
                </TabsTrigger>
                <TabsTrigger value="starred" className="data-[state=active]:bg-indigo-600">
                  Starred
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search library..."
                className="pl-10 h-10 rounded-full bg-[#1c1c2b] border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredPapers.length === 0 ? (
              <Card className="bg-[#1c1c2b] border-gray-800 col-span-full">
                <CardContent className="pt-6 text-center">
                  <Bookmark className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                  <p className="text-gray-400">No saved papers found.</p>
                </CardContent>
              </Card>
            ) : (
              filteredPapers.map((paper) => (
                <Card key={paper.id} className="bg-[#1c1c2b] border-gray-800 overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white text-xl">{paper.title}</CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-yellow-400"
                        onClick={() => toggleStar(paper.id)}
                      >
                        {paper.starred ? (
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ) : (
                          <Star className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                    <CardDescription className="text-gray-400">
                      By {paper.author} • {paper.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{paper.abstract}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {paper.tags.map((tag, index) => (
                        <Tag key={index} variant="default">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      Saved {paper.saved}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-indigo-500 text-gray-300 hover:bg-indigo-600 hover:text-white"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
