"use client"

import { Upload, User, ChevronDown } from "lucide-react"
import InsightsPanel from "@/components/insights-panel"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function DashboardPage() {
  const [selectedFilter, setSelectedFilter] = useState("Filter Research Papers")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("This month")
  const [isTimeFilterOpen, setIsTimeFilterOpen] = useState(false)

  const filterOptions = ["All", "Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering"]
  const timeFilterOptions = ["Today", "This week", "This month", "This year"]

  // Sample stats data - in real app this would come from API
  const statsData = {
    "Today": {
      downloads: 12,
      citations: 3,
      views: 45,
      papers: 2
    },
    "This week": {
      downloads: 89,
      citations: 15,
      views: 234,
      papers: 8
    },
    "This month": {
      downloads: 342,
      citations: 67,
      views: 892,
      papers: 23
    },
    "This year": {
      downloads: 1247,
      citations: 289,
      views: 3456,
      papers: 89
    }
  }

  const researchPapers = [
    {
      title: "Machine Learning Applications in Autonomous Vehicles",
      author: "Dr. Sarah Johnson",
      department: "Computer Science",
      abstract: "This paper explores the implementation of machine learning algorithms in autonomous vehicle systems, focusing on real-time decision making and safety protocols.",
      downloads: 45,
      tags: [
        {
          name: "civileng",
          style: "bg-[#E5FFEF] text-[#00A63B] border-[#CCFFDE]"
        },
        {
          name: "structures",
          style: "bg-[#FFE5E7] text-[#DB000E] border-[#FFCCCF]"
        },
        {
          name: "materials",
          style: "bg-[#FDF2E8] text-[#EB801D] border-[#FBE5D0]"
        }
      ]
    },
    {
      title: "Renewable Energy Integration in Smart Grids",
      author: "Prof. Michael Chen",
      department: "Electrical Engineering",
      abstract: "Analysis of renewable energy sources integration challenges and solutions in modern smart grid infrastructure.",
      downloads: 32,
      tags: [
        {
          name: "civileng",
          style: "bg-[#E5FFEF] text-[#00A63B] border-[#CCFFDE]"
        },
        {
          name: "materials",
          style: "bg-[#FDF2E8] text-[#EB801D] border-[#FBE5D0]"
        }
      ]
    },
    {
      title: "Advanced Materials for Aerospace Applications",
      author: "Dr. Emily Rodriguez",
      department: "Mechanical Engineering",
      abstract: "Development and testing of lightweight composite materials for aerospace structural components.",
      downloads: 28,
      tags: [
        {
          name: "civileng",
          style: "bg-[#E5FFEF] text-[#00A63B] border-[#CCFFDE]"
        },
        {
          name: "structures",
          style: "bg-[#FFE5E7] text-[#DB000E] border-[#FFCCCF]"
        }
      ]
    },
    {
      title: "Sustainable Construction Methods",
      author: "Prof. David Kim",
      department: "Civil Engineering",
      abstract: "Innovative sustainable construction techniques and their environmental impact assessment.",
      downloads: 19,
      tags: [
        {
          name: "structures",
          style: "bg-[#FFE5E7] text-[#DB000E] border-[#FFCCCF]"
        },
        {
          name: "materials",
          style: "bg-[#FDF2E8] text-[#EB801D] border-[#FBE5D0]"
        }
      ]
    },
    {
      title: "Green Chemistry in Industrial Processes",
      author: "Dr. Lisa Wang",
      department: "Chemical Engineering",
      abstract: "Implementation of green chemistry principles in large-scale industrial manufacturing processes.",
      downloads: 37,
      tags: [
        {
          name: "civileng",
          style: "bg-[#E5FFEF] text-[#00A63B] border-[#CCFFDE]"
        }
      ]
    },
    {
      title: "Quantum Computing Algorithms",
      author: "Prof. Robert Smith",
      department: "Computer Science",
      abstract: "Novel quantum computing algorithms for optimization problems in various domains.",
      downloads: 52,
      tags: [
        {
          name: "materials",
          style: "bg-[#FDF2E8] text-[#EB801D] border-[#FBE5D0]"
        }
      ]
    }
  ]

  const specialFeatures = [
    {
      title: "Explore New Research",
      description: "Explore new research papers in areas you are interested in.",
      linkText: "Explore Now",
      isSearchbar: false,
      link: "/explore"
    },
    {
      title: "Find Research Easily",
      description: "Find any research by specific topics or areas of interest.",
      isSearchbar: true,
      link: "/explore"
    },
    {
      title: "Submit Your Research",
      description: "Submit your own Research paper in any engineering field.",
      linkText: "Submit Research",
      isSearchbar: false,
      link: "/explore"
    }
  ]

  const filteredPapers = selectedFilter === "Filter Research Papers" 
    ? researchPapers 
    : researchPapers.filter(paper => paper.department === selectedFilter)
  
  const userStats = [
    {
      title: "Total Papers",
      value: 23,
      monthPercentage: +8,
      icon: "/icons/papers.svg"
    },
    {
      title: "Total Views",
      value: 8901,
      monthPercentage: -12,
      icon: "/icons/papers.svg"
    },
    {
      title: "Downloads",
      value: 3443,
      monthPercentage: +12,
      icon: "/icons/downloads.svg"
    },
    {
      title: "Citations",
      value: 23,
      monthPercentage: +34,
      icon: "/icons/papers.svg"
    },
  ]

  return (
    <div className="flex gap-6">
      <div className="flex-1 overflow-hidden space-y-4">
        {/* User Greeting and New Submission Button */}
        <div className="flex max-lg:flex-col items-start lg:items-center lg:justify-between gap-2 mb-6">
          <div className="flex items-center gap-3 px-2 py-2">
            <User className="w-8 h-8 text-secondary-700 bg-secondary-50 rounded-full p-1.5" />
            <span className="text-lg font-semibold text-gray-900">Welcome back, Godswill</span>
          </div>

          <Link href="/submit" className="flex items-center gap-2 px-2 py-2 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <Upload className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium text-secondary-600">New Submission</span>
          </Link>
        </div>

        {/* Special Features CTA */}
        <div className="flex gap-4 overflow-scroll">
          {specialFeatures.map((feature, index) => (
            <div key={index} className="bg-white border border-[#F3EDF7] rounded-lg p-4 w-1/3 min-w-[250px]">
              <h3>{feature.title}</h3> 
              <p className="text-xs text-gray-500 line-clamp-2">{feature.description}</p>

              <div className="flex justify-end gap-2 mt-8">
                {feature.isSearchbar ? (
                  <Link
                    href="/browse"
                    className="w-full border-2 border-[#F2F2F2] px-1.5 py-1 rounded-md bg-red flex items-center gap-2"
                  >
                    <Image src="/icons/search.svg" alt="Search" width={20} height={20} />
                    <span className="text-xs text-gray-500">Find research</span>
                    <Image src="/icons/filter.svg" alt="Filter" width={20} height={20} className="ml-auto" />
                  </Link>
                ) : (
                  <Link href={feature.link} className="border border-[#F2F2F2] rounded-lg py-2 px-4 text-xs text-secondary-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]">
                    {feature.linkText || "Explore Now"}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Feed / Activity Highlights */}
        <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
          <div className="flex items-center justify-between gap-x-10 gap-y-4 mb-4 flex-wrap">
            <h2 className="text-lg font-semibold text-gray-900">Faculty Feed / Activity Highlights</h2>
            <div className="flex items-center gap-3">
              <div className="relative w-48">
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center justify-between gap-2 px-3 py-1.5 text-xs text-gray-600 border border-[#F2F2F2] rounded-lg hover:bg-gray-50 transition-colors w-full"
                >
                  <span className="whitespace-nowrap line-clamp-1 flex-1 overflow-ellipsis text-left">{selectedFilter}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform text-[#808080] ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isFilterOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {filterOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedFilter(option === "All" ? "Filter Research Papers" : option)
                          setIsFilterOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors whitespace-nowrap line-clamp-1 ${
                          selectedFilter === option ? 'bg-secondary-50 text-secondary-700' : 'text-gray-700'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/browse"
                className="border border-[#F2F2F2] rounded-lg py-1.5 px-6 text-xs line-clamp-1 whitespace-nowrap overflow-ellipsis text-secondary-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]"
              >
                See All
              </Link>
            </div>
          </div>
          
          {/* Research Paper Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredPapers.map((paper, index) => (
              <div key={index} className="p-3 px-6 bg-[#FCFCFC] border border-[#F4F2FD] max-w-[32rem] rounded-lg space-y-5">
                <div className="flex gap-2 items-center flex-wrap text-[10px]">
                  {paper.tags.map((tag, index) => (
                    <div key={index} className={`p-0.5 px-2 ${tag.style} border rounded-md`}>
                      #{tag.name}
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold line-clamp-1">{paper.title}</h4>
                  <p className="py-2 text-gray-400 text-sm line-clamp-3 overflow-hidden">
                    {paper.abstract}
                  </p>
                  <div className="flex gap-3 items-center py-2 text-sm">
                    <div className="flex gap-1">
                      <Image src="/users/user 1.svg" alt="user" width={25} height={25} />
                      <Image
                        src="/users/user 2.svg"
                        className="-ml-1"
                        alt="user"
                        width={25}
                        height={25}
                      />
                      <Image
                        src="/users/user 3.svg"
                        className="-ml-1"
                        alt="user"
                        width={25}
                        height={25}
                      />
                    </div>
                    <span>{paper.author}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Image src="/icons/arrow-down.svg" alt="download" width={12} height={12} />
                    <span className="text-xs text-gray-500">{paper.downloads} downloads</span>
                  </div>
                  <span className="text-primary text-sm">View Paper</span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPapers.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>No research papers found for the selected filter.</p>
            </div>
          )}
        </div>

        {/* Research Snapshot */}
        <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
          <div className="flex items-center justify-between gap-x-10 gap-y-4 mb-6 flex-wrap">
            <h2 className="text-lg font-semibold text-gray-900">Your Research Snapshot</h2>
            <div className="relative w-40">
              <button 
                onClick={() => setIsTimeFilterOpen(!isTimeFilterOpen)}
                className="flex items-center justify-between gap-2 px-3 py-1.5 text-xs text-gray-600 border border-[#F2F2F2] rounded-lg hover:bg-gray-50 transition-colors w-full"
              >
                <span className="whitespace-nowrap line-clamp-1 flex-1 overflow-ellipsis text-left">{selectedTimeFilter}</span>
                <ChevronDown className={`w-4 h-4 transition-transform text-[#808080] ${isTimeFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isTimeFilterOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {timeFilterOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedTimeFilter(option)
                        setIsTimeFilterOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors whitespace-nowrap line-clamp-1 ${
                        selectedTimeFilter === option ? 'bg-secondary-50 text-secondary-700' : 'text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4 overflow-scroll [&>*]:w-1/3 [&>*]:min-w-[250px]">
            {userStats.map((stat, index) => (
              <div key={index} className="bg-[#FCFAFF] border border-[#F4F2FD] rounded-lg p-4 space-y-12">
                <div className="flex items-center gap-4 mb-3">
                  <Image src={stat.icon} alt={stat.title} width={20} height={20} />
                  <span className="text-sm text-gray-500 font-medium">{stat.title}</span>
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className={`text-sm ${stat.monthPercentage > 0 ? "text-success" : "text-error"}`}>{stat.monthPercentage > 0 && "+"} {stat.monthPercentage}% this month</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InsightsPanel />
    </div>
  )
}
