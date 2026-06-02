import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, P as Pill, G as GlowButton } from "./kit-QSQV2ku9.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function AcceptRequest() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Request details" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsxs(GlassCard, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold", children: "Heart Attack" }),
        /* @__PURE__ */ jsx(Pill, { tone: "red", children: "Critical" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Location: MG Road, near Metro Station" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Distance: 0.4 km • ETA 2 min" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Victim: conscious, not breathing" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto grid grid-cols-2 gap-3 px-5 pb-8", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/navigate-user", variant: "primary", children: "Accept" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/volunteer-dashboard", variant: "dark", children: "Decline" })
    ] })
  ] });
}
export {
  AcceptRequest as component
};
