import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, c as cn } from "./kit-QSQV2ku9.js";
import { Bot, Send } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
const MSGS = [{
  me: true,
  t: "Someone collapsed and isn't responding. What do I do?"
}, {
  me: false,
  t: "Stay calm. Check if they're breathing. If not, start CPR — 30 chest compressions then 2 breaths. I'll guide you. Have you called for help?"
}, {
  me: true,
  t: "Yes, SOS is sent. They're not breathing."
}, {
  me: false,
  t: "Begin compressions now: push hard and fast in the center of the chest, 100–120/min. Tap 'CPR Guide' for live steps."
}];
function Chatbot() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "AI Emergency Assistant", subtitle: "Online • replies instantly", right: /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-brand-blue/15 text-brand-blue", children: /* @__PURE__ */ jsx(Bot, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto flex-1 space-y-3 overflow-y-auto no-scrollbar px-5 py-4", children: MSGS.map((m, i) => /* @__PURE__ */ jsx("div", { className: cn("flex", m.me ? "justify-end" : "justify-start"), children: /* @__PURE__ */ jsx("p", { className: cn("max-w-[80%] rounded-[18px] px-4 py-3 text-sm", m.me ? "bg-primary text-white rounded-br-md" : "glass rounded-bl-md"), children: m.t }) }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex items-center gap-2 border-t border-border bg-secondary/60 p-3", children: [
      /* @__PURE__ */ jsx("input", { placeholder: "Describe the emergency…", className: "h-12 flex-1 rounded-full border border-border bg-white/[0.03] px-4 text-sm outline-none placeholder:text-muted-foreground/60" }),
      /* @__PURE__ */ jsx("button", { className: "grid h-12 w-12 place-items-center rounded-full bg-primary text-white glow-red", children: /* @__PURE__ */ jsx(Send, { className: "h-5 w-5" }) })
    ] })
  ] });
}
export {
  Chatbot as component
};
