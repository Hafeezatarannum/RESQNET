import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { D as DashboardLayout, A as Aura, c as cn, G as GlowButton } from "./kit-QSQV2ku9.js";
import { Zap, Users, Bot } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
const SLIDES = [{
  icon: Zap,
  title: "One-Tap Emergency SOS",
  desc: "Instantly broadcast your location and emergency to nearby responders with a single tap — no calls, no delays."
}, {
  icon: Users,
  title: "Nearby Volunteers",
  desc: "Trained volunteers near you are alerted in seconds and reach faster than traditional emergency services."
}, {
  icon: Bot,
  title: "AI First-Aid Guidance",
  desc: "Get calm, step-by-step emergency instructions while help is on the way — CPR, bleeding control and more."
}];
function Onboarding() {
  const [i, setI] = useState(0);
  const navigate = useNavigate();
  const S = SLIDES[i];
  const next = () => i < 2 ? setI(i + 1) : navigate({
    to: "/language"
  });
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto flex justify-end px-6 pt-8", children: /* @__PURE__ */ jsx("button", { onClick: () => navigate({
      to: "/language"
    }), className: "text-sm text-muted-foreground", children: "Skip" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto flex flex-1 flex-col items-center justify-center px-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-32 w-32 place-items-center rounded-[36px] bg-gradient-to-br from-primary/30 to-brand-blue/10 glow-red", children: /* @__PURE__ */ jsx(S.icon, { className: "h-14 w-14 text-primary" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-10 text-3xl font-bold text-balance", children: S.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground text-balance", children: S.desc })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md mx-auto px-6 pb-10", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 flex justify-center gap-2", children: SLIDES.map((_, idx) => /* @__PURE__ */ jsx("span", { className: cn("h-1.5 rounded-full transition-all", idx === i ? "w-6 bg-primary" : "w-1.5 bg-white/20") }, idx)) }),
      /* @__PURE__ */ jsx(GlowButton, { onClick: next, children: i < 2 ? "Next" : "Get Started" })
    ] })
  ] });
}
export {
  Onboarding as component
};
