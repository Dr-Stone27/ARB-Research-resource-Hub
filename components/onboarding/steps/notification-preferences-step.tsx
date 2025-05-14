import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function NotificationPreferencesStep() {
  return (
    <div className="container max-w-3xl py-8 px-4 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Notification Preferences</h1>
        <p className="text-muted-foreground mt-2">
          Choose how and when you'd like to receive updates from ResearchHub.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email updates about your submissions and activity
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">New Research Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when new research in your areas of interest is published
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Comment Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive alerts when someone comments on your research</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Citation Alerts</Label>
                <p className="text-sm text-muted-foreground">Get notified when your work is cited by others</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Event Invitations</Label>
                <p className="text-sm text-muted-foreground">
                  Receive invitations to relevant academic events and webinars
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Weekly Digest</Label>
                <p className="text-sm text-muted-foreground">Get a weekly summary of activity and new research</p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>You can change these preferences anytime in your account settings.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
