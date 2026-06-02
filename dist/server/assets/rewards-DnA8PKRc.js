import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard } from "./kit-QSQV2ku9.js";
import { B as BADGES } from "./resqnet-data-CsBUxpcz.js";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Rewards() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Rewards & badges" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: BADGES.map((b, i) => /* @__PURE__ */ jsxs(GlassCard, { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-14 w-14 place-items-center rounded-2xl bg-warning/15 text-3xl", children: b.emoji }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: b.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: b.desc })
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsx(Link, { to: "/achievements", className: "mt-4 block rounded-[16px] border border-border bg-white/[0.03] p-4 text-center text-sm font-medium", children: "View achievements" })
    ] })
  ] });
}
export {
  Rewards as component
};
