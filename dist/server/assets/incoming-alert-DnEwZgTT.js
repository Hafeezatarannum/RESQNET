import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, P as Pill, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function IncomingAlert() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex-1 overflow-y-auto no-scrollbar px-5 pb-4 pt-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 text-center", children: /* @__PURE__ */ jsx(Pill, { tone: "red", children: "🚨 Incoming emergency" }) }),
      /* @__PURE__ */ jsx(MapMock, { className: "h-40" }),
      /* @__PURE__ */ jsxs(GlassCard, { className: "mt-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl font-bold", children: "Heart Attack" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "MG Road, near Metro Station" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex gap-2", children: [
          /* @__PURE__ */ jsx(Pill, { tone: "blue", children: "0.4 km away" }),
          /* @__PURE__ */ jsx(Pill, { tone: "orange", children: "ETA 2 min" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto grid grid-cols-2 gap-3 px-5 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/navigate-user", variant: "primary", children: "Accept" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/volunteer-dashboard", variant: "dark", children: "Decline" })
    ] })
  ] });
}
export {
  IncomingAlert as component
};
