import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, c as cn, G as GlowButton } from "./kit-QSQV2ku9.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
const QUESTIONS = ["Is the person conscious?", "Is the person breathing?", "Is there bleeding?"];
function Severity() {
  const [answers, setAnswers] = useState({});
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Quick severity check", subtitle: "Helps responders prepare on the way" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: QUESTIONS.map((q, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-[20px] border border-border bg-white/[0.03] p-4", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 font-medium", children: q }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: ["yes", "no"].map((opt) => /* @__PURE__ */ jsx("button", { onClick: () => setAnswers((a) => ({
        ...a,
        [i]: opt
      })), className: cn("flex-1 rounded-[14px] border py-3 text-sm font-semibold capitalize transition", answers[i] === opt ? opt === "yes" ? "border-success bg-success/15 text-success" : "border-primary bg-primary/15 text-primary" : "border-border bg-white/[0.02]"), children: opt }, opt)) })
    ] }, i)) }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/sos-confirm", children: "Continue" }) })
  ] });
}
export {
  Severity as component
};
