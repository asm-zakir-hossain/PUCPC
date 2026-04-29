import { ActivityPost } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { Calendar, User } from "lucide-react";
import Image from "next/image";

interface ActivityCardProps {
  post: ActivityPost;
}

export default function ActivityCard({ post }: ActivityCardProps) {
  const dateObj = new Date(post.created_at);
  const timeAgo = formatDistanceToNow(dateObj, { addSuffix: true });

  return (
    <article className="bg-background border border-foreground/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
      {/* Header */}
      <div className="p-6 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h2>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.created_at}>{timeAgo}</time>
          </div>
          {post.created_by && (
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>{post.created_by}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 text-foreground/80 leading-relaxed whitespace-pre-wrap">
        <p>{post.content}</p>
      </div>

      {/* Images */}
      {post.images && post.images.length > 0 && (
        <div className={`grid gap-1 mt-auto ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {post.images.map((img, index) => (
            <div 
              key={index} 
              className={`relative bg-secondary-light dark:bg-secondary-dark ${post.images.length === 1 ? 'aspect-[21/9]' : 'aspect-square'}`}
            >
              <Image 
                src={img} 
                alt={`Activity image ${index + 1}`} 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
