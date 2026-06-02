import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, P as Pill, G as GlowButton } from "./kit-QSQV2ku9.js";
import { V as VolunteerCard } from "./widgets-oL2yBzJ2.js";
import { V as VOLUNTEERS } from "./resqnet-data-CsBUxpcz.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function VolunteersFound() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Volunteers found", subtitle: `${VOLUNTEERS.length} responders nearby`, back: false }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 flex items-center gap-2", children: /* @__PURE__ */ jsx(Pill, { tone: "green", children: "Assigning best volunteer…" }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: VOLUNTEERS.map((v, i) => /* @__PURE__ */ jsx(VolunteerCard, { v }, i)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/volunteer-assigned", children: "Assign Arjun Mehta (closest)" }) })
  ] });
}
export {
  VolunteersFound as component
};
