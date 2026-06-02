import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { T as Timeline } from "./widgets-oL2yBzJ2.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
const STEPS = [{
  label: "Accepted request",
  state: "done"
}, {
  label: "Reached victim",
  state: "done"
}, {
  label: "First aid provided",
  state: "active"
}, {
  label: "Help completed",
  state: "todo"
}];
function HelpProvided() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Help in progress", subtitle: "Heart Attack • MG Road" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsx(GlassCard, { className: "mb-5", children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Follow AI guidance and stabilise the victim until the ambulance arrives." }) }),
      /* @__PURE__ */ jsx(Timeline, { steps: STEPS })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/volunteer-history", variant: "success", children: "Complete" }) })
  ] });
}
export {
  HelpProvided as component
};
