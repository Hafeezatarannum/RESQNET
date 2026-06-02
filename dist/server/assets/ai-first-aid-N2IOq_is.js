import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen } from "./kit-QSQV2ku9.js";
import { d as FIRST_AID } from "./resqnet-data-CsBUxpcz.js";
import { ChevronRight } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function AiFirstAid() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "AI First Aid", subtitle: "Step-by-step emergency guides" }),
    /* @__PURE__ */ jsx(Screen, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: FIRST_AID.map((f) => /* @__PURE__ */ jsxs(Link, { to: f.to, className: "flex items-center gap-3 rounded-[20px] border border-border bg-white/[0.03] p-4 active:scale-[0.99] hover:border-primary/40", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: f.desc })
      ] }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })
    ] }, f.key)) }) })
  ] });
}
export {
  AiFirstAid as component
};
