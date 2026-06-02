import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { F as FAQ } from "./resqnet-data-CsBUxpcz.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function HelpSupport() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Help & support" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-3 text-sm font-semibold text-muted-foreground", children: "FAQ" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: FAQ.map((f, i) => /* @__PURE__ */ jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: f.q }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: f.a })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsx(GlowButton, { variant: "primary", className: "h-12", children: "Contact support" }),
        /* @__PURE__ */ jsx(GlowButton, { variant: "outline", className: "h-12", children: "Report issue" })
      ] })
    ] })
  ] });
}
export {
  HelpSupport as component
};
