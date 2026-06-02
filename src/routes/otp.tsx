import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  DashboardLayout,
  Aura,
  TopBar,
  Screen,
  GlowButton,
} from "@/components/resqnet/kit";

export const Route = createFileRoute("/otp")({
  head: () => ({ meta: [{ title: "Verify OTP — ResQNet" }] }),
  component: Otp,
});

function Otp() {
  const [vals, setVals] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    if (timer <= 0) return;
    const t = setTimeout(() => setTimer((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);
  const set = (i: number, v: string) => {
    if (!/^\d?$/.test(v)) return;
    const n = [...vals];
    n[i] = v;
    setVals(n);
    if (v && i < 3) refs.current[i + 1]?.focus();
  };
  return (
    <DashboardLayout>
      <Aura />
      <TopBar
        title="Verify your number"
        subtitle="Enter the 4-digit code sent to +91 98765 43210"
      />
      <Screen>
        <div className="mt-8 flex justify-center gap-4">
          {vals.map((v, i) => (
            <input
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              value={v}
              onChange={(e) => set(i, e.target.value)}
              inputMode="numeric"
              maxLength={1}
              className="h-16 w-14 rounded-[16px] border border-border bg-white/[0.03] text-center text-2xl font-bold text-foreground outline-none focus:border-primary"
            />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {timer > 0 ? (
            <>
              Resend code in{" "}
              <span className="font-semibold text-foreground">
                0:{timer.toString().padStart(2, "0")}
              </span>
            </>
          ) : (
            <button
              onClick={() => setTimer(30)}
              className="font-semibold text-primary"
            >
              Resend code
            </button>
          )}
        </p>
      </Screen>
      <div className="relative z-10 w-full max-w-md mx-auto px-5 pb-8">
        <GlowButton to="/role">Verify</GlowButton>
      </div>
    </DashboardLayout>
  );
}
