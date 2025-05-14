import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CompletionStep() {
  return (
    <div className="container max-w-3xl py-8 px-4 md:py-12">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">You're All Set!</h1>
        <p className="text-muted-foreground mt-2">
          Your profile is now complete. You're ready to start exploring ResearchHub.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center text-center p-4 rounded-lg border">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-emerald-600"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Explore Research</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Discover papers based on your interests and connect with researchers in your field.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg border">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-emerald-600"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Complete Your Profile</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Add more details to your profile to increase visibility and networking opportunities.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg border">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-emerald-600"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Submit Your Research</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Share your work with the academic community and get valuable feedback.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg border">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-emerald-600"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium">Join the Community</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Participate in discussions, collaborate on projects, and expand your network.
              </p>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground mt-6">
            <p>Your personalized dashboard is ready. Click "Complete" to start exploring ResearchHub.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
