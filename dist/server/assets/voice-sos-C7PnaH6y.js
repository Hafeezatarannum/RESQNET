import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, G as GlowButton } from "./kit-QSQV2ku9.js";
import { Mic } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function VoiceSos() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Voice SOS", subtitle: "Hands-free emergency trigger" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative grid h-56 w-56 place-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" }),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-8 rounded-full bg-primary/20 animate-pulse-ring [animation-delay:0.8s]" }),
        /* @__PURE__ */ jsx("span", { className: "relative grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-primary to-[#b71721] glow-red animate-sos", children: /* @__PURE__ */ jsx(Mic, { className: "h-14 w-14 text-white" }) })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-10 text-2xl font-bold", children: "Say “Help ResQNet”" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We’re listening for your emergency keyword…" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-6 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/voice-detected", children: "Send SOS" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "ghost", children: "Cancel" })
    ] })
  ] });
}
export {
  VoiceSos as component
};
