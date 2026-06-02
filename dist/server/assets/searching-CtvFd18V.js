import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { D as DashboardLayout, A as Aura, G as GlowButton } from "./kit-QSQV2ku9.js";
import { R as Radar } from "./widgets-oL2yBzJ2.js";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
function Searching() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({
      to: "/volunteers-found"
    }), 4e3);
    return () => clearTimeout(t);
  }, [navigate]);
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx(Radar, { size: 280 }),
      /* @__PURE__ */ jsx("h1", { className: "mt-10 text-2xl font-bold", children: "Searching nearby volunteers…" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Broadcasting your SOS within 2 km radius" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-2 rounded-full bg-success/15 px-4 py-2 text-sm font-semibold text-success", children: [
        /* @__PURE__ */ jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-success" }),
        " 12 responders notified"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-6 pb-10", children: /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "dark", children: "Cancel SOS" }) })
  ] });
}
export {
  Searching as component
};
