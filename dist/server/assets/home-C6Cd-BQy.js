import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { D as DashboardLayout, A as Aura } from "./kit-QSQV2ku9.js";
import { S as SOSButton } from "./widgets-oL2yBzJ2.js";
import { MapPin, ShieldCheck, Activity, Mic, Bot, Hospital, Users, Radar, Bell, History } from "lucide-react";
import { u as useTranslation } from "./router-CEVNS6XD.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "react";
function Dashboard() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs(DashboardLayout, { withNav: true, children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-[1400px] mx-auto p-4 md:p-6 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 flex items-center gap-3 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-xl", children: "👋" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: t("home.greeting") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg font-bold", children: t("home.ready") })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 flex items-center gap-3 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Current Location" }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "MG Road, Bangalore" }),
            /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-success flex items-center gap-1 mt-0.5", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3 w-3" }),
              " GPS Active"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 flex items-center gap-3 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-success/20 flex items-center justify-center text-success", children: /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "System Status" }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "All Systems Operational" }),
            /* @__PURE__ */ jsx("div", { className: "w-full bg-secondary h-1 rounded-full mt-1.5 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "bg-success h-full w-full" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-6 bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between group hover:border-primary/50 transition-colors gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center sm:text-left", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-1", children: "Emergency Response" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Tap SOS or use voice command to alert authorities instantly." }),
            /* @__PURE__ */ jsxs(Link, { to: "/voice-sos", className: "inline-flex items-center gap-2 rounded-full bg-secondary hover:bg-secondary/80 px-4 py-2 text-xs font-semibold transition-colors", children: [
              /* @__PURE__ */ jsx(Mic, { className: "h-4 w-4 text-primary" }),
              " Voice Activated"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(SOSButton, { to: "/emergency-type", size: 140 }) })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/ai-help", className: "md:col-span-3 bg-card border border-border rounded-2xl p-5 flex flex-col hover:border-brand-blue/50 transition-colors group", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Bot, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-base mb-1", children: "AI Assistant" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Instant first-aid guidance and crisis management support." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/hospitals", className: "md:col-span-3 bg-card border border-border rounded-2xl p-5 flex flex-col hover:border-success/50 transition-colors group", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-success/20 text-success flex items-center justify-center mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Hospital, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-base mb-1", children: "Nearby Hospitals" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "4 facilities within a 5km radius of your location." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/contacts-setup", className: "md:col-span-4 bg-card border border-border rounded-2xl p-5 flex flex-col hover:border-warning/50 transition-colors group", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-warning/20 text-warning flex items-center justify-center mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-base mb-1", children: "Emergency Contacts" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-3", children: "3 active contacts configured to receive your alerts." }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto flex -space-x-2", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx("div", { className: "h-6 w-6 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[10px] font-bold", children: i }, i)) })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/family-tracking", className: "md:col-span-4 bg-card border border-border rounded-2xl p-5 flex flex-col hover:border-primary/50 transition-colors group", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Radar, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-base mb-1", children: "Family Tracking" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-3", children: "2 family members are actively sharing their location." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-auto flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-success animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-success", children: "Live Network" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 bg-card border border-border rounded-2xl p-5 flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-base", children: "Health Summary" }),
            /* @__PURE__ */ jsx(Link, { to: "/medical-profile", className: "text-xs text-primary hover:underline", children: "Edit" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl bg-secondary/50", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground mb-1 uppercase tracking-wider", children: "Blood Type" }),
              /* @__PURE__ */ jsx("p", { className: "font-bold text-lg text-primary", children: "O+" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl bg-secondary/50", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground mb-1 uppercase tracking-wider", children: "Allergies" }),
              /* @__PURE__ */ jsx("p", { className: "font-bold text-sm", children: "Penicillin" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-2 p-3 rounded-xl bg-secondary/50 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider", children: "Smartwatch Sync" }),
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-xs", children: "Apple Watch Series 8" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-success animate-pulse" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-6 bg-card border border-border rounded-2xl p-5 flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-base", children: "Recent Alerts" }),
            /* @__PURE__ */ jsx(Link, { to: "/alerts", className: "text-xs text-primary hover:underline", children: "View All" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2.5 rounded-xl bg-secondary/50", children: [
              /* @__PURE__ */ jsx("span", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/20 text-primary", children: /* @__PURE__ */ jsx(Radar, { className: "h-4 w-4 animate-pulse" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Accident nearby" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "MG Road • 1.2 km away" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2.5 rounded-xl bg-secondary/50", children: [
              /* @__PURE__ */ jsx("span", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-warning/20 text-warning", children: /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Weather Advisory" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Heavy rain expected at 4 PM" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-6 bg-card border border-border rounded-2xl p-5 flex flex-col", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-base mb-4", children: "Activity Timeline" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 relative before:absolute before:inset-0 before:ml-4 md:before:ml-[2.25rem] before:-translate-x-px before:h-full before:w-0.5 before:bg-border", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between md:justify-normal", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full border border-border bg-background shrink-0 md:mr-4 z-10 shadow shadow-primary/20", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-primary rounded-full animate-pulse" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 p-3 rounded-xl bg-secondary/50 ml-4 md:ml-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-sm", children: "App Opened" }),
                  /* @__PURE__ */ jsx("time", { className: "text-[10px] font-medium text-muted-foreground", children: "Just now" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "System check completed." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between md:justify-normal", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full border border-border bg-background shrink-0 md:mr-4 z-10", children: /* @__PURE__ */ jsx(History, { className: "w-3.5 h-3.5 text-muted-foreground" }) }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 p-3 rounded-xl bg-secondary/20 ml-4 md:ml-0", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-sm", children: "Location Updated" }),
                /* @__PURE__ */ jsx("time", { className: "text-[10px] font-medium text-muted-foreground", children: "2h ago" })
              ] }) })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Dashboard as component
};
