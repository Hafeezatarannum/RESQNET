import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { D as DashboardLayout } from "./kit-QSQV2ku9.js";
import { HeartPulse, Users, History, Award, Edit2, Share2, Download, AlertTriangle } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
const TABS = [{
  id: "medical",
  label: "Medical Info",
  icon: HeartPulse
}, {
  id: "contacts",
  label: "Emergency Contacts",
  icon: Users
}, {
  id: "history",
  label: "Activity History",
  icon: History
}, {
  id: "rewards",
  label: "Rewards & Badges",
  icon: Award
}];
function Profile() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  return /* @__PURE__ */ jsx(DashboardLayout, { withNav: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto p-4 md:p-8 w-full space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 shrink-0 text-center md:text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "h-28 w-28 rounded-full bg-gradient-to-tr from-brand-blue to-primary flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-primary/20", children: "AS" }),
          /* @__PURE__ */ jsx("button", { className: "absolute bottom-0 right-0 h-9 w-9 bg-secondary rounded-full flex items-center justify-center border-4 border-card text-muted-foreground hover:text-foreground transition-colors shadow-sm", children: /* @__PURE__ */ jsx(Edit2, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Aarav Sharma" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "+91 98765 43210" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold border border-primary/20", children: "Blood Type: O+" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 w-full flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center md:justify-start gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/settings", className: "flex items-center gap-2 px-4 py-2 bg-secondary/80 hover:bg-secondary rounded-xl text-sm font-medium transition-colors border border-border", children: [
            /* @__PURE__ */ jsx(Edit2, { className: "w-4 h-4" }),
            " Edit Profile"
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-4 py-2 bg-secondary/80 hover:bg-secondary rounded-xl text-sm font-medium transition-colors border border-border", children: [
            /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4" }),
            " Share Medical Card"
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-4 py-2 bg-secondary/80 hover:bg-secondary rounded-xl text-sm font-medium transition-colors border border-border", children: [
            /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
            " Export Emergency Info"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-2xl p-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-warning" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider", children: "SOS Sent" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: "3" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-2xl p-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider", children: "Contacts" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: "5" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-2xl p-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-brand-blue" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider", children: "Rewards" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: "12" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-2xl p-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(HeartPulse, { className: "w-4 h-4 text-success" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-wider", children: "Vol. Hours" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: "14h" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-64 shrink-0 flex flex-row md:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0", children: TABS.map((tab) => /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab(tab.id), className: `flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap md:whitespace-normal text-sm font-medium ${activeTab === tab.id ? "bg-primary/10 text-primary" : "bg-card/50 text-muted-foreground hover:bg-secondary/80 hover:text-foreground border border-border"}`, children: [
        /* @__PURE__ */ jsx(tab.icon, { className: "h-5 w-5" }),
        tab.label
      ] }, tab.id)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-card/50 border border-border rounded-3xl p-6 md:p-8 min-h-[400px]", children: [
        activeTab === "medical" && /* @__PURE__ */ jsxs("div", { className: "space-y-6 animate-in fade-in", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Medical Information" }),
            /* @__PURE__ */ jsx("button", { className: "text-sm text-primary hover:underline", children: "Edit" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-background border border-border rounded-xl", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-1 uppercase tracking-wider", children: "Allergies" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Penicillin, Peanuts" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-background border border-border rounded-xl", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-1 uppercase tracking-wider", children: "Current Medications" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Lisinopril (10mg)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-background border border-border rounded-xl md:col-span-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-1 uppercase tracking-wider", children: "Pre-existing Conditions" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Hypertension" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-background border border-border rounded-xl md:col-span-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-1 uppercase tracking-wider", children: "Emergency Notes" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm text-muted-foreground", children: "In case of emergency, patient requires immediate blood pressure monitoring." })
            ] })
          ] })
        ] }),
        activeTab === "contacts" && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full text-center space-y-4 animate-in fade-in", children: [
          /* @__PURE__ */ jsx("div", { className: "h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Manage Emergency Contacts" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm", children: "Keep your emergency contacts up to date to ensure rapid response during an SOS." }),
          /* @__PURE__ */ jsx(Link, { to: "/contacts-setup", className: "mt-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg glow-red", children: "Go to Contacts Manager" })
        ] }),
        (activeTab === "history" || activeTab === "rewards") && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full text-center space-y-4 animate-in fade-in opacity-50", children: [
          /* @__PURE__ */ jsx("div", { className: "h-16 w-16 bg-secondary text-muted-foreground rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Info, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Section Under Construction" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm", children: "This section is being updated to support the new enterprise architecture." })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Profile as component
};
