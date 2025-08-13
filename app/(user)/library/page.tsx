"use client"

import { useState } from "react"
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
    fileType: "pdf",
    fileSize: "2.4 MB"
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
    fileType: "docx",
    fileSize: "1.8 MB"
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
    fileType: "pdf",
    fileSize: "3.1 MB"
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
    fileType: "pptx",
    fileSize: "4.2 MB"
  },
]

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [papers, setPapers] = useState(savedPapers)

  // Filter papers based on active tab and search query
  const filteredPapers = papers
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
    setPapers(prevPapers =>
      prevPapers.map(paper =>
        paper.id === id ? { ...paper, starred: !paper.starred } : paper
      )
    )
  }

  // Get file type icon and display name
  const getFileTypeInfo = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return { icon: "📄", label: "PDF", color: "text-red-600" }
      case "docx":
      case "doc":
        return { icon: "📝", label: "Word", color: "text-blue-600" }
      case "pptx":
      case "ppt":
        return { icon: "📊", label: "PowerPoint", color: "text-orange-600" }
      case "xlsx":
      case "xls":
        return { icon: "📈", label: "Excel", color: "text-green-600" }
      case "txt":
        return { icon: "📄", label: "Text", color: "text-gray-600" }
      default:
        return { icon: "📄", label: fileType.toUpperCase(), color: "text-gray-600" }
    }
  }

  return (
    <div className="flex-1 overflow-hidden space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-x-12 gap-y-3 flex-wrap mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">My Library</h1>
          <p className="text-sm text-gray-500">Access your saved research papers and bookmarks.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
        {/* Search and Tabs */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="flex space-x-1 bg-[#F7F7F7] border border-[#F3EDF7] p-1 rounded-lg">
            {[
              { id: "all", label: "All Papers" },
              { id: "starred", label: "Starred" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-secondary-50 text-secondary-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search library..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#F2F2F2] rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPapers.length === 0 ? (
            <div className="bg-[#FCFAFF] border border-[#F4F2FD] rounded-lg p-12 text-center col-span-full">
              <Bookmark className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">No saved papers found.</p>
            </div>
          ) : (
            filteredPapers.map((paper) => (
              <div key={paper.id} className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg overflow-hidden">
                {/* Paper Header */}
                <div className="p-4 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{paper.title}</h3>
                    <button
                      className="text-gray-400 hover:text-yellow-500 transition-colors p-1"
                      onClick={() => toggleStar(paper.id)}
                    >
                      {paper.starred ? (
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ) : (
                        <Star className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-sm text-gray-500">
                      By {paper.author} • {paper.date}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getFileTypeInfo(paper.fileType).icon}</span>
                      <span className={`text-xs font-medium ${getFileTypeInfo(paper.fileType).color}`}>
                        {getFileTypeInfo(paper.fileType).label}
                      </span>
                      <span className="text-xs text-gray-400">• {paper.fileSize}</span>
                    </div>
                  </div>
                </div>

                {/* Paper Content */}
                <div className="px-4 pb-4">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {paper.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white border border-[#F2F2F2] text-gray-600 text-xs rounded hover:bg-gray-50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Paper Footer */}
                <div className="flex justify-end items-center pt-4 pb-4">
                  <button className="px-3 py-1.5 text-secondary-600 hover:text-secondary-700 transition-colors text-sm flex items-center gap-2">
                    View Resource 
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
