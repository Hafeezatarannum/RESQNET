import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, S as Screen, G as GlowButton } from "./kit-QSQV2ku9.js";
import { MapPin } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function LocationPermission() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs(Screen, { className: "flex flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative grid h-44 w-44 place-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-brand-blue/20 animate-pulse-ring" }),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-6 rounded-full bg-brand-blue/20 animate-pulse-ring [animation-delay:0.8s]" }),
        /* @__PURE__ */ jsx("span", { className: "relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blue/40", children: /* @__PURE__ */ jsx(MapPin, { className: "h-12 w-12 text-white" }) })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-10 text-2xl font-bold", children: "Enable location access" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground", children: "ResQNet needs your precise location to connect you with the nearest volunteers and share live tracking during an emergency." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-5 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/notification-permission", children: "Allow Location" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/notification-permission", variant: "ghost", children: "Maybe later" })
    ] })
  ] });
}
export {
  LocationPermission as component
};
