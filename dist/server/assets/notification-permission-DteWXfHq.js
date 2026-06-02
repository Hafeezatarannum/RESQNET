import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, S as Screen, G as GlowButton } from "./kit-QSQV2ku9.js";
import { Bell } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function NotificationPermission() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs(Screen, { className: "flex flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative grid h-44 w-44 place-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" }),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-6 rounded-full bg-primary/20 animate-pulse-ring [animation-delay:0.8s]" }),
        /* @__PURE__ */ jsx("span", { className: "relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-primary to-[#b71721] glow-red", children: /* @__PURE__ */ jsx(Bell, { className: "h-12 w-12 text-white animate-heartbeat" }) })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-10 text-2xl font-bold", children: "Stay alert, save lives" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground", children: "Get instant alerts when someone nearby needs help, when a volunteer is assigned, and emergency status updates." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-5 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/home", children: "Enable Notifications" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "ghost", children: "Skip for now" })
    ] })
  ] });
}
export {
  NotificationPermission as component
};
