import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { GlowButton, Field, Logo } from "@/components/resqnet/kit";
import {
  User,
  Mail,
  Lock,
  Phone,
  ShieldAlert,
  HeartHandshake,
  Users,
  Activity,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create Account — ResQNet" }] }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"help" | "volunteer" | null>(null);

  const nextStep = () => setStep((s) => Math.min(5, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const handleComplete = () => {
    // In a real app, submit data to backend here
    navigate({ to: "/otp" });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background text-foreground overflow-hidden py-12 px-4">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <div className="flex justify-center mb-8">
          <Link to="/">
            <Logo size={48} />
          </Link>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8 px-4">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border rounded-full z-0"></div>
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / 4) * 100}%` }}
            ></div>

            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                  step >= i
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(245,34,45,0.5)]"
                    : "bg-card border-2 border-border text-muted-foreground"
                }`}
              >
                {step > i ? <CheckCircle2 className="h-5 w-5" /> : i}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold px-1">
            <span>Profile</span>
            <span>Security</span>
            <span>Role</span>
            <span>Contacts</span>
            <span>Medical</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-2xl p-8 shadow-2xl min-h-[400px] flex flex-col">
          <div className="flex-1">
            {step === 1 && (
              <div className="animate-fade-up">
                <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                <p className="text-muted-foreground text-sm mb-6">Let's start with the basics to set up your profile.</p>
                <div className="space-y-4">
                  <Field label="Full name" icon={User} placeholder="Aarav Sharma" />
                  <Field label="Email" icon={Mail} type="email" placeholder="aarav@example.com" />
                  <Field label="Phone number" icon={Phone} type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-up">
                <h2 className="text-2xl font-bold mb-2">Account Security</h2>
                <p className="text-muted-foreground text-sm mb-6">Create a strong password to protect your emergency data.</p>
                <div className="space-y-4">
                  <Field label="Password" icon={Lock} type="password" placeholder="••••••••" />
                  <Field label="Confirm Password" icon={Lock} type="password" placeholder="••••••••" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-up">
                <h2 className="text-2xl font-bold mb-2">How will you use ResQNet?</h2>
                <p className="text-muted-foreground text-sm mb-6">Select your primary role in the network.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setRole("help")}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                      role === "help"
                        ? "border-primary bg-primary/10 text-white"
                        : "border-border bg-card/50 hover:bg-secondary/50 text-muted-foreground hover:text-white"
                    }`}
                  >
                    <ShieldAlert className={`h-12 w-12 mb-4 ${role === "help" ? "text-primary" : ""}`} />
                    <span className="font-bold text-lg">I Need Help</span>
                    <span className="text-xs text-center mt-2 opacity-80">I want to alert my family and local responders in emergencies.</span>
                  </button>

                  <button
                    onClick={() => setRole("volunteer")}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                      role === "volunteer"
                        ? "border-primary bg-primary/10 text-white"
                        : "border-border bg-card/50 hover:bg-secondary/50 text-muted-foreground hover:text-white"
                    }`}
                  >
                    <HeartHandshake className={`h-12 w-12 mb-4 ${role === "volunteer" ? "text-primary" : ""}`} />
                    <span className="font-bold text-lg">I Am a Volunteer</span>
                    <span className="text-xs text-center mt-2 opacity-80">I want to receive alerts and help people in my community.</span>
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-up">
                <h2 className="text-2xl font-bold mb-2">Emergency Contacts</h2>
                <p className="text-muted-foreground text-sm mb-6">Add a primary contact who will be instantly notified during an SOS.</p>
                <div className="space-y-4">
                  <Field label="Contact Name" icon={Users} placeholder="e.g., Mother, Spouse" />
                  <Field label="Contact Phone" icon={Phone} type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="animate-fade-up">
                <h2 className="text-2xl font-bold mb-2">Medical Profile</h2>
                <p className="text-muted-foreground text-sm mb-6">This crucial information is securely shared with first responders.</p>
                <div className="space-y-4">
                  <Field label="Blood Group" icon={Activity} placeholder="e.g., O+, A-" />
                  <Field label="Allergies (Optional)" icon={Activity} placeholder="e.g., Penicillin, Peanuts" />
                  <Field label="Medical Conditions (Optional)" icon={Activity} placeholder="e.g., Asthma, Diabetes" />
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            ) : (
              <div /> // Empty div to maintain flex spacing
            )}

            {step < 5 ? (
              <GlowButton onClick={nextStep} className="px-8 flex items-center gap-2">
                Continue <ArrowRight className="h-4 w-4" />
              </GlowButton>
            ) : (
              <GlowButton onClick={handleComplete} className="px-8 shadow-xl shadow-primary/20">
                Complete Registration
              </GlowButton>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
