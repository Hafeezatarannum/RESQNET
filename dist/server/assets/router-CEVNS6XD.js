import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import React, { useState, createContext, useContext, useEffect } from "react";
import { ShieldPlus } from "lucide-react";
const appCss = "/assets/styles-BzJsC_km.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      map: "Map",
      aiHelp: "AI Help",
      alerts: "Alerts",
      profile: "Profile"
    },
    // General
    general: {
      continue: "Continue",
      login: "Login",
      getStarted: "Get Started",
      or: "or"
    },
    // Language
    lang: {
      title: "Choose your language",
      subtitle: "You can change this anytime",
      speaks: "speaks your language"
    },
    // Login
    auth: {
      welcome: "Welcome back",
      loginToSave: "Log in to continue saving lives",
      phone: "Phone number",
      password: "Password",
      forgot: "Forgot password?",
      google: "Continue with Google",
      newTo: "New to ResQNet?",
      createAcc: "Create account"
    },
    // Home
    home: {
      greeting: "Hello, Aarav",
      ready: "Ready to save lives?",
      sos: "SOS",
      tapForHelp: "Tap for Emergency Help"
    }
  },
  hi: {
    nav: {
      home: "होम",
      map: "नक्शा",
      aiHelp: "AI मदद",
      alerts: "अलर्ट",
      profile: "प्रोफाइल"
    },
    general: {
      continue: "जारी रखें",
      login: "लॉग इन",
      getStarted: "शुरू करें",
      or: "या"
    },
    lang: {
      title: "अपनी भाषा चुनें",
      subtitle: "आप इसे कभी भी बदल सकते हैं",
      speaks: "आपकी भाषा बोलता है"
    },
    auth: {
      welcome: "वापसी पर स्वागत है",
      loginToSave: "जान बचाने के लिए लॉग इन करें",
      phone: "फ़ोन नंबर",
      password: "पासवर्ड",
      forgot: "पासवर्ड भूल गए?",
      google: "Google के साथ जारी रखें",
      newTo: "ResQNet पर नए हैं?",
      createAcc: "अकाउंट बनाएं"
    },
    home: {
      greeting: "नमस्ते, Aarav",
      ready: "क्या आप जीवन बचाने के लिए तैयार हैं?",
      sos: "मदद",
      tapForHelp: "आपातकालीन मदद के लिए टैप करें"
    }
  },
  ta: {
    nav: {
      home: "முகப்பு",
      map: "வரைபடம்",
      aiHelp: "AI உதவி",
      alerts: "எச்சரிக்கைகள்",
      profile: "சுயவிவரம்"
    },
    general: {
      continue: "தொடரவும்",
      login: "உள்நுழைய",
      getStarted: "தொடங்கவும்",
      or: "அல்லது"
    },
    lang: {
      title: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      subtitle: "நீங்கள் இதை எப்போது வேண்டுமானாலும் மாற்றலாம்",
      speaks: "உங்கள் மொழியைப் பேசுகிறது"
    },
    auth: {
      welcome: "மீண்டும் வருக",
      loginToSave: "உயிர்களைக் காக்க உள்நுழைக",
      phone: "தொலைபேசி எண்",
      password: "கடவுச்சொல்",
      forgot: "கடவுச்சொல் மறந்துவிட்டதா?",
      google: "Google மூலம் தொடரவும்",
      newTo: "ResQNetக்கு புதியவரா?",
      createAcc: "கணக்கை உருவாக்கு"
    },
    home: {
      greeting: "வணக்கம், Aarav",
      ready: "உயிர்களைக் காக்க தயாரா?",
      sos: "உதவி",
      tapForHelp: "அவசர உதவிக்கு தட்டவும்"
    }
  }
};
const I18nContext = createContext(void 0);
function I18nProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = (keyPath) => {
    const keys = keyPath.split(".");
    let current = translations[lang];
    for (const key of keys) {
      if (current[key] === void 0) {
        let fallback = translations["en"];
        for (const k of keys) {
          if (fallback[k] === void 0) return keyPath;
          fallback = fallback[k];
        }
        return fallback;
      }
      current = current[key];
    }
    return current;
  };
  return /* @__PURE__ */ jsx(I18nContext.Provider, { value: { lang, setLang, t }, children });
}
function useTranslation() {
  const context = useContext(I18nContext);
  if (context === void 0) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}
const initialState = {
  theme: "system",
  setTheme: () => null
};
const ThemeProviderContext = createContext(initialState);
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsx(ThemeProviderContext.Provider, { ...props, value, children });
}
const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$17 = createRootRouteWithContext()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Lovable App" },
        { name: "description", content: "Lovable Generated Project" },
        { name: "author", content: "Lovable" },
        { property: "og:title", content: "Lovable App" },
        { property: "og:description", content: "Lovable Generated Project" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@Lovable" }
      ],
      links: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
        },
        {
          rel: "stylesheet",
          href: appCss
        }
      ]
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent
  }
);
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function SplashScreen({ onComplete }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground transition-opacity duration-500", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center animate-in fade-in zoom-in duration-1000", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid place-items-center rounded-3xl bg-gradient-to-br from-primary to-[#b71721] shadow-[0_0_80px_rgba(239,68,68,0.4)] h-32 w-32 mb-8 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/20 rounded-3xl animate-ping" }),
        /* @__PURE__ */ jsx(ShieldPlus, { className: "h-16 w-16 text-white relative z-10" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-extrabold tracking-tight mb-3", children: [
        "Res",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Q" }),
        "Net"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground font-medium animate-pulse", children: "Help Arrives When Seconds Matter" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-16 flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "h-1 w-32 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-primary animate-[progress_2.5s_ease-in-out_forwards]" }) }) })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$17.useRouteContext();
  const [showSplash, setShowSplash] = React.useState(true);
  React.useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splashShown");
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);
  const handleSplashComplete = () => {
    sessionStorage.setItem("splashShown", "true");
    setShowSplash(false);
  };
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(ThemeProvider, { defaultTheme: "system", storageKey: "resqnet-theme", children: /* @__PURE__ */ jsxs(I18nProvider, { children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    showSplash && /* @__PURE__ */ jsx(SplashScreen, { onComplete: handleSplashComplete })
  ] }) }) });
}
const $$splitComponentImporter$16 = () => import("./welcome-fBjxtqvx.js");
const Route$16 = createFileRoute("/welcome")({
  head: () => ({
    meta: [{
      title: "Welcome — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
const $$splitComponentImporter$15 = () => import("./volunteers-found-Bi2ayU4I.js");
const Route$15 = createFileRoute("/volunteers-found")({
  head: () => ({
    meta: [{
      title: "Volunteers Found — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
const $$splitComponentImporter$14 = () => import("./volunteer-history-BE8WcWnb.js");
const Route$14 = createFileRoute("/volunteer-history")({
  head: () => ({
    meta: [{
      title: "Volunteer History — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
const $$splitComponentImporter$13 = () => import("./volunteer-dashboard-DoaoP4YI.js");
const Route$13 = createFileRoute("/volunteer-dashboard")({
  head: () => ({
    meta: [{
      title: "Volunteer Dashboard — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
const $$splitComponentImporter$12 = () => import("./volunteer-assigned-DTV9MAUv.js");
const Route$12 = createFileRoute("/volunteer-assigned")({
  head: () => ({
    meta: [{
      title: "Volunteer Assigned — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
const $$splitComponentImporter$11 = () => import("./voice-sos-C7PnaH6y.js");
const Route$11 = createFileRoute("/voice-sos")({
  head: () => ({
    meta: [{
      title: "Voice SOS — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
const $$splitComponentImporter$10 = () => import("./voice-detected-ClrdCvCL.js");
const Route$10 = createFileRoute("/voice-detected")({
  head: () => ({
    meta: [{
      title: "Voice Detected — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
const $$splitComponentImporter$$ = () => import("./voice-assistant-lZyjZhUL.js");
const Route$$ = createFileRoute("/voice-assistant")({
  head: () => ({
    meta: [{
      title: "Voice Assistant — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$$, "component")
});
const $$splitComponentImporter$_ = () => import("./traffic-D3pSwSeE.js");
const Route$_ = createFileRoute("/traffic")({
  head: () => ({
    meta: [{
      title: "Traffic Overlay — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$_, "component")
});
const $$splitComponentImporter$Z = () => import("./sos-confirm-aRFRtVk8.js");
const Route$Z = createFileRoute("/sos-confirm")({
  head: () => ({
    meta: [{
      title: "Confirm SOS — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$Z, "component")
});
const $$splitComponentImporter$Y = () => import("./smartwatch-gFLyfYDl.js");
const Route$Y = createFileRoute("/smartwatch")({
  head: () => ({
    meta: [{
      title: "Smartwatch Sync — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$Y, "component")
});
const $$splitComponentImporter$X = () => import("./signup-CkHsMzX5.js");
const Route$X = createFileRoute("/signup")({
  head: () => ({
    meta: [{
      title: "Sign Up — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$X, "component")
});
const $$splitComponentImporter$W = () => import("./share-CZqyPQlJ.js");
const Route$W = createFileRoute("/share")({
  head: () => ({
    meta: [{
      title: "Share ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$W, "component")
});
const $$splitComponentImporter$V = () => import("./severity-06KJmWIP.js");
const Route$V = createFileRoute("/severity")({
  head: () => ({
    meta: [{
      title: "Severity Check — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$V, "component")
});
const $$splitComponentImporter$U = () => import("./settings-CrEfUin-.js");
const Route$U = createFileRoute("/settings")({
  head: () => ({
    meta: [{
      title: "Settings — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$U, "component")
});
const $$splitComponentImporter$T = () => import("./searching-CtvFd18V.js");
const Route$T = createFileRoute("/searching")({
  head: () => ({
    meta: [{
      title: "Searching Volunteers — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$T, "component")
});
const $$splitComponentImporter$S = () => import("./safety-tips-DojvBYGp.js");
const Route$S = createFileRoute("/safety-tips")({
  head: () => ({
    meta: [{
      title: "Safety Tips — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$S, "component")
});
const $$splitComponentImporter$R = () => import("./route-navigation-Bl2q_iLc.js");
const Route$R = createFileRoute("/route-navigation")({
  head: () => ({
    meta: [{
      title: "Route Navigation — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$R, "component")
});
const $$splitComponentImporter$Q = () => import("./role-CKO7lLTP.js");
const Route$Q = createFileRoute("/role")({
  head: () => ({
    meta: [{
      title: "Choose Role — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$Q, "component")
});
const $$splitComponentImporter$P = () => import("./rewards-DnA8PKRc.js");
const Route$P = createFileRoute("/rewards")({
  head: () => ({
    meta: [{
      title: "Rewards & Badges — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$P, "component")
});
const $$splitComponentImporter$O = () => import("./resources-ByVl_6gB.js");
const Route$O = createFileRoute("/resources")({
  head: () => ({
    meta: [{
      title: "Emergency Resources — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$O, "component")
});
const $$splitComponentImporter$N = () => import("./reached-CVc0cOXL.js");
const Route$N = createFileRoute("/reached")({
  head: () => ({
    meta: [{
      title: "Reached Location — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$N, "component")
});
const $$splitComponentImporter$M = () => import("./progress-BdjsISq2.js");
const Route$M = createFileRoute("/progress")({
  head: () => ({
    meta: [{
      title: "Emergency Progress — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$M, "component")
});
const $$splitComponentImporter$L = () => import("./profile-DuS5Dogy.js");
const Route$L = createFileRoute("/profile")({
  head: () => ({
    meta: [{
      title: "Medical Profile — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$L, "component")
});
const $$splitComponentImporter$K = () => import("./power-sos-GxQdhYrs.js");
const Route$K = createFileRoute("/power-sos")({
  head: () => ({
    meta: [{
      title: "Emergency SOS — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$K, "component")
});
const $$splitComponentImporter$J = () => import("./otp-CK3awv0I.js");
const Route$J = createFileRoute("/otp")({
  head: () => ({
    meta: [{
      title: "Verify OTP — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$J, "component")
});
const $$splitComponentImporter$I = () => import("./onboarding-DngUwJIt.js");
const Route$I = createFileRoute("/onboarding")({
  head: () => ({
    meta: [{
      title: "Onboarding — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$I, "component")
});
const $$splitComponentImporter$H = () => import("./offline-sms-Bx4r6wgc.js");
const Route$H = createFileRoute("/offline-sms")({
  head: () => ({
    meta: [{
      title: "Offline SMS Mode — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$H, "component")
});
const $$splitComponentImporter$G = () => import("./notifications-Cjyml2xU.js");
const Route$G = createFileRoute("/notifications")({
  head: () => ({
    meta: [{
      title: "Notifications — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$G, "component")
});
const $$splitComponentImporter$F = () => import("./notification-permission-DteWXfHq.js");
const Route$F = createFileRoute("/notification-permission")({
  head: () => ({
    meta: [{
      title: "Notifications — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$F, "component")
});
const $$splitComponentImporter$E = () => import("./no-volunteer-DidNM4x6.js");
const Route$E = createFileRoute("/no-volunteer")({
  head: () => ({
    meta: [{
      title: "No Volunteer — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$E, "component")
});
const $$splitComponentImporter$D = () => import("./no-response-CK0fcoXu.js");
const Route$D = createFileRoute("/no-response")({
  head: () => ({
    meta: [{
      title: "No Response Detected — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$D, "component")
});
const $$splitComponentImporter$C = () => import("./navigate-user-CD33_eaA.js");
const Route$C = createFileRoute("/navigate-user")({
  head: () => ({
    meta: [{
      title: "Navigate to User — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$C, "component")
});
const $$splitComponentImporter$B = () => import("./medical-profile-DdT4re_8.js");
const Route$B = createFileRoute("/medical-profile")({
  head: () => ({
    meta: [{
      title: "Medical Profile — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$B, "component")
});
const $$splitComponentImporter$A = () => import("./map-D6Hqc5cW.js");
const Route$A = createFileRoute("/map")({
  head: () => ({
    meta: [{
      title: "Live Map — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const $$splitComponentImporter$z = () => import("./login-D-FsRNQa.js");
const Route$z = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Login — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./location-permission-B0N5oEFd.js");
const Route$y = createFileRoute("/location-permission")({
  head: () => ({
    meta: [{
      title: "Location Access — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./live-tracking-Pw4w0I_t.js");
const Route$x = createFileRoute("/live-tracking")({
  head: () => ({
    meta: [{
      title: "Live GPS Tracking — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./language-C2UQmWPY.js");
const Route$w = createFileRoute("/language")({
  head: () => ({
    meta: [{
      title: "Choose Language — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./incoming-alert-DnEwZgTT.js");
const Route$v = createFileRoute("/incoming-alert")({
  head: () => ({
    meta: [{
      title: "Incoming Alert — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./hospitals-CCC15Fgn.js");
const Route$u = createFileRoute("/hospitals")({
  head: () => ({
    meta: [{
      title: "Nearby Hospitals — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./home-C6Cd-BQy.js");
const Route$t = createFileRoute("/home")({
  head: () => ({
    meta: [{
      title: "Dashboard — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./history-WwfzM_kn.js");
const Route$s = createFileRoute("/history")({
  head: () => ({
    meta: [{
      title: "Activity History — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./help-support-CvIMrCvZ.js");
const Route$r = createFileRoute("/help-support")({
  head: () => ({
    meta: [{
      title: "Help & Support — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./help-provided-DGkOyUva.js");
const Route$q = createFileRoute("/help-provided")({
  head: () => ({
    meta: [{
      title: "Help Provided — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./help-DP84TDXz.js");
const Route$p = createFileRoute("/help")({
  head: () => ({
    meta: [{
      title: "Help Center — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./heatmap-PXASGKoM.js");
const Route$o = createFileRoute("/heatmap")({
  head: () => ({
    meta: [{
      title: "Emergency Heatmap — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./feedback-DfB-SeDg.js");
const Route$n = createFileRoute("/feedback")({
  head: () => ({
    meta: [{
      title: "Feedback — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./family-tracking-DTvz-_HW.js");
const Route$m = createFileRoute("/family-tracking")({
  head: () => ({
    meta: [{
      title: "Family Tracking — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./family-mode-Cr-cDMSz.js");
const Route$l = createFileRoute("/family-mode")({
  head: () => ({
    meta: [{
      title: "Family Mode — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./fall-detection-DNJGHNMc.js");
const Route$k = createFileRoute("/fall-detection")({
  head: () => ({
    meta: [{
      title: "Fall Detected — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./expanding-radius-DQGiNtLb.js");
const Route$j = createFileRoute("/expanding-radius")({
  head: () => ({
    meta: [{
      title: "Expanding Search — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./emergency-type-C70QJ1ca.js");
const Route$i = createFileRoute("/emergency-type")({
  head: () => ({
    meta: [{
      title: "Emergency Type — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./cpr-BR6BFUYY.js");
const Route$h = createFileRoute("/cpr")({
  head: () => ({
    meta: [{
      title: "CPR Guidance — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./contacts-setup-CP574boo.js");
const Route$g = createFileRoute("/contacts-setup")({
  head: () => ({
    meta: [{
      title: "Emergency Contacts — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./contacts-alerted-CCWT3SV3.js");
const Route$f = createFileRoute("/contacts-alerted")({
  head: () => ({
    meta: [{
      title: "Contacts Alerted — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./completed-BOzRg7Ai.js");
const Route$e = createFileRoute("/completed")({
  head: () => ({
    meta: [{
      title: "Emergency Completed — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./community-alert-D8ohYP1i.js");
const Route$d = createFileRoute("/community-alert")({
  head: () => ({
    meta: [{
      title: "Community Alert — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./chatbot-DQwz1WXD.js");
const Route$c = createFileRoute("/chatbot")({
  head: () => ({
    meta: [{
      title: "AI Chatbot — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./bleeding-j-YkSWHT.js");
const Route$b = createFileRoute("/bleeding")({
  head: () => ({
    meta: [{
      title: "Bleeding Control — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./auto-sos-sent-DltVwH_3.js");
const Route$a = createFileRoute("/auto-sos-sent")({
  head: () => ({
    meta: [{
      title: "SOS Sent — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./ambulance-CZQ1jq-e.js");
const Route$9 = createFileRoute("/ambulance")({
  head: () => ({
    meta: [{
      title: "Ambulance — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./alternate-route-CdEY9P5Y.js");
const Route$8 = createFileRoute("/alternate-route")({
  head: () => ({
    meta: [{
      title: "Alternate Route — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./alerts-DVAlIW4P.js");
const Route$7 = createFileRoute("/alerts")({
  head: () => ({
    meta: [{
      title: "Alerts — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./ai-help-KGeoW9Re.js");
const Route$6 = createFileRoute("/ai-help")({
  head: () => ({
    meta: [{
      title: "AI Help — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./ai-guidance-active--DTCkNgM.js");
const Route$5 = createFileRoute("/ai-guidance-active")({
  head: () => ({
    meta: [{
      title: "AI Guidance Active — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./ai-first-aid-N2IOq_is.js");
const Route$4 = createFileRoute("/ai-first-aid")({
  head: () => ({
    meta: [{
      title: "AI First Aid — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./achievements-D15uZpct.js");
const Route$3 = createFileRoute("/achievements")({
  head: () => ({
    meta: [{
      title: "Achievements — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./accept-request-CemV6HWd.js");
const Route$2 = createFileRoute("/accept-request")({
  head: () => ({
    meta: [{
      title: "Request Details — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-Cbbo-GdX.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — ResQNet"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-C8ykFXhN.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "ResQNet — Emergency Platform"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WelcomeRoute = Route$16.update({
  id: "/welcome",
  path: "/welcome",
  getParentRoute: () => Route$17
});
const VolunteersFoundRoute = Route$15.update({
  id: "/volunteers-found",
  path: "/volunteers-found",
  getParentRoute: () => Route$17
});
const VolunteerHistoryRoute = Route$14.update({
  id: "/volunteer-history",
  path: "/volunteer-history",
  getParentRoute: () => Route$17
});
const VolunteerDashboardRoute = Route$13.update({
  id: "/volunteer-dashboard",
  path: "/volunteer-dashboard",
  getParentRoute: () => Route$17
});
const VolunteerAssignedRoute = Route$12.update({
  id: "/volunteer-assigned",
  path: "/volunteer-assigned",
  getParentRoute: () => Route$17
});
const VoiceSosRoute = Route$11.update({
  id: "/voice-sos",
  path: "/voice-sos",
  getParentRoute: () => Route$17
});
const VoiceDetectedRoute = Route$10.update({
  id: "/voice-detected",
  path: "/voice-detected",
  getParentRoute: () => Route$17
});
const VoiceAssistantRoute = Route$$.update({
  id: "/voice-assistant",
  path: "/voice-assistant",
  getParentRoute: () => Route$17
});
const TrafficRoute = Route$_.update({
  id: "/traffic",
  path: "/traffic",
  getParentRoute: () => Route$17
});
const SosConfirmRoute = Route$Z.update({
  id: "/sos-confirm",
  path: "/sos-confirm",
  getParentRoute: () => Route$17
});
const SmartwatchRoute = Route$Y.update({
  id: "/smartwatch",
  path: "/smartwatch",
  getParentRoute: () => Route$17
});
const SignupRoute = Route$X.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$17
});
const ShareRoute = Route$W.update({
  id: "/share",
  path: "/share",
  getParentRoute: () => Route$17
});
const SeverityRoute = Route$V.update({
  id: "/severity",
  path: "/severity",
  getParentRoute: () => Route$17
});
const SettingsRoute = Route$U.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$17
});
const SearchingRoute = Route$T.update({
  id: "/searching",
  path: "/searching",
  getParentRoute: () => Route$17
});
const SafetyTipsRoute = Route$S.update({
  id: "/safety-tips",
  path: "/safety-tips",
  getParentRoute: () => Route$17
});
const RouteNavigationRoute = Route$R.update({
  id: "/route-navigation",
  path: "/route-navigation",
  getParentRoute: () => Route$17
});
const RoleRoute = Route$Q.update({
  id: "/role",
  path: "/role",
  getParentRoute: () => Route$17
});
const RewardsRoute = Route$P.update({
  id: "/rewards",
  path: "/rewards",
  getParentRoute: () => Route$17
});
const ResourcesRoute = Route$O.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => Route$17
});
const ReachedRoute = Route$N.update({
  id: "/reached",
  path: "/reached",
  getParentRoute: () => Route$17
});
const ProgressRoute = Route$M.update({
  id: "/progress",
  path: "/progress",
  getParentRoute: () => Route$17
});
const ProfileRoute = Route$L.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$17
});
const PowerSosRoute = Route$K.update({
  id: "/power-sos",
  path: "/power-sos",
  getParentRoute: () => Route$17
});
const OtpRoute = Route$J.update({
  id: "/otp",
  path: "/otp",
  getParentRoute: () => Route$17
});
const OnboardingRoute = Route$I.update({
  id: "/onboarding",
  path: "/onboarding",
  getParentRoute: () => Route$17
});
const OfflineSmsRoute = Route$H.update({
  id: "/offline-sms",
  path: "/offline-sms",
  getParentRoute: () => Route$17
});
const NotificationsRoute = Route$G.update({
  id: "/notifications",
  path: "/notifications",
  getParentRoute: () => Route$17
});
const NotificationPermissionRoute = Route$F.update({
  id: "/notification-permission",
  path: "/notification-permission",
  getParentRoute: () => Route$17
});
const NoVolunteerRoute = Route$E.update({
  id: "/no-volunteer",
  path: "/no-volunteer",
  getParentRoute: () => Route$17
});
const NoResponseRoute = Route$D.update({
  id: "/no-response",
  path: "/no-response",
  getParentRoute: () => Route$17
});
const NavigateUserRoute = Route$C.update({
  id: "/navigate-user",
  path: "/navigate-user",
  getParentRoute: () => Route$17
});
const MedicalProfileRoute = Route$B.update({
  id: "/medical-profile",
  path: "/medical-profile",
  getParentRoute: () => Route$17
});
const MapRoute = Route$A.update({
  id: "/map",
  path: "/map",
  getParentRoute: () => Route$17
});
const LoginRoute = Route$z.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$17
});
const LocationPermissionRoute = Route$y.update({
  id: "/location-permission",
  path: "/location-permission",
  getParentRoute: () => Route$17
});
const LiveTrackingRoute = Route$x.update({
  id: "/live-tracking",
  path: "/live-tracking",
  getParentRoute: () => Route$17
});
const LanguageRoute = Route$w.update({
  id: "/language",
  path: "/language",
  getParentRoute: () => Route$17
});
const IncomingAlertRoute = Route$v.update({
  id: "/incoming-alert",
  path: "/incoming-alert",
  getParentRoute: () => Route$17
});
const HospitalsRoute = Route$u.update({
  id: "/hospitals",
  path: "/hospitals",
  getParentRoute: () => Route$17
});
const HomeRoute = Route$t.update({
  id: "/home",
  path: "/home",
  getParentRoute: () => Route$17
});
const HistoryRoute = Route$s.update({
  id: "/history",
  path: "/history",
  getParentRoute: () => Route$17
});
const HelpSupportRoute = Route$r.update({
  id: "/help-support",
  path: "/help-support",
  getParentRoute: () => Route$17
});
const HelpProvidedRoute = Route$q.update({
  id: "/help-provided",
  path: "/help-provided",
  getParentRoute: () => Route$17
});
const HelpRoute = Route$p.update({
  id: "/help",
  path: "/help",
  getParentRoute: () => Route$17
});
const HeatmapRoute = Route$o.update({
  id: "/heatmap",
  path: "/heatmap",
  getParentRoute: () => Route$17
});
const FeedbackRoute = Route$n.update({
  id: "/feedback",
  path: "/feedback",
  getParentRoute: () => Route$17
});
const FamilyTrackingRoute = Route$m.update({
  id: "/family-tracking",
  path: "/family-tracking",
  getParentRoute: () => Route$17
});
const FamilyModeRoute = Route$l.update({
  id: "/family-mode",
  path: "/family-mode",
  getParentRoute: () => Route$17
});
const FallDetectionRoute = Route$k.update({
  id: "/fall-detection",
  path: "/fall-detection",
  getParentRoute: () => Route$17
});
const ExpandingRadiusRoute = Route$j.update({
  id: "/expanding-radius",
  path: "/expanding-radius",
  getParentRoute: () => Route$17
});
const EmergencyTypeRoute = Route$i.update({
  id: "/emergency-type",
  path: "/emergency-type",
  getParentRoute: () => Route$17
});
const CprRoute = Route$h.update({
  id: "/cpr",
  path: "/cpr",
  getParentRoute: () => Route$17
});
const ContactsSetupRoute = Route$g.update({
  id: "/contacts-setup",
  path: "/contacts-setup",
  getParentRoute: () => Route$17
});
const ContactsAlertedRoute = Route$f.update({
  id: "/contacts-alerted",
  path: "/contacts-alerted",
  getParentRoute: () => Route$17
});
const CompletedRoute = Route$e.update({
  id: "/completed",
  path: "/completed",
  getParentRoute: () => Route$17
});
const CommunityAlertRoute = Route$d.update({
  id: "/community-alert",
  path: "/community-alert",
  getParentRoute: () => Route$17
});
const ChatbotRoute = Route$c.update({
  id: "/chatbot",
  path: "/chatbot",
  getParentRoute: () => Route$17
});
const BleedingRoute = Route$b.update({
  id: "/bleeding",
  path: "/bleeding",
  getParentRoute: () => Route$17
});
const AutoSosSentRoute = Route$a.update({
  id: "/auto-sos-sent",
  path: "/auto-sos-sent",
  getParentRoute: () => Route$17
});
const AmbulanceRoute = Route$9.update({
  id: "/ambulance",
  path: "/ambulance",
  getParentRoute: () => Route$17
});
const AlternateRouteRoute = Route$8.update({
  id: "/alternate-route",
  path: "/alternate-route",
  getParentRoute: () => Route$17
});
const AlertsRoute = Route$7.update({
  id: "/alerts",
  path: "/alerts",
  getParentRoute: () => Route$17
});
const AiHelpRoute = Route$6.update({
  id: "/ai-help",
  path: "/ai-help",
  getParentRoute: () => Route$17
});
const AiGuidanceActiveRoute = Route$5.update({
  id: "/ai-guidance-active",
  path: "/ai-guidance-active",
  getParentRoute: () => Route$17
});
const AiFirstAidRoute = Route$4.update({
  id: "/ai-first-aid",
  path: "/ai-first-aid",
  getParentRoute: () => Route$17
});
const AchievementsRoute = Route$3.update({
  id: "/achievements",
  path: "/achievements",
  getParentRoute: () => Route$17
});
const AcceptRequestRoute = Route$2.update({
  id: "/accept-request",
  path: "/accept-request",
  getParentRoute: () => Route$17
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$17
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$17
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AcceptRequestRoute,
  AchievementsRoute,
  AiFirstAidRoute,
  AiGuidanceActiveRoute,
  AiHelpRoute,
  AlertsRoute,
  AlternateRouteRoute,
  AmbulanceRoute,
  AutoSosSentRoute,
  BleedingRoute,
  ChatbotRoute,
  CommunityAlertRoute,
  CompletedRoute,
  ContactsAlertedRoute,
  ContactsSetupRoute,
  CprRoute,
  EmergencyTypeRoute,
  ExpandingRadiusRoute,
  FallDetectionRoute,
  FamilyModeRoute,
  FamilyTrackingRoute,
  FeedbackRoute,
  HeatmapRoute,
  HelpRoute,
  HelpProvidedRoute,
  HelpSupportRoute,
  HistoryRoute,
  HomeRoute,
  HospitalsRoute,
  IncomingAlertRoute,
  LanguageRoute,
  LiveTrackingRoute,
  LocationPermissionRoute,
  LoginRoute,
  MapRoute,
  MedicalProfileRoute,
  NavigateUserRoute,
  NoResponseRoute,
  NoVolunteerRoute,
  NotificationPermissionRoute,
  NotificationsRoute,
  OfflineSmsRoute,
  OnboardingRoute,
  OtpRoute,
  PowerSosRoute,
  ProfileRoute,
  ProgressRoute,
  ReachedRoute,
  ResourcesRoute,
  RewardsRoute,
  RoleRoute,
  RouteNavigationRoute,
  SafetyTipsRoute,
  SearchingRoute,
  SettingsRoute,
  SeverityRoute,
  ShareRoute,
  SignupRoute,
  SmartwatchRoute,
  SosConfirmRoute,
  TrafficRoute,
  VoiceAssistantRoute,
  VoiceDetectedRoute,
  VoiceSosRoute,
  VolunteerAssignedRoute,
  VolunteerDashboardRoute,
  VolunteerHistoryRoute,
  VolunteersFoundRoute,
  WelcomeRoute
};
const routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  useTheme as a,
  router as r,
  useTranslation as u
};
