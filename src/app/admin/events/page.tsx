import { mockEvents } from "@/lib/mockData";
import { Edit, Trash2, Plus } from "lucide-react";

export default function AdminEventsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Manage Events</h1>
          <p className="text-foreground/70">Create, edit, and delete club events.</p>
        </div>
        <button className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Event
        </button>
      </div>

      <div className="bg-background border border-foreground/10 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-secondary-light dark:bg-[#111] border-b border-foreground/10 text-foreground/70 text-sm">
              <th className="p-4 font-medium">Title</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Type</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockEvents.map((event) => (
              <tr key={event.id} className="border-b border-foreground/5 hover:bg-secondary-light/50 dark:hover:bg-secondary-dark/50 transition-colors">
                <td className="p-4 font-medium">{event.title}</td>
                <td className="p-4 text-foreground/70">{event.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                    event.type === 'upcoming' ? 'bg-green-500/10 text-green-500' : 'bg-foreground/10 text-foreground/70'
                  }`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
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
