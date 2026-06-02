import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, L as Logo, W as Wordmark } from "./kit-QSQV2ku9.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function About() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "About ResQNet" }),
    /* @__PURE__ */ jsxs(Screen, { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Logo, { size: 88 }) }),
      /* @__PURE__ */ jsx(Wordmark, { className: "mt-4 text-2xl" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Version 1.0.0" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xs text-sm text-muted-foreground", children: "ResQNet is an AI-powered real-time emergency response network that connects victims with nearby trained volunteers, provides AI first-aid guidance and escalates to ambulances when needed. Every second saves lives." })
    ] })
  ] });
}
export {
  About as component
};
