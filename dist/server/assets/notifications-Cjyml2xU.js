import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, P as Pill } from "./kit-QSQV2ku9.js";
import { N as NOTIFICATIONS } from "./resqnet-data-CsBUxpcz.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Notifications() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Notifications" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: NOTIFICATIONS.map((n, i) => /* @__PURE__ */ jsxs(GlassCard, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: n.title }),
        /* @__PURE__ */ jsx(Pill, { tone: n.tone, children: n.time })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: n.body })
    ] }, i)) }) })
  ] });
}
export {
  Notifications as component
};
