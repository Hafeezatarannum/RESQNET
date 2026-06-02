import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, L as Logo, W as Wordmark, G as GlowButton } from "./kit-QSQV2ku9.js";
import { Share2 } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function ShareApp() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Share app" }),
    /* @__PURE__ */ jsxs(Screen, { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(Logo, { size: 88 }) }),
      /* @__PURE__ */ jsx(Wordmark, { className: "mt-4 text-2xl" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-6 text-xl font-bold", children: "Invite friends & save lives" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-xs text-sm text-muted-foreground", children: "The more people on ResQNet, the faster help reaches everyone in your community." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { icon: Share2, children: "Share ResQNet" }) })
  ] });
}
export {
  ShareApp as component
};
