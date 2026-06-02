import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { Bot } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function AiGuidanceActive() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "AI guidance active", subtitle: "Stay with the victim" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsxs(GlassCard, { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/15 text-brand-blue animate-heartbeat", children: /* @__PURE__ */ jsx(Bot, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "AI assistant is guiding you" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Help is on the way • ETA 2 min" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(GlassCard, { className: "mt-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Keep the person calm and still. Monitor their breathing. Do not give food or water. I'll alert you if anything changes." }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/progress", children: "Continue" }) })
  ] });
}
export {
  AiGuidanceActive as component
};
