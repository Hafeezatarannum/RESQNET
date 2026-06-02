import { createFileRoute, Link } from "@tanstack/react-router";
import { GlowButton, Field, Logo, Wordmark } from "@/components/resqnet/kit";
import { Mail, Lock, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — ResQNet" }] }),
  component: Login,
});

function Login() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      {/* Left side: Form */}
      <div className="flex w-full flex-col justify-center px-8 md:w-1/2 lg:px-24 xl:px-32 relative z-10">
        <div className="mx-auto w-full max-w-sm">
          <Link to="/" className="flex items-center gap-2 mb-12">
            <Logo size={40} />
            <Wordmark className="text-xl" />
          </Link>

          <h1 className="text-3xl font-bold mb-2">{t("auth.welcome")}</h1>
          <p className="text-muted-foreground mb-8">{t("auth.loginToSave")}</p>

          <div className="space-y-4">
            <Field
              label="Email"
              icon={Mail}
              type="email"
              placeholder="you@example.com"
            />
            <Field
              label={t("auth.password")}
              icon={Lock}
              type="password"
              placeholder="••••••••"
            />
            <div className="flex justify-end">
              <span className="text-xs text-primary font-medium hover:underline cursor-pointer">
                {t("auth.forgot")}
              </span>
            </div>
            <GlowButton to="/otp" className="w-full mt-2">
              {t("general.login")}
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
            {t("auth.newTo")}{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary hover:underline"
            >
              {t("auth.createAcc")}
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
          <h2 className="text-2xl font-bold mb-4">
            Enterprise-grade emergency response.
          </h2>
          <p className="text-muted-foreground">
            ResQNet connects you to the fastest emergency networks in your area,
            reducing response times by up to 60%.
          </p>
        </div>
      </div>
    </div>
  );
}
