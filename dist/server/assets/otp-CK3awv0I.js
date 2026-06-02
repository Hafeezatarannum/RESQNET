import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, G as GlowButton } from "./kit-QSQV2ku9.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
function Otp() {
  const [vals, setVals] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const refs = useRef([]);
  useEffect(() => {
    if (timer <= 0) return;
    const t = setTimeout(() => setTimer((v) => v - 1), 1e3);
    return () => clearTimeout(t);
  }, [timer]);
  const set = (i, v) => {
    if (!/^\d?$/.test(v)) return;
    const n = [...vals];
    n[i] = v;
    setVals(n);
    if (v && i < 3) refs.current[i + 1]?.focus();
  };
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Verify your number", subtitle: "Enter the 4-digit code sent to +91 98765 43210" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center gap-4", children: vals.map((v, i) => /* @__PURE__ */ jsx("input", { ref: (el) => {
        refs.current[i] = el;
      }, value: v, onChange: (e) => set(i, e.target.value), inputMode: "numeric", maxLength: 1, className: "h-16 w-14 rounded-[16px] border border-border bg-white/[0.03] text-center text-2xl font-bold text-foreground outline-none focus:border-primary" }, i)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: timer > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "Resend code in",
        " ",
        /* @__PURE__ */ jsxs("span", { className: "font-semibold text-foreground", children: [
          "0:",
          timer.toString().padStart(2, "0")
        ] })
      ] }) : /* @__PURE__ */ jsx("button", { onClick: () => setTimer(30), className: "font-semibold text-primary", children: "Resend code" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/role", children: "Verify" }) })
  ] });
}
export {
  Otp as component
};
