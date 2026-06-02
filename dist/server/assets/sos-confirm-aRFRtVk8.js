import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { D as DashboardLayout, A as Aura, G as GlowButton } from "./kit-QSQV2ku9.js";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
function SosConfirm() {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    if (count <= 0) {
      navigate({
        to: "/searching"
      });
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1e3);
    return () => clearTimeout(t);
  }, [count, navigate]);
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-muted-foreground", children: "Sending SOS in" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mt-6 grid h-56 w-56 place-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" }),
        /* @__PURE__ */ jsx("span", { className: "relative grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-[#ff4d4f] to-[#b71721] glow-red animate-sos", children: /* @__PURE__ */ jsx("span", { className: "text-6xl font-extrabold", children: count }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-xs text-sm text-muted-foreground", children: "Your location and emergency details will be sent to nearby volunteers and emergency contacts." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-6 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/searching", children: "Send SOS Now" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "dark", children: "Cancel SOS" })
    ] })
  ] });
}
export {
  SosConfirm as component
};
