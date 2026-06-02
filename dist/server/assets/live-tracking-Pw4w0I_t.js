import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import { Navigation, Share2 } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function LiveTracking() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Live GPS tracking", subtitle: "Arjun → You" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto flex-1 px-5 pb-4", children: /* @__PURE__ */ jsx(MapMock, { className: "h-full min-h-[420px]" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: [
      /* @__PURE__ */ jsxs(GlassCard, { className: "mb-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-brand-blue/15 text-brand-blue", children: /* @__PURE__ */ jsx(Navigation, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Arjun Mehta • 2 min away" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Moving along MG Road" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(GlowButton, { icon: Share2, children: "Share Live Location" })
    ] })
  ] });
}
export {
  LiveTracking as component
};
