import { Edit, Eye, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

export default function SubmissionsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="My Submissions" text="Manage and track your research submissions.">
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" />
          New Submission
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex w-full overflow-x-auto md:grid md:grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="review">Under Review</TabsTrigger>
          <TabsTrigger value="revision">Revision</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Submissions</CardTitle>
              <CardDescription>View and manage all your research submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
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
                ].map((submission, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2 mb-4 sm:mb-0 sm:flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{submission.title}</h3>
                          <Badge
                            variant={
                              submission.status === "Published"
                                ? "default"
                                : submission.status === "Under Review"
                                  ? "secondary"
                                  : submission.status === "Revision Requested"
                                    ? "destructive"
                                    : "outline"
                            }
                            className={
                              submission.status === "Published"
                                ? "bg-emerald-600"
                                : submission.status === "Under Review"
                                  ? "bg-amber-600"
                                  : submission.status === "Revision Requested"
                                    ? "bg-orange-600"
                                    : ""
                            }
                          >
                            {submission.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{submission.abstract}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-1 h-4 w-4"
                            >
                              <rect width="18" height="18" x="3" y="3" rx="2" />
                              <path d="M3 9h18" />
                            </svg>
                            {submission.date}
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-1 h-4 w-4"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" x2="12" y1="15" y2="3" />
                            </svg>
                            {submission.downloads} downloads
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-1 h-4 w-4"
                            >
                              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v4c0 1.244.756 2 2 2h2c1.244 0 2-.756 2-2v-1c0-1-4 0-4-3" />
                              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.244.757 2 2 2h2c1.243 0 2-.756 2-2v-1c0-1-4 0-4-3" />
                            </svg>
                            {submission.citations} citations
                          </div>
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-1 h-4 w-4"
                            >
                              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                              <path d="M10 2c1 .5 2 2 2 5" />
                            </svg>
                            Version {submission.version}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View History</DropdownMenuItem>
                            <DropdownMenuItem>Download PDF</DropdownMenuItem>
                            <DropdownMenuItem>Share</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Published Research</CardTitle>
              <CardDescription>Your published research papers</CardDescription>
            </CardHeader>
            <CardContent>{/* Published submissions would be listed here */}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="review" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Under Review</CardTitle>
              <CardDescription>Submissions currently in the review process</CardDescription>
            </CardHeader>
            <CardContent>{/* Under review submissions would be listed here */}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revision" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revision Requested</CardTitle>
              <CardDescription>Submissions that need revisions</CardDescription>
            </CardHeader>
            <CardContent>{/* Revision requested submissions would be listed here */}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Draft Submissions</CardTitle>
              <CardDescription>Your saved draft submissions</CardDescription>
            </CardHeader>
            <CardContent>{/* Draft submissions would be listed here */}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
