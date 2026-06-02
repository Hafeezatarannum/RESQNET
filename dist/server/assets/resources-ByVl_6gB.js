import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, P as Pill$1 } from "./kit-QSQV2ku9.js";
import { R as RESOURCES } from "./resqnet-data-CsBUxpcz.js";
import { Flame, Pill, Hospital, Shield } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
const ICONS = {
  Police: Shield,
  Hospital,
  Pharmacy: Pill,
  "Fire Station": Flame
};
function Resources() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Nearby resources", subtitle: "Help points around you" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: RESOURCES.map((r, i) => {
      const Icon = ICONS[r.type] ?? Shield;
      return /* @__PURE__ */ jsx(GlassCard, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: r.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: r.type })
        ] }),
        /* @__PURE__ */ jsx(Pill$1, { tone: "blue", children: r.distance })
      ] }) }, i);
    }) }) })
  ] });
}
export {
  Resources as component
};
