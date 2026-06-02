import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { D as DashboardLayout, L as Logo, W as Wordmark, G as GlowButton } from "./kit-QSQV2ku9.js";
import { ShieldAlert, MapPin, Bot, Activity, Users, HeartPulse, Clock } from "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
import "react";
function Landing() {
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full overflow-y-auto overflow-x-hidden bg-background text-foreground scroll-smooth", children: [
    /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Logo, { size: 32 }),
        /* @__PURE__ */ jsx(Wordmark, { className: "text-xl" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm font-medium hover:text-primary transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx("a", { href: "#features", className: "text-sm font-medium hover:text-primary transition-colors", children: "Features" }),
        /* @__PURE__ */ jsx("a", { href: "#how-it-works", className: "text-sm font-medium hover:text-primary transition-colors", children: "How It Works" }),
        /* @__PURE__ */ jsx("a", { href: "#about", className: "text-sm font-medium hover:text-primary transition-colors", children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "text-sm font-medium hover:text-primary transition-colors", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/login", className: "text-sm font-medium hover:text-primary transition-colors hidden sm:block", children: "Log in" }),
        /* @__PURE__ */ jsx(GlowButton, { to: "/signup", variant: "primary", className: "h-9 px-4 text-sm", children: "Get Started" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "home", className: "relative flex flex-col items-center justify-center pt-16 pb-12 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto text-center space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })
          ] }),
          "Live: 24 active emergencies in your region"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]", children: [
          "Help Arrives When ",
          /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400", children: "Seconds Matter." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "The world's most advanced emergency response platform. Instantly connect with nearby responders, hospitals, and family members with a single tap." }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-4", children: /* @__PURE__ */ jsxs(GlowButton, { to: "/signup", className: "h-14 px-10 text-base w-full sm:w-auto", children: [
          /* @__PURE__ */ jsx(ShieldAlert, { className: "mr-2 h-5 w-5" }),
          " Trigger SOS Now"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "features", className: "py-12 px-6 border-t border-border/50 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Enterprise-Grade Protection" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Everything you need to stay safe, packed into a blazing fast platform." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [{
        title: "One-tap SOS",
        icon: ShieldAlert,
        desc: "Instantly alert authorities and emergency contacts with precise location."
      }, {
        title: "Live Tracking",
        icon: MapPin,
        desc: "Real-time GPS tracking for responders and family members."
      }, {
        title: "AI Emergency Assistant",
        icon: Bot,
        desc: "Voice-activated AI guides you through first aid and crisis management."
      }, {
        title: "Smartwatch Integration",
        icon: Activity,
        desc: "Automatic fall detection and pulse monitoring directly from your wrist."
      }, {
        title: "Emergency Contacts",
        icon: Users,
        desc: "Tiered alerting system ensures someone always answers the call."
      }, {
        title: "Medical Profile",
        icon: HeartPulse,
        desc: "Securely share critical health data like blood type and allergies with EMTs."
      }].map((f, i) => /* @__PURE__ */ jsxs("div", { className: "group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(f.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: f.desc })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "how-it-works", className: "py-12 px-6 bg-secondary/30 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "How It Works" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Three simple steps to immediate assistance." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-border z-0", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-primary w-full animate-pulse opacity-50" }) }),
        [{
          num: "01",
          title: "Trigger SOS",
          desc: "Press the button or use voice command. We grab your exact coordinates.",
          icon: ShieldAlert
        }, {
          num: "02",
          title: "AI Detects & Routes",
          desc: "Our AI analyzes the situation and immediately alerts the closest responders.",
          icon: Bot
        }, {
          num: "03",
          title: "Help Arrives",
          desc: "Track responders in real-time on the map as they navigate to your location.",
          icon: Clock
        }].map((step, i) => /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center text-center flex-1 w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,59,59,0.3)]", children: /* @__PURE__ */ jsx(step.icon, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("h4", { className: "text-primary text-sm font-bold mb-2 tracking-widest uppercase", children: [
            "STEP ",
            step.num
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm max-w-[280px] mx-auto", children: step.desc })
        ] }, i))
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "about", className: "py-12 px-6 border-t border-border/50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6", children: [{
      label: "SOS Sent",
      value: "1.2M+"
    }, {
      label: "Lives Assisted",
      value: "450K+"
    }, {
      label: "Active Responders",
      value: "85K"
    }, {
      label: "Avg Response Time",
      value: "4.2 Min"
    }].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "text-center p-6 rounded-2xl bg-card border border-border", children: [
      /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-muted-foreground mb-2", children: stat.value }),
      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-muted-foreground uppercase tracking-wider", children: stat.label })
    ] }, i)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 px-6 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Trusted by Millions" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [{
        quote: "ResQNet saved my life during a hiking accident. The GPS tracking was spot on and EMTs found me in 15 minutes.",
        author: "Sarah Jenkins",
        role: "Verified User"
      }, {
        quote: "As a volunteer responder, this app gives me all the critical info I need before I even arrive on scene. Highly recommended.",
        author: "Dr. Arvind Patel",
        role: "Medical Professional"
      }, {
        quote: "The peace of mind knowing my elderly parents have this on their smartwatch is invaluable.",
        author: "Michael Chang",
        role: "Family Member"
      }].map((t, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background border border-border rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex text-warning mb-4", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsx("span", { children: "★" }, s)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-6", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-full bg-secondary flex items-center justify-center font-bold", children: t.author[0] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-sm", children: t.author }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: t.role })
          ] })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "contact", className: "py-12 px-6 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Frequently Asked Questions" }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [{
        q: "Is ResQNet free to use?",
        a: "Yes, basic SOS and tracking features are completely free. We also offer premium features for advanced integrations."
      }, {
        q: "Does it work internationally?",
        a: "ResQNet operates globally but response times depend on local emergency infrastructure integration."
      }, {
        q: "How is my medical data stored?",
        a: "Your medical profile is encrypted end-to-end and only shared with verified responders during an active emergency."
      }].map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: faq.q }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: faq.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-secondary/10 py-12 px-6 mt-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Logo, { size: 24 }),
        /* @__PURE__ */ jsx(Wordmark, { className: "text-lg" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ResQNet Technologies. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-muted-foreground hover:text-primary", children: "Privacy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-muted-foreground hover:text-primary", children: "Terms" })
      ] })
    ] }) })
  ] }) });
}
export {
  Landing as component
};
