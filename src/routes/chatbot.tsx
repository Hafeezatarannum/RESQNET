import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout, Aura, TopBar } from "@/components/resqnet/kit";
import { Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/chatbot")({
  head: () => ({ meta: [{ title: "AI Chatbot — ResQNet" }] }),
  component: Chatbot,
});

const MSGS = [
  { me: true, t: "Someone collapsed and isn't responding. What do I do?" },
  {
    me: false,
    t: "Stay calm. Check if they're breathing. If not, start CPR — 30 chest compressions then 2 breaths. I'll guide you. Have you called for help?",
  },
  { me: true, t: "Yes, SOS is sent. They're not breathing." },
  {
    me: false,
    t: "Begin compressions now: push hard and fast in the center of the chest, 100–120/min. Tap 'CPR Guide' for live steps.",
  },
];

function Chatbot() {
  return (
    <DashboardLayout>
      <Aura />
      <TopBar
        title="AI Emergency Assistant"
        subtitle="Online • replies instantly"
        right={
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-blue/15 text-brand-blue">
            <Bot className="h-4 w-4" />
          </span>
        }
      />
      <div className="relative z-10 w-full max-w-md mx-auto flex-1 space-y-3 overflow-y-auto no-scrollbar px-5 py-4">
        {MSGS.map((m, i) => (
          <div
            key={i}
            className={cn("flex", m.me ? "justify-end" : "justify-start")}
          >
            <p
              className={cn(
                "max-w-[80%] rounded-[18px] px-4 py-3 text-sm",
                m.me
                  ? "bg-primary text-white rounded-br-md"
                  : "glass rounded-bl-md",
              )}
            >
              {m.t}
            </p>
          </div>
        ))}
      </div>
      <div className="relative z-10 w-full max-w-md mx-auto flex items-center gap-2 border-t border-border bg-secondary/60 p-3">
        <input
          placeholder="Describe the emergency…"
          className="h-12 flex-1 rounded-full border border-border bg-white/[0.03] px-4 text-sm outline-none placeholder:text-muted-foreground/60"
        />
        <button className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white glow-red">
          <Send className="h-5 w-5" />
        </button>
      </div>
    </DashboardLayout>
  );
}
