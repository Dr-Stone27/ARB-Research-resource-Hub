"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Lock, Bell, Shield, Trash2 } from "lucide-react"

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

  return (
    <DashboardShell>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
          <p className="text-gray-400">Manage your account settings and preferences.</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="bg-[#1c1c2b]">
            <TabsTrigger value="profile" className="data-[state=active]:bg-indigo-600">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-indigo-600">
              <Lock className="h-4 w-4 mr-2" />
              Account
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-indigo-600">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-indigo-600">
              <Shield className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6 space-y-6">
            <Card className="bg-[#1c1c2b] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Profile Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Update your profile information and public details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/images/placeholder.svg?height=96&width=96" alt="Profile" />
                      <AvatarFallback className="bg-indigo-600 text-white text-xl">AJ</AvatarFallback>
                    </Avatar>
                    <Button
                      variant="outline"
                      className="border-indigo-500 text-gray-300 hover:bg-indigo-600 hover:text-white"
                    >
                      Change Avatar
                    </Button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => handleProfileChange("name", e.target.value)}
                          className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleProfileChange("email", e.target.value)}
                          className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-gray-300">
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => handleProfileChange("bio", e.target.value)}
                        className="min-h-[100px] bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department" className="text-gray-300">
                        Department
                      </Label>
                      <Select
                        defaultValue={profileData.department}
                        onValueChange={(value) => handleProfileChange("department", value)}
                      >
                        <SelectTrigger className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500">
                          <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#252538] border-gray-700 text-gray-300">
                          <SelectItem value="Computer Science">Computer Science</SelectItem>
                          <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                          <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                          <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                          <SelectItem value="Biomedical Engineering">Biomedical Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end border-t border-gray-800 pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-500 rounded-xl px-6 py-2 h-auto">
                  Save Changes
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-[#1c1c2b] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">External Links</CardTitle>
                <CardDescription className="text-gray-400">
                  Connect your research profiles and social media accounts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-gray-300">
                      Website
                    </Label>
                    <Input
                      id="website"
                      value={profileData.website}
                      onChange={(e) => handleProfileChange("website", e.target.value)}
                      className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter" className="text-gray-300">
                      Twitter
                    </Label>
                    <Input
                      id="twitter"
                      value={profileData.twitter}
                      onChange={(e) => handleProfileChange("twitter", e.target.value)}
                      className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orcid" className="text-gray-300">
                    ORCID ID
                  </Label>
                  <Input
                    id="orcid"
                    value={profileData.orcid}
                    onChange={(e) => handleProfileChange("orcid", e.target.value)}
                    className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end border-t border-gray-800 pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-500 rounded-xl px-6 py-2 h-auto">
                  Save Links
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="mt-6 space-y-6">
            <Card className="bg-[#1c1c2b] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Change Password</CardTitle>
                <CardDescription className="text-gray-400">
                  Update your password to keep your account secure.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-gray-300">
                    Current Password
                  </Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-gray-300">
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-gray-300">
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end border-t border-gray-800 pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-500 rounded-xl px-6 py-2 h-auto">
                  Update Password
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-[#1c1c2b] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-red-500">Danger Zone</CardTitle>
                <CardDescription className="text-gray-400">
                  Permanently delete your account and all associated data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Once you delete your account, there is no going back. All of your data, including research papers,
                  submissions, and personal information will be permanently removed.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end border-t border-gray-800 pt-4">
                <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <Card className="bg-[#1c1c2b] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Notification Preferences</CardTitle>
                <CardDescription className="text-gray-400">
                  Control which notifications you receive and how they are delivered.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                      <Label htmlFor={item.id} className="text-gray-300">
                        {item.title}
                      </Label>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <Switch id={item.id} defaultChecked={true} />
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-end border-t border-gray-800 pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-500 rounded-xl px-6 py-2 h-auto">
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="mt-6">
            <Card className="bg-[#1c1c2b] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Privacy Settings</CardTitle>
                <CardDescription className="text-gray-400">
                  Control your privacy and data sharing preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                      <Label htmlFor={item.id} className="text-gray-300">
                        {item.title}
                      </Label>
                      <Select defaultValue="public">
                        <SelectTrigger className="w-32 bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#252538] border-gray-700 text-gray-300">
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="researchers">Researchers</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-end border-t border-gray-800 pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-500 rounded-xl px-6 py-2 h-auto">
                  Save Privacy Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
