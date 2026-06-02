import { jsx, jsxs } from "react/jsx-runtime";
import { D as DashboardLayout } from "./kit-QSQV2ku9.js";
import { HelpCircle, FileText, MessageSquare, Phone } from "lucide-react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function HelpCenter() {
  return /* @__PURE__ */ jsx(DashboardLayout, { withNav: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[800px] mx-auto p-4 md:p-8 w-full space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 py-8", children: [
      /* @__PURE__ */ jsx("div", { className: "h-20 w-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(HelpCircle, { className: "h-10 w-10" }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "How can we help you?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-md mx-auto", children: "Search our knowledge base or get in touch with our support team for any issues regarding ResQNet." }),
      /* @__PURE__ */ jsx("div", { className: "max-w-md mx-auto relative mt-6", children: /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search for articles, guides...", className: "w-full h-12 bg-secondary/50 border border-border rounded-xl px-4 outline-none focus:border-primary" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer group", children: [
        /* @__PURE__ */ jsx(FileText, { className: "h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Guides & FAQ" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Learn how to use ResQNet effectively." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer group", children: [
        /* @__PURE__ */ jsx(MessageSquare, { className: "h-8 w-8 text-brand-blue mx-auto mb-4 group-hover:scale-110 transition-transform" }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Community Forum" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Ask questions and share tips with others." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer group", children: [
        /* @__PURE__ */ jsx(Phone, { className: "h-8 w-8 text-success mx-auto mb-4 group-hover:scale-110 transition-transform" }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Contact Support" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Reach our 24/7 support team directly." })
      ] })
    ] })
  ] }) });
}
export {
  HelpCenter as component
};
