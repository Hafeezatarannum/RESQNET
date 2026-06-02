import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, G as GlowButton } from "./kit-QSQV2ku9.js";
import { W as Waveform } from "./widgets-oL2yBzJ2.js";
import { Mic } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function VoiceAssistant() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Voice AI assistant", subtitle: "Listening…" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative grid h-48 w-48 place-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-brand-blue/20 animate-pulse-ring" }),
        /* @__PURE__ */ jsx("span", { className: "relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blue/40", children: /* @__PURE__ */ jsx(Mic, { className: "h-12 w-12 text-white" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 w-64", children: /* @__PURE__ */ jsx(Waveform, {}) }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-muted-foreground", children: "“How do I stop heavy bleeding?”" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-6 pb-10", children: /* @__PURE__ */ jsx(GlowButton, { to: "/chatbot", variant: "outline", children: "Switch to chat" }) })
  ] });
}
export {
  VoiceAssistant as component
};
