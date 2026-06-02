import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, a as GlassCard, G as GlowButton } from "./kit-QSQV2ku9.js";
import { c as BLEED_STEPS } from "./resqnet-data-CsBUxpcz.js";
import { Volume2 } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
function Bleeding() {
  const [i, setI] = useState(0);
  const s = BLEED_STEPS[i];
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Bleeding control", subtitle: `Step ${i + 1} of ${BLEED_STEPS.length}`, right: /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsx(Volume2, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsxs(GlassCard, { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-2xl font-bold text-primary", children: i + 1 }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-bold", children: s.t }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.d })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: i < BLEED_STEPS.length - 1 ? /* @__PURE__ */ jsx(GlowButton, { onClick: () => setI(i + 1), children: "Next Step" }) : /* @__PURE__ */ jsx(GlowButton, { to: "/ai-guidance-active", children: "Finish Guide" }) })
  ] });
}
export {
  Bleeding as component
};
