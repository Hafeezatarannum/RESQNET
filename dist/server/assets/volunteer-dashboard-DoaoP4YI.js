import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { D as DashboardLayout, A as Aura, T as TopBar, c as cn, S as Screen, a as GlassCard, b as Stat, P as Pill } from "./kit-QSQV2ku9.js";
import { A as ALERTS_FEED } from "./resqnet-data-CsBUxpcz.js";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
function VolunteerDashboard() {
  const [online, setOnline] = useState(true);
  return /* @__PURE__ */ jsxs(DashboardLayout, { withNav: true, children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Volunteer dashboard", subtitle: "Arjun Mehta", back: false, right: /* @__PURE__ */ jsx("button", { onClick: () => setOnline(!online), className: cn("rounded-full px-3 py-1.5 text-xs font-semibold", online ? "bg-success/15 text-success" : "bg-white/10 text-muted-foreground"), children: online ? "Online" : "Offline" }) }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsxs(GlassCard, { className: "grid grid-cols-3 divide-x divide-border", children: [
        /* @__PURE__ */ jsx(Stat, { value: "243", label: "Total helps" }),
        /* @__PURE__ */ jsx(Stat, { value: "4.9", label: "Rating" }),
        /* @__PURE__ */ jsx(Stat, { value: "12", label: "Lives saved" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mb-3 mt-6 text-sm font-semibold text-muted-foreground", children: "Recent alerts near you" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: ALERTS_FEED.map((a, i) => /* @__PURE__ */ jsx(Link, { to: "/incoming-alert", className: "block", children: /* @__PURE__ */ jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: a.type }),
          /* @__PURE__ */ jsx(Pill, { tone: a.tone, children: a.time })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: a.area })
      ] }) }, i)) })
    ] })
  ] });
}
export {
  VolunteerDashboard as component
};
