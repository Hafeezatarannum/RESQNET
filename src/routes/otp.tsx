import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import {
  DashboardLayout,
  Aura,
  TopBar,
  Screen,
  GlowButton,
} from "@/components/resqnet/kit";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth";

// Accept optional ?email= query param from signup redirect
const searchSchema = z.object({
  email: z.string().email().optional(),
});

export const Route = createFileRoute("/otp")({
  head: () => ({ meta: [{ title: "Verify OTP — ResQNet" }] }),
  validateSearch: searchSchema,
  component: Otp,
});

function Otp() {
  const navigate = useNavigate();
  const { verifyOtp, sendOtp } = useAuth();
  const { email } = Route.useSearch();

  const [vals, setVals] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for "Resend code"
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
    if (v && i < 5) refs.current[i + 1]?.focus();
  };

  // Resend OTP
  const handleResend = async () => {
    if (!email) return;
    setError(null);
    const { error } = await sendOtp(email);
    if (error) {
      setError("Failed to resend code. Try again.");
    } else {
      setTimer(30);
      setVals(["", "", "", "", "", ""]);
      refs.current[0]?.focus();
    }
  };

  // Verify 6-digit code with Supabase
  const handleVerify = async () => {
    const token = vals.join("");
    if (token.length < 6) {
      setError("Please enter the complete 6-digit code.");
      return;
    }
    if (!email) {
      setError("Email not found. Please go back and sign in again.");
      return;
    }

    setLoading(true);
    setError(null);
    const { error } = await verifyOtp(email, token);
    setLoading(false);

    if (error) {
      setError("Invalid or expired code. Please try again.");
    } else {
      // Verified! Take user to role selection
      navigate({ to: "/role" });
    }
  };

  return (
    <DashboardLayout>
      <Aura />
      <TopBar
        title="Verify your email"
        subtitle={email ? `Code sent to ${email}` : "Enter the 6-digit code sent to your email"}
      />
      <Screen>
        {/* Error banner */}
        {error && (
          <div className="mx-5 mt-4 rounded-xl bg-destructive/10 border border-destructive/30 px-4 py-3 text-sm text-destructive font-medium">
            {error}
          </div>
        )}

        <div className="mt-8 flex justify-center gap-4">
          {vals.map((v, i) => (
            <input
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              value={v}
              onChange={(e) => set(i, e.target.value)}
              onKeyDown={(e) => {
                // Backspace moves to previous box
                if (e.key === "Backspace" && !v && i > 0) {
                  refs.current[i - 1]?.focus();
                }
              }}
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
              onClick={handleResend}
              className="font-semibold text-primary hover:underline"
            >
              Resend code
            </button>
          )}
        </p>
      </Screen>

      <div className="relative z-10 w-full max-w-md mx-auto px-5 pb-8">
        <GlowButton onClick={handleVerify} disabled={loading} className="w-full h-12">
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Verify & Continue"}
        </GlowButton>
      </div>
    </DashboardLayout>
  );
}
