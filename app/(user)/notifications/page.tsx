"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CheckCircle, Clock, AlertTriangle } from "lucide-react"

// Sample notification data
const notifications = [
  {
    id: "1",
    title: "Research Paper Approved",
    message: "Your paper 'Quantum Computing Applications in Cryptography' has been approved and published.",
    date: "2 hours ago",
    read: false,
    type: "success",
  },
  {
    id: "2",
    title: "Submission Under Review",
    message: "Your paper 'Neural Networks for Early Disease Detection' is currently under review.",
    date: "1 day ago",
    read: true,
    type: "info",
  },
  {
    id: "3",
    title: "Citation Alert",
    message: "Your paper 'Climate Change Impact on Coastal Ecosystems' has been cited 5 times this month.",
    date: "3 days ago",
    read: false,
    type: "info",
  },
  {
    id: "4",
    title: "Revision Requested",
    message:
      "Please review the comments on your paper 'Economic Impacts of Remote Work Policies' and submit a revised version.",
    date: "1 week ago",
    read: true,
    type: "warning",
  },
  {
    id: "5",
    title: "New Comment",
    message: "Dr. James Wilson commented on your paper 'Machine Learning Approaches to Climate Prediction'.",
    date: "1 week ago",
    read: true,
    type: "info",
  },
]

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [notificationState, setNotificationState] = useState(notifications)

  // Filter notifications based on active tab
  const filteredNotifications =
    activeTab === "all"
      ? notificationState
      : activeTab === "unread"
        ? notificationState.filter((notification) => !notification.read)
        : notificationState.filter((notification) => notification.type === activeTab)

  // Mark notification as read
  const markAsRead = (id: string) => {
    setNotificationState(
      notificationState.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    )
  }

  // Mark all as read
  const markAllAsRead = () => {
    setNotificationState(notificationState.map((notification) => ({ ...notification, read: true })))
  }

  return (
    <DashboardShell>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Notifications</h1>
          <p className="text-gray-400">
            Stay updated with the latest activity on your research papers and submissions.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="bg-[#1c1c2b]">
              <TabsTrigger value="all" className="data-[state=active]:bg-indigo-600">
                All
              </TabsTrigger>
              <TabsTrigger value="unread" className="data-[state=active]:bg-indigo-600">
                Unread
              </TabsTrigger>
              <TabsTrigger value="success" className="data-[state=active]:bg-indigo-600">
                Approvals
              </TabsTrigger>
              <TabsTrigger value="warning" className="data-[state=active]:bg-indigo-600">
                Alerts
              </TabsTrigger>
              <TabsTrigger value="info" className="data-[state=active]:bg-indigo-600">
                Information
              </TabsTrigger>
            </TabsList>

            <div className="flex justify-end mt-4">
              <Button
                variant="outline"
                className="border-2 border-indigo-500 text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl px-4 py-2 h-auto"
                onClick={markAllAsRead}
              >
                Mark All as Read
              </Button>
            </div>

            <TabsContent value={activeTab} className="mt-4">
              {filteredNotifications.length === 0 ? (
                <Card className="bg-[#1c1c2b] border-gray-800">
                  <CardContent className="pt-6 text-center">
                    <Bell className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                    <p className="text-gray-400">No notifications to display.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                    <Card
                      key={notification.id}
                      className={`bg-[#1c1c2b] border-gray-800 ${!notification.read ? "border-l-4 border-l-indigo-500" : ""}`}
                    >
                      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                        <div className="flex items-center">
                          {notification.type === "success" && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                          {notification.type === "warning" && <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />}
                          {notification.type === "info" && <Bell className="h-5 w-5 text-blue-500 mr-2" />}
                          <CardTitle className="text-white text-lg">{notification.title}</CardTitle>
                        </div>
                        <CardDescription className="text-sm text-gray-400 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {notification.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{notification.message}</p>
                      </CardContent>
                      <CardFooter className="flex justify-end pt-0">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/20"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as read
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          className="ml-2 border-indigo-500 text-gray-300 hover:bg-indigo-600 hover:text-white"
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardShell>
  )
}
