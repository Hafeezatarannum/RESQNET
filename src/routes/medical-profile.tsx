import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  DashboardLayout,
  Aura,
  TopBar,
  Screen,
  GlowButton,
  Field,
} from "@/components/resqnet/kit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/medical-profile")({
  head: () => ({ meta: [{ title: "Medical Profile — ResQNet" }] }),
  component: MedicalProfile,
});

const BLOOD = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

function MedicalProfile() {
  const [blood, setBlood] = useState("O+");
  return (
    <DashboardLayout>
      <Aura />
      <TopBar
        title="Medical profile"
        subtitle="Shared with responders during emergencies"
      />
      <Screen>
        <p className="mb-2 text-xs font-medium text-muted-foreground">
          Blood group
        </p>
        <div className="grid grid-cols-4 gap-2">
          {BLOOD.map((b) => (
            <button
              key={b}
              onClick={() => setBlood(b)}
              className={cn(
                "rounded-[14px] border py-3 text-sm font-bold transition",
                blood === b
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border bg-white/[0.03]",
              )}
            >
              {b}
            </button>
          ))}
        </div>
        <div className="mt-5 space-y-4">
          <Field label="Allergies" placeholder="e.g. Penicillin, peanuts" />
          <Field
            label="Medical conditions"
            placeholder="e.g. Asthma, diabetes"
          />
          <Field
            label="Current medications"
            placeholder="e.g. Insulin, inhaler"
          />
        </div>
      </Screen>
      <div className="relative z-10 w-full max-w-md mx-auto px-5 pb-8">
        <GlowButton to="/location-permission">Save & Continue</GlowButton>
      </div>
    </DashboardLayout>
  );
}
