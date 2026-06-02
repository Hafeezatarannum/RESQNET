import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, P as Pill, G as GlowButton } from "./kit-QSQV2ku9.js";
import { b as FAMILY } from "./resqnet-data-CsBUxpcz.js";
import { CheckCircle2 } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function ContactsAlerted() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Emergency contacts alerted", subtitle: "They received your live location" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: FAMILY.map((f, i) => /* @__PURE__ */ jsx(GlassCard, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 place-items-center rounded-full bg-white/5 text-sm font-bold", children: f.name[0] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: f.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: f.relation })
      ] }),
      /* @__PURE__ */ jsxs(Pill, { tone: "green", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "mr-1 h-3 w-3" }),
        " Notified"
      ] })
    ] }) }, i)) }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/live-tracking", children: "View Live Tracking" }) })
  ] });
}
export {
  ContactsAlerted as component
};
