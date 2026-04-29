import { Calendar, Award, Users, Activity } from "lucide-react";
import { mockEvents, mockAchievements, mockMembers, mockActivityPosts } from "@/lib/mockData";

export default function AdminDashboard() {
  const stats = [
    { name: "Total Events", value: mockEvents.length, icon: Calendar, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Achievements", value: mockAchievements.length, icon: Award, color: "text-amber-500", bg: "bg-amber-500/10" },
    { name: "Committee Members", value: mockMembers.length, icon: Users, color: "text-green-500", bg: "bg-green-500/10" },
    { name: "Activity Posts", value: mockActivityPosts.length, icon: Activity, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard Overview</h1>
        <p className="text-foreground/70">Welcome to the PUCPC Admin Dashboard. Manage your club&apos;s content here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-background border border-foreground/10 p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${stat.bg}`}>
                <Icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground/60">{stat.name}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-secondary-light/50 dark:bg-secondary-dark/50 border border-foreground/10 p-8 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            + New Event
          </button>
          <button className="bg-background border border-foreground/10 hover:border-accent text-foreground px-6 py-3 rounded-xl font-medium transition-colors">
            + Add Achievement
          </button>
        </div>
      </div>
    </div>
  );
}
