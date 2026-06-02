import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, P as Pill, G as GlowButton } from "./kit-QSQV2ku9.js";
import { a as HOSPITALS } from "./resqnet-data-CsBUxpcz.js";
import { Phone, Navigation } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Hospitals() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Nearby hospitals", subtitle: "Sorted by distance" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: HOSPITALS.map((h, i) => /* @__PURE__ */ jsxs(GlassCard, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: h.name }),
        /* @__PURE__ */ jsx(Pill, { tone: "blue", children: h.distance })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: h.beds }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsx(GlowButton, { variant: "success", icon: Phone, className: "h-11", children: "Call" }),
        /* @__PURE__ */ jsx(GlowButton, { variant: "outline", icon: Navigation, className: "h-11", children: "Navigate" })
      ] })
    ] }, i)) }) })
  ] });
}
export {
  Hospitals as component
};
