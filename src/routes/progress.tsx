import { createFileRoute } from "@tanstack/react-router";
import {
  DashboardLayout,
  Aura,
  TopBar,
  Screen,
  GlowButton,
  GlassCard,
} from "@/components/resqnet/kit";
import { Timeline, type Step } from "@/components/resqnet/widgets";

export const Route = createFileRoute("/progress")({
  head: () => ({ meta: [{ title: "Emergency Progress — ResQNet" }] }),
  component: Progress,
});

const STEPS: Step[] = [
  { label: "SOS Sent", time: "09:24:02", state: "done" },
  {
    label: "Volunteer Assigned",
    time: "09:24:18 • Arjun Mehta",
    state: "done",
  },
  { label: "On The Way", time: "ETA 2 min", state: "active" },
  { label: "Arrived", state: "todo" },
  { label: "Help Completed", state: "todo" },
];

function Progress() {
  return (
    <DashboardLayout>
      <Aura />
      <TopBar title="Emergency progress" subtitle="Live status of your SOS" />
      <Screen>
        <GlassCard className="mb-5 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary animate-heartbeat">
            ●
          </span>
          <div className="flex-1">
            <p className="font-semibold">Arjun is on the way</p>
            <p className="text-xs text-muted-foreground">
              0.4 km away • arriving in 2 min
            </p>
          </div>
        </GlassCard>
        <Timeline steps={STEPS} />
      </Screen>
      <div className="relative z-10 w-full max-w-md mx-auto space-y-3 px-5 pb-8">
        <GlowButton to="/live-tracking">View Live Tracking</GlowButton>
        <GlowButton to="/completed" variant="outline">
          Mark as Completed
        </GlowButton>
      </div>
    </DashboardLayout>
  );
}
