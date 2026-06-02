import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { T as Timeline } from "./widgets-oL2yBzJ2.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
const STEPS = [{
  label: "SOS Sent",
  time: "09:24:02",
  state: "done"
}, {
  label: "Volunteer Assigned",
  time: "09:24:18 • Arjun Mehta",
  state: "done"
}, {
  label: "On The Way",
  time: "ETA 2 min",
  state: "active"
}, {
  label: "Arrived",
  state: "todo"
}, {
  label: "Help Completed",
  state: "todo"
}];
function Progress() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Emergency progress", subtitle: "Live status of your SOS" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsxs(GlassCard, { className: "mb-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary animate-heartbeat", children: "●" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Arjun is on the way" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "0.4 km away • arriving in 2 min" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Timeline, { steps: STEPS })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-5 pb-8", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/live-tracking", children: "View Live Tracking" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/completed", variant: "outline", children: "Mark as Completed" })
    ] })
  ] });
}
export {
  Progress as component
};
