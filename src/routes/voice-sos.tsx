import { createFileRoute } from "@tanstack/react-router";
import {
  DashboardLayout,
  Aura,
  TopBar,
  GlowButton,
} from "@/components/resqnet/kit";
import { Mic } from "lucide-react";

export const Route = createFileRoute("/voice-sos")({
  head: () => ({ meta: [{ title: "Voice SOS — ResQNet" }] }),
  component: VoiceSos,
});

function VoiceSos() {
  return (
    <DashboardLayout>
      <Aura />
      <TopBar title="Voice SOS" subtitle="Hands-free emergency trigger" />
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="relative grid h-56 w-56 place-items-center">
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" />
          <span className="absolute inset-8 rounded-full bg-primary/20 animate-pulse-ring [animation-delay:0.8s]" />
          <span className="relative grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-primary to-[#b71721] glow-red animate-sos">
            <Mic className="h-14 w-14 text-white" />
          </span>
        </div>
        <h1 className="mt-10 text-2xl font-bold">Say “Help ResQNet”</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We’re listening for your emergency keyword…
        </p>
      </div>
      <div className="relative z-10 w-full max-w-md mx-auto space-y-3 px-6 pb-10">
        <GlowButton to="/voice-detected">Send SOS</GlowButton>
        <GlowButton to="/home" variant="ghost">
          Cancel
        </GlowButton>
      </div>
    </DashboardLayout>
  );
}
