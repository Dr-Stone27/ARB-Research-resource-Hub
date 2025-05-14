"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, BookOpen, Briefcase, GraduationCap, School, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    role: "undergraduate",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    institution: "",
    department: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError("Please fill in all required fields")
      return
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    setIsLoading(true)

    // Simulate registration
    try {
      // This would be replaced with actual registration logic
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock successful registration
      localStorage.setItem("isAuthenticated", "true")
      router.push("/onboarding")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 flex min-h-screen w-full flex-col items-center justify-center bg-[#0f0f1a]">
      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center text-lg font-medium text-white transition ease-in-out duration-300 hover:opacity-80"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#gradient-signup)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-6 w-6"
        >
          <defs>
            <linearGradient id="gradient-signup" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
        ResearchHub
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px] py-8">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-white">Create an account</h1>
          <p className="text-sm text-gray-400">Join our community of researchers and academics</p>
        </div>
        <Card className="bg-[#1c1c2b] border-gray-800 text-white">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription className="text-gray-400">Select your role to customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && (
                <Alert variant="destructive" className="bg-red-900/30 border-red-800 text-red-300">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <RadioGroup
                  defaultValue="undergraduate"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  value={formData.role}
                  onValueChange={(value) => handleSelectChange("role", value)}
                >
                  <div>
                    <RadioGroupItem value="undergraduate" id="undergraduate" className="peer sr-only" />
                    <Label
                      htmlFor="undergraduate"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-gray-700 bg-[#252538] p-4 hover:bg-[#2a2a40] hover:text-white peer-data-[state=checked]:border-indigo-500 [&:has([data-state=checked])]:border-indigo-500"
                    >
                      <GraduationCap className="mb-3 h-6 w-6" />
                      Undergraduate
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="graduate" id="graduate" className="peer sr-only" />
                    <Label
                      htmlFor="graduate"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-gray-700 bg-[#252538] p-4 hover:bg-[#2a2a40] hover:text-white peer-data-[state=checked]:border-indigo-500 [&:has([data-state=checked])]:border-indigo-500"
                    >
                      <School className="mb-3 h-6 w-6" />
                      Graduate
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="faculty" id="faculty" className="peer sr-only" />
                    <Label
                      htmlFor="faculty"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-gray-700 bg-[#252538] p-4 hover:bg-[#2a2a40] hover:text-white peer-data-[state=checked]:border-indigo-500 [&:has([data-state=checked])]:border-indigo-500"
                    >
                      <BookOpen className="mb-3 h-6 w-6" />
                      Faculty
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="professional" id="professional" className="peer sr-only" />
                    <Label
                      htmlFor="professional"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-gray-700 bg-[#252538] p-4 hover:bg-[#2a2a40] hover:text-white peer-data-[state=checked]:border-indigo-500 [&:has([data-state=checked])]:border-indigo-500"
                    >
                      <Briefcase className="mb-3 h-6 w-6" />
                      Professional
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300">
                    First Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300">
                    Last Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-300">
                    Password <span className="text-red-400">*</span>
                  </Label>
                  <Link href="#" className="text-xs text-indigo-400 hover:underline">
                    Password requirements
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password (min. 8 characters)"
                  className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution" className="text-gray-300">
                  Institution
                </Label>
                <Input
                  id="institution"
                  placeholder="Enter your university or institution"
                  className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.institution}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department" className="text-gray-300">
                  Department
                </Label>
                <Select value={formData.department} onValueChange={(value) => handleSelectChange("department", value)}>
                  <SelectTrigger className="bg-[#252538] border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                    <SelectValue placeholder="Select your department" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1c1c2b] border-gray-800 text-gray-300">
                    <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                    <SelectItem value="electrical">Electrical Engineering</SelectItem>
                    <SelectItem value="civil">Civil Engineering</SelectItem>
                    <SelectItem value="chemical">Chemical Engineering</SelectItem>
                    <SelectItem value="computer">Computer Engineering</SelectItem>
                    <SelectItem value="biomedical">Biomedical Engineering</SelectItem>
                    <SelectItem value="surveying">Surveying & Geoinformatics</SelectItem>
                    <SelectItem value="materials">Materials & Metallurgical Engineering</SelectItem>
                    <SelectItem value="systems">Systems Engineering</SelectItem>
                    <SelectItem value="petroleum">Petroleum & Gas Engineering</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full border-2 border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl px-6 py-3 h-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...
                  </>
                ) : (
                  <>
                    Create Account <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
        <div className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-indigo-400 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
