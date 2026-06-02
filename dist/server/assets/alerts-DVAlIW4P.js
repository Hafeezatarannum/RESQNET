import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, G as GlowButton } from "./kit-QSQV2ku9.js";
import { A as ALERTS_FEED } from "./resqnet-data-CsBUxpcz.js";
import { Bell, Search, Filter } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Alerts() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { withNav: true, children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-[1400px] mx-auto p-6 md:p-8 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "h-10 w-10 bg-warning/20 text-warning rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Bell, { className: "h-5 w-5" }) }),
            "Emergency Alerts"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-2", children: "Live monitoring of incidents in your area." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex-1 md:w-64", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search alerts...", className: "w-full pl-9 pr-4 py-2 bg-card border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50" })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "p-2 border border-border bg-card rounded-xl hover:bg-secondary transition-colors", children: /* @__PURE__ */ jsx(Filter, { className: "h-5 w-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: ALERTS_FEED.map((a, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-card border border-border rounded-3xl p-6 hover:border-primary/30 transition-colors shadow-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: `h-12 w-12 rounded-xl flex items-center justify-center ${a.tone === "red" ? "bg-primary/20 text-primary" : "bg-warning/20 text-warning"}`, children: /* @__PURE__ */ jsx(Bell, { className: `h-6 w-6 ${a.tone === "red" ? "animate-pulse" : ""}` }) }),
          /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${a.tone === "red" ? "bg-primary text-white" : "bg-warning text-white"}`, children: a.time })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-1", children: a.type }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6 flex-1", children: a.area }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 mt-auto", children: [
          /* @__PURE__ */ jsx(GlowButton, { to: "/community-alert", variant: a.tone === "red" ? "primary" : "outline", className: "h-12 w-full text-sm font-semibold", children: "I can help" }),
          /* @__PURE__ */ jsx(GlowButton, { variant: "dark", className: "h-12 w-full text-sm font-semibold bg-secondary/50", children: "Dismiss" })
        ] })
      ] }, i)) })
    ] })
  ] });
}
export {
  Alerts as component
};
