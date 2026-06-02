import { jsx, jsxs } from "react/jsx-runtime";
import { D as DashboardLayout } from "./kit-QSQV2ku9.js";
import { Download, ShieldAlert, Activity, CheckCircle2, MapPin, ChevronRight } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
const HISTORY_DATA = [{
  id: "1",
  type: "sos",
  status: "resolved",
  title: "Emergency SOS Triggered",
  date: "Today, 10:42 AM",
  location: "MG Road, Bangalore",
  details: "Voice activation triggered. 3 responders arrived. Medical assistance provided.",
  icon: ShieldAlert,
  color: "text-primary",
  bg: "bg-primary/10",
  border: "border-primary/20"
}, {
  id: "2",
  type: "volunteer",
  status: "completed",
  title: "Responded to SOS Alert",
  date: "Yesterday, 14:15 PM",
  location: "Koramangala, Bangalore (1.2 km away)",
  details: "Assisted elderly person with minor injury. Arrived in 4 minutes.",
  icon: Activity,
  color: "text-brand-blue",
  bg: "bg-brand-blue/10",
  border: "border-brand-blue/20"
}, {
  id: "3",
  type: "system",
  status: "success",
  title: "Medical Profile Updated",
  date: "Oct 12, 2023",
  location: "System",
  details: "Added new allergy information and updated emergency contacts.",
  icon: CheckCircle2,
  color: "text-success",
  bg: "bg-success/10",
  border: "border-success/20"
}];
function HistoryPage() {
  return /* @__PURE__ */ jsx(DashboardLayout, { withNav: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1000px] mx-auto p-4 md:p-8 w-full space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Activity History" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Review your past SOS events, volunteer responses, and account activities." })
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-4 py-2 bg-secondary/80 hover:bg-secondary rounded-xl text-sm font-medium transition-colors border border-border shrink-0 w-fit", children: [
        /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
        " Export Log"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-card/50 border border-border rounded-3xl p-4 md:p-8", children: /* @__PURE__ */ jsx("div", { className: "relative before:absolute before:inset-0 before:ml-[1.75rem] md:before:ml-[2.25rem] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border before:z-0", children: /* @__PURE__ */ jsx("div", { className: "space-y-8 relative z-10", children: HISTORY_DATA.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 md:gap-6 items-start group cursor-pointer", children: [
      /* @__PURE__ */ jsx("div", { className: `shrink-0 h-14 w-14 md:h-16 md:w-16 rounded-full flex items-center justify-center border-4 border-background ${item.bg} ${item.color} shadow-sm group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6 md:h-7 md:w-7" }) }),
      /* @__PURE__ */ jsxs("div", { className: `flex-1 bg-background border ${item.border} rounded-2xl p-4 md:p-5 shadow-sm group-hover:shadow-md transition-shadow relative`, children: [
        /* @__PURE__ */ jsx("div", { className: `absolute top-6 -left-2 w-4 h-4 bg-background border-l border-b ${item.border} rotate-45 transform` }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-base md:text-lg", children: item.title }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-muted-foreground w-fit", children: item.date })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
          " ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 leading-relaxed mb-4", children: item.details }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity", children: [
          "View Full Report ",
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 ml-1" })
        ] })
      ] })
    ] }, item.id)) }) }) })
  ] }) });
}
export {
  HistoryPage as component
};
