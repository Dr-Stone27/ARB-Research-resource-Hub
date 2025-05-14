import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ConnectAccountsStep() {
  return (
    <div className="container max-w-3xl py-8 px-4 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Connect Your Accounts</h1>
        <p className="text-muted-foreground mt-2">
          Link your academic and social profiles to enhance your ResearchHub experience.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <Label htmlFor="orcid" className="text-base">
                  ORCID
                </Label>
                <p className="text-sm text-muted-foreground">Connect your ORCID iD to import your publications</p>
              </div>
              <Button variant="outline" className="min-w-[120px]">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c-.564-1.789-1.632-1.023-1.632-1.023l-.326 1.022h-1.307l1.544-4.975c.096-.311.159-.311.271-.311h2.499c1.139 0 1.688.724 1.688 1.748 0 1.826-1.455 3.54-2.737 3.54zm.355-3.823h-.893l-.408 1.274h.931c.622 0 1.055-.646 1.055-1.145 0-.275-.149-.129-.685-.129zm5.635 3.823c-.565-1.789-1.631-1.023-1.631-1.023l-.326 1.022h-1.308l1.545-4.975c.095-.311.159-.311.271-.311h2.499c1.139 0 1.688.724 1.688 1.748 0 1.826-1.455 3.54-2.738 3.54zm.355-3.823h-.894l-.407 1.274h.93c.622 0 1.056-.646 1.056-1.145 0-.275-.15-.129-.685-.129z" />
                </svg>
                Connect
              </Button>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <Label htmlFor="googleScholar" className="text-base">
                  Google Scholar
                </Label>
                <p className="text-sm text-muted-foreground">Link your Google Scholar profile to sync citations</p>
              </div>
              <Button variant="outline" className="min-w-[120px]">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.804 19.002c-1.168.957-3.052 1.058-4.244 1.058-1.248 0-2.496-.1-3.714-.402-1.428-.334-2.496-1.058-2.496-2.516 0-1.428 1.19-2.625 2.586-3.302-.29-.468-.468-.937-.468-1.448 0-.78.379-1.28.936-1.816-1.314-.334-2.63-1.304-2.63-3.19 0-1.782 1.57-3.42 4.244-3.42h4.87v.958c-.512.334-1.026.67-1.538 1.002h-.78c.557.67.936 1.493.936 2.35 0 .847-.379 1.55-.847 2.063-.78.847-.78.847-.78 1.35 0 .435.557.957 1.248 1.514 1.07.735 2.495 1.737 2.495 3.42 0 1.782-1.603 2.883-2.818 3.38zm-4.244-4.3c-1.803 0-2.784 1.148-2.784 2.218 0 1.137.981 2.218 2.784 2.218 1.803 0 2.784-1.08 2.784-2.218 0-1.07-.98-2.217-2.784-2.217zm-.334-7.878c-1.336 0-2.25 1.448-2.25 2.907 0 1.425.847 2.785 2.25 2.785 1.337 0 2.25-1.36 2.25-2.785 0-1.47-.913-2.907-2.25-2.907z"
                    fill="currentColor"
                  />
                </svg>
                Connect
              </Button>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <Label htmlFor="researchGate" className="text-base">
                  ResearchGate
                </Label>
                <p className="text-sm text-muted-foreground">Connect your ResearchGate profile</p>
              </div>
              <Button variant="outline" className="min-w-[120px]">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.586 0c-2.183 0-4.226 1.139-5.336 2.974-1.111-1.835-3.154-2.974-5.337-2.974-3.521 0-6.377 2.855-6.377 6.376 0 6.913 12.235 15.624 12.235 15.624s12.229-8.711 12.229-15.624c0-3.521-2.856-6.376-6.414-6.376z" />
                </svg>
                Connect
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Personal Website</Label>
              <Input id="website" placeholder="https://yourwebsite.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter/X</Label>
              <Input id="twitter" placeholder="@username" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>
              Connecting your accounts helps establish your academic identity and makes it easier to share your work.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
