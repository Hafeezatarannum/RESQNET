import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, a as GlassCard, P as Pill, G as GlowButton } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function AlternateRoute() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Faster route found", subtitle: "Save 4 minutes" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto flex-1 px-5 py-2", children: /* @__PURE__ */ jsx(MapMock, { className: "h-full min-h-[320px]" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: [
      /* @__PURE__ */ jsxs(GlassCard, { className: "mb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Via Ring Road" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "5.1 km • 9 min" })
        ] }),
        /* @__PURE__ */ jsx(Pill, { tone: "green", children: "-4 min" })
      ] }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/route-navigation", children: "Take This Route" })
    ] })
  ] });
}
export {
  AlternateRoute as component
};
