import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard } from "./kit-QSQV2ku9.js";
import { S as SAFETY_TIPS } from "./resqnet-data-CsBUxpcz.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function SafetyTips() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Safety tips" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: SAFETY_TIPS.map((t, i) => /* @__PURE__ */ jsxs(GlassCard, { children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold", children: t.t }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: t.d })
    ] }, i)) }) })
  ] });
}
export {
  SafetyTips as component
};
