import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function CommunityAlert() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Emergency in your area" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsx(MapMock, { className: "h-40" }),
      /* @__PURE__ */ jsxs(GlassCard, { className: "mt-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold", children: "Road accident • MG Road" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "1.2 km away • reported 2 min ago. A victim needs first-aid before the ambulance arrives." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-center text-sm font-semibold", children: "Can you help?" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto grid grid-cols-2 gap-3 px-5 pb-8", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/navigate-user", variant: "primary", children: "Yes, I can help" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "dark", children: "No" })
    ] })
  ] });
}
export {
  CommunityAlert as component
};
