import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, G as GlowButton } from "./kit-QSQV2ku9.js";
import { MapPin } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Reached() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-24 w-24 place-items-center rounded-full bg-success/15 text-success animate-heartbeat", children: /* @__PURE__ */ jsx(MapPin, { className: "h-12 w-12" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-6 text-2xl font-bold", children: "You’ve reached the victim" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-xs text-sm text-muted-foreground", children: "Confirm your arrival so the family and AI assistant can guide you through the next steps." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-6 pb-10", children: /* @__PURE__ */ jsx(GlowButton, { to: "/help-provided", children: "Mark Arrived" }) })
  ] });
}
export {
  Reached as component
};
