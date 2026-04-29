import EventCard from "@/components/EventCard";
import { mockEvents } from "@/lib/mockData";

export default function EventsPage() {
  const upcomingEvents = mockEvents
    .filter((event) => event.type === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort nearest first

  const pastEvents = mockEvents
    .filter((event) => event.type === "past")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort newest first

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background border-b border-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Club Events & Activities
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Discover our upcoming workshops, contests, and hackathons. Relive the memories of our past events and see what we&apos;ve been up to.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary-light/30 dark:bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Upcoming Events</h2>
              <div className="w-16 h-1 bg-accent rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Past Events</h2>
              <div className="w-16 h-1 bg-foreground/20 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
