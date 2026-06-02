import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, P as Pill } from "./kit-QSQV2ku9.js";
import { b as FAMILY } from "./resqnet-data-CsBUxpcz.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function FamilyMode() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Family mode", subtitle: "Shared live location access" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: FAMILY.map((f, i) => /* @__PURE__ */ jsx(GlassCard, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 place-items-center rounded-full bg-brand-blue/15 text-sm font-bold", children: f.name[0] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: f.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: f.relation })
      ] }),
      /* @__PURE__ */ jsx(Pill, { tone: "green", children: "Sharing" })
    ] }) }, i)) }) })
  ] });
}
export {
  FamilyMode as component
};
