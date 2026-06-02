import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, P as Pill } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import { b as FAMILY } from "./resqnet-data-CsBUxpcz.js";
import { Phone, MessageSquare } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function FamilyTracking() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Family live tracking", subtitle: "Everyone stays connected" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsx(MapMock, { className: "h-36" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: FAMILY.map((f, i) => /* @__PURE__ */ jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 place-items-center rounded-full bg-brand-blue/15 text-sm font-bold", children: f.name[0] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: f.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
              f.relation,
              " • ",
              f.status
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-success/15 text-success", children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-brand-blue/15 text-brand-blue", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxs(Pill, { tone: "green", children: [
          f.distance,
          " away"
        ] }) })
      ] }, i)) })
    ] })
  ] });
}
export {
  FamilyTracking as component
};
