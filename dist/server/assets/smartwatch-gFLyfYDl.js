import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, b as Stat, G as GlowButton } from "./kit-QSQV2ku9.js";
import { Watch, HeartPulse } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Smartwatch() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Smartwatch sync", subtitle: "Health monitoring & auto SOS" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsxs(GlassCard, { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/15 text-brand-blue", children: /* @__PURE__ */ jsx(Watch, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "ResQ Watch" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-success", children: "Connected" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(GlassCard, { className: "mt-4 grid grid-cols-3 divide-x divide-border", children: [
        /* @__PURE__ */ jsx(Stat, { value: "78", label: "BPM" }),
        /* @__PURE__ */ jsx(Stat, { value: "98%", label: "SpO₂" }),
        /* @__PURE__ */ jsx(Stat, { value: "On", label: "Auto SOS" })
      ] }),
      /* @__PURE__ */ jsxs(GlassCard, { className: "mt-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(HeartPulse, { className: "h-6 w-6 text-primary animate-heartbeat" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Abnormal heart rate triggers an automatic SOS." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { variant: "outline", children: "Manage Device" }) })
  ] });
}
export {
  Smartwatch as component
};
