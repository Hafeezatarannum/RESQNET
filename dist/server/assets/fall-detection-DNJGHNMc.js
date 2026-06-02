import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { D as DashboardLayout, A as Aura, G as GlowButton } from "./kit-QSQV2ku9.js";
import { AlertTriangle, PersonStanding } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
function FallDetection() {
  const [count, setCount] = useState(15);
  const navigate = useNavigate();
  useEffect(() => {
    if (count <= 0) {
      navigate({
        to: "/auto-sos-sent"
      });
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1e3);
    return () => clearTimeout(t);
  }, [count, navigate]);
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-20 w-20 place-items-center rounded-full bg-warning/15 text-warning animate-heartbeat", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-10 w-10" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-6 text-2xl font-bold", children: "Fall / crash detected" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Sending SOS automatically in" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid h-36 w-36 place-items-center rounded-full border-4 border-primary glow-red", children: /* @__PURE__ */ jsx("span", { className: "text-5xl font-extrabold", children: count }) }),
      /* @__PURE__ */ jsx(PersonStanding, { className: "mt-6 h-8 w-8 text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-6 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "success", children: "I’m Okay" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/auto-sos-sent", children: "Send SOS Now" })
    ] })
  ] });
}
export {
  FallDetection as component
};
