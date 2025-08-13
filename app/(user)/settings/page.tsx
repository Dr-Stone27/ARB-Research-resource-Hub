"use client"

import { useState } from "react"
import { User, Lock, Bell, Shield, Trash2, Camera } from "lucide-react"

export default function SettingsPage() {
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    bio: "Researcher in quantum computing and cryptography. PhD candidate at University of Technology.",
    department: "Computer Science",
    website: "https://alexjohnson.dev",
    twitter: "@alexjohnson",
    orcid: "0000-0002-1825-0097",
  })

  const handleProfileChange = (field: string, value: string) => {
    setProfileData({
      ...profileData,
      [field]: value,
    })
  }

  const handleSaveAll = () => {
    // Handle saving all settings
    console.log("Saving all preferences...")
  }

  return (
    <div className="flex-1 overflow-hidden space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-x-12 gap-y-3 flex-wrap mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500">Manage your account settings and preferences.</p>
        </div>
        <button 
          onClick={handleSaveAll}
          className="px-6 py-2 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors shadow-[inset_0_-2px_4px_rgba(255,255,255,0.35)]"
        >
          Save Preferences
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-[#F3EDF7] rounded-lg p-6 space-y-8">
 
        {/* Notifications Section */}
        <div>          
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-secondary-600" />
                <h3 className="text-lg font-semibold text-secondary-600">Notification Preferences</h3>
              </div>
              <p className="text-sm text-gray-500">Control which notifications you receive and how they are delivered.</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  id: "paper-updates",
                  title: "Paper Updates",
                  description: "Notifications about your submitted papers",
                },
                { id: "citations", title: "Citations", description: "When your papers are cited by others" },
                { id: "comments", title: "Comments", description: "When someone comments on your papers" },
                { id: "newsletter", title: "Newsletter", description: "Weekly digest of research in your field" },
                { id: "events", title: "Events", description: "Upcoming research events and conferences" },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor={item.id} className="text-sm font-medium text-gray-700">
                      {item.title}
                    </label>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id={item.id} defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#F2F2F2]" />

        {/* Account Section */}
        <div>
          {/* Change Password */}
          <div className="mb-6">
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-secondary-600" />
                <h3 className="text-lg font-semibold text-secondary-600">Password Settings</h3>
              </div>
              <p className="text-sm text-gray-500">Update your password to keep your account secure.</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="current-password" className="text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  id="current-password"
                  type="password"
                  className="w-full px-3 py-2 bg-white border border-[#F2F2F2] rounded-lg text-gray-900 outline-none"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="new-password" className="text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  id="new-password"
                  type="password"
                  className="w-full px-3 py-2 bg-white border border-[#F2F2F2] rounded-lg text-gray-900 outline-none"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className="w-full px-3 py-2 bg-white border border-[#F2F2F2] rounded-lg text-gray-900 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#F2F2F2]" />

        {/* Privacy Section */}
        <div>
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-secondary-600" />
                <h3 className="text-lg font-semibold text-secondary-600">Privacy Settings</h3>
              </div>
              <p className="text-sm text-gray-500">Control your privacy and data sharing preferences.</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  id: "profile-visibility",
                  title: "Profile Visibility",
                  description: "Who can see your profile information",
                },
                {
                  id: "research-visibility",
                  title: "Research Visibility",
                  description: "Who can see your research papers",
                },
                {
                  id: "analytics-sharing",
                  title: "Analytics Sharing",
                  description: "Share anonymous usage data to improve the platform",
                },
                {
                  id: "search-indexing",
                  title: "Search Indexing",
                  description: "Allow your profile to appear in search results",
                },
              ].map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor={item.id} className="text-sm font-medium text-gray-700">
                      {item.title}
                    </label>
                    <select
                      id={item.id}
                      defaultValue="public"
                      className="w-32 px-3 py-2 bg-white border border-[#F2F2F2] rounded-lg text-gray-900 outline-none"
                    >
                      <option value="public">Public</option>
                      <option value="researchers">Researchers</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="flex max-md:flex-col items-start justify-between gap-x-20 gap-y-2 flex-wrap !mt-20 bg-[#FFE5E7] py-5 px-5 rounded-xl">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-600">Danger Zone</h3>
            <p className="text-sm text-gray-500">Permanently delete your account and all associated data. You cannot undo this action!</p>
          </div>
          
          <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-[inset_0_-2px_8px_rgba(0,0,0,0.53)]">
            <Trash2 className="h-4 w-4 mr-2 inline" />
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
