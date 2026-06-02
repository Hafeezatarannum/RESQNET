import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { D as DashboardLayout, A as Aura, a as GlassCard } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import { Search, Filter, Navigation, Layers, Flame, MapPin } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
const TOOLS = [{
  icon: Navigation,
  label: "Route",
  to: "/route-navigation"
}, {
  icon: Layers,
  label: "Traffic",
  to: "/traffic"
}, {
  icon: Flame,
  label: "Heatmap",
  to: "/heatmap"
}, {
  icon: MapPin,
  label: "Resources",
  to: "/resources"
}];
function MapScreen() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { withNav: true, children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-[1400px] mx-auto p-6 md:p-8 h-screen flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Live Emergency Map" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Monitor real-time incidents and responder locations." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search locations...", className: "pl-9 pr-4 py-2 bg-secondary/50 border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50" })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "p-2 border border-border bg-secondary/50 rounded-xl hover:bg-secondary", children: /* @__PURE__ */ jsx(Filter, { className: "h-5 w-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col md:flex-row gap-6 min-h-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 border border-border rounded-3xl overflow-hidden relative shadow-2xl", children: [
          /* @__PURE__ */ jsx(MapMock, { className: "w-full h-full" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-border p-2 rounded-2xl flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("button", { className: "h-10 w-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-secondary/80", children: "+" }),
            /* @__PURE__ */ jsx("button", { className: "h-10 w-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-secondary/80", children: "-" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-80 flex flex-col gap-4 overflow-y-auto pr-2 no-scrollbar", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-sm uppercase tracking-wider text-muted-foreground", children: "Map Layers" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 mb-4", children: TOOLS.map((t) => /* @__PURE__ */ jsxs(Link, { to: t.to, className: "flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-sm font-medium hover:bg-secondary/50 transition-colors", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsx(t.icon, { className: "h-5 w-5" }) }),
            t.label
          ] }, t.label)) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-sm uppercase tracking-wider text-muted-foreground", children: "Live Route" }),
          /* @__PURE__ */ jsxs(GlassCard, { to: "/alternate-route", className: "flex items-center gap-3 p-5", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-success/15 text-success", children: /* @__PURE__ */ jsx(Navigation, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Faster route available" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Save 4 min via Ring Road. Traffic is clear." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(GlassCard, { className: "flex items-center gap-3 p-5 border-warning/30 bg-warning/5", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-warning/15 text-warning", children: /* @__PURE__ */ jsx(Flame, { className: "h-6 w-6 animate-pulse" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-warning", children: "High Risk Zone" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-warning/80 mt-1", children: "Multiple accidents reported ahead. Drive carefully." })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  MapScreen as component
};
