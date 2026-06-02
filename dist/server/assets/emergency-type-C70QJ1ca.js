import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen } from "./kit-QSQV2ku9.js";
import { E as EMERGENCY_TYPES } from "./resqnet-data-CsBUxpcz.js";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function EmergencyType() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "What's the emergency?", subtitle: "Select to get the right help fast" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: EMERGENCY_TYPES.map((t) => /* @__PURE__ */ jsxs(Link, { to: "/severity", className: "flex items-center gap-4 rounded-[20px] border border-border bg-white/[0.03] p-4 transition active:scale-[0.99] hover:border-primary/40", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-2xl", children: t.emoji }),
      /* @__PURE__ */ jsx("span", { className: "flex-1 text-base font-semibold", children: t.label }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })
    ] }, t.key)) }) })
  ] });
}
export {
  EmergencyType as component
};
