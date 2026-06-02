import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar } from "./kit-QSQV2ku9.js";
import { M as MapMock } from "./widgets-oL2yBzJ2.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Heatmap() {
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Emergency heatmap", subtitle: "Hotspots in the last 24h" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto flex-1 px-5 py-2", children: /* @__PURE__ */ jsxs(MapMock, { route: false, className: "h-full min-h-[420px]", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-[20%] top-[30%] h-24 w-24 rounded-full bg-primary/40 blur-2xl" }),
      /* @__PURE__ */ jsx("span", { className: "absolute right-[18%] top-[45%] h-32 w-32 rounded-full bg-primary/50 blur-2xl" }),
      /* @__PURE__ */ jsx("span", { className: "absolute bottom-[18%] left-[40%] h-20 w-20 rounded-full bg-warning/40 blur-2xl" })
    ] }) })
  ] });
}
export {
  Heatmap as component
};
