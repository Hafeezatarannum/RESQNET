import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { L as Logo, W as Wordmark, F as Field, G as GlowButton } from "./kit-QSQV2ku9.js";
import { User, Mail, Lock, ShieldCheck } from "lucide-react";
import { u as useTranslation } from "./router-CEVNS6XD.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "react";
function Signup() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen w-full bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "flex w-full flex-col justify-center px-8 md:w-1/2 lg:px-24 xl:px-32 relative z-10 py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-sm", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 mb-10", children: [
        /* @__PURE__ */ jsx(Logo, { size: 40 }),
        /* @__PURE__ */ jsx(Wordmark, { className: "text-xl" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Create an account" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Join the fastest emergency response network." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(Field, { label: "Full name", icon: User, placeholder: "Aarav Sharma" }),
        /* @__PURE__ */ jsx(Field, { label: "Email", icon: Mail, type: "email", placeholder: "aarav@example.com" }),
        /* @__PURE__ */ jsx(Field, { label: "Password", icon: Lock, type: "password", placeholder: "••••••••" }),
        /* @__PURE__ */ jsx(GlowButton, { to: "/otp", className: "w-full mt-4", children: "Create account" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px flex-1 bg-border" }),
          " ",
          t("general.or"),
          " ",
          /* @__PURE__ */ jsx("span", { className: "h-px flex-1 bg-border" })
        ] }),
        /* @__PURE__ */ jsxs(GlowButton, { to: "/role", variant: "outline", className: "w-full bg-secondary/50", children: [
          /* @__PURE__ */ jsx("img", { src: "https://www.google.com/favicon.ico", alt: "", className: "h-5 w-5 mr-2" }),
          t("auth.google")
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-8 text-center text-sm text-muted-foreground", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/login", className: "font-semibold text-primary hover:underline", children: "Log in" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex relative w-1/2 items-center justify-center bg-secondary/30 overflow-hidden border-l border-border/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-md p-8 border border-border bg-card/50 backdrop-blur-xl rounded-3xl text-center shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "You're in good hands." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Join over 1.2 million users who trust ResQNet to keep their families safe." })
      ] })
    ] })
  ] });
}
export {
  Signup as component
};
