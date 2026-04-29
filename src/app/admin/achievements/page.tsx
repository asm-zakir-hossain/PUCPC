import { mockAchievements } from "@/lib/mockData";
import { Edit, Trash2, Plus, Star } from "lucide-react";

export default function AdminAchievementsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Manage Achievements</h1>
          <p className="text-foreground/70">Showcase your members&apos; competitive programming success.</p>
        </div>
        <button className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Achievement
        </button>
      </div>

      <div className="bg-background border border-foreground/10 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-secondary-light dark:bg-[#111] border-b border-foreground/10 text-foreground/70 text-sm">
              <th className="p-4 font-medium">Title</th>
              <th className="p-4 font-medium">Contest</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Featured</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockAchievements.map((achievement) => (
              <tr key={achievement.id} className="border-b border-foreground/5 hover:bg-secondary-light/50 dark:hover:bg-secondary-dark/50 transition-colors">
                <td className="p-4 font-medium">{achievement.title}</td>
                <td className="p-4 text-foreground/70">{achievement.contest_name}</td>
                <td className="p-4 text-foreground/70">{achievement.date}</td>
                <td className="p-4">
                  {achievement.is_featured ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500/10 text-amber-500 text-xs rounded-full font-medium">
                      <Star className="w-3 h-3 fill-amber-500" />
                      Featured
                    </span>
                  ) : (
                    <span className="text-foreground/30 text-sm">Standard</span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-foreground/50 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-foreground/50 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
