"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, User, School, Briefcase } from "lucide-react"

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  
  // Form states
  const [loginForm, setLoginForm] = useState({
    email_or_matric: "",
    password: "",
  })

  const loginButtonDisabled = loginForm.email_or_matric === "" || loginForm.password === ""
  
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    matric_or_faculty_id: "",
    department: "",
    password: "",
    confirmPassword: "",
  })

  const signUpButtonDisabled = signupForm.name === ""
    || signupForm.email === ""
    || signupForm.matric_or_faculty_id === ""
    || signupForm.department === ""
    || signupForm.password === ""
    || signupForm.confirmPassword === ""
    || signupForm.password !== signupForm.confirmPassword

  // Check URL params on mount
  useEffect(() => {
    const mode = searchParams.get("mode")
    if (mode === "signup") {
      setIsLogin(false)
    } else if (mode === "login") {
      setIsLogin(true)
    }
  }, [searchParams])

  const handleModeChange = (newMode: boolean) => {
    setIsLogin(newMode)
    const mode = newMode ? "login" : "signup"
    router.push(`/auth?mode=${mode}`)
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", loginForm)
    // Handle login logic here
  }

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signup attempt:", signupForm)
    // Handle signup logic here
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src="/images/bg-watermark.png"
          alt="Watermark"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center pointer-events-none z-0"
        />
      </div>

      <div className="w-full max-w-md relative z-20">
        {/* Logo/Header */}
        <div className="text-center max-w-[40rem] mx-auto flex flex-col items-center gap-4 mb-8">
          <h1 className="text-4xl font-black font-schibstedGrotesk">
            <span>ULES ARB</span>
            <span className="block bg-gradient-to-r from-[rgba(33,0,93,1)] via-[rgba(33,0,93,1)] to-[rgba(114,0,204,1)] text-transparent bg-clip-text">Research Reource Hub</span>
          </h1>
          <p className="max-md:text-sm mx-auto text-gray-400">
            Create an account or login to access your research resources
          </p>
        </div>

        {/* Auth Container */}
        <div className="bg-white border border-[#F3EDF7] shadow-lg rounded-lg p-6">
          {/* Mode Toggle Slider */}
          <div className="mb-6">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => handleModeChange(true)}
                className={`flex-1 py-2 px-4 rounded-md text-xs font-medium transition-all duration-200 ${
                  isLogin
                    ? "bg-white text-secondary-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => handleModeChange(false)}
                className={`flex-1 py-2 px-4 rounded-md text-xs font-medium transition-all duration-200 ${
                  !isLogin
                    ? "bg-white text-secondary-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Login Form */}
          {isLogin && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block text-sm text-gray-500 font-medium mb-2">
                  Email/Matric Number
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="login-email"
                    type="text"
                    autoComplete="on"
                    required
                    value={loginForm.email_or_matric}
                    onChange={(e) => setLoginForm({ ...loginForm, email_or_matric: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm"
                    placeholder="Email/Matric Number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="login-password" className="block text-sm text-gray-500 font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full pl-10 pr-12 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm"
                    placeholder="********"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-[#F2F2F2] text-secondary-600 focus:ring-secondary-500" />
                  <span className="ml-2 text-xs text-gray-500">Remember me</span>
                </label>
                <a href="#" className="text-xs text-secondary-600 hover:text-secondary-700">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loginButtonDisabled}
                className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Login
              </button>
            </form>
          )}

          {/* Signup Form */}
          {!isLogin && (
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div>
                <label htmlFor="signup-name" className="block text-sm text-gray-500 font-medium mb-2">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="signup-name"
                    type="text"
                    required
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-email" className="block text-sm text-gray-500 font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="signup-email"
                    type="email"
                    required
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-email" className="block text-sm text-gray-500 font-medium mb-2">
                  Matric/Faculty ID
                </label>
                <div className="relative">
                  <School className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="signup-email"
                    type="number"
                    required
                    value={signupForm.matric_or_faculty_id}
                    onChange={(e) => setSignupForm({ ...signupForm, matric_or_faculty_id: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield]"
                    placeholder="Enter your matric number/faculty ID"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="department" className="block text-sm text-gray-500 font-medium mb-2">
                  Department
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="department"
                    type="text"
                    required
                    value={signupForm.department}
                    onChange={(e) => setSignupForm({ ...signupForm, department: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm"
                    placeholder="Department"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-password" className="block text-sm text-gray-500 font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="signup-password"
                    type="text"
                    required
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                    className="w-full pl-10 pr-12 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-confirm-password" className="block text-sm text-gray-500 font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="signup-confirm-password"
                    type="text"
                    required
                    value={signupForm.confirmPassword}
                    onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                    className="w-full pl-10 pr-12 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-sm"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded border-[#F2F2F2] text-secondary-600 focus:ring-secondary-500"
                />
                <label className="ml-2 text-xs text-gray-500">
                  I agree to the{" "}
                  <a href="#" className="text-secondary-600 hover:text-secondary-700">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-secondary-600 hover:text-secondary-700">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={signUpButtonDisabled}
                className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Account
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => handleModeChange(!isLogin)}
                className="text-secondary-600 hover:text-secondary-700 font-medium"
              >
                {isLogin ? "Sign up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
