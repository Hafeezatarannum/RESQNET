import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { D as DashboardLayout, G as GlowButton } from "./kit-QSQV2ku9.js";
import { a as useTheme } from "./router-CEVNS6XD.js";
import { User, Eye, ShieldCheck, Bell, Smartphone, Sun, Moon, Monitor, MapPin, KeyRound, Battery } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
const TABS = [{
  id: "account",
  label: "Account",
  icon: User
}, {
  id: "appearance",
  label: "Appearance",
  icon: Eye
}, {
  id: "privacy",
  label: "Privacy & Security",
  icon: ShieldCheck
}, {
  id: "emergency",
  label: "Emergency",
  icon: Bell
}, {
  id: "device",
  label: "Device",
  icon: Smartphone
}];
function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const {
    theme,
    setTheme
  } = useTheme();
  return /* @__PURE__ */ jsx(DashboardLayout, { withNav: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto p-4 md:p-8 w-full h-full flex flex-col md:flex-row gap-8", children: [
    /* @__PURE__ */ jsx("aside", { className: "w-full md:w-64 shrink-0 flex flex-row md:flex-col gap-2 overflow-x-auto no-scrollbar md:overflow-visible pb-2 md:pb-0", children: TABS.map((tab) => /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab(tab.id), className: `flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap md:whitespace-normal text-sm font-medium ${activeTab === tab.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"}`, children: [
      /* @__PURE__ */ jsx(tab.icon, { className: "h-5 w-5" }),
      tab.label
    ] }, tab.id)) }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 bg-card/50 border border-border rounded-2xl p-6 md:p-8 overflow-y-auto no-scrollbar", children: [
      activeTab === "account" && /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-1", children: "Account Information" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Manage your personal information and security." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 pb-6 border-b border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary", children: "AS" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: "Aarav S." }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "aarav@example.com" }),
            /* @__PURE__ */ jsx(GlowButton, { variant: "outline", className: "h-9 px-4 text-xs rounded-lg", children: "Change Avatar" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Full Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", defaultValue: "Aarav S.", className: "w-full h-11 px-4 bg-secondary/50 border border-border rounded-xl outline-none focus:border-primary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Phone Number" }),
            /* @__PURE__ */ jsx("input", { type: "tel", defaultValue: "+91 98765 43210", className: "w-full h-11 px-4 bg-secondary/50 border border-border rounded-xl outline-none focus:border-primary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Email Address" }),
            /* @__PURE__ */ jsx("input", { type: "email", defaultValue: "aarav@example.com", className: "w-full h-11 px-4 bg-secondary/50 border border-border rounded-xl outline-none focus:border-primary" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 flex justify-end", children: /* @__PURE__ */ jsx(GlowButton, { className: "h-11 px-8 rounded-xl w-full sm:w-auto", children: "Save Changes" }) })
      ] }),
      activeTab === "appearance" && /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-1", children: "Appearance" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Customize how ResQNet looks on this device." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold", children: "Theme" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => setTheme("light"), className: `flex flex-col items-center justify-center gap-3 p-6 border rounded-2xl transition-all ${theme === "light" ? "border-primary bg-primary/5 text-primary" : "border-border bg-secondary/30 hover:bg-secondary/50"}`, children: [
              /* @__PURE__ */ jsx(Sun, { className: "h-8 w-8" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Light" })
            ] }),
            /* @__PURE__ */ jsxs("button", { onClick: () => setTheme("dark"), className: `flex flex-col items-center justify-center gap-3 p-6 border rounded-2xl transition-all ${theme === "dark" ? "border-primary bg-primary/5 text-primary" : "border-border bg-secondary/30 hover:bg-secondary/50"}`, children: [
              /* @__PURE__ */ jsx(Moon, { className: "h-8 w-8" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Dark" })
            ] }),
            /* @__PURE__ */ jsxs("button", { onClick: () => setTheme("system"), className: `flex flex-col items-center justify-center gap-3 p-6 border rounded-2xl transition-all ${theme === "system" ? "border-primary bg-primary/5 text-primary" : "border-border bg-secondary/30 hover:bg-secondary/50"}`, children: [
              /* @__PURE__ */ jsx(Monitor, { className: "h-8 w-8" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "System" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-border space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold", children: "Accessibility" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Large Text" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Increase text size across the application." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-11 bg-secondary rounded-full border border-border relative cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "absolute left-1 top-1 h-4 w-4 bg-muted-foreground rounded-full transition-all" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "High Contrast" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Make colors more distinct for better visibility." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-11 bg-secondary rounded-full border border-border relative cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "absolute left-1 top-1 h-4 w-4 bg-muted-foreground rounded-full transition-all" }) })
          ] })
        ] })
      ] }),
      activeTab === "privacy" && /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-1", children: "Privacy & Security" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Manage your data sharing and security settings." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Location Services" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Allow background location tracking for fast SOS." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-11 bg-primary rounded-full border border-primary relative cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "absolute right-1 top-1 h-4 w-4 bg-white rounded-full transition-all" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 text-success" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Medical Data Sharing" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Share medical profile with verified responders." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-11 bg-primary rounded-full border border-primary relative cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "absolute right-1 top-1 h-4 w-4 bg-white rounded-full transition-all" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(KeyRound, { className: "h-5 w-5 text-muted-foreground" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Two-Factor Authentication" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Add an extra layer of security to your account." })
              ] })
            ] }),
            /* @__PURE__ */ jsx(GlowButton, { variant: "outline", className: "h-9 px-4 text-xs rounded-lg", children: "Setup" })
          ] })
        ] })
      ] }),
      activeTab === "emergency" && /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-1", children: "Emergency Settings" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Configure how the app responds during an SOS." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4 p-5 bg-secondary/30 rounded-xl border border-border", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Auto SOS Countdown" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Delay before automatically triggering SOS when activated." })
            ] }),
            /* @__PURE__ */ jsxs("select", { className: "bg-background border border-border rounded-lg text-sm px-3 py-1.5 outline-none", children: [
              /* @__PURE__ */ jsx("option", { children: "3 Seconds" }),
              /* @__PURE__ */ jsx("option", { children: "5 Seconds" }),
              /* @__PURE__ */ jsx("option", { children: "10 Seconds" }),
              /* @__PURE__ */ jsx("option", { children: "Off" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: 'Voice Activation ("Help Me")' }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Always listen for emergency keywords." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-11 bg-primary rounded-full border border-primary relative cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "absolute right-1 top-1 h-4 w-4 bg-white rounded-full transition-all" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Fake Call Screen" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Show a fake incoming police call when triggered." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-11 bg-secondary rounded-full border border-border relative cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "absolute left-1 top-1 h-4 w-4 bg-muted-foreground rounded-full transition-all" }) })
          ] })
        ] })
      ] }),
      activeTab === "device" && /* @__PURE__ */ jsxs("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-1", children: "Device Integration" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Manage connected devices and battery settings." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-5 bg-card border border-primary/20 rounded-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-success/20 text-success flex items-center justify-center", children: /* @__PURE__ */ jsx(Smartphone, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-sm", children: "Apple Watch Series 8" }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-success flex items-center gap-1 mt-0.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-success animate-pulse" }),
                  " Connected"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(GlowButton, { variant: "outline", className: "h-9 px-4 text-xs rounded-lg text-destructive border-destructive/20 hover:bg-destructive/10", children: "Disconnect" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(Battery, { className: "h-5 w-5 text-warning" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Battery Optimization" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Reduce background scanning to save battery." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-11 bg-secondary rounded-full border border-border relative cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "absolute left-1 top-1 h-4 w-4 bg-muted-foreground rounded-full transition-all" }) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  SettingsPage as component
};
