import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { WifiOff } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function OfflineSms() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Offline SMS mode" }),
    /* @__PURE__ */ jsxs(Screen, { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "mt-6 grid h-24 w-24 place-items-center rounded-full bg-warning/15 text-warning", children: /* @__PURE__ */ jsx(WifiOff, { className: "h-12 w-12" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-6 text-xl font-bold", children: "No internet connection" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-xs text-sm text-muted-foreground", children: "ResQNet can still send your SOS and live location to emergency contacts via SMS." }),
      /* @__PURE__ */ jsx(GlassCard, { className: "mt-6 w-full text-left text-xs text-muted-foreground", children: "SMS will include your coordinates, emergency type and medical profile summary." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/contacts-alerted", children: "Send SMS Alert" }) })
  ] });
}
export {
  OfflineSms as component
};
