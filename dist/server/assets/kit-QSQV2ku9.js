import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, useRouter } from "@tanstack/react-router";
import { ShieldPlus, ChevronLeft, Star, Home, ShieldAlert, Map, Bot, User, Bell, HeartPulse, History, Medal, Settings, HelpCircle, MessageSquare, LogOut, Search, Sun, Moon } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { a as useTheme } from "./router-CEVNS6XD.js";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function DashboardLayout({
  children,
  withNav
}) {
  return /* @__PURE__ */ jsxs("div", { className: "relative flex h-screen w-full flex-col md:flex-row overflow-hidden bg-background", children: [
    withNav && /* @__PURE__ */ jsx(SideNav, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 relative flex flex-col min-w-0 w-full h-full overflow-hidden", children: [
      withNav && /* @__PURE__ */ jsx(GlobalHeader, {}),
      /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto no-scrollbar pb-16 md:pb-0", children })
    ] })
  ] });
}
function Aura() {
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 -right-20 h-64 w-64 rounded-full bg-brand-blue/15 blur-[90px]" })
  ] });
}
function Logo({ size = 56 }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "grid place-items-center rounded-[22px] bg-gradient-to-br from-primary to-[#b71721] glow-red",
      style: { width: size, height: size },
      children: /* @__PURE__ */ jsx(
        ShieldPlus,
        {
          className: "text-white",
          style: { width: size * 0.5, height: size * 0.5 }
        }
      )
    }
  );
}
function Wordmark({ className }) {
  return /* @__PURE__ */ jsxs("span", { className: cn("font-bold tracking-tight", className), children: [
    "Res",
    /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Q" }),
    "Net"
  ] });
}
function GlowButton({
  children,
  to,
  onClick,
  variant = "primary",
  full = true,
  className,
  icon: Icon
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground shadow-md glow-red",
    outline: "border border-border bg-white/[0.03] text-foreground hover:bg-white/[0.08]",
    ghost: "text-muted-foreground hover:text-foreground",
    success: "bg-success text-success-foreground shadow-lg shadow-success/30",
    dark: "bg-secondary text-foreground hover:bg-secondary/70 border border-border"
  };
  const cls = cn(
    "flex h-14 items-center justify-center gap-2 rounded-[18px] px-6 text-[15px] font-semibold transition active:scale-[0.98] mx-auto max-w-[360px]",
    full && "w-full",
    styles[variant],
    className
  );
  const inner = /* @__PURE__ */ jsxs(Fragment, { children: [
    Icon && /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }),
    children
  ] });
  if (to) {
    return /* @__PURE__ */ jsx(Link, { to, className: cls, children: inner });
  }
  return /* @__PURE__ */ jsx("button", { type: "button", onClick, className: cls, children: inner });
}
function GlassCard({
  children,
  className,
  onClick,
  to
}) {
  const cls = cn(
    "rounded-[22px] border border-border bg-card text-card-foreground p-4 shadow-sm transition-all duration-300",
    (onClick || to) && "cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30",
    className
  );
  if (to)
    return /* @__PURE__ */ jsx(Link, { to, className: cls, children });
  return /* @__PURE__ */ jsx("div", { className: cls, onClick, children });
}
function Screen({
  children,
  className,
  pad = true
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "relative z-10 flex-1 overflow-y-auto no-scrollbar",
        pad && "px-5 pb-8 pt-2",
        className
      ),
      children
    }
  );
}
function GlobalHeader() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const path = router.state.location.pathname;
  let title = "Dashboard";
  if (path.includes("/map")) title = "Live Map";
  else if (path.includes("/ai-help")) title = "AI First Aid";
  else if (path.includes("/contacts")) title = "Emergency Contacts";
  else if (path.includes("/alerts")) title = "Active Alerts";
  else if (path.includes("/profile")) title = "Medical Profile";
  else if (path.includes("/history")) title = "Activity History";
  else if (path.includes("/rewards")) title = "Rewards & Badges";
  else if (path.includes("/settings")) title = "Settings";
  else if (path.includes("/help")) title = "Help Center";
  else if (path.includes("/feedback")) title = "Feedback";
  else if (path.includes("/sos")) title = "Emergency SOS";
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background/80 backdrop-blur-md px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "md:hidden flex items-center gap-3", children: /* @__PURE__ */ jsx(Logo, { size: 24 }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-between gap-x-4 lg:gap-x-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => window.history.back(),
            className: "grid h-8 w-8 place-items-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold leading-6 text-foreground hidden sm:block", children: title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative hidden md:block", children: [
          /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute inset-y-0 left-3 h-full w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search...",
              className: "block h-9 w-64 rounded-full border-0 bg-secondary/50 py-1.5 pl-9 pr-3 text-sm text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary outline-none transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
            className: "text-muted-foreground hover:text-foreground transition-colors p-1",
            children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Moon, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxs("button", { className: "relative p-1 text-muted-foreground hover:text-foreground transition-colors", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute top-0 right-0 h-2 w-2 rounded-full bg-primary ring-2 ring-background" }),
          /* @__PURE__ */ jsx(Bell, { className: "h-5 w-5" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block lg:h-6 lg:w-px lg:bg-border", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs(Link, { to: "/profile", className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "hidden lg:flex lg:items-center", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold leading-6 text-foreground", "aria-hidden": "true", children: "Aarav S." }) }),
          /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-gradient-to-tr from-brand-blue to-primary flex items-center justify-center text-white font-bold text-xs shadow-sm", children: "AS" })
        ] })
      ] })
    ] })
  ] });
}
function TopBar({
  title,
  subtitle,
  back = true,
  right
}) {
  return /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-3 px-5 pb-3 pt-6 bg-background/80 backdrop-blur-md border-b border-border mb-4", children: [
    back && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.history.back(),
        className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-secondary text-foreground active:scale-95 transition-transform",
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
      title && /* @__PURE__ */ jsx("h1", { className: "truncate text-lg font-semibold", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-muted-foreground", children: subtitle })
    ] }),
    right
  ] });
}
function Field({
  label,
  icon: Icon,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block max-w-[360px] mx-auto w-full", children: [
    label && /* @__PURE__ */ jsx("span", { className: "mb-1.5 block text-xs font-medium text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3 rounded-[16px] border border-border bg-white/[0.03] px-4 focus-within:border-primary/60", children: [
      Icon && /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "h-13 w-full bg-transparent py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60",
          ...props
        }
      )
    ] })
  ] });
}
const PRIMARY_NAV = [
  { to: "/home", labelKey: "Home", icon: Home },
  { to: "/power-sos", labelKey: "Emergency SOS", icon: ShieldAlert },
  { to: "/map", labelKey: "Live Map", icon: Map },
  { to: "/ai-help", labelKey: "AI First Aid", icon: Bot },
  { to: "/contacts-setup", labelKey: "Emergency Contacts", icon: User },
  { to: "/alerts", labelKey: "Alerts", icon: Bell },
  { to: "/profile", labelKey: "Medical Profile", icon: HeartPulse },
  { to: "/history", labelKey: "Activity History", icon: History },
  { to: "/rewards", labelKey: "Rewards & Badges", icon: Medal },
  { to: "/settings", labelKey: "Settings", icon: Settings }
];
const SECONDARY_NAV = [
  { to: "/help", labelKey: "Help Center", icon: HelpCircle },
  { to: "/feedback", labelKey: "Feedback", icon: MessageSquare },
  { to: "/", labelKey: "Logout", icon: LogOut }
];
function SideNav() {
  return /* @__PURE__ */ jsxs("nav", { className: "relative z-20 flex w-full md:w-[260px] shrink-0 flex-row md:flex-col justify-around md:justify-start border-t md:border-t-0 md:border-r border-border bg-card/95 md:bg-card px-2 py-2.5 md:p-0 md:h-screen order-last md:order-first shadow-xl md:shadow-none fixed md:static bottom-0 left-0 right-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3 px-6 h-16 border-b border-border w-full shrink-0", children: [
      /* @__PURE__ */ jsx(Logo, { size: 28 }),
      /* @__PURE__ */ jsx(Wordmark, { className: "text-xl tracking-tight" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex w-full md:flex-1 md:flex-col md:overflow-y-auto no-scrollbar md:px-3 md:py-4 gap-1", children: PRIMARY_NAV.map((item, idx) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: item.to,
        className: cn(
          "flex flex-1 md:flex-none flex-col md:flex-row items-center gap-1 md:gap-3 px-2 py-2 md:px-3 md:py-2.5 text-[10px] md:text-[13px] font-medium text-muted-foreground md:rounded-xl hover:bg-secondary transition-all",
          idx > 4 && "hidden md:flex"
          // Hide beyond 5 on mobile
        ),
        activeProps: {
          className: "!text-primary md:!bg-primary/10 font-bold"
        },
        children: [
          /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 md:h-4 md:w-4" }),
          /* @__PURE__ */ jsx("span", { className: "md:inline", children: item.labelKey })
        ]
      },
      item.to
    )) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex flex-col gap-1 p-3 border-t border-border bg-secondary/20 shrink-0", children: SECONDARY_NAV.map((item) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: item.to,
        className: "flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-muted-foreground rounded-xl hover:bg-secondary transition-all",
        activeProps: { className: "!text-primary md:!bg-primary/10 font-bold" },
        children: [
          /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
          item.labelKey
        ]
      },
      item.to
    )) })
  ] });
}
function Stat({ value, label }) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xl font-bold", children: value }),
    /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground", children: label })
  ] });
}
function Rating({ value }) {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-warning", children: [
    /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-warning text-warning" }),
    value.toFixed(1)
  ] });
}
function Pill({
  children,
  tone = "default"
}) {
  const tones = {
    default: "bg-white/10 text-muted-foreground",
    red: "bg-primary/15 text-primary",
    green: "bg-success/15 text-success",
    orange: "bg-warning/15 text-warning",
    blue: "bg-brand-blue/15 text-brand-blue"
  };
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold",
        tones[tone]
      ),
      children
    }
  );
}
export {
  Aura as A,
  DashboardLayout as D,
  Field as F,
  GlowButton as G,
  Logo as L,
  Pill as P,
  Rating as R,
  Screen as S,
  TopBar as T,
  Wordmark as W,
  GlassCard as a,
  Stat as b,
  cn as c
};
