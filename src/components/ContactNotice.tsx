import { AlertTriangle, Database } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function ContactNotice() {
  return (
    <Alert className="mb-6 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
      <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
      <AlertDescription className="text-amber-800 dark:text-amber-200">
        <div className="space-y-3">
          <p className="font-medium">Backend Integration Required</p>
          <p className="text-sm">
            To enable the contact form functionality, you'll need to connect this portfolio to Supabase using 
            Lovable's native integration. This will enable email functionality and data storage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="sm" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Connect Supabase
            </Button>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  )
}