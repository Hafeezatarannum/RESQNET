import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout, GlowButton } from "@/components/resqnet/kit";
import { MessageSquare, ThumbsUp, ThumbsDown, Bug } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/feedback")({
  head: () => ({ meta: [{ title: "Feedback — ResQNet" }] }),
  component: Feedback,
});

function Feedback() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <DashboardLayout withNav>
      <div className="max-w-[800px] mx-auto p-4 md:p-8 w-full space-y-8">
        
        <div className="text-center space-y-4 py-8">
          <div className="h-20 w-20 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-bold">Send Feedback</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your feedback helps us improve ResQNet. Let us know what you think or report an issue you've encountered.
          </p>
        </div>

        <div className="bg-card/50 border border-border rounded-3xl p-6 md:p-8">
          <h3 className="font-semibold mb-4">What kind of feedback do you have?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button 
              onClick={() => setSelectedType('idea')}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${selectedType === 'idea' ? 'bg-brand-blue/10 border-brand-blue text-brand-blue' : 'bg-secondary/50 border-border hover:border-brand-blue/50'}`}
            >
              <ThumbsUp className="h-6 w-6" />
              <span className="font-medium text-sm">Idea / Suggestion</span>
            </button>
            <button 
              onClick={() => setSelectedType('issue')}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${selectedType === 'issue' ? 'bg-primary/10 border-primary text-primary' : 'bg-secondary/50 border-border hover:border-primary/50'}`}
            >
              <Bug className="h-6 w-6" />
              <span className="font-medium text-sm">Report an Issue</span>
            </button>
            <button 
              onClick={() => setSelectedType('other')}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${selectedType === 'other' ? 'bg-success/10 border-success text-success' : 'bg-secondary/50 border-border hover:border-success/50'}`}
            >
              <MessageSquare className="h-6 w-6" />
              <span className="font-medium text-sm">Other</span>
            </button>
          </div>

          <div className="space-y-4">
            <label className="block space-y-2">
              <span className="text-sm font-medium">Message</span>
              <textarea 
                className="w-full h-32 bg-secondary/50 border border-border rounded-xl p-4 outline-none focus:border-primary resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </label>
            <div className="flex justify-end pt-4">
              <GlowButton className="w-full sm:w-auto px-8">Submit Feedback</GlowButton>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
