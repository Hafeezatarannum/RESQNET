import { jsxs, jsx } from "react/jsx-runtime";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, W as Wordmark, c as cn, G as GlowButton } from "./kit-QSQV2ku9.js";
import { L as LANGUAGES } from "./resqnet-data-CsBUxpcz.js";
import { Globe, Check } from "lucide-react";
import { u as useTranslation } from "./router-CEVNS6XD.js";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
import "react";
function Language() {
  const {
    lang,
    setLang,
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: t("lang.title"), subtitle: t("lang.subtitle"), right: /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-muted-foreground" }) }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Wordmark, { className: "text-base" }),
        " ",
        t("lang.speaks")
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: LANGUAGES.map((l) => /* @__PURE__ */ jsxs("button", { onClick: () => setLang(l.code), className: cn("flex w-full items-center justify-between rounded-[18px] border p-4 text-left transition", lang === l.code ? "border-primary bg-primary/10" : "border-border bg-white/[0.03]"), children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: l.label }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: l.native })
        ] }),
        lang === l.code && /* @__PURE__ */ jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-primary text-white", children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
      ] }, l.code)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8 pt-2", children: /* @__PURE__ */ jsx(GlowButton, { to: "/login", children: t("general.continue") }) })
  ] });
}
export {
  Language as component
};
