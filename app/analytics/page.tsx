"use client"

import { DashboardShell } from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Analytics Dashboard</h1>
          <p className="text-gray-400">Track the performance and impact of your research papers.</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-[#1c1c2b]">
            <TabsTrigger value="overview" className="data-[state=active]:bg-indigo-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="papers" className="data-[state=active]:bg-indigo-600">
              Papers
            </TabsTrigger>
            <TabsTrigger value="citations" className="data-[state=active]:bg-indigo-600">
              Citations
            </TabsTrigger>
            <TabsTrigger value="downloads" className="data-[state=active]:bg-indigo-600">
              Downloads
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-[#1c1c2b] border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Total Papers</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-indigo-500"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">6</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-3 w-3 mr-1"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    +2 this month
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#1c1c2b] border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Total Views</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-indigo-500"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">2,854</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-3 w-3 mr-1"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    +18.2% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#1c1c2b] border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Downloads</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-indigo-500"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1,637</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-3 w-3 mr-1"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#1c1c2b] border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Citations</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-indigo-500"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">42</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-3 w-3 mr-1"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    +7 this month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
              <Card className="bg-[#1c1c2b] border-gray-800 col-span-4">
                <CardHeader>
                  <CardTitle className="text-white">Views Over Time</CardTitle>
                  <CardDescription className="text-gray-400">
                    Monthly view statistics for all your papers
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] w-full flex items-center justify-center">
                    <LineChart className="h-16 w-16 text-gray-500" />
                    <p className="text-gray-500 ml-2">Chart visualization placeholder</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#1c1c2b] border-gray-800 col-span-3">
                <CardHeader>
                  <CardTitle className="text-white">Top Papers</CardTitle>
                  <CardDescription className="text-gray-400">Your most viewed research papers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Quantum Computing Applications in Cryptography", views: 842 },
                      { title: "Neural Networks for Early Disease Detection", views: 753 },
                      { title: "Climate Change Impact on Coastal Ecosystems", views: 521 },
                    ].map((paper, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-white flex items-center justify-center mr-3 text-sm font-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-300 truncate">{paper.title}</p>
                          <p className="text-xs text-gray-500">{paper.views} views</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-6">
              <Card className="bg-[#1c1c2b] border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Downloads by Department</CardTitle>
                  <CardDescription className="text-gray-400">
                    Distribution of downloads across departments
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] w-full flex items-center justify-center">
                    <PieChart className="h-16 w-16 text-gray-500" />
                    <p className="text-gray-500 ml-2">Chart visualization placeholder</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#1c1c2b] border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Citations by Paper</CardTitle>
                  <CardDescription className="text-gray-400">Citation distribution across your papers</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] w-full flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-gray-500" />
                    <p className="text-gray-500 ml-2">Chart visualization placeholder</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="papers" className="mt-6">
            <Card className="bg-[#1c1c2b] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Paper Performance</CardTitle>
                <CardDescription className="text-gray-400">
                  Detailed analytics for each of your research papers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Paper-specific analytics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="citations" className="mt-6">
            <Card className="bg-[#1c1c2b] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Citation Analytics</CardTitle>
                <CardDescription className="text-gray-400">Track who is citing your research and where</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Citation analytics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="downloads" className="mt-6">
            <Card className="bg-[#1c1c2b] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Download Statistics</CardTitle>
                <CardDescription className="text-gray-400">
                  Track downloads of your research papers over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Download statistics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
