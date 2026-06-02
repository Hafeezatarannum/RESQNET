import { createFileRoute, Link } from "@tanstack/react-router";
import { GlowButton, Field, Logo, Wordmark } from "@/components/resqnet/kit";
import { User, Mail, Lock, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign Up — ResQNet" }] }),
  component: Signup,
});

function Signup() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      {/* Left side: Form */}
      <div className="flex w-full flex-col justify-center px-8 md:w-1/2 lg:px-24 xl:px-32 relative z-10 py-12">
        <div className="mx-auto w-full max-w-sm">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <Logo size={40} />
            <Wordmark className="text-xl" />
          </Link>

          <h1 className="text-3xl font-bold mb-2">Create an account</h1>
          <p className="text-muted-foreground mb-8">
            Join the fastest emergency response network.
          </p>

          <div className="space-y-4">
            <Field label="Full name" icon={User} placeholder="Aarav Sharma" />
            <Field
              label="Email"
              icon={Mail}
              type="email"
              placeholder="aarav@example.com"
            />
            <Field
              label="Password"
              icon={Lock}
              type="password"
              placeholder="••••••••"
            />

            <GlowButton to="/otp" className="w-full mt-4">
              Create account
            </GlowButton>

            <div className="flex items-center gap-3 py-4 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> {t("general.or")}{" "}
              <span className="h-px flex-1 bg-border" />
            </div>

            <GlowButton
              to="/role"
              variant="outline"
              className="w-full bg-secondary/50"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt=""
                className="h-5 w-5 mr-2"
              />
              {t("auth.google")}
            </GlowButton>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right side: Branding/Image */}
      <div className="hidden md:flex relative w-1/2 items-center justify-center bg-secondary/30 overflow-hidden border-l border-border/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>

        <div className="relative z-10 max-w-md p-8 border border-border bg-card/50 backdrop-blur-xl rounded-3xl text-center shadow-2xl">
          <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">You're in good hands.</h2>
          <p className="text-muted-foreground">
            Join over 1.2 million users who trust ResQNet to keep their families
            safe.
          </p>
        </div>
      </div>
    </div>
  );
}
