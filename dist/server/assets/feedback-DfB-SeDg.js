import { jsx, jsxs } from "react/jsx-runtime";
import { D as DashboardLayout, G as GlowButton } from "./kit-QSQV2ku9.js";
import { MessageSquare, ThumbsUp, Bug } from "lucide-react";
import { useState } from "react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
function Feedback() {
  const [selectedType, setSelectedType] = useState(null);
  return /* @__PURE__ */ jsx(DashboardLayout, { withNav: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[800px] mx-auto p-4 md:p-8 w-full space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 py-8", children: [
      /* @__PURE__ */ jsx("div", { className: "h-20 w-20 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-10 w-10" }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Send Feedback" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-md mx-auto", children: "Your feedback helps us improve ResQNet. Let us know what you think or report an issue you've encountered." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border rounded-3xl p-6 md:p-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "What kind of feedback do you have?" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => setSelectedType("idea"), className: `flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${selectedType === "idea" ? "bg-brand-blue/10 border-brand-blue text-brand-blue" : "bg-secondary/50 border-border hover:border-brand-blue/50"}`, children: [
          /* @__PURE__ */ jsx(ThumbsUp, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Idea / Suggestion" })
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => setSelectedType("issue"), className: `flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${selectedType === "issue" ? "bg-primary/10 border-primary text-primary" : "bg-secondary/50 border-border hover:border-primary/50"}`, children: [
          /* @__PURE__ */ jsx(Bug, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Report an Issue" })
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => setSelectedType("other"), className: `flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${selectedType === "other" ? "bg-success/10 border-success text-success" : "bg-secondary/50 border-border hover:border-success/50"}`, children: [
          /* @__PURE__ */ jsx(MessageSquare, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Other" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("label", { className: "block space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { className: "w-full h-32 bg-secondary/50 border border-border rounded-xl p-4 outline-none focus:border-primary resize-none", placeholder: "Tell us what's on your mind..." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-4", children: /* @__PURE__ */ jsx(GlowButton, { className: "w-full sm:w-auto px-8", children: "Submit Feedback" }) })
      ] })
    ] })
  ] }) });
}
export {
  Feedback as component
};
