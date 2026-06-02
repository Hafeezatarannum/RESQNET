import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { D as DashboardLayout, A as Aura, G as GlowButton } from "./kit-QSQV2ku9.js";
import { R as Radar } from "./widgets-oL2yBzJ2.js";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
const STEPS = ["2 km", "5 km", "10 km"];
function ExpandingRadius() {
  const [i, setI] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (i >= STEPS.length - 1) {
      const t2 = setTimeout(() => navigate({
        to: "/no-volunteer"
      }), 1500);
      return () => clearTimeout(t2);
    }
    const t = setTimeout(() => setI((v) => v + 1), 1500);
    return () => clearTimeout(t);
  }, [i, navigate]);
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx(Radar, { size: 260 }),
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-2xl font-bold", children: "Expanding search radius" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Looking further to find a responder…" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center gap-3", children: STEPS.map((s, idx) => /* @__PURE__ */ jsx("span", { className: idx <= i ? "rounded-full bg-primary/15 px-4 py-2 text-sm font-bold text-primary" : "rounded-full bg-white/5 px-4 py-2 text-sm text-muted-foreground", children: s }, s)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-6 pb-10", children: /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "dark", children: "Cancel SOS" }) })
  ] });
}
export {
  ExpandingRadius as component
};
