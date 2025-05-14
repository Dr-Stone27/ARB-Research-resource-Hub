"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

interface OnboardingControllerProps {
  steps: React.ReactNode[]
  initialStep?: number
}

export function OnboardingController({ steps, initialStep = 0 }: OnboardingControllerProps) {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const router = useRouter()

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1

  const goToNextStep = () => {
    if (isLastStep) {
      // Redirect to dashboard when onboarding is complete
      router.push("/dashboard")
    } else {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const goToPreviousStep = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const skipOnboarding = () => {
    router.push("/dashboard")
  }

  const progressPercentage = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <div className="px-4 py-2 border-b">
        <Progress value={progressPercentage} className="h-2" />
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>
            Step {currentStep + 1} of {steps.length}
          </span>
          <button onClick={skipOnboarding} className="text-emerald-600 hover:underline">
            Skip onboarding
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">{steps[currentStep]}</div>

      <div className="p-4 border-t flex justify-between">
        <Button variant="outline" onClick={goToPreviousStep} disabled={isFirstStep}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Button onClick={goToNextStep} className="bg-emerald-600 hover:bg-emerald-700">
          {isLastStep ? (
            <>
              Complete <Check className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
