"use client"

import { useState } from "react"
import { BarChart, LineChart, PieChart, TrendingUp, Users, Download, MessageSquare } from "lucide-react"

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const statsData = [
    {
      title: "Total Papers",
      value: "6",
      change: "+2 this month",
      icon: <TrendingUp className="h-4 w-4 text-secondary-600" />,
      trend: "positive"
    },
    {
      title: "Total Views",
      value: "2,854",
      change: "+18.2% from last month",
      icon: <Users className="h-4 w-4 text-secondary-600" />,
      trend: "positive"
    },
    {
      title: "Downloads",
      value: "1,637",
      change: "+12.5% from last month",
      icon: <Download className="h-4 w-4 text-secondary-600" />,
      trend: "positive"
    },
    {
      title: "Citations",
      value: "42",
      change: "+7 this month",
      icon: <MessageSquare className="h-4 w-4 text-secondary-600" />,
      trend: "positive"
    }
  ]

  const topPapers = [
    { title: "Quantum Computing Applications in Cryptography", views: 842 },
    { title: "Neural Networks for Early Disease Detection", views: 753 },
    { title: "Climate Change Impact on Coastal Ecosystems", views: 521 },
  ]

  return (
    <div className="flex-1 overflow-hidden space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-x-12 gap-y-3 flex-wrap mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h1>
          <p className="text-sm text-gray-500">Track the performance and impact of your research papers.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-[#F7F7F7] border border-[#F3EDF7] p-1 rounded-lg w-full overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "papers", label: "Papers" },
              { id: "citations", label: "Citations" },
              { id: "downloads", label: "Downloads" },
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
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {statsData.map((stat, index) => (
                <div key={index} className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-700">{stat.title}</h3>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <p className="text-xs text-[#00A63B] flex items-center">
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
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Charts Row 1 */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4 col-span-4">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Views Over Time</h3>
                  <p className="text-sm text-gray-500">Monthly view statistics for all your papers</p>
                </div>
                <div className="h-[200px] w-full flex items-center justify-center bg-gray-50 rounded-lg border border-[#F2F2F2]">
                  <LineChart className="h-16 w-16 text-gray-400" />
                    <p className="text-gray-500 ml-2">Chart visualization placeholder</p>
                  </div>
              </div>
              
              <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4 col-span-3">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Top Papers</h3>
                  <p className="text-sm text-gray-500">Your most viewed research papers</p>
                </div>
                  <div className="space-y-4">
                  {topPapers.map((paper, index) => (
                      <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-secondary-600/30 to-primary-600/30 text-white flex items-center justify-center mr-3 text-sm font-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-700 truncate">{paper.title}</p>
                          <p className="text-xs text-gray-500">{paper.views} views</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>

            {/* Charts Row 2 */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Downloads by Department</h3>
                  <p className="text-sm text-gray-500">Distribution of downloads across departments</p>
                </div>
                <div className="h-[200px] w-full flex items-center justify-center bg-gray-50 rounded-lg border border-[#F2F2F2]">
                  <PieChart className="h-16 w-16 text-gray-400" />
                    <p className="text-gray-500 ml-2">Chart visualization placeholder</p>
                  </div>
              </div>
              
              <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Citations by Paper</h3>
                  <p className="text-sm text-gray-500">Citation distribution across your papers</p>
                </div>
                <div className="h-[200px] w-full flex items-center justify-center bg-gray-50 rounded-lg border border-[#F2F2F2]">
                  <BarChart className="h-16 w-16 text-gray-400" />
                    <p className="text-gray-500 ml-2">Chart visualization placeholder</p>
                  </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "papers" && (
          <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Paper Performance</h3>
              <p className="text-sm text-gray-500">Detailed analytics for each of your research papers</p>
            </div>
            <div className="text-center py-12">
              <p className="text-gray-500">Paper-specific analytics will be displayed here.</p>
            </div>
          </div>
        )}

        {activeTab === "citations" && (
          <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Citation Analytics</h3>
              <p className="text-sm text-gray-500">Track who is citing your research and where</p>
            </div>
            <div className="text-center py-12">
              <p className="text-gray-500">Citation analytics will be displayed here.</p>
            </div>
          </div>
        )}

        {activeTab === "downloads" && (
          <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Download Statistics</h3>
              <p className="text-sm text-gray-500">Track downloads of your research papers over time</p>
            </div>
            <div className="text-center py-12">
              <p className="text-gray-500">Download statistics will be displayed here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
