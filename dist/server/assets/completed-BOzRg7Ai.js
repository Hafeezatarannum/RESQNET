import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, G as GlowButton } from "./kit-QSQV2ku9.js";
import { HeartHandshake } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Completed() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative grid h-40 w-40 place-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-success/20 animate-pulse-ring" }),
        /* @__PURE__ */ jsx("span", { className: "relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-success to-success/50 text-[#04101d] animate-heartbeat", children: /* @__PURE__ */ jsx(HeartHandshake, { className: "h-14 w-14" }) })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-10 text-3xl font-bold", children: "Help completed" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground", children: "You're safe now. Thank you to the ResQNet community for the rapid response. Stay strong! 💙" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-6 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/feedback", children: "Rate your experience" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "dark", children: "Back to Home" })
    ] })
  ] });
}
export {
  Completed as component
};
