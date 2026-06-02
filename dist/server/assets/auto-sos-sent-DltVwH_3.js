import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, G as GlowButton } from "./kit-QSQV2ku9.js";
import { ShieldCheck } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function AutoSosSent() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative grid h-40 w-40 place-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" }),
        /* @__PURE__ */ jsx("span", { className: "relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-primary to-[#b71721] glow-red animate-sos", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-14 w-14 text-white" }) })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-10 text-3xl font-bold", children: "SOS sent automatically" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground", children: "Help is on the way. Nearby volunteers and your emergency contacts have been alerted with your live location." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-6 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/searching", children: "Track Response" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/expanding-radius", variant: "outline", children: "View Search Radius" })
    ] })
  ] });
}
export {
  AutoSosSent as component
};
