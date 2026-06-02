import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { D as DashboardLayout } from "./kit-QSQV2ku9.js";
import { ShieldAlert, Navigation, Users, ShieldCheck, CheckCircle2, Loader2, X } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
function SOSActivation() {
  useNavigate();
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activated, setActivated] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const holdIntervalRef = useRef(null);
  const steps = [{
    id: 0,
    label: "Sending Alert",
    icon: ShieldAlert
  }, {
    id: 1,
    label: "Sharing Live Location",
    icon: Navigation
  }, {
    id: 2,
    label: "Notifying Contacts",
    icon: Users
  }, {
    id: 3,
    label: "Nearby Responders Found",
    icon: ShieldCheck
  }];
  const handlePointerDown = () => {
    if (activated) return;
    setHolding(true);
    setProgress(0);
    holdIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(holdIntervalRef.current);
          setActivated(true);
          return 100;
        }
        return prev + 100 / (3e3 / 50);
      });
    }, 50);
  };
  const handlePointerUp = () => {
    if (activated) return;
    setHolding(false);
    setProgress(0);
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
    }
  };
  useEffect(() => {
    if (activated) {
      const t1 = setTimeout(() => setActiveStep(1), 2e3);
      const t2 = setTimeout(() => setActiveStep(2), 4e3);
      const t3 = setTimeout(() => setActiveStep(3), 6500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [activated]);
  return /* @__PURE__ */ jsx(DashboardLayout, { withNav: true, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col min-h-[calc(100vh-100px)] w-full items-center justify-center p-4 md:p-8 relative", children: !activated ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center animate-in fade-in zoom-in duration-500", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Emergency SOS" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-12 max-w-sm", children: "Press and hold the button for 3 seconds to immediately alert authorities and your emergency contacts." }),
    /* @__PURE__ */ jsxs("div", { className: "relative select-none touch-none", onPointerDown: handlePointerDown, onPointerUp: handlePointerUp, onPointerLeave: handlePointerUp, children: [
      /* @__PURE__ */ jsxs("svg", { className: "absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] -rotate-90 pointer-events-none", children: [
        /* @__PURE__ */ jsx("circle", { cx: "50%", cy: "50%", r: "45%", fill: "transparent", stroke: "currentColor", strokeWidth: "8", className: "text-secondary" }),
        /* @__PURE__ */ jsx("circle", { cx: "50%", cy: "50%", r: "45%", fill: "transparent", stroke: "currentColor", strokeWidth: "8", strokeDasharray: "283", strokeDashoffset: 283 - 283 * progress / 100, strokeLinecap: "round", className: "text-primary transition-all duration-75 ease-linear" })
      ] }),
      /* @__PURE__ */ jsxs("button", { className: `
                  relative h-48 w-48 rounded-full flex flex-col items-center justify-center gap-2
                  transition-all duration-300 shadow-2xl
                  ${holding ? "bg-primary scale-95 shadow-[0_0_60px_rgba(239,68,68,0.8)]" : "bg-card border-4 border-primary/20 glow-red"}
                `, children: [
        /* @__PURE__ */ jsx(ShieldAlert, { className: `h-16 w-16 transition-colors ${holding ? "text-white" : "text-primary"}` }),
        /* @__PURE__ */ jsx("span", { className: `text-xl font-bold tracking-widest transition-colors ${holding ? "text-white" : "text-primary"}`, children: "SOS" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-12 text-sm text-muted-foreground animate-pulse", children: holding ? "Keep holding..." : "Voice Activation is also active." })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md bg-card/80 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 shadow-[0_0_100px_rgba(239,68,68,0.2)] animate-in slide-in-from-bottom-8 duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex h-16 w-16 rounded-full bg-primary/20 items-center justify-center mb-4", children: /* @__PURE__ */ jsx(ShieldAlert, { className: "h-8 w-8 text-primary animate-pulse" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "SOS ACTIVATED" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-2", children: "Help is on the way. Please stay calm." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px before:h-[calc(100%-2rem)] before:w-0.5 before:bg-border before:z-0", children: steps.map((step, idx) => {
      const isActive = activeStep === step.id;
      const isCompleted = activeStep > step.id;
      activeStep < step.id;
      return /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: `
                      flex items-center justify-center w-9 h-9 rounded-full border-2 
                      ${isCompleted ? "bg-success border-success text-white" : isActive ? "bg-background border-primary text-primary shadow-[0_0_15px_rgba(239,68,68,0.5)]" : "bg-background border-border text-muted-foreground"}
                    `, children: isCompleted ? /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5" }) : isActive ? /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsx(step.icon, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: `font-semibold ${isActive ? "text-foreground" : isCompleted ? "text-foreground" : "text-muted-foreground"}`, children: step.label }),
          isActive && /* @__PURE__ */ jsx("p", { className: "text-xs text-primary animate-pulse", children: "In progress..." }),
          isCompleted && /* @__PURE__ */ jsx("p", { className: "text-xs text-success", children: "Completed" })
        ] })
      ] }, step.id);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 pt-6 border-t border-border flex justify-center", children: /* @__PURE__ */ jsxs("button", { onClick: () => setActivated(false), className: "flex items-center gap-2 px-6 py-3 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 font-bold transition-colors", children: [
      /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }),
      " Cancel SOS"
    ] }) })
  ] }) }) });
}
export {
  SOSActivation as component
};
