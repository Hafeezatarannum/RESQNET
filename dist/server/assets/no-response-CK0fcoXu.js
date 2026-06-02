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
function NoResponse() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({
      to: "/auto-sos-sent"
    }), 3500);
    return () => clearTimeout(t);
  }, [navigate]);
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx(Radar, { size: 240 }),
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-2xl font-bold", children: "No response detected" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-xs text-sm text-muted-foreground", children: "You didn’t respond to the safety check. Auto-triggering SOS to keep you safe…" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-6 pb-10", children: /* @__PURE__ */ jsx(GlowButton, { to: "/home", variant: "dark", children: "I’m Okay, Cancel" }) })
  ] });
}
export {
  NoResponse as component
};
