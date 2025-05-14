"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

const SUGGESTED_INTERESTS = [
  "Artificial Intelligence",
  "Climate Change",
  "Quantum Computing",
  "Neuroscience",
  "Renewable Energy",
  "Machine Learning",
  "Genetics",
  "Blockchain",
  "Sustainable Development",
  "Biotechnology",
  "Data Science",
  "Robotics",
  "Psychology",
  "Economics",
  "Literature",
  "History",
  "Philosophy",
  "Sociology",
  "Political Science",
  "Art History",
]

export function ResearchInterestsStep() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")

  const addInterest = (interest: string) => {
    if (interest && !selectedInterests.includes(interest)) {
      setSelectedInterests([...selectedInterests, interest])
    }
    setInputValue("")
  }

  const removeInterest = (interest: string) => {
    setSelectedInterests(selectedInterests.filter((item) => item !== interest))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      e.preventDefault()
      addInterest(inputValue)
    }
  }

  return (
    <div className="container max-w-3xl py-8 px-4 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Research Interests</h1>
        <p className="text-muted-foreground mt-2">
          Select topics you're interested in to personalize your feed and connect with like-minded researchers.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="interests">Add Your Research Interests</Label>
            <div className="flex gap-2">
              <Input
                id="interests"
                placeholder="Type an interest and press Enter"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          {selectedInterests.length > 0 && (
            <div>
              <Label>Your Selected Interests</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedInterests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
                    {interest}
                    <button onClick={() => removeInterest(interest)} className="ml-1 rounded-full hover:bg-muted p-0.5">
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {interest}</span>
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div>
            <Label>Suggested Interests</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {SUGGESTED_INTERESTS.filter((interest) => !selectedInterests.includes(interest)).map((interest) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className="cursor-pointer hover:bg-secondary"
                  onClick={() => addInterest(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Select at least 3 interests to get personalized recommendations.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
