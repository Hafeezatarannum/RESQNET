import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { D as DashboardLayout } from "./kit-QSQV2ku9.js";
import { Users, UserPlus, Star, Phone, Edit2, Trash2 } from "lucide-react";
import { u as useTranslation } from "./router-CEVNS6XD.js";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-query";
function ContactsSetup() {
  const {
    t
  } = useTranslation();
  const [contacts, setContacts] = useState([{
    id: 1,
    name: "Meera Singh",
    relation: "Mother",
    phone: "+91 98765 11111",
    priority: 1
  }, {
    id: 2,
    name: "Karan Singh",
    relation: "Brother",
    phone: "+91 98765 22222",
    priority: 2
  }]);
  const addContact = () => {
    setContacts((c) => [...c, {
      id: Date.now(),
      name: "New Contact",
      relation: "Family",
      phone: "+91 90000 00000",
      priority: 3
    }]);
  };
  const removeContact = (id) => {
    setContacts((cs) => cs.filter((c) => c.id !== id));
  };
  const togglePriority = (id) => {
    setContacts((cs) => cs.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          priority: c.priority === 1 ? 3 : 1
        };
      }
      return c;
    }));
  };
  return /* @__PURE__ */ jsx(DashboardLayout, { withNav: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1000px] mx-auto p-4 md:p-8 w-full space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Emergency Contacts" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm max-w-sm mt-1", children: "Configure the people who will be alerted immediately when you trigger an SOS." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: addContact, className: "flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold transition-all shadow-lg glow-red hover:scale-105 shrink-0", children: [
        /* @__PURE__ */ jsx(UserPlus, { className: "h-5 w-5" }),
        " Add Contact"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card/50 border border-border rounded-3xl p-4 md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6 px-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-lg", children: "Active Contacts" }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold bg-secondary px-3 py-1 rounded-full text-muted-foreground", children: [
          contacts.length,
          " / 5 Slots"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        contacts.map((c) => /* @__PURE__ */ jsxs("div", { className: "group flex flex-col justify-between p-5 bg-background border border-border rounded-2xl transition-all hover:border-primary/30 hover:shadow-md relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => togglePriority(c.id), className: `absolute top-4 right-4 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${c.priority === 1 ? "bg-warning/20 text-warning" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`, title: c.priority === 1 ? "Primary Contact" : "Standard Contact", children: /* @__PURE__ */ jsx(Star, { className: `h-4 w-4 ${c.priority === 1 ? "fill-current" : ""}` }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full bg-secondary/80 border-2 border-background flex items-center justify-center font-bold text-xl text-foreground shadow-sm", children: c.name[0] }),
            /* @__PURE__ */ jsxs("div", { className: "pr-10", children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-lg", children: c.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5", children: [
                c.relation,
                c.priority === 1 && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-warning uppercase bg-warning/10 px-2 py-0.5 rounded-full ml-1", children: "Primary" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-border pt-4 mt-auto", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: c.phone }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity", children: [
              /* @__PURE__ */ jsx("button", { className: "h-9 w-9 flex items-center justify-center bg-success/10 hover:bg-success/20 text-success rounded-xl transition-colors", children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsx("button", { className: "h-9 w-9 flex items-center justify-center bg-secondary hover:bg-secondary/80 rounded-xl transition-colors border border-border", children: /* @__PURE__ */ jsx(Edit2, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsx("button", { onClick: () => removeContact(c.id), className: "h-9 w-9 flex items-center justify-center bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-xl transition-colors", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] }, c.id)),
        contacts.length < 5 && /* @__PURE__ */ jsxs("button", { onClick: addContact, className: "flex flex-col items-center justify-center gap-3 p-8 bg-secondary/30 border-2 border-dashed border-border hover:border-primary/50 hover:bg-secondary/50 rounded-2xl transition-all h-[200px] text-muted-foreground hover:text-foreground", children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center", children: /* @__PURE__ */ jsx(UserPlus, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Add New Contact" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ContactsSetup as component
};
