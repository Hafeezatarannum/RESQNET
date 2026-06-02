import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import { CornerUpRight } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function RouteNavigation() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Turn-by-turn", subtitle: "0.4 km • 2 min" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pt-1", children: /* @__PURE__ */ jsxs(GlassCard, { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-full bg-brand-blue/15 text-brand-blue", children: /* @__PURE__ */ jsx(CornerUpRight, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Turn right onto MG Road" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "in 200 m" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto flex-1 px-5 py-3", children: /* @__PURE__ */ jsx(MapMock, { className: "h-full min-h-[340px]" }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/reached", children: "End Navigation" }) })
  ] });
}
export {
  RouteNavigation as component
};
