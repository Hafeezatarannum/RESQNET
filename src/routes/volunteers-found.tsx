import { createFileRoute } from "@tanstack/react-router";
import {
  DashboardLayout,
  Aura,
  TopBar,
  Screen,
  GlowButton,
  Pill,
} from "@/components/resqnet/kit";
import { VolunteerCard } from "@/components/resqnet/widgets";
import { VOLUNTEERS } from "@/lib/resqnet-data";

export const Route = createFileRoute("/volunteers-found")({
  head: () => ({ meta: [{ title: "Volunteers Found — ResQNet" }] }),
  component: VolunteersFound,
});

function VolunteersFound() {
  return (
    <DashboardLayout>
      <Aura />
      <TopBar
        title="Volunteers found"
        subtitle={`${VOLUNTEERS.length} responders nearby`}
        back={false}
      />
      <Screen>
        <div className="mb-3 flex items-center gap-2">
          <Pill tone="green">Assigning best volunteer…</Pill>
        </div>
        <div className="space-y-3">
          {VOLUNTEERS.map((v, i) => (
            <VolunteerCard key={i} v={v} />
          ))}
        </div>
      </Screen>
      <div className="relative z-10 w-full max-w-md mx-auto px-5 pb-8">
        <GlowButton to="/volunteer-assigned">
          Assign Arjun Mehta (closest)
        </GlowButton>
      </div>
    </DashboardLayout>
  );
}
