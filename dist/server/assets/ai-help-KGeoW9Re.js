import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { D as DashboardLayout, A as Aura } from "./kit-QSQV2ku9.js";
import { d as FIRST_AID } from "./resqnet-data-CsBUxpcz.js";
import { Bot, Mic, MessageSquare, Activity, ShieldAlert, ChevronRight } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function AiHelp() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { withNav: true, children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-[1400px] mx-auto p-6 md:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-16 w-16 place-items-center rounded-2xl bg-brand-blue/20 text-brand-blue", children: /* @__PURE__ */ jsx(Bot, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "AI Emergency Assistant" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1", children: "Voice and text-based crisis management and first-aid guidance." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 bg-success/20 text-success rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-success animate-pulse" }),
          " ",
          "AI Systems Online"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/voice-assistant", className: "group relative overflow-hidden bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-colors shadow-lg flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "h-20 w-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Mic, { className: "h-10 w-10" }) }),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-3", children: "Voice Assistant" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm mx-auto", children: "Hands-free guidance. Just speak and the AI will analyze the emergency and guide you through life-saving steps." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/chatbot", className: "group relative overflow-hidden bg-card border border-border rounded-3xl p-8 hover:border-brand-blue/50 transition-colors shadow-lg flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "h-20 w-20 mx-auto bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-10 w-10" }) }),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-3", children: "Text Chatbot" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm mx-auto", children: "Discreet, text-based guidance for situations where speaking is unsafe or impossible." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
          /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "First-aid Guides Library" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: FIRST_AID.map((f) => /* @__PURE__ */ jsxs(Link, { to: f.to, className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:bg-secondary/50 transition-colors group", children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors", children: /* @__PURE__ */ jsx(ShieldAlert, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold truncate", children: f.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground truncate", children: f.desc })
          ] }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })
        ] }, f.key)) })
      ] })
    ] })
  ] });
}
export {
  AiHelp as component
};
