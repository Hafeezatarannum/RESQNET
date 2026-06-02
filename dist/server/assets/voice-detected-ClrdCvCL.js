import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { D as DashboardLayout, A as Aura, G as GlowButton } from "./kit-QSQV2ku9.js";
import { W as Waveform } from "./widgets-oL2yBzJ2.js";
import { CheckCircle2 } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
function VoiceDetected() {
  const [count, setCount] = useState(5);
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
      /* @__PURE__ */ jsx("span", { className: "grid h-20 w-20 place-items-center rounded-full bg-success/15 text-success", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-10 w-10" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-6 text-2xl font-bold", children: "Voice command detected" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
        "Triggering SOS in ",
        count,
        "s…"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 w-56", children: /* @__PURE__ */ jsx(Waveform, {}) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto space-y-3 px-6 pb-10", children: [
      /* @__PURE__ */ jsx(GlowButton, { to: "/searching", children: "Send SOS Now" }),
      /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "dark", children: "Cancel" })
    ] })
  ] });
}
export {
  VoiceDetected as component
};
