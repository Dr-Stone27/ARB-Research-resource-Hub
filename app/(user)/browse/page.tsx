"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Download, Filter, Search, X } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tag } from "@/components/ui/tag"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

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
  const [isFilterOpen, setIsFilterOpen] = useState(true)

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
    <DashboardShell>
      <DashboardHeader heading="Browse Research" text="Explore research papers across various disciplines.">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search papers..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </DashboardHeader>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1 space-y-4">
          <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="w-full">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between py-3">
                <CardTitle>Filters</CardTitle>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0 md:hidden">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">{isFilterOpen ? "Close" : "Open"} filters</span>
                  </Button>
                </CollapsibleTrigger>
              </CardHeader>
              <CollapsibleContent>
                <CardContent className="space-y-6">
                  {/* Research Type Filter */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Research Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "analytical", label: "Analytical" },
                        { id: "simulation", label: "Simulation" },
                        { id: "experimental", label: "Experimental" },
                        { id: "hybrid", label: "Hybrid" },
                      ].map((type) => (
                        <Badge
                          key={type.id}
                          variant={selectedTypes.includes(type.id as ResearchType) ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedTypes.includes(type.id as ResearchType)
                              ? "bg-indigo-600 text-white"
                              : "hover:bg-indigo-600/10"
                          } rounded-full px-4 py-2`}
                          onClick={() => toggleResearchType(type.id as ResearchType)}
                        >
                          {type.label}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Time Period Filter */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Time Period</h3>
                    <Select value={timePeriod} onValueChange={(value) => setTimePeriod(value as TimePeriod)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select time period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7days">Past 7 Days</SelectItem>
                        <SelectItem value="30days">Past Month</SelectItem>
                        <SelectItem value="6months">Past 6 Months</SelectItem>
                        <SelectItem value="1year">Past Year</SelectItem>
                        <SelectItem value="all">All Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Author Type Filter */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Author Type</h3>
                    <div className="space-y-2">
                      {[
                        { id: "undergraduate", label: "Undergraduate Student" },
                        { id: "graduate", label: "Postgraduate Student" },
                        { id: "faculty", label: "Faculty / Lecturer" },
                        { id: "researcher", label: "Independent Researcher" },
                        { id: "collaboration", label: "Collaboration" },
                      ].map((type) => (
                        <div key={type.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`author-${type.id}`}
                            checked={selectedAuthorTypes.includes(type.id as AuthorType)}
                            onCheckedChange={() => toggleAuthorType(type.id as AuthorType)}
                          />
                          <Label htmlFor={`author-${type.id}`} className="text-sm font-normal">
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Department Filter */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Department</h3>
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
                        <div key={dept.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`dept-${dept.id}`}
                            checked={selectedDepartments.includes(dept.id as Department)}
                            onCheckedChange={() => toggleDepartment(dept.id as Department)}
                          />
                          <Label htmlFor={`dept-${dept.id}`} className="text-sm font-normal">
                            {dept.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags Filter */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.slice(0, 10).map((tag) => (
                        <Badge
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedTags.includes(tag) ? "bg-indigo-600 text-white" : "hover:bg-indigo-600/10"
                          } rounded-full px-3 py-1`}
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <Button
                    variant="outline"
                    className="w-full border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white rounded-xl px-4 py-2 h-auto"
                    onClick={clearFilters}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Clear Filters
                  </Button>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>

        <div className="md:col-span-3 space-y-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              {/* Active Filters Display */}
              {(selectedTypes.length > 0 ||
                selectedAuthorTypes.length > 0 ||
                selectedDepartments.length > 0 ||
                selectedTags.length > 0 ||
                timePeriod !== "all" ||
                searchQuery) && (
                <div className="mb-4 p-3 bg-[#1c1c2b]/50 rounded-lg border border-gray-800">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-gray-400">Active filters:</span>

                    {searchQuery && (
                      <Badge variant="secondary" className="flex items-center gap-1 rounded-full">
                        Search: {searchQuery}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => setSearchQuery("")}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </Badge>
                    )}

                    {selectedTypes.map((type) => (
                      <Badge key={type} variant="secondary" className="flex items-center gap-1 rounded-full">
                        Type: {type.charAt(0).toUpperCase() + type.slice(1)}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => toggleResearchType(type)}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </Badge>
                    ))}

                    {timePeriod !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1 rounded-full">
                        Time:{" "}
                        {timePeriod === "7days"
                          ? "Past 7 Days"
                          : timePeriod === "30days"
                            ? "Past Month"
                            : timePeriod === "6months"
                              ? "Past 6 Months"
                              : "Past Year"}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => setTimePeriod("all")}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </Badge>
                    )}

                    {selectedAuthorTypes.map((type) => (
                      <Badge key={type} variant="secondary" className="flex items-center gap-1 rounded-full">
                        Author: {type.charAt(0).toUpperCase() + type.slice(1)}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => toggleAuthorType(type)}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </Badge>
                    ))}

                    {selectedDepartments.map((dept) => (
                      <Badge key={dept} variant="secondary" className="flex items-center gap-1 rounded-full">
                        Dept: {dept.charAt(0).toUpperCase() + dept.slice(1)}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => toggleDepartment(dept)}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </Badge>
                    ))}

                    {selectedTags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1 rounded-full">
                        {tag}
                        <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => toggleTag(tag)}>
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </Badge>
                    ))}

                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto text-xs text-indigo-400 hover:text-indigo-300"
                      onClick={clearFilters}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              )}

              {filteredPapers.length === 0 ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/20 mb-4">
                    <Search className="h-8 w-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    We couldn't find any research papers matching your filters. Try adjusting your search criteria.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white rounded-xl px-4 py-2 h-auto"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredPapers.map((paper) => (
                    <Card key={paper.id} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Tag variant={paper.type as "analytical" | "simulation" | "experimental"} className="mb-2">
                            {paper.type.charAt(0).toUpperCase() + paper.type.slice(1)}
                          </Tag>
                          <span className="text-sm text-gray-500">{paper.date}</span>
                        </div>
                        <CardTitle className="text-xl">{paper.title}</CardTitle>
                        <div className="text-sm text-gray-500">by {paper.author}</div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600 line-clamp-3">{paper.abstract}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {paper.tags.map((tag, index) => (
                            <Tag key={index} clickable onClick={() => toggleTag(tag)}>
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
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}

              {filteredPapers.length > 0 && (
                <div className="flex justify-center mt-6">
                  <Button
                    variant="outline"
                    className="mx-2 border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white rounded-xl px-4 py-2 h-auto"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    className="mx-2 border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white rounded-xl px-4 py-2 h-auto"
                  >
                    Next
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="recent" className="mt-4">
              {/* Recent papers would be displayed here */}
              <div className="text-center py-12">
                <p className="text-gray-400">Recent papers will be displayed here.</p>
              </div>
            </TabsContent>

            <TabsContent value="popular" className="mt-4">
              {/* Popular papers would be displayed here */}
              <div className="text-center py-12">
                <p className="text-gray-400">Popular papers will be displayed here.</p>
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-4">
              {/* Trending papers would be displayed here */}
              <div className="text-center py-12">
                <p className="text-gray-400">Trending papers will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardShell>
  )
}
