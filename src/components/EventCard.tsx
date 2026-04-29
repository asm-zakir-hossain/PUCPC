import { ClubEvent } from "@/types";
import { format } from "date-fns";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: ClubEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const isUpcoming = event.type === "upcoming";
  const dateFormatted = format(new Date(event.date), "MMMM d, yyyy 'at' h:mm a");

  return (
    <article className={`bg-background border rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full
      ${isUpcoming 
        ? "border-accent/40 shadow-md hover:shadow-lg hover:-translate-y-1" 
        : "border-foreground/10 shadow-sm hover:shadow-md"
      }`}
    >
      {/* Event Image (if any) */}
      {event.images && event.images.length > 0 && (
        <div className={`relative w-full bg-secondary-light dark:bg-secondary-dark ${isUpcoming ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
          <Image 
            src={event.images[0]} 
            alt={event.title} 
            fill 
            className="object-cover"
          />
          {isUpcoming && (
            <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Upcoming
            </div>
          )}
        </div>
      )}

      {/* If it's upcoming but has no image, still show a badge */}
      {isUpcoming && (!event.images || event.images.length === 0) && (
        <div className="bg-accent text-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
          Upcoming Event
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold tracking-tight mb-3 text-foreground">
          {event.title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
          <Calendar className="w-4 h-4" />
          <time dateTime={event.date}>{dateFormatted}</time>
        </div>

        <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
          {event.description}
        </p>

        {/* CTA Button for Upcoming Events */}
        {isUpcoming && event.registration_link && (
          <div className="mt-auto pt-4 border-t border-foreground/5">
            <a 
              href={event.registration_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 bg-accent hover:bg-accent/90 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200"
            >
              <span>Register Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
