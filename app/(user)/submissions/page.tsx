"use client"

import { useState } from "react"
import { Edit, Eye, MoreHorizontal, Plus, Calendar, Download, MessageSquare, Tag } from "lucide-react"

export default function SubmissionsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const submissions = [
                  {
                    title: "Quantum Computing Applications in Cryptography",
                    abstract:
                      "This research explores the potential applications of quantum computing in modern cryptographic systems...",
                    status: "Published",
                    date: "May 15, 2023",
                    downloads: 342,
                    citations: 12,
                    version: "1.0",
                  },
                  {
                    title: "Machine Learning Approaches to Climate Prediction",
                    abstract:
                      "A novel approach to predicting climate patterns using advanced machine learning algorithms...",
                    status: "Under Review",
                    date: "July 28, 2023",
                    downloads: 0,
                    citations: 0,
                    version: "1.0",
                  },
                  {
                    title: "Neural Networks for Early Disease Detection",
                    abstract:
                      "Investigating the application of deep learning algorithms in identifying early markers of neurodegenerative diseases...",
                    status: "Revision Requested",
                    date: "August 10, 2023",
                    downloads: 0,
                    citations: 0,
                    version: "1.2",
                  },
                  {
                    title: "Sustainable Architecture in Urban Planning",
                    abstract:
                      "Exploring innovative approaches to integrating sustainable design principles in high-density urban environments...",
                    status: "Draft",
                    date: "September 5, 2023",
                    downloads: 0,
                    citations: 0,
                    version: "0.1",
                  },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-[#E5FFEF] text-[#00A63B] border-[#CCFFDE]"
      case "Under Review":
        return "bg-[#FDF2E8] text-[#EB801D] border-[#FBE5D0]"
      case "Revision Requested":
        return "bg-[#FFE5E7] text-[#DB000E] border-[#FFCCCF]"
      case "Draft":
        return "bg-gray-100 text-gray-600 border-gray-200"
      default:
        return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  const filteredSubmissions = activeTab === "all" 
    ? submissions 
    : submissions.filter(sub => {
        if (activeTab === "published") return sub.status === "Published"
        if (activeTab === "review") return sub.status === "Under Review"
        if (activeTab === "revision") return sub.status === "Revision Requested"
        if (activeTab === "draft") return sub.status === "Draft"
        return true
      })

  return (
    <div className="flex-1 overflow-hidden space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-x-12 gap-y-3 flex-wrap mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">My Submissions</h1>
          <p className="text-sm text-gray-500">Manage and track your research submissions.</p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-primary text-white shadow-[inset_0_-2px_4px_rgba(255,255,255,0.35)] drop-shadow-[inset_0_2px_8px_rgba(33,0,93,0.2)] flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
          <Plus className="h-4 w-4" />
          <span>Submit Research</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
        <div className="mb-6">
          <div className="flex space-x-1 bg-[#F7F7F7] border border-[#F3EDF7] p-1 rounded-lg w-full overflow-x-auto">
            {[
              { id: "all", label: "All" },
              { id: "published", label: "Published" },
              { id: "review", label: "Under Review" },
              { id: "revision", label: "Revision" },
              { id: "draft", label: "Draft" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-secondary-50 text-secondary-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {activeTab === "all" && (
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">All Submissions</h2>
                <p className="text-sm text-gray-500">View and manage all your research submissions</p>
              </div>
              
              <div className="space-y-4">
                {filteredSubmissions.map((submission, index) => (
                  <div key={index} className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-3 mb-4 sm:mb-0 sm:flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900">{submission.title}</h3>
                          <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium border ${getStatusColor(submission.status)}`}>
                            {submission.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{submission.abstract}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {submission.date}
                          </div>
                          <div className="flex items-center">
                            <Download className="mr-1 h-4 w-4" />
                            {submission.downloads} downloads
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="mr-1 h-4 w-4" />
                            {submission.citations} citations
                          </div>
                          <div className="flex items-center">
                            <Tag className="mr-1 h-4 w-4" />
                            Version {submission.version}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "published" && (
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Published Research</h2>
                <p className="text-sm text-gray-500">Your published research papers</p>
              </div>
              <div className="text-center py-12">
                <p className="text-gray-500">Published submissions will be displayed here.</p>
              </div>
            </div>
          )}

          {activeTab === "review" && (
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Under Review</h2>
                <p className="text-sm text-gray-500">Submissions currently in the review process</p>
              </div>
              <div className="text-center py-12">
                <p className="text-gray-500">Under review submissions will be displayed here.</p>
              </div>
            </div>
          )}

          {activeTab === "revision" && (
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Revision Requested</h2>
                <p className="text-sm text-gray-500">Submissions that need revisions</p>
              </div>
              <div className="text-center py-12">
                <p className="text-gray-500">Revision requested submissions will be displayed here.</p>
              </div>
            </div>
          )}

          {activeTab === "draft" && (
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Draft Submissions</h2>
                <p className="text-sm text-gray-500">Your saved draft submissions</p>
              </div>
              <div className="text-center py-12">
                <p className="text-gray-500">Draft submissions will be displayed here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
