import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { DashboardLayout, Aura, GlowButton } from "@/components/resqnet/kit";
import { Radar } from "@/components/resqnet/widgets";

export const Route = createFileRoute("/searching")({
  head: () => ({ meta: [{ title: "Searching Volunteers — ResQNet" }] }),
  component: Searching,
});

function Searching() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/volunteers-found" }), 4000);
    return () => clearTimeout(t);
  }, [navigate]);
  return (
    <DashboardLayout>
      <Aura />
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center">
        <Radar size={280} />
        <h1 className="mt-10 text-2xl font-bold">
          Searching nearby volunteers…
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Broadcasting your SOS within 2 km radius
        </p>
        <div className="mt-4 flex items-center gap-2 rounded-full bg-success/15 px-4 py-2 text-sm font-semibold text-success">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" /> 12
          responders notified
        </div>
      </div>
      <div className="relative z-10 w-full max-w-md mx-auto px-6 pb-10">
        <GlowButton to="/home" variant="dark">
          Cancel SOS
        </GlowButton>
      </div>
    </DashboardLayout>
  );
}
