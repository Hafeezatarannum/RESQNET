import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, L as Logo, W as Wordmark, G as GlowButton } from "./kit-QSQV2ku9.js";
import { S as SOSButton } from "./widgets-oL2yBzJ2.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Welcome() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex items-center gap-3 px-6 pt-10", children: [
      /* @__PURE__ */ jsx(Logo, { size: 44 }),
      /* @__PURE__ */ jsx(Wordmark, { className: "text-xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx(SOSButton, { to: "/onboarding", size: 200 }),
      /* @__PURE__ */ jsx("h1", { className: "mt-10 text-3xl font-bold text-balance", children: "Help is closer than you think" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground text-balance", children: "Trigger an instant SOS and connect with nearby trained volunteers, AI first-aid guidance and live tracking." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-6 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/onboarding", children: "Get Started" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/login", variant: "ghost", children: "I already have an account" })
    ] })
  ] });
}
export {
  Welcome as component
};
