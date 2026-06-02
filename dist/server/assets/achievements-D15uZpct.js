import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, b as Stat } from "./kit-QSQV2ku9.js";
import { B as BADGES } from "./resqnet-data-CsBUxpcz.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Achievements() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Achievements" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsxs(GlassCard, { className: "grid grid-cols-3 divide-x divide-border", children: [
        /* @__PURE__ */ jsx(Stat, { value: "243", label: "Total helps" }),
        /* @__PURE__ */ jsx(Stat, { value: "12", label: "Lives saved" }),
        /* @__PURE__ */ jsx(Stat, { value: "3", label: "Badges" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-3 gap-3", children: BADGES.map((b, i) => /* @__PURE__ */ jsxs(GlassCard, { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl", children: b.emoji }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-[11px] font-semibold", children: b.name })
      ] }, i)) })
    ] })
  ] });
}
export {
  Achievements as component
};
