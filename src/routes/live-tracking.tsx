import { createFileRoute } from "@tanstack/react-router";
import {
  DashboardLayout,
  Aura,
  TopBar,
  GlowButton,
  GlassCard,
} from "@/components/resqnet/kit";
import { MapMock } from "@/components/resqnet/widgets";
import { Share2, Navigation } from "lucide-react";

export const Route = createFileRoute("/live-tracking")({
  head: () => ({ meta: [{ title: "Live GPS Tracking — ResQNet" }] }),
  component: LiveTracking,
});

function LiveTracking() {
  return (
    <DashboardLayout>
      <Aura />
      <TopBar title="Live GPS tracking" subtitle="Arjun → You" />
      <div className="relative z-10 w-full max-w-md mx-auto flex-1 px-5 pb-4">
        <MapMock className="h-full min-h-[420px]" />
      </div>
      <div className="relative z-10 w-full max-w-md mx-auto px-5 pb-8">
        <GlassCard className="mb-3 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-blue/15 text-brand-blue">
            <Navigation className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p className="font-semibold">Arjun Mehta • 2 min away</p>
            <p className="text-xs text-muted-foreground">
              Moving along MG Road
            </p>
          </div>
        </GlassCard>
        <GlowButton icon={Share2}>Share Live Location</GlowButton>
      </div>
    </DashboardLayout>
  );
}
