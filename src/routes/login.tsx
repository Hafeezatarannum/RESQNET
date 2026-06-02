import { createFileRoute, Link } from "@tanstack/react-router";
import { GlowButton, Field, Logo, Wordmark } from "@/components/resqnet/kit";
import { Mail, Lock, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — ResQNet" }] }),
  component: Login,
});

function Login() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Dynamic Abstract Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-md px-6 py-10">
        <div className="rounded-3xl border border-border bg-card/60 backdrop-blur-2xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Logo size={48} />
            </Link>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-center text-sm text-muted-foreground">
              Sign in to manage your emergency profile and active alerts.
            </p>
          </div>

          <div className="space-y-4">
            <Field
              label="Email"
              icon={Mail}
              type="email"
              placeholder="you@example.com"
            />
            <Field
              label="Password"
              icon={Lock}
              type="password"
              placeholder="••••••••"
            />
            <div className="flex justify-end">
              <span className="text-xs text-primary font-medium hover:underline cursor-pointer transition-colors">
                Forgot password?
              </span>
            </div>

            <GlowButton to="/otp" className="w-full mt-6 h-12 text-base shadow-xl shadow-primary/20">
              Log in
            </GlowButton>

            <div className="flex items-center gap-3 py-4 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary hover:underline transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Emergency Shortcut */}
        <div className="mt-6 flex justify-center">
          <Link
            to="/power-sos"
            className="group flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <AlertTriangle className="h-4 w-4" />
            Emergency Access
          </Link>
        </div>
      </div>
    </div>
  );
}
