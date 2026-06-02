import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, P as Pill, b as Stat, G as GlowButton } from "./kit-QSQV2ku9.js";
import { Ambulance as Ambulance$1 } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Ambulance() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Auto ambulance booking", subtitle: "Dispatched automatically" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsxs(GlassCard, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary animate-heartbeat", children: /* @__PURE__ */ jsx(Ambulance$1, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Ambulance #108-A4" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Apollo Emergency Care" })
        ] }),
        /* @__PURE__ */ jsx(Pill, { tone: "green", children: "Confirmed" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-3 divide-x divide-border rounded-2xl bg-white/[0.03] py-3", children: [
        /* @__PURE__ */ jsx(Stat, { value: "6 min", label: "ETA" }),
        /* @__PURE__ */ jsx(Stat, { value: "1.2 km", label: "Distance" }),
        /* @__PURE__ */ jsx(Stat, { value: "ALS", label: "Type" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-5 pb-8", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/live-tracking", children: "Track Ambulance" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "dark", children: "Cancel Booking" })
    ] })
  ] });
}
export {
  Ambulance as component
};
