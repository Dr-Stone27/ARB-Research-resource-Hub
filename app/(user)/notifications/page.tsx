"use client"

import { useState } from "react"
import { Bell, CheckCircle, Clock, AlertTriangle } from "lucide-react"

// Sample notification data
const notifications = [
  {
    id: "1",
    title: "Research Paper Approved",
    message: "Your paper 'Quantum Computing Applications in Cryptography' has been approved and published.",
    date: "2025-08-13T02:30:00",
    read: false,
    type: "success",
  },
  {
    id: "2",
    title: "Submission Under Review",
    message: "Your paper 'Neural Networks for Early Disease Detection' is currently under review.",
    date: "2025-08-11T14:20:00",
    read: true,
    type: "info",
  },
  {
    id: "3",
    title: "Citation Alert",
    message: "Your paper 'Climate Change Impact on Coastal Ecosystems' has been cited 5 times this month.",
    date: "2025-07-12T09:15:00",
    read: false,
    type: "info",
  },
  {
    id: "4",
    title: "Revision Requested",
    message:
      "Please review the comments on your paper 'Economic Impacts of Remote Work Policies' and submit a revised version.",
    date: "2024-01-08T16:45:00",
    read: true,
    type: "warning",
  },
  {
    id: "5",
    title: "New Comment",
    message: "Dr. James Wilson commented on your paper 'Machine Learning Approaches to Climate Prediction'.",
    date: "2024-01-05T11:30:00",
    read: true,
    type: "info",
  },
]

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [timeFilter, setTimeFilter] = useState("all")
  const [notificationState, setNotificationState] = useState(notifications)

  // Filter notifications based on active tab and time
  const filteredNotifications = notificationState.filter((notification) => {
    // First filter by tab
    const tabFiltered = 
    activeTab === "all"
        ? true
      : activeTab === "unread"
          ? !notification.read
          : notification.type === activeTab

    // Then filter by time
    if (!tabFiltered) return false
    
    if (timeFilter === "all") return true
    
    const now = new Date()
    const notificationDate = new Date(notification.date)
    
    switch (timeFilter) {
      case "today":
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        return notificationDate >= today
      case "week":
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        return notificationDate >= weekAgo
      case "month":
        const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
        return notificationDate >= monthAgo
      default:
        return true
    }
  })

  // Mark notification as read
  const markAsRead = (id: string) => {
    setNotificationState(
      notificationState.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    )
  }

  // Mark notification as unread
  const markAsUnread = (id: string) => {
    setNotificationState(
      notificationState.map((notification) =>
        notification.id === id ? { ...notification, read: false } : notification,
      ),
    )
  }

  // Mark all as read
  const markAllAsRead = () => {
    setNotificationState(notificationState.map((notification) => ({ ...notification, read: true })))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-[#00A63B] mr-2" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-[#EB801D] mr-2" />
      case "info":
        return <Bell className="h-5 w-5 text-[#7200CC] mr-2" />
      default:
        return <Bell className="h-5 w-5 text-gray-500 mr-2" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60))
      if (diffHours === 0) {
        const diffMinutes = Math.ceil(diffTime / (1000 * 60))
        return `${diffMinutes} minutes ago`
      }
      return `${diffHours} hours ago`
    } else if (diffDays === 1) {
      return "1 day ago"
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else if (diffDays < 30) {
      const weeks = Math.ceil(diffDays / 7)
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`
    } else {
      const months = Math.ceil(diffDays / 30)
      return `${months} month${months > 1 ? 's' : ''} ago`
    }
  }

  return (
    <div className="flex-1 overflow-hidden space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-x-12 gap-y-3 flex-wrap mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Notifications</h1>
          <p className="text-sm text-gray-500">
            Stay updated with the latest activity on your research papers and submissions.
          </p>
        </div>
        </div>

      {/* Main Content */}
      <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
        {/* Tabs and Time Filter */}
        <div className="mb-6 flex gap-x-20 gap-y-2 flex-wrap">
          {/* Tabs */}
          <div className="flex-1 w-full">
            <div className="flex space-x-1 bg-[#F7F7F7] border border-[#F3EDF7] p-1 rounded-lg w-full overflow-x-auto">
              {[
                { id: "all", label: "All" },
                { id: "unread", label: "Unread" },
                { id: "success", label: "Approvals" },
                { id: "warning", label: "Alerts" },
                { id: "info", label: "Information" },
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

          {/* Action Button */}
          <div className="flex justify-end gap-x-4 gap-y-2 flex-wrap mb-6">
            {/* Time Filter Dropdown */}
            <div className="lg:w-48">
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#F2F2F2] rounded-lg text-gray-700 text-sm outline-none cursor-pointer"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>

            <button
              onClick={markAllAsRead}
              className="px-4 py-2 rounded-lg text-primary border-[1.5px] border-gray-200 shadow-[inset_0_-2px_8px_rgba(0,0,0,0.08)] hover:opacity-80 transition-opacity duration-300 text-sm"
            >
              Mark All as Read
            </button>
          </div>
        </div>


        {/* Notifications Content */}
        <div className="space-y-4">
              {filteredNotifications.length === 0 ? (
            <div className="bg-[#FCFAFF] border border-[#F4F2FD] rounded-lg p-12 text-center">
              <Bell className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">No notifications to display.</p>
            </div>
              ) : (
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                <div
                      key={notification.id}
                  className={`bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4 ${
                    !notification.read ? "border-l-4 border-l-secondary-500" : ""
                  }`}
                >
                  {/* Notification Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center flex-1">
                      {getNotificationIcon(notification.type)}
                      <h3 className="text-lg font-semibold text-gray-900">{notification.title}</h3>
                        </div>
                    <div className="flex items-center text-sm text-gray-500 ml-4">
                          <Clock className="h-3 w-3 mr-1" />
                      {formatDate(notification.date)}
                    </div>
                  </div>

                  {/* Notification Message */}
                  <div className="mb-4">
                    <p className="text-gray-600">{notification.message}</p>
                  </div>

                  {/* Notification Actions */}
                  <div className="flex justify-end gap-2">
                    {notification.read ? (
                      <button
                        className="px-3 py-1.5 text-secondary-600 hover:text-secondary-700 hover:bg-secondary-50 rounded-md transition-colors"
                        onClick={() => markAsUnread(notification.id)}
                      >
                        Mark as unread
                      </button>
                    ) : (
                      <button
                        className="px-3 py-1.5 text-secondary-600 hover:text-secondary-700 hover:bg-secondary-50 rounded-md transition-colors"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as read
                      </button>
                        )}
                    <button className="px-3 py-1.5 border border-[#F2F2F2] text-gray-600 rounded-md hover:bg-gray-50 transition-colors">
                          View Details
                    </button>
                  </div>
                </div>
              ))}
                </div>
              )}
        </div>
      </div>
    </div>
  )
}
