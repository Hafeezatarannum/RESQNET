import { jsxs, jsx } from "react/jsx-runtime";
import { L as Logo, W as Wordmark, G as GlowButton } from "./kit-QSQV2ku9.js";
import { ShieldAlert, HeartHandshake } from "lucide-react";
import { u as useTranslation } from "./router-CEVNS6XD.js";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "react";
function Role() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen w-full items-center justify-center bg-background text-foreground relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-[700px] mx-4 bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-12 shadow-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx(Logo, { size: 40 }),
          /* @__PURE__ */ jsx(Wordmark, { className: "text-xl" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Choose Your Role" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "How would you like to use ResQNet?" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10", children: [
        /* @__PURE__ */ jsxs("label", { className: "relative flex cursor-pointer rounded-2xl border border-border bg-secondary/30 p-6 hover:border-primary/50 hover:bg-secondary/50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5", children: [
          /* @__PURE__ */ jsx("input", { type: "radio", name: "role", className: "peer sr-only", defaultChecked: true }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center w-full", children: [
            /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 peer-checked:bg-primary peer-checked:text-white transition-colors", children: /* @__PURE__ */ jsx(ShieldAlert, { className: "h-8 w-8" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: "Need Help" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "I want to be protected and access emergency services." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 h-5 w-5 rounded-full border-2 border-muted-foreground peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" }) })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "relative flex cursor-pointer rounded-2xl border border-border bg-secondary/30 p-6 hover:border-brand-blue/50 hover:bg-secondary/50 transition-all has-[:checked]:border-brand-blue has-[:checked]:bg-brand-blue/5", children: [
          /* @__PURE__ */ jsx("input", { type: "radio", name: "role", className: "peer sr-only" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center w-full", children: [
            /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center mb-4 peer-checked:bg-brand-blue peer-checked:text-white transition-colors", children: /* @__PURE__ */ jsx(HeartHandshake, { className: "h-8 w-8" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: "Volunteer" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "I want to respond to emergencies and help others." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 h-5 w-5 rounded-full border-2 border-muted-foreground peer-checked:border-brand-blue peer-checked:bg-brand-blue flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(GlowButton, { to: "/location-permission", className: "w-full sm:w-64 h-12", children: t("general.continue") }) })
    ] })
  ] });
}
export {
  Role as component
};
