import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { D as DashboardLayout, A as Aura, T as TopBar, S as Screen, c as cn, F as Field, G as GlowButton } from "./kit-QSQV2ku9.js";
import "@tanstack/react-router";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "./router-CEVNS6XD.js";
import "@tanstack/react-query";
const BLOOD = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
function MedicalProfile() {
  const [blood, setBlood] = useState("O+");
  return /* @__PURE__ */ jsxs(DashboardLayout, { children: [
    /* @__PURE__ */ jsx(Aura, {}),
    /* @__PURE__ */ jsx(TopBar, { title: "Medical profile", subtitle: "Shared with responders during emergencies" }),
    /* @__PURE__ */ jsxs(Screen, { children: [
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-medium text-muted-foreground", children: "Blood group" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2", children: BLOOD.map((b) => /* @__PURE__ */ jsx("button", { onClick: () => setBlood(b), className: cn("rounded-[14px] border py-3 text-sm font-bold transition", blood === b ? "border-primary bg-primary/15 text-primary" : "border-border bg-white/[0.03]"), children: b }, b)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 space-y-4", children: [
        /* @__PURE__ */ jsx(Field, { label: "Allergies", placeholder: "e.g. Penicillin, peanuts" }),
        /* @__PURE__ */ jsx(Field, { label: "Medical conditions", placeholder: "e.g. Asthma, diabetes" }),
        /* @__PURE__ */ jsx(Field, { label: "Current medications", placeholder: "e.g. Insulin, inhaler" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full max-w-md mx-auto px-5 pb-8", children: /* @__PURE__ */ jsx(GlowButton, { to: "/location-permission", children: "Save & Continue" }) })
  ] });
}
export {
  MedicalProfile as component
};
