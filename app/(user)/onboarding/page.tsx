import { OnboardingController } from "@/components/onboarding/onboarding-controller"
import { WelcomeStep } from "@/components/onboarding/steps/welcome-step"
import { ProfileSetupStep } from "@/components/onboarding/steps/profile-setup-step"
import { ResearchInterestsStep } from "@/components/onboarding/steps/research-interests-step"
import { NotificationPreferencesStep } from "@/components/onboarding/steps/notification-preferences-step"
import { ConnectAccountsStep } from "@/components/onboarding/steps/connect-accounts-step"
import { CompletionStep } from "@/components/onboarding/steps/completion-step"

export default function OnboardingPage() {
  const steps = [
    <WelcomeStep key="welcome" />,
    <ProfileSetupStep key="profile" />,
    <ResearchInterestsStep key="interests" />,
    <NotificationPreferencesStep key="notifications" />,
    <ConnectAccountsStep key="accounts" />,
    <CompletionStep key="completion" />,
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-emerald-600"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <span className="text-xl font-bold">ResearchHub</span>
          </div>
        </div>
      </header>

      <OnboardingController steps={steps} />
    </div>
  )
}
