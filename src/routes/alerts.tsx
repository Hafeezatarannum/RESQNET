import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout, Aura, GlowButton } from "@/components/resqnet/kit";
import { ALERTS_FEED } from "@/lib/resqnet-data";
import { Bell, Search, Filter } from "lucide-react";

export const Route = createFileRoute("/alerts")({
  head: () => ({ meta: [{ title: "Alerts — ResQNet" }] }),
  component: Alerts,
});

function Alerts() {
  return (
    <DashboardLayout withNav>
      <Aura />
      <div className="relative z-10 w-full max-w-[1400px] mx-auto p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <span className="h-10 w-10 bg-warning/20 text-warning rounded-xl flex items-center justify-center">
                <Bell className="h-5 w-5" />
              </span>
              Emergency Alerts
            </h1>
            <p className="text-muted-foreground mt-2">
              Live monitoring of incidents in your area.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search alerts..."
                className="w-full pl-9 pr-4 py-2 bg-card border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50"
              />
            </div>
            <button className="p-2 border border-border bg-card rounded-xl hover:bg-secondary transition-colors">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALERTS_FEED.map((a, i) => (
            <div
              key={i}
              className="flex flex-col bg-card border border-border rounded-3xl p-6 hover:border-primary/30 transition-colors shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                    a.tone === "red"
                      ? "bg-primary/20 text-primary"
                      : "bg-warning/20 text-warning"
                  }`}
                >
                  <Bell
                    className={`h-6 w-6 ${a.tone === "red" ? "animate-pulse" : ""}`}
                  />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    a.tone === "red"
                      ? "bg-primary text-white"
                      : "bg-warning text-white"
                  }`}
                >
                  {a.time}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1">{a.type}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">
                {a.area}
              </p>

              <div className="grid grid-cols-2 gap-3 mt-auto">
                <GlowButton
                  to="/community-alert"
                  variant={a.tone === "red" ? "primary" : "outline"}
                  className="h-12 w-full text-sm font-semibold"
                >
                  I can help
                </GlowButton>
                <GlowButton
                  variant="dark"
                  className="h-12 w-full text-sm font-semibold bg-secondary/50"
                >
                  Dismiss
                </GlowButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
