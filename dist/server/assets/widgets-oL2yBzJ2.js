import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Phone, MessageSquare, Navigation, MapPin, Check } from "lucide-react";
import { a as GlassCard, R as Rating, P as Pill, c as cn } from "./kit-QSQV2ku9.js";
function SOSButton({
  to = "/emergency-type",
  size = 220
}) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to,
      className: "relative grid place-items-center",
      style: { width: size, height: size },
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" }),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-4 rounded-full bg-primary/25 animate-pulse-ring [animation-delay:0.8s]" }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "relative grid place-items-center rounded-full bg-gradient-to-br from-[#ff4d4f] to-[#b71721] text-white animate-sos",
            style: { width: size * 0.62, height: size * 0.62 },
            children: /* @__PURE__ */ jsx("span", { className: "text-3xl font-extrabold tracking-wider", children: "SOS" })
          }
        )
      ]
    }
  );
}
function Radar({ size = 260 }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative grid place-items-center",
      style: { width: size, height: size },
      children: [
        [0, 1, 2].map((i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute rounded-full border border-brand-blue/40 animate-pulse-ring",
            style: { width: size, height: size, animationDelay: `${i * 0.8}s` }
          },
          i
        )),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative grid place-items-center overflow-hidden rounded-full border border-brand-blue/30 bg-brand-blue/5",
            style: { width: size * 0.8, height: size * 0.8 },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 animate-radar",
                  style: {
                    background: "conic-gradient(from 0deg, transparent 0deg, rgba(59,130,246,0.45) 60deg, transparent 90deg)"
                  }
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "relative grid h-14 w-14 place-items-center rounded-full bg-primary glow-red", children: /* @__PURE__ */ jsx(MapPin, { className: "h-7 w-7 text-white" }) })
            ]
          }
        )
      ]
    }
  );
}
function MapMock({
  className,
  route = true,
  children
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-[22px] border border-border bg-[#0a1c30] map-grid",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04101d]/70" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-1/3 h-[3px] w-full bg-white/5" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/4 top-0 h-full w-[3px] bg-white/5" }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-1/4 top-0 h-full w-[3px] bg-white/5" }),
        route && /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "absolute inset-0 h-full w-full",
            preserveAspectRatio: "none",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M 18% 82% C 35% 60%, 30% 40%, 55% 38% S 80% 25%, 82% 18%",
                  fill: "none",
                  stroke: "#3b82f6",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                  strokeDasharray: "1 12"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M 18% 82% C 35% 60%, 30% 40%, 55% 38% S 80% 25%, 82% 18%",
                  fill: "none",
                  stroke: "#3b82f6",
                  strokeWidth: "4",
                  strokeLinecap: "round",
                  opacity: "0.35"
                }
              )
            ]
          }
        ),
        route && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Marker, { className: "bottom-[14%] left-[14%]", tone: "blue", label: "You" }),
          /* @__PURE__ */ jsx(Marker, { className: "right-[14%] top-[12%]", tone: "red", label: "Help" })
        ] }),
        children
      ]
    }
  );
}
function Marker({
  className,
  tone = "red",
  label
}) {
  const c = tone === "red" ? "bg-primary" : tone === "blue" ? "bg-brand-blue" : "bg-success";
  return /* @__PURE__ */ jsxs("div", { className: cn("absolute flex flex-col items-center", className), children: [
    label && /* @__PURE__ */ jsx("span", { className: "mb-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur", children: label }),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "grid h-7 w-7 place-items-center rounded-full ring-4 ring-white/10",
          c
        ),
        children: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-white" })
      }
    )
  ] });
}
function VolunteerCard({
  v,
  actions,
  onClick
}) {
  return /* @__PURE__ */ jsxs(GlassCard, { onClick, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-blue/40 to-brand-blue/10 text-sm font-bold", children: v.name.split(" ").map((n) => n[0]).join("") }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "truncate font-semibold", children: v.name }),
          /* @__PURE__ */ jsx(Rating, { value: v.rating })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-0.5 text-xs text-muted-foreground", children: [
          v.skill ?? "Certified responder",
          " • ",
          v.distance
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Pill, { tone: "green", children: [
        "ETA ",
        v.eta
      ] }),
      actions && /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-success/15 text-success", children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-brand-blue/15 text-brand-blue", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsx(Navigation, { className: "h-4 w-4" }) })
      ] })
    ] })
  ] });
}
function Timeline({ steps }) {
  return /* @__PURE__ */ jsx("div", { className: "relative pl-2", children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "relative flex gap-4 pb-7 last:pb-0", children: [
    i < steps.length - 1 && /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "absolute left-[14px] top-7 h-full w-[2px]",
          s.state === "done" ? "bg-success" : "bg-border"
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full",
          s.state === "done" && "bg-success text-[#04101d]",
          s.state === "active" && "bg-primary text-white animate-sos",
          s.state === "todo" && "border border-border bg-secondary text-muted-foreground"
        ),
        children: s.state === "done" ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx("span", { className: "text-xs font-bold", children: i + 1 })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "pt-0.5", children: [
      /* @__PURE__ */ jsx(
        "p",
        {
          className: cn(
            "font-medium",
            s.state === "todo" && "text-muted-foreground"
          ),
          children: s.label
        }
      ),
      s.time && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: s.time })
    ] })
  ] }, i)) });
}
function Waveform() {
  return /* @__PURE__ */ jsx("div", { className: "flex h-16 items-center justify-center gap-1.5", children: Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "w-1.5 rounded-full bg-primary animate-wave",
      style: { height: "100%", animationDelay: `${i % 8 * 0.1}s` }
    },
    i
  )) });
}
export {
  MapMock as M,
  Radar as R,
  SOSButton as S,
  Timeline as T,
  VolunteerCard as V,
  Waveform as W
};
