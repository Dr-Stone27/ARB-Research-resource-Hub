"use client"

import { useState, useEffect } from "react"
import { Download, Search, X, ChevronDown, ChevronUp } from "lucide-react"

// Sample research papers data
const researchPapers = [
  {
    id: "1",
    title: "Quantum Computing Applications in Cryptography",
    author: "Alex Johnson",
    abstract:
      "This research explores the potential applications of quantum computing in modern cryptographic systems. As quantum computers continue to advance, traditional encryption methods face unprecedented challenges.",
    downloads: 342,
    category: "Computer Science",
    date: "May 2023",
    type: "analytical",
    authorType: "faculty",
    department: "Computer Engineering",
    tags: ["Quantum Computing", "Cryptography", "Security"],
  },
  {
    id: "2",
    title: "Climate Change Impact on Coastal Ecosystems",
    author: "Maria Rodriguez",
    abstract:
      "A comprehensive analysis of how rising sea levels affect biodiversity in coastal regions. This study combines field observations with advanced climate models to predict ecosystem changes.",
    downloads: 287,
    category: "Environmental Science",
    date: "June 2023",
    type: "experimental",
    authorType: "graduate",
    department: "Civil Engineering",
    tags: ["Climate Change", "Ecosystems", "Environmental Science"],
  },
  {
    id: "3",
    title: "Neural Networks for Early Disease Detection",
    author: "Priya Patel",
    abstract:
      "Investigating the application of deep learning algorithms in identifying early markers of neurodegenerative diseases. This research demonstrates how convolutional neural networks can detect subtle patterns.",
    downloads: 423,
    category: "Biomedical Engineering",
    date: "July 2023",
    type: "simulation",
    authorType: "faculty",
    department: "Biomedical Engineering",
    tags: ["Neural Networks", "Healthcare", "AI"],
  },
  {
    id: "4",
    title: "Economic Impacts of Remote Work Policies",
    author: "David Chen",
    abstract:
      "An analysis of how the shift to remote work has affected urban economies and commercial real estate markets. This paper examines data from major metropolitan areas before and after the pandemic.",
    downloads: 198,
    category: "Economics",
    date: "March 2023",
    type: "analytical",
    authorType: "undergraduate",
    department: "Systems Engineering",
    tags: ["Economics", "Remote Work", "Urban Planning"],
  },
  {
    id: "5",
    title: "Sustainable Architecture in Urban Planning",
    author: "Sophia Kim",
    abstract:
      "Exploring innovative approaches to integrating sustainable design principles in high-density urban environments. This research presents case studies of successful green building projects.",
    downloads: 231,
    category: "Architecture",
    date: "May 2023",
    type: "experimental",
    authorType: "graduate",
    department: "Civil Engineering",
    tags: ["Architecture", "Sustainability", "Urban Design"],
  },
  {
    id: "6",
    title: "Machine Learning Approaches to Climate Prediction",
    author: "James Wilson",
    abstract:
      "This paper examines how machine learning algorithms can improve the accuracy of climate models. By analyzing historical weather data and atmospheric patterns, we demonstrate a 15% improvement in prediction accuracy.",
    downloads: 156,
    category: "Computer Science",
    date: "April 2023",
    type: "simulation",
    authorType: "collaboration",
    department: "Computer Engineering",
    tags: ["Machine Learning", "Climate Science", "Data Analysis"],
  },
  {
    id: "7",
    title: "Advancements in Renewable Energy Storage Systems",
    author: "Michael Brown",
    abstract:
      "This research investigates novel approaches to energy storage for renewable sources, focusing on improving efficiency and reducing costs for grid-scale applications.",
    downloads: 278,
    category: "Energy",
    date: "February 2023",
    type: "experimental",
    authorType: "faculty",
    department: "Electrical Engineering",
    tags: ["Renewable Energy", "Energy Storage", "Sustainability"],
  },
  {
    id: "8",
    title: "Structural Analysis of 3D-Printed Building Components",
    author: "Emily Zhang",
    abstract:
      "A comprehensive study on the structural integrity and performance of 3D-printed building components under various load conditions and environmental factors.",
    downloads: 189,
    category: "Civil Engineering",
    date: "August 2023",
    type: "experimental",
    authorType: "graduate",
    department: "Civil Engineering",
    tags: ["3D Printing", "Construction", "Materials Science"],
  },
]

// Define filter types
type ResearchType = "analytical" | "simulation" | "experimental" | "hybrid"
type TimePeriod = "7days" | "30days" | "6months" | "1year" | "all"
type AuthorType = "undergraduate" | "graduate" | "faculty" | "researcher" | "collaboration"
type Department =
  | "mechanical"
  | "electrical"
  | "civil"
  | "chemical"
  | "computer"
  | "biomedical"
  | "surveying"
  | "materials"
  | "systems"
  | "petroleum"

export default function BrowsePage() {
  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<ResearchType[]>([])
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("all")
  const [selectedAuthorTypes, setSelectedAuthorTypes] = useState<AuthorType[]>([])
  const [selectedDepartments, setSelectedDepartments] = useState<Department[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // State for filtered papers
  const [filteredPapers, setFilteredPapers] = useState(researchPapers)

  // Apply filters
  useEffect(() => {
    let result = [...researchPapers]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (paper) =>
          paper.title.toLowerCase().includes(query) ||
          paper.abstract.toLowerCase().includes(query) ||
          paper.author.toLowerCase().includes(query) ||
          paper.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply research type filter
    if (selectedTypes.length > 0) {
      result = result.filter((paper) => selectedTypes.includes(paper.type as ResearchType))
    }

    // Apply time period filter
    if (timePeriod !== "all") {
      const now = new Date()
      const cutoffDate = new Date()

      switch (timePeriod) {
        case "7days":
          cutoffDate.setDate(now.getDate() - 7)
          break
        case "30days":
          cutoffDate.setDate(now.getDate() - 30)
          break
        case "6months":
          cutoffDate.setMonth(now.getMonth() - 6)
          break
        case "1year":
          cutoffDate.setFullYear(now.getFullYear() - 1)
          break
      }

      // This is a simplified filter since we don't have actual date objects
      // In a real app, you would compare actual dates
      // For demo purposes, just filter randomly based on time period
      result = result.filter((paper) => paper.id.length > 0)
    }

    // Apply author type filter
    if (selectedAuthorTypes.length > 0) {
      result = result.filter((paper) => selectedAuthorTypes.includes(paper.authorType as AuthorType))
    }

    // Apply department filter
    if (selectedDepartments.length > 0) {
      // For demo purposes, map department names to our simplified department codes
      const departmentMap: Record<string, Department> = {
        "Mechanical Engineering": "mechanical",
        "Electrical Engineering": "electrical",
        "Civil Engineering": "civil",
        "Chemical Engineering": "chemical",
        "Computer Engineering": "computer",
        "Biomedical Engineering": "biomedical",
        "Surveying & Geoinformatics": "surveying",
        "Materials & Metallurgical Engineering": "materials",
        "Systems Engineering": "systems",
        "Petroleum & Gas Engineering": "petroleum",
      }

      result = result.filter((paper) => {
        const deptCode = departmentMap[paper.department] as Department
        return deptCode ? selectedDepartments.includes(deptCode) : false
      })
    }

    // Apply tag filter
    if (selectedTags.length > 0) {
      result = result.filter((paper) => paper.tags.some((tag) => selectedTags.includes(tag)))
    }

    setFilteredPapers(result)
  }, [searchQuery, selectedTypes, timePeriod, selectedAuthorTypes, selectedDepartments, selectedTags])

  // Toggle research type selection
  const toggleResearchType = (type: ResearchType) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  // Toggle author type selection
  const toggleAuthorType = (type: AuthorType) => {
    setSelectedAuthorTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  // Toggle department selection
  const toggleDepartment = (dept: Department) => {
    setSelectedDepartments((prev) => (prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]))
  }

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTypes([])
    setTimePeriod("all")
    setSelectedAuthorTypes([])
    setSelectedDepartments([])
    setSelectedTags([])
  }

  // Get all unique tags from papers
  const allTags = Array.from(new Set(researchPapers.flatMap((paper) => paper.tags)))

  return (
    <div>
      <div className="flex-1 overflow-hidden space-y-4">
        {/* Header Section */}
        <div className="mb-6 flex items-center justify-between gap-x-20 gap-y-2 flex-wrap">
          <div className="flex-1 min-w-96">
            <h1 className="text-lg font-semibold text-gray-900 mb-2">Browse Your Library</h1>
            <p className="text-gray-500 text-sm">Explore research papers across various disciplines.</p>
          </div>
          
          {/* Search Bar */}
          <div className="w-full h-fit max-w-xs mt-4 flex items-center gap-2 bg-white border border-[#F2F2F2] rounded-lg ps-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search papers..."
              className="w-full py-1.5 text-gray-900 placeholder-gray-500 outline-none focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#F3EDF7] rounded-lg">
              {/* Filter Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#F2F2F2]">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden p-2 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {isFilterOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>

              {/* Filter Content */}
              {(!isMobile || (isMobile && isFilterOpen)) && (
                <div className="p-4 space-y-6">
                  {/* Research Type Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Research Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "analytical", label: "Analytical" },
                        { id: "simulation", label: "Simulation" },
                        { id: "experimental", label: "Experimental" },
                        { id: "hybrid", label: "Hybrid" },
                      ].map((type) => (
                        <button
                          key={type.id}
                          onClick={() => toggleResearchType(type.id as ResearchType)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            selectedTypes.includes(type.id as ResearchType)
                              ? "bg-secondary-50 text-secondary-700 border border-secondary-200"
                              : "bg-white text-gray-600 border border-[#F2F2F2] hover:bg-gray-50"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Period Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Time Period</h3>
                    <select
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(e.target.value as TimePeriod)}
                      className="w-full px-3 py-1.5 bg-white border border-[#F2F2F2] rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    >
                      <option value="7days">Past 7 Days</option>
                      <option value="30days">Past Month</option>
                      <option value="6months">Past 6 Months</option>
                      <option value="1year">Past Year</option>
                      <option value="all">All Time</option>
                    </select>
                  </div>

                  {/* Author Type Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Author Type</h3>
                    <div className="space-y-2">
                      {[
                        { id: "undergraduate", label: "Undergraduate Student" },
                        { id: "graduate", label: "Postgraduate Student" },
                        { id: "faculty", label: "Faculty / Lecturer" },
                        { id: "researcher", label: "Independent Researcher" },
                        { id: "collaboration", label: "Collaboration" },
                      ].map((type) => (
                        <label key={type.id} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedAuthorTypes.includes(type.id as AuthorType)}
                            onChange={() => toggleAuthorType(type.id as AuthorType)}
                            className="w-4 h-4 text-secondary-600 bg-white border-[#F2F2F2] rounded focus:ring-secondary-500 focus:ring-2"
                          />
                          <span className="text-sm text-gray-700">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Department Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Department</h3>
                    <div className="space-y-2">
                      {[
                        { id: "mechanical", label: "Mechanical Engineering" },
                        { id: "electrical", label: "Electrical Engineering" },
                        { id: "civil", label: "Civil Engineering" },
                        { id: "chemical", label: "Chemical Engineering" },
                        { id: "computer", label: "Computer Engineering" },
                        { id: "biomedical", label: "Biomedical Engineering" },
                        { id: "surveying", label: "Surveying & Geoinformatics" },
                        { id: "materials", label: "Materials & Metallurgical" },
                        { id: "systems", label: "Systems Engineering" },
                        { id: "petroleum", label: "Petroleum & Gas Engineering" },
                      ].map((dept) => (
                        <label key={dept.id} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedDepartments.includes(dept.id as Department)}
                            onChange={() => toggleDepartment(dept.id as Department)}
                            className="w-4 h-4 text-secondary-600 bg-white border-[#F2F2F2] rounded focus:ring-secondary-500 focus:ring-2"
                          />
                          <span className="text-sm text-gray-700">{dept.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Tags Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.slice(0, 10).map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                            selectedTags.includes(tag)
                              ? "bg-secondary-50 text-secondary-700 border border-secondary-200"
                              : "bg-white text-gray-600 border border-[#F2F2F2] hover:bg-gray-50"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <hr className="border-[#F2F2F2]" />

                  {/* Clear Filters Button */}
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 border border-[#F2F2F2] text-secondary-600 rounded-lg hover:bg-secondary-50 transition-colors"
                  >
                    <X className="inline-block w-4 h-4 mr-2" />
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="mb-6">
              <div className="flex space-x-1 bg-white border border-[#F2F2F2] p-1 rounded-lg">
                {["all", "recent", "popular", "trending"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-secondary-50 text-secondary-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedTypes.length > 0 ||
              selectedAuthorTypes.length > 0 ||
              selectedDepartments.length > 0 ||
              selectedTags.length > 0 ||
              timePeriod !== "all" ||
              searchQuery) && (
              <div className="mb-6 p-4 bg-[#FCFAFF] border border-[#F4F2FD] rounded-lg">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-600">Active filters:</span>

                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-[#F2F2F2] text-gray-700 rounded-full text-sm">
                      Search: {searchQuery}
                      <button
                        onClick={() => setSearchQuery("")}
                        className="ml-1 p-1 hover:bg-gray-50 rounded-full"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}

                  {selectedTypes.map((type) => (
                    <span key={type} className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-[#F2F2F2] text-gray-700 rounded-full text-sm">
                      Type: {type.charAt(0).toUpperCase() + type.slice(1)}
                      <button
                        onClick={() => toggleResearchType(type)}
                        className="ml-1 p-1 hover:bg-gray-50 rounded-full"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}

                  {timePeriod !== "all" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-[#F2F2F2] text-gray-700 rounded-full text-sm">
                      Time:{" "}
                      {timePeriod === "7days"
                        ? "Past 7 Days"
                        : timePeriod === "30days"
                          ? "Past Month"
                          : timePeriod === "6months"
                            ? "Past 6 Months"
                            : "Past Year"}
                      <button
                        onClick={() => setTimePeriod("all")}
                        className="ml-1 p-1 hover:bg-gray-50 rounded-full"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}

                  {selectedAuthorTypes.map((type) => (
                    <span key={type} className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-[#F2F2F2] text-gray-700 rounded-full text-sm">
                      Author: {type.charAt(0).toUpperCase() + type.slice(1)}
                      <button
                        onClick={() => toggleAuthorType(type)}
                        className="ml-1 p-1 hover:bg-gray-50 rounded-full"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}

                  {selectedDepartments.map((dept) => (
                    <span key={dept} className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-[#F2F2F2] text-gray-700 rounded-full text-sm">
                      Dept: {dept.charAt(0).toUpperCase() + dept.slice(1)}
                      <button
                        onClick={() => toggleDepartment(dept)}
                        className="ml-1 p-1 hover:bg-gray-50 rounded-full"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}

                  {selectedTags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-[#F2F2F2] text-gray-700 rounded-full text-sm">
                      {tag}
                      <button
                        onClick={() => toggleTag(tag)}
                        className="ml-1 p-1 hover:bg-gray-50 rounded-full"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}

                  <button
                    onClick={clearFilters}
                    className="ml-auto text-xs text-secondary-600 hover:text-secondary-700 underline"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}

            {/* Content based on active tab */}
            {activeTab === "all" && (
              <div>
                {filteredPapers.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 mb-4">
                      <Search className="h-8 w-8 text-secondary-600" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-4">
                      We couldn't find any research papers matching your filters. Try adjusting your search criteria.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 border border-[#F2F2F2] text-secondary-600 rounded-lg hover:bg-secondary-50 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPapers.map((paper) => (
                      <div key={paper.id} className="bg-[#FCFCFC] border border-[#F4F2FD] p-6 rounded-lg flex flex-col h-full">
                        {/* Paper Header */}
                        <div className="mb-4">
                          <div className="flex justify-between items-start mb-3">
                            <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${
                              paper.type === "analytical" ? "bg-[#E5FFEF] text-[#00A63B] border-[#CCFFDE]" :
                              paper.type === "simulation" ? "bg-[#FFE5E7] text-[#DB000E] border-[#FFCCCF]" :
                              paper.type === "experimental" ? "bg-[#FDF2E8] text-[#EB801D] border-[#FBE5D0]" :
                              "bg-gray-100 text-gray-600 border-gray-200"
                            }`}>
                              {paper.type.charAt(0).toUpperCase() + paper.type.slice(1)}
                            </span>
                            <span className="text-sm text-gray-500">{paper.date}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{paper.title}</h3>
                          <p className="text-sm text-gray-500">by {paper.author}</p>
                        </div>

                        {/* Paper Content */}
                        <div className="flex-grow mb-4">
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">{paper.abstract}</p>
                          <div className="flex flex-wrap gap-2">
                            {paper.tags.map((tag, index) => (
                              <button
                                key={index}
                                onClick={() => toggleTag(tag)}
                                className="px-2 py-1 bg-white border border-[#F2F2F2] text-gray-600 text-xs rounded hover:bg-gray-50 transition-colors"
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Paper Footer */}
                        <div className="flex justify-between items-center pt-4 border-t border-[#F2F2F2]">
                          <div className="flex items-center text-sm text-gray-500">
                            <Download className="h-4 w-4 mr-2" />
                            {paper.downloads} downloads
                          </div>
                          <button className="px-4 py-2 text-secondary-600 hover:text-secondary-700 hover:bg-secondary-50 rounded-md transition-colors">
                            Read More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {filteredPapers.length > 0 && (
                  <div className="flex justify-center mt-8 space-x-2">
                    <button className="px-4 py-2 border border-[#F2F2F2] text-secondary-600 rounded-lg hover:bg-secondary-50 transition-colors">
                      Previous
                    </button>
                    <button className="px-4 py-2 border border-[#F2F2F2] text-secondary-600 rounded-lg hover:bg-secondary-50 transition-colors">
                      Next
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === "recent" && (
              <div className="text-center py-12">
                <p className="text-gray-500">Recent papers will be displayed here.</p>
              </div>
            )}

            {activeTab === "popular" && (
              <div className="text-center py-12">
                <p className="text-gray-500">Popular papers will be displayed here.</p>
              </div>
            )}

            {activeTab === "trending" && (
              <div className="text-center py-12">
                <p className="text-gray-500">Trending papers will be displayed here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
