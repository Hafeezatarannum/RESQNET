import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, R as Rating, b as Stat, G as GlowButton } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import { Phone, MessageSquare } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function VolunteerAssigned() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Volunteer assigned", subtitle: "Help is on the way", back: false }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsx(MapMock, { className: "h-40" }),
      /* @__PURE__ */ jsxs(GlassCard, { className: "mt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-blue/40 to-brand-blue/10 text-lg font-bold", children: "AM" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-bold", children: "Arjun Mehta" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Paramedic • Certified responder" })
          ] }),
          /* @__PURE__ */ jsx(Rating, { value: 4.9 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-3 divide-x divide-border rounded-2xl bg-white/[0.03] py-3", children: [
          /* @__PURE__ */ jsx(Stat, { value: "0.4 km", label: "Distance" }),
          /* @__PURE__ */ jsx(Stat, { value: "2 min", label: "ETA" }),
          /* @__PURE__ */ jsx(Stat, { value: "240+", label: "Helps" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsx(GlowButton, { variant: "success", icon: Phone, children: "Call" }),
        /* @__PURE__ */ jsx(GlowButton, { variant: "outline", icon: MessageSquare, children: "Chat" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/progress", children: "Track Progress" }) })
  ] });
}
export {
  VolunteerAssigned as component
};
