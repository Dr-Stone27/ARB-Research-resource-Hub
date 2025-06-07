import { ArrowUpRight, Bell, BookOpen, Download, FileText, MessageSquare, Upload, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Welcome back! Here's an overview of your research activity.">
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Upload className="mr-2 h-4 w-4" />
          New Submission
        </Button>
      </DashboardHeader>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Citations</CardTitle>
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
              className="lucide lucide-quote text-muted-foreground"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v4c0 1.244.756 2 2 2h2c1.244 0 2-.756 2-2v-1c0-1-4 0-4-3" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.244.757 2 2 2h2c1.243 0 2-.756 2-2v-1c0-1-4 0-4-3" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">+8 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+201 from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
            <CardDescription>Your recently submitted or updated research papers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Quantum Computing Applications in Cryptography",
                  status: "Published",
                  date: "May 15, 2023",
                  progress: 100,
                  downloads: 342,
                },
                {
                  title: "Machine Learning Approaches to Climate Prediction",
                  status: "Under Review",
                  date: "July 28, 2023",
                  progress: 60,
                  downloads: 0,
                },
                {
                  title: "Neural Networks for Early Disease Detection",
                  status: "Revision Requested",
                  date: "August 10, 2023",
                  progress: 80,
                  downloads: 0,
                },
                {
                  title: "Sustainable Architecture in Urban Planning",
                  status: "Draft",
                  date: "September 5, 2023",
                  progress: 30,
                  downloads: 0,
                },
              ].map((submission, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{submission.title}</p>
                    <div className="flex items-center pt-2">
                      <span
                        className={`text-xs ${
                          submission.status === "Published"
                            ? "text-emerald-600"
                            : submission.status === "Under Review"
                              ? "text-amber-600"
                              : submission.status === "Revision Requested"
                                ? "text-orange-600"
                                : "text-gray-600"
                        }`}
                      >
                        {submission.status}
                      </span>
                      <span className="mx-2 text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{submission.date}</span>
                      {submission.downloads > 0 && (
                        <>
                          <span className="mx-2 text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-400">{submission.downloads} downloads</span>
                        </>
                      )}
                    </div>
                    <div className="pt-2">
                      <Progress value={submission.progress} className="h-2" />
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Submissions
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  icon: MessageSquare,
                  title: "New comment on your paper",
                  description: "Dr. Sarah Chen commented on 'Quantum Computing Applications'",
                  time: "2 hours ago",
                },
                {
                  icon: Download,
                  title: "Paper download milestone",
                  description: "Your paper reached 300+ downloads",
                  time: "Yesterday",
                },
                {
                  icon: Bell,
                  title: "Review completed",
                  description: "Your submission has completed peer review",
                  time: "2 days ago",
                },
                {
                  icon: BookOpen,
                  title: "Citation alert",
                  description: "Your paper was cited in the Journal of Physics",
                  time: "1 week ago",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                    <activity.icon className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardShell>
  )
}
