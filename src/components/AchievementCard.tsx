import { Achievement } from "@/types";
import { format } from "date-fns";
import { Trophy, Users, Calendar } from "lucide-react";
import Image from "next/image";

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const isFeatured = achievement.is_featured;
  const dateFormatted = format(new Date(achievement.date), "MMMM d, yyyy");

  return (
    <article 
      className={`bg-background border rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col 
      ${isFeatured 
        ? "md:col-span-2 lg:col-span-2 border-accent/30 shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]" 
        : "border-foreground/10 hover:shadow-lg"
      }`}
    >
      {/* Optional Featured Image */}
      {achievement.image && (
        <div className={`relative w-full bg-secondary-light dark:bg-secondary-dark ${isFeatured ? "aspect-[21/9] md:aspect-[24/9]" : "aspect-[16/9]"}`}>
          <Image 
            src={achievement.image} 
            alt={achievement.contest_name} 
            fill 
            className="object-cover"
          />
          {isFeatured && (
            <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Featured Win
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className={`p-6 flex flex-col flex-grow ${isFeatured && !achievement.image ? 'border-t-4 border-accent' : ''}`}>
        <div className="flex items-start justify-between mb-4">
          <h2 className={`${isFeatured ? "text-2xl md:text-3xl" : "text-xl"} font-bold tracking-tight group-hover:text-accent transition-colors`}>
            {achievement.contest_name}
          </h2>
          <div className="flex items-center gap-2 text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
            <Trophy className="w-4 h-4" />
            <span className="font-semibold text-sm">{achievement.rank}</span>
          </div>
        </div>
        
        <div className="space-y-3 text-foreground/80 mt-auto pt-4 border-t border-foreground/5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground/90">Team:</span>
              <span>{achievement.team_name}</span>
            </div>
            
            <div className="hidden sm:block text-foreground/30">•</div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-foreground/50" />
              <time dateTime={achievement.date} className="text-sm">{dateFormatted}</time>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 mt-1 text-foreground/50 shrink-0" />
            <p className="text-sm leading-relaxed">
              {achievement.participants.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
