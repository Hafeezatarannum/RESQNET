import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, a as GlassCard, b as Stat, G as GlowButton } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function NavigateUser() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Navigate to victim", subtitle: "Fastest route" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto flex-1 px-5 pb-3", children: /* @__PURE__ */ jsx(MapMock, { className: "h-full min-h-[360px]" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: [
      /* @__PURE__ */ jsxs(GlassCard, { className: "mb-3 grid grid-cols-3 divide-x divide-border", children: [
        /* @__PURE__ */ jsx(Stat, { value: "0.4 km", label: "Distance" }),
        /* @__PURE__ */ jsx(Stat, { value: "2 min", label: "ETA" }),
        /* @__PURE__ */ jsx(Stat, { value: "Clear", label: "Traffic" })
      ] }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/reached", children: "Start Navigation" })
    ] })
  ] });
}
export {
  NavigateUser as component
};
